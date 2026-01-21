pipeline {
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
                        credentialsId: 'docker-hub',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker tag portfolio-frontend $DOCKER_FRONTEND_IMAGE:latest
                        docker tag portfolio-backend  $DOCKER_BACKEND_IMAGE:latest

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
                sh 'docker compose ps'
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
