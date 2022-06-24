## Authentication
### [Auth Constant](src/auth/auth.constant.ts)
* * Secret Key
### [Auth Service](src/auth/auth.service.ts)
* * Accessing Database => validateUser(name: string, gender: string) 
* * Generating Token =>  async login(user: Person)
### [Auth Guard](src/auth/local-auth.guard.ts)
* * Currently not Doing anything returning true
### [Auth Strategy](src/auth/local.strategy.ts)
* * Passport's local strategy is a Node. js module that allows you to implement a username/password authentication mechanism
### [Auth Module](src/auth/auth.module.ts)
* * configuring JwtModule
* * Registring Servicies
* * Exporting AuthService
```typescript
@Module({
  imports: [
    PersonModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
```
### [Controller](src/app.controller.ts)
* * Has Endpoint where user can Login
### [Controller](src/app.module.ts)
* * Registering AuthModule
* * Adding Controller AppController
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