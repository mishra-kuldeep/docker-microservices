# Docker Microservices Learning Project

A hands-on Docker project designed to help developers learn Docker from fundamentals to CI/CD by building and deploying a simple microservices application.

This repository follows a progressive learning approach:

* **01-Beginner** → Learn Docker fundamentals using Dockerfiles and containers.
* **02-Intermediate** → Learn Docker Compose, networking, volumes, and multi-container applications.
* **03-Advanced** → Learn CI/CD with GitHub Actions and Docker Hub.

---

## 📁 Project Structure

```text
docker-microservices/
│
├── 01-beginner/
│   ├── authservice/
│   └── group-service/
│
├── 02-intermediate/
│   ├── authservice/
│   ├── group-service/
│   └── docker-compose.yml
│
├── 03-advance/
│   ├── authservice/
│   ├── group-service/
│   └── docker-compose.yml
│
└── .github/
    └── workflows/
        └── docker-build-push.yml
```

---

## 🚀 What You'll Learn

### 01-Beginner

* Docker Fundamentals
* Docker Images
* Docker Containers
* Dockerfile
* .dockerignore
* Building Images
* Running Containers
* Port Mapping

### 02-Intermediate

* Docker Compose
* Multi-Container Applications
* Service Communication
* Docker Networking
* MongoDB Container
* Docker Volumes
* Environment Variables

### 03-Advanced

* GitHub Actions
* CI/CD Pipelines
* Docker Hub Integration
* GitHub Secrets
* Docker Image Versioning
* Automated Docker Builds
* Automated Docker Image Publishing

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB
* Docker
* Docker Compose
* GitHub Actions
* Docker Hub

---

# 📚 Advanced Level

Navigate to:

```bash
cd 03-advance
```

This section demonstrates how to automate Docker image builds and publish them to Docker Hub using GitHub Actions.

## CI/CD Workflow

Whenever code is pushed to the main branch:

```text
Git Push
    ↓
GitHub Actions
    ↓
Build Auth Service Image
    ↓
Build Group Service Image
    ↓
Login to Docker Hub
    ↓
Push Images to Docker Hub
```

## GitHub Secrets Used

```text
DOCKER_USERNAME
DOCKER_TOKEN
```

## Docker Images Published

```text
<dockerhub-username>/auth-service:latest
<dockerhub-username>/group-service:latest
```

## Benefits

* Automatic Docker Builds
* Automatic Image Publishing
* No Manual Docker Commands Required
* Production-style CI/CD Workflow

---

## 🏗️ Complete Architecture

```text
Developer
    │
    ▼
 GitHub Repository
    │
    ▼
 GitHub Actions
    │
    ├── Build auth-service
    ├── Build group-service
    │
    ▼
 Docker Hub
    │
    ▼
 Deploy Anywhere
 (Docker / Kubernetes / Cloud)
```

---

## 🎯 Learning Roadmap

```text
01-Beginner
      ↓
02-Intermediate
      ↓
03-Advanced (CI/CD)
      ↓
04-Kubernetes (Coming Soon)
```

---

## ⭐ Support

If you found this project useful, consider giving it a star.

Happy Learning! 🚀
