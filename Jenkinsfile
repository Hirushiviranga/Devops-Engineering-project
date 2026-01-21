pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
        NODE_VERSION = '20.19.0'
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
                    # Check if Node.js is already installed
                    if command -v node >/dev/null 2>&1; then
                        echo "Node.js is already installed:"
                        node -v
                        npm -v
                    else
                        echo "Installing Node.js using NodeSource..."
                        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                        sudo apt-get update
                        sudo apt-get install -y nodejs

                        echo "Node.js installation completed:"
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

       

        // ===== New Stage: Push Docker Images to Docker Hub =====
        stage('Push Docker Images') {
            steps {
                // Make sure you add Docker Hub credentials in Jenkins and use its ID here
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin

                        docker tag react-frontend $DOCKER_USER/react-frontend:latest
                        docker tag node-backend $DOCKER_USER/node-backend:latest

                        docker push $DOCKER_USER/portfolio-frontend:latest
                        docker push $DOCKER_USER/portfolio-backend:latest

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
                echo "=== Final Container Status ==="
                docker compose ps || true
                echo "=== Recent Logs ==="
                docker compose logs --tail=30 || true
            '''
        }
        success {
            echo 'SUCCESS: Application deployed successfully!'
            sh '''
                echo "Access your application:"
                echo "Frontend: http://localhost:3000"
                echo "Backend: http://localhost:5000"
                echo "MongoDB:  mongodb://localhost:27017"
            '''
        }
        failure {
            echo 'FAILURE: Pipeline execution failed'
            sh '''
                echo "Debug information:"
                docker compose logs || true
                echo "=== All Containers ==="
                docker ps -a || true
            '''
        }
    }
}
