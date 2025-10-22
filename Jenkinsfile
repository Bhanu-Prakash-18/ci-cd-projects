pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:Bhanu-Prakash-18/ci-cd-projects.git'
            }
        }

        stage('Cleanup Old Container') {
            steps {
                echo 'Stopping and removing any existing nginx container...'
                sh 'docker stop nginx-app || true'
                sh 'docker rm nginx-app || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building nginx Docker image...'
                sh 'docker build -t nginx-app ./jenkins-docker-ci-cd/nginx-app'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running nginx container on port 8080...'
                sh 'docker run -d -p 8080:80 --name nginx-app nginx-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

