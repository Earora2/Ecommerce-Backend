# Ecommerce-Backend---Copy
This API serves as the backbone for managing users, products, orders, carts, and categories. Below is an overview of the available models, routes, and controllers.  
****Models****    
**User Model**  
1.id 2.fullname 3.email(req) 4.password(req) 5.phoneNumber 6.address 7.city 8.state 9.profileProgress 10.updatedOn 11.createdOn  
Product Model  
1.user 2.category(req) 3.price(req) 4.image 5.title(req) 6.description 7.updatedOn 8.createdOn  
Order Model  
1.user(req) 2.status 3.items(product+quantity) 4.updatedOn 5.createdOn  
Category Model  
1.title(req) 2.desc 3.updatedOn 4.createdOn  
Cart Model  
1.user 2.items(product+quantity) 3.updatedOn 4.createdOn  
    
**Routes**    
**User Routes**  
POST: /createAccount  
POST: /signIn  
PUT: /:id  
Product Routes  
GET: /  
GET: /category/:id  
POST: /  
Order Routes  
POST: /  
GET: /:id  
POT: /updateStatus  
Category Routes  
GET: /  
GET: /:id  
POST: /  
Cart Routes  
POST: /  
DELETE: /  
GET: /:user  
    
The nodejs and mongodb images can be created using the docker files provided.  
  
**docker-compose-up** can be used to bring the complete backend up and can be accessed using the **port 5000 **    
The nodejs.env file contains the port number the NodeJS server is listening on.  
The mongo.env file contains the IP and port number of the mongoDB container used to connect with our server.    
The mongoDB IP used is the default IP and port of the mongoDB container in a Docker environment, can be replaced with the container name in NodeJS code.  

If you are using **minikube**  
minikube start --driver=<any-driver>  #I have user Docker  
kubectl apply -f mongodb-service.yaml -f mongodb-pv.yaml -f mongodb-pvc.yaml -f mongo-deployment.yaml  
kubectl apply -f nodejs-service.yaml -f nodejs-deployment.yaml  
minikube service nodjs-service  

The link provided by nodjs-service should open the following page:  
![image](https://github.com/Earora2/Ecommerce-Backend/assets/53661538/e0a23633-6952-4f00-8139-45f0542607f2)
