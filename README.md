# CI/CD Projects Repository

This repository contains multiple CI/CD projects demonstrating DevOps practices with Jenkins, Docker, and GitHub.  
Projects include Dockerized applications, automated pipelines, and hands-on examples for learning and showcasing CI/CD workflows.

---

## Projects

### 1. Flask CI/CD Pipeline
**Folder:** `flask-docker-cicd`

This project demonstrates a full CI/CD pipeline for a simple Flask application:

- **Pipeline Tool:** Jenkins
- **Containerization:** Docker
- **Source Code:** GitHub

**Pipeline Features:**
1. Checkout latest code from GitHub
2. Cleanup old Docker container (if exists)
3. Build Docker image for Flask app
4. Run Docker container exposing port `5000`
5. Manual trigger (webhook optional)

**Access Flask App:**
- After running the pipeline manually, open the app in your browser:

### 2. Nginx Docker CI/CD Pipeline
**Folder:** `jenkins-docker-ci-cd/nginx-app`

- Builds and runs an Nginx container via Jenkins pipeline
- Exposes port `8081`  
- Demonstrates Docker image build and container deployment in pipeline

---

## How to Run Locally

1. **Clone the repo:**
```bash
git clone https://github.com/Bhanu-Prakash-18/ci-cd-projects.git
cd ci-cd-projects

