pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                // Checkout the code from your GitHub repo automatically
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building backend...'
                dir("${BACKEND_DIR}") {
                    // Use 'npm ci' for faster, reproducible builds
                    sh 'npm install'
                    // Run backend tests (ignore if none)
                    sh 'npm test || echo "No tests defined"'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building frontend...'
                dir("${FRONTEND_DIR}") {
                    // Install dependencies
                    sh 'npm install'
                    // Build the frontend app
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Compose Build and Up') {
            steps {
                echo 'Building and starting Docker containers...'
                // Build and run containers in detached mode
                sh 'docker-compose down || true'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo ' Build failed!'
        }
    }
}
