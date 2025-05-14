
# Node AKS App

## Build and Run with Docker

```sh
docker build -t node-aks-app .
docker run -p 3000:3000 node-aks-app
```

## API Endpoints

- **List Pods**  
  `GET localhost:3000/pods`  
  Returns a list of Kubernetes pods.
