pipeline {
    agent any

    // 1. This installs Node automatically. Name must match 'Manage Jenkins -> Tools'
    tools {
        nodejs 'node-20'
    }

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
        DOCKER_FRONTEND_IMAGE = 'hirushi111/portfolio-frontend'
        DOCKER_BACKEND_IMAGE  = 'hirushi111/portfolio-backend'
        AWS_IP = '54.210.179.254'
        
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${FRONTEND_DIR}") {
                    // This creates the .env file with your NEW AWS IP
                    sh "echo 'VITE_API_URL=http://$AWS_IP:5000' > .env"
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub1', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                        echo "$PASS" | docker login -u "$USER" --password-stdin
                        
                        docker build -t $DOCKER_FRONTEND_IMAGE:latest frontend
                        docker push $DOCKER_FRONTEND_IMAGE:latest

                        docker build -t $DOCKER_BACKEND_IMAGE:latest backend
                        docker push $DOCKER_BACKEND_IMAGE:latest
                        
                        docker logout
                    '''
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'aws-server-key', keyFileVariable: 'KEY', usernameVariable: 'USER')]) {
                    sh '''
                        # 1. Prepare SSH permissions
                        mkdir -p ~/.ssh
                        echo "StrictHostKeyChecking no" >> ~/.ssh/config
                        chmod 600 $KEY

                        # 2. Copy docker-compose file to the new server
                        scp -i $KEY docker-compose.prod.yml ubuntu@$AWS_IP:/home/ubuntu/docker-compose.yml

                        # 3. Log in and restart containers
                        ssh -i $KEY ubuntu@$AWS_IP "
                            docker compose pull
                            docker compose down
                            docker compose up -d
                        "
                    '''
                }
            }
        }
    }
}