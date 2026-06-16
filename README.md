# Docker Microservices Learning Project

A hands-on Docker project designed to help beginners learn Docker step by step by building and running a simple microservices application.

This repository follows a progressive learning approach:

* **01-Beginner** → Learn Docker fundamentals using Dockerfile and Docker containers.
* **02-Intermediate** → Learn Docker Compose, networking, volumes, and multi-container applications.

---

## 📁 Project Structure

```text
docker-microservices/
│
├── 01-beginner/
│   ├── authservice/
│   │   ├── Dockerfile
│   │   └── .dockerignore
│   │
│   └── group-service/
│       ├── Dockerfile
│       └── .dockerignore
│
└── 02-intermediate/
    ├── authservice/
    ├── group-service/
    └── docker-compose.yml
```

---

## 🚀 What You'll Learn

### 01-Beginner

In this section, you'll learn:

* What is Docker?
* Docker Images
* Docker Containers
* Dockerfile
* .dockerignore
* Building Docker Images
* Running Containers
* Port Mapping

### 02-Intermediate

In this section, you'll learn:

* Docker Compose
* Multi-Container Applications
* Service Communication
* Docker Networking
* MongoDB Container
* Docker Volumes
* Environment Variables
* Running an Entire Application with a Single Command

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB
* Docker
* Docker Compose

---

# 📚 Beginner Level

Navigate to the beginner folder:

```bash
cd 01-beginner
```

Each service contains its own:

* Dockerfile
* .dockerignore

Build and run services independently to understand how Docker works at the container level.

### Build Auth Service

```bash
cd authservice
docker build -t authservice .
```

### Run Auth Service

```bash
docker run -p 3000:3000 authservice
```

### Build Group Service

```bash
cd ../group-service
docker build -t group-service .
```

### Run Group Service

```bash
docker run -p 3001:3001 group-service
```

---

# 📚 Intermediate Level

Navigate to the intermediate folder:

```bash
cd 02-intermediate
```

This section introduces Docker Compose and runs multiple services together.

### Services Included

* Auth Service
* Group Service
* MongoDB

### Start All Services

```bash
docker compose up --build
```

Docker Compose will:

* Build all services
* Create containers
* Create a Docker network
* Start MongoDB
* Connect services together

### Stop All Services

```bash
docker compose down
```

---

## 🌐 Docker Networking

Docker Compose automatically creates a network for all services.

This allows services to communicate using service names.

Example:

```env
MONGO_URI=mongodb://mongodb:27017/authdb
```

Here:

* `mongodb` is the service name
* No IP address is required

---

## 💾 Docker Volumes

MongoDB uses Docker Volumes for persistent storage.

Example:

```yaml
volumes:
  mongo-data:
```

Why use volumes?

Without volumes:

* Container removed → Data lost

With volumes:

* Container removed → Data preserved

---

## 🏗️ Architecture

```text
                Docker Network
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼

  Auth Service    Group Service     MongoDB
      :3000           :3001          :27017
```

---

## 🎯 Who Is This Project For?

* Docker Beginners
* DevOps Beginners
* Backend Developers
* Students Learning Microservices
* Anyone looking to understand Docker through hands-on examples

---

## ⭐ Support

If you found this project useful, consider giving it a star.

Happy Learning! 🚀
