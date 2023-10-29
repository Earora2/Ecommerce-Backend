# Ecommerce-Backend---Copy
The backend provides user
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

docker-compose-up can be used to bring the complete backend up and can be accessed using the port 5000
If you are using minikube then it can be accessed on localhost:5000
