/*pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
        NODE_VERSION = '20.19.0'
        DOCKER_FRONTEND_IMAGE = 'hirushi111/portfolio-frontend'
        DOCKER_BACKEND_IMAGE  = 'hirushi111/portfolio-backend'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                echo "Setting up Node.js ${NODE_VERSION}..."
                script {
                    if (isUnix()) {
                        sh '''
                            if command -v node >/dev/null 2>&1; then
                                echo "Node.js already installed"
                                node -v
                                npm -v
                            else
                                echo "Installing Node.js..."
                                curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                                sudo apt-get update
                                sudo apt-get install -y nodejs
                                node -v
                                npm -v
                            fi
                        '''
                    } else {
                        bat '''
                            node -v || powershell -Command "Invoke-WebRequest -Uri https://nodejs.org/dist/v20.19.0/node-v20.19.0-x64.msi -OutFile node.msi; Start-Process msiexec.exe -Wait -ArgumentList '/i node.msi /quiet /norestart'"
                            node -v
                            npm -v
                        '''
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building backend...'
                dir("${BACKEND_DIR}") {
                    sh 'npm install'
                    sh 'npm test || echo "No tests defined"'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building frontend...'
                dir("${FRONTEND_DIR}") {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('Docker Compose Up') {
            steps {
                echo 'Starting containers...'
                sh '''
                    docker compose down || true
                    docker compose up -d --build
                    docker compose ps
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-hub1',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        # Tag the actual built images
                        docker tag portfolio-cicd-frontend $DOCKER_FRONTEND_IMAGE:latest
                        docker tag portfolio-cicd-backend  $DOCKER_BACKEND_IMAGE:latest

                        docker push $DOCKER_FRONTEND_IMAGE:latest
                        docker push $DOCKER_BACKEND_IMAGE:latest

                        docker logout
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking container health...'
                sh '''
                    docker compose ps
                    for container in $(docker compose ps -q); do
                        status=$(docker inspect --format='{{.Name}}: {{.State.Status}} {{if .State.Health}}{{.State.Health.Status}}{{end}}' $container)
                        echo $status
                    done
                '''
            }
        }
    }

    post {
        always {
            echo '=== Pipeline Execution Complete ==='
            sh '''
                docker compose ps || true
                docker compose logs --tail=30 || true
            '''
        }

        success {
            echo 'SUCCESS: Application deployed successfully!'
            sh '''
                echo "Frontend: http://localhost:3000"
                echo "Backend:  http://localhost:5000"
                echo "MongoDB:  mongodb://localhost:27017"
            '''
        }

        failure {
            echo 'FAILURE: Pipeline execution failed'
            sh '''
                docker compose logs || true
                docker ps -a || true
            '''
        }
    }
}
*/
pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
        NODE_VERSION = '20.19.0'
        DOCKER_FRONTEND_IMAGE = 'hirushi111/portfolio-frontend'
        DOCKER_BACKEND_IMAGE  = 'hirushi111/portfolio-backend'
        // Define your AWS IP here so it's easy to change later
        AWS_IP = '98.94.14.156'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                echo "Setting up Node.js ${NODE_VERSION}..."
                script {
                    if (isUnix()) {
                        sh '''
                            if command -v node >/dev/null 2>&1; then
                                echo "Node.js already installed"
                            else
                                curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                                sudo apt-get update
                                sudo apt-get install -y nodejs
                            fi
                        '''
                    } else {
                        bat 'node -v || echo "Please install Node manually on Windows agent"'
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building backend...'
                dir("${BACKEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building frontend...'
                dir("${FRONTEND_DIR}") {
                    script {
                        // 1. Create a .env file with the AWS IP
                        // This ensures the Docker build picks up the correct API URL
                        sh "echo 'VITE_API_URL=http://${env.AWS_IP}:5000' > .env"
                        
                        // 2. Install dependencies (Optional, as Docker handles the real build)
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Docker Compose Up (Test)') {
            steps {
                echo 'Starting containers on Jenkins...'
                sh '''
                    # Clean up old containers to prevent name conflicts
                    docker rm -f mongo-db-ci node-backend react-frontend || true
                    
                    docker compose down || true
                    docker compose up -d --build
                    docker compose ps
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-hub1',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        # Tag and Push Frontend
                        docker tag portfolio-cicd-frontend $DOCKER_FRONTEND_IMAGE:latest
                        docker push $DOCKER_FRONTEND_IMAGE:latest

                        # Tag and Push Backend
                        docker tag portfolio-cicd-backend $DOCKER_BACKEND_IMAGE:latest
                        docker push $DOCKER_BACKEND_IMAGE:latest

                        docker logout
                    '''
                }
            }
        }

        // === THIS WAS MISSING: The Deploy Stage ===
        stage('Deploy to AWS') {
            steps {
                sshagent(['aws-server-key']) {
                    sh """
                        # 1. Add server to known hosts
                        mkdir -p ~/.ssh
                        ssh-keyscan -H ${env.AWS_IP} >> ~/.ssh/known_hosts

                        # 2. Copy the production compose file
                        scp docker-compose.prod.yml ubuntu@${env.AWS_IP}:/home/ubuntu/docker-compose.yml

                        # 3. Remote Login & Restart
                        ssh ubuntu@${env.AWS_IP} "
                            export MONGO_URI='mongodb://mongo:27017/portfolioMessages'
                            docker compose pull
                            docker compose down
                            docker compose up -d
                        "
                    """
                }
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking container health...'
                // Check health on the local Jenkins CI instance
                sh 'docker compose ps'
            }
        }
    }

    post {
        always {
            echo '=== Pipeline Execution Complete ==='
        }
        success {
            echo 'SUCCESS: Application deployed successfully!'
        }
        failure {
            echo 'FAILURE: Pipeline execution failed'
            sh 'docker compose logs || true'
        }
    }
}
