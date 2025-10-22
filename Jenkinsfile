pipeline {
    agent any

    environment {
        IMAGE_NAME = "nginx-app"
        CONTAINER_NAME = "nginx-app"
        DOCKERFILE_PATH = "jenkins-docker-ci-cd/nginx-app"
    }

    stages {
        stage('Cleanup Old Container') {
            steps {
                echo "Stopping and removing any existing nginx container..."
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building nginx Docker image..."
                sh "docker build -t $IMAGE_NAME $DOCKERFILE_PATH"
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running nginx container..."
                sh "docker run -d -p 8081:80 --name $CONTAINER_NAME $IMAGE_NAME"
            }
        }
    }

    post {
        success {
            echo "Pipeline succeeded! nginx app should be running on port 8081."
        }
        failure {
            echo "Pipeline failed. Check the logs above."
        }
    }
}

