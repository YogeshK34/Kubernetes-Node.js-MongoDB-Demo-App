# 🐳 Kubernetes Node.js + MongoDB Demo App

This is a simple Node.js app deployed on Kubernetes, with MongoDB as a separate Pod. It demonstrates:
- Deployments
- Services
- Inter-Pod communication via CoreDNS

## 🧪 Local Setup (Minikube or KinD)

```bash
kubectl apply -f k8s/
kubectl get all
minikube service node-app-service
