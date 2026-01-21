pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
        NODE_VERSION = '20.19.0'
        DOCKER_FRONTEND_IMAGE = 'hirushi111/portfolio-frontend'
        DOCKER_BACKEND_IMAGE  = 'hirushi111/portfolio-backend'
        BUILD_TAG = "${env.BUILD_NUMBER}" // unique tag for each build
    }

    // Trigger pipeline automatically on Git push
    triggers {
        pollSCM('H/5 * * * *') // checks Git every 5 minutes
        // OR, if GitHub plugin is installed, use:
        // githubPush()
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
                            if ! command -v node >/dev/null 2>&1; then
                                curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                                sudo apt-get update
                                sudo apt-get install -y nodejs
                            fi
                            node -v
                            npm -v
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
                echo 'Starting containers with persistence...'
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

                        # Tag with unique build number
                        docker tag portfolio-cicd-frontend $DOCKER_FRONTEND_IMAGE:$BUILD_TAG
                        docker tag portfolio-cicd-backend  $DOCKER_BACKEND_IMAGE:$BUILD_TAG

                        docker push $DOCKER_FRONTEND_IMAGE:$BUILD_TAG
                        docker push $DOCKER_BACKEND_IMAGE:$BUILD_TAG

                        docker logout
                    '''
                }
            }
        }

        stage('Smoke Test') {
            steps {
                echo 'Checking if services are running...'
                sh '''
                    sleep 10  # wait a few seconds for containers to start

                    FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "000")
                    BACKEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000 || echo "000")

                    if [ "$FRONTEND_STATUS" -ne 200 ]; then
                        echo "Frontend is not responding! HTTP code: $FRONTEND_STATUS"
                        exit 1
                    fi

                    if [ "$BACKEND_STATUS" -ne 200 ]; then
                        echo "Backend is not responding! HTTP code: $BACKEND_STATUS"
                        exit 1
                    fi

                    echo "Both frontend and backend are running."
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo 'Inspecting container health...'
                sh '''
                    docker compose ps
                    for container in $(docker compose ps -q); do
                        docker inspect --format='{{.Name}}: {{.State.Status}} {{if .State.Health}}{{.State.Health.Status}}{{end}}' $container
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
            echo "SUCCESS: Application deployed successfully! URLs:"
            sh '''
                echo "Frontend: http://localhost:3000"
                echo "Backend:  http://localhost:5000"
                echo "MongoDB:  mongodb://localhost:27017"
            '''
        }

        failure {
            echo 'FAILURE: Pipeline execution failed!'
            sh '''
                docker compose logs || true
                docker ps -a || true
            '''
        }
    }
}

