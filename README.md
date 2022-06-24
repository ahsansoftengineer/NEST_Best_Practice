## Basic Setup for NestJS
### Authentication with Guard is Working and Token is Getting Generated
#### curl
```shell
curl -X POST http://localhost:3000/api/auth/login -d '{"name": "ahsan", "gender": "male"}' -H "Content-Type: application/json"
```
#### Postman
```java
{
    "name":"ahsan",
    "gender": "male"
}
```