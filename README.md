# Docker Microservices Project

This project demonstrates a simple **microservices architecture using Docker**. It is designed for beginners who want to understand how multiple services can run independently and communicate in a containerized environment.

---

## 🚀 Project Overview

This repository contains multiple services (microservices), each running in its own container.

Typical architecture:

- Authentication Service
- User Service / Group Service (or business logic service)
- Database (MongoDB / MySQL depending on setup)
- API Gateway (if included)

Each service is:
- Independently deployable
- Containerized using Docker
- Isolated but can communicate over a Docker network

---

## 🧱 Tech Stack

- Node.js (or your backend framework)
- Express.js
- MongoDB (or any DB used)
- Docker
- Docker Compose


---

## ⚙️ How to Run This Project

### 1. Clone the repository

```bash
git clone https://github.com/mishra-kuldeep/docker-microservices.git
cd docker-microservices

🐳 Run Auth Service (Step-by-Step)
2. Go to authservice directory

cd authservice

🧾 Create Environment File
3. Create .env file
touch .env

## Add the following variables inside `.env`

```env
PORT=4000
MONGO_URL=mongodb://mongo:27017/authdb
JWT_SECRET=mysecretkey

## What this does
PORT → Port where the auth service runs
MONGO_URL → MongoDB connection string used by the service
JWT_SECRET → Secret key used to sign JWT tokens
🐳 Docker Setup
4. Build Docker image

## 📸 Screenshots

### Docker Image

![Docker Image](https://raw.githubusercontent.com/mishra-kuldeep/docker-microservices/main/images/dockerimage.png)
![Docker Image](https://raw.githubusercontent.com/mishra-kuldeep/docker-microservices/main/images/dockerrun.png)


Run this inside authservice folder:

docker build -t authservice .
5. Run Docker container
docker run -p 4000:4000 --env-file .env authservice

✅ Result

After running:

http://localhost:4000
