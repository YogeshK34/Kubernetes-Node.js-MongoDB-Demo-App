# Kubernetes Node.js + MongoDB Demo App

This is a simple demo project that shows how to deploy a Node.js app connected to MongoDB on a Kubernetes cluster. It includes all necessary manifests for deploying the app and the database, along with Kubernetes Services for internal communication.

---

## 📁 Project Structure

```
k8s-node-app/
│
├── app/                # Node.js application
│   ├── Dockerfile      # Dockerfile for building the app image
│   ├── index.js        # Entry point for the app
│   ├── package.json    # Node dependencies
│   └── package-lock.json
│
├── k8s/                # Kubernetes manifest files
│   ├── app-deployment.yaml  # Deployment for Node.js app
│   ├── app.service.yaml     # Service to expose Node.js app
│   ├── mongo-deployment.yaml # Deployment for MongoDB
│   └── mongo-service.yaml   # Service for MongoDB
│
├── README.md           # You're reading it 🙂
└── package-lock.json
```

## 🚀 Getting Started

### Prerequisites

- Docker
- Kubernetes (minikube or any cluster)
- kubectl installed
- (Optional) MongoDB Compass/Postman to test

---

## 🐳 Docker

1. **Build the Docker Image**  
   Run this from the `app` directory:

   ```bash
   docker build -t node-app .

2. **Push to DockerHub (if using a cloud cluster)**
   Replace yourusername with your DockerHub username:

   ```bash
   docker tag node-app yourusername/node-app
   docker push yourusername/node-app .

## ☸️ Deploying to Kubernetes

1. **Start your cluster (for minukube users)**:
   
    ```bash
    minikube start

2. **Apply Kubernetes Manifests**:
   
    ```bash
    kubectl apply -f k8s/
    
3. **Check Pods and Services**:
   
    ```bash
    kubectl get pods

4. **Access the App**:
   If you're using minukube:
   
    ```bash
    minikube service app-service


## 📦 API Endpoints (Sample) 

Once deployed and running, you can test endpoints like:

- GET / — Welcome route
- GET /data — Sample MongoDB data fetch
- POST /data — Add data to MongoDB

You can test using Postman, cURL, or a browser.

## 🧠 What You Learn 

- Dockerizing a Node.js app
- Creating Kubernetes Deployments & Services
- Connecting services inside a cluster (Node app ↔ MongoDB)
- Structuring real-world YAMLs and resources

## 💡 Tips

- Pods talk via Services
- MongoDB should be accessed through the service name (e.g., mongodb-service)
- Use kubectl describe to debug resources

## 🙌 Credits 
Inspired by Kubernetes learning resources and walkkthroughs like Kunal Kushwaha's Kubernetes 
series

## 📝 License 
MIT 
