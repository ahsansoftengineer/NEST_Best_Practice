# DOCKER 
## TO SET THE DOCKER FOLLOW THE FOLLOWING STEPS
1. Set the Docker File as it is
2. Run the Kubernetes Cluster | Docker > Settings > Kubernetes > Enable Kubernetes
3. Run the command in terminal > kubectl get namespaces
4. k8s>deployement.yaml
5. Run in the following commands
```java
docker login
docker build -t ahsansoftenginer/nest-best-practice .
docker push ahsansoftengineer/nest-best-practice
```
6. Run the following commands in the project
```java
cd k8s
ls
kubectl create -f deployment.yaml

```
