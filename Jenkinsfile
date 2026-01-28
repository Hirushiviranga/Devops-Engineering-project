pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
        DOCKER_FRONTEND_IMAGE = 'hirushi111/portfolio-frontend'
        DOCKER_BACKEND_IMAGE  = 'hirushi111/portfolio-backend'
        AWS_IP = '98.94.14.156'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                 sh '''
                    if ! command -v node >/dev/null; then
                        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                    fi
                '''
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
                    // This creates the .env file with your AWS IP
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
                // We use sshUserPrivateKey which is much safer/easier than sshagent
                withCredentials([sshUserPrivateKey(credentialsId: 'aws-server-key', keyFileVariable: 'KEY', usernameVariable: 'USER')]) {
                    sh '''
                        # Prepare SSH
                        mkdir -p ~/.ssh
                        echo "StrictHostKeyChecking no" >> ~/.ssh/config
                        chmod 600 $KEY

                        # Copy File
                        scp -i $KEY docker-compose.prod.yml ubuntu@$AWS_IP:/home/ubuntu/docker-compose.yml

                        # Deploy
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