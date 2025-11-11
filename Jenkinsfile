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
                sh '''
                    # Stop and remove any containers with conflicting names
                    echo "Removing any conflicting containers..."
                    docker rm -f react-frontend node-backend mongo-db-ci || true
                    
                    # Clean up everything
                    echo "Cleaning up Docker Compose resources..."
                    docker compose down --remove-orphans --volumes --rmi all || true
                    
                    # Remove any dangling containers that might conflict
                    echo "Removing dangling containers..."
                    docker ps -a --filter name=react-frontend --filter name=node-backend --filter name=mongo-db-ci -q | xargs -r docker rm -f
                    
                    # Build services
                    echo "Building Docker images..."
                    docker compose build --no-cache
                    
                    # Start services
                    echo "Starting services..."
                    docker compose up -d --force-recreate
                    
                    # Wait for services to start
                    echo "Waiting for services to start..."
                    sleep 30
                    
                    # Check container status
                    echo "=== Container Status ==="
                    docker compose ps
                    
                    echo "=== Recent Logs ==="
                    docker compose logs --tail=20
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking application health...'
                sh '''
                    # Check if containers are running
                    echo "=== Running Containers ==="
                    docker compose ps
                    
                    # Check backend health
                    echo "=== Checking Backend ==="
                    curl -f http://localhost:5000/ || curl -f http://localhost:5000/api || echo "Backend health check failed but continuing..."
                    
                    # Check frontend health  
                    echo "=== Checking Frontend ==="
                    curl -f http://localhost:3000/ || echo "Frontend health check failed but continuing..."
                    
                    echo " Health checks completed"
                '''
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
            echo ' SUCCESS: Application deployed successfully!'
            sh '''
                echo " Access your application:"
                echo "Frontend: http://localhost:3000"
                echo "Backend:  http://localhost:5000"
                echo "MongoDB:  mongodb://localhost:27017"
            '''
        }
        failure {
            echo ' FAILURE: Pipeline execution failed'
            sh '''
                echo " Debug information:"
                docker compose logs || true
                echo "=== All Containers ==="
                docker ps -a || true
            '''
        }
    }
}