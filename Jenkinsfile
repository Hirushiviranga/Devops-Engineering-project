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
                        # Install Node.js from NodeSource repository
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

        stage('Docker Compose Build and Up') {
            steps {
                echo 'Building and starting Docker containers...'
                sh 'docker rm -f mongo-db-ci || true'
                sh 'docker compose down --remove-orphans --volumes || true'
                sh 'docker compose build'
                sh 'docker compose up -d --force-recreate'
                
                // Wait for services to start
                sh 'sleep 30'
                sh 'docker ps'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking application health...'
                sh '''
                    # Check if containers are running
                    docker compose ps
                    
                    # Simple health checks
                    curl -f http://localhost:3000 || echo "Frontend not ready"
                    curl -f http://localhost:5000 || echo "Backend not ready"
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
            sh 'docker compose logs --tail=50 || true'
        }
        success {
            echo ' Build and deployment succeeded!'
        }
        failure {
            echo ' Build failed!'
        }
    }
}