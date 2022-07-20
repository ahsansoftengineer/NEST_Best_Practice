## Basic Setup for NestJS
### Starting Appliication

#### Difference among PNPM, NPM, YARN
* PNPM: PNPM is 3 times faster and more efficient than NPM. With both cold and hot cache, PNPM is faster than Yarn. Pnpm simply links files from the global store, while yarn copies files from its cache. Package versions are never saved more than once on a disk.
```shell
npm install -g pnpm // Fast installation
npm i -g @nestjs/cli
npm i --location=global @nestjs/cli

npm cache clean --force
rm package-lock.json
nest new project-name
```
#### Global Configuration for NPM
```shell
npm config set timeout 6000000
npm config set fetch-retries 3
npm config set cache-min 3600
npm config set fetch-retry-maxtimeout 600000
```
#### Git Global Configuration
```shell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
### POINTS
* * Don't know the use case of dotenv cli
### Dependencies
```java
npm i --save @nestjs/config @nestjs/typeorm @nestjs/passport  @nestjs/jwt @nestjs/throttler  @nestjs/serve-static @nestjs-modules/mailer @casl/ability nodemailer typeorm mysql2 express-session bcrypt class-validator class-transformer  passport passport-local  passport-jwt typeorm-extension joi bcrypt helmet csurf cpx argon2 dotenv-parse dotenv-cli
```
### DevDependencies
```java
npm i -D @types/node @types/bcrypt @types/passport-local @types/passport-jwt @types/express-session  @types/joi @types/bcrypt @types/multer @types/express-session webpack-node-externals run-script-webpack-plugin webpack  
```

### Hot Reloading
* * Filename => webpack-hmr.config.js
```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
```
### CREATE AN CHILD ENTITY

* * 1 Create Entity
```java
@ChildEntity() // @Entity() for Simple
export class Parent extends Person{
  @ManyToMany(() => Student, (a) => a.id, {
    cascade: true,
  })
  @JoinTable({name: 'parent_student'})
  students: Student[]
}
```
* * 2 Registering to Module
```java
@Module({
  imports: [
    TypeOrmModule.forFeature([Parent]), // .forFeature Not .forRoot
    PersonModule // TableInheritance
  ],
  controllers: [ParentController],
  providers: [ParentService]
})
export class ParentModule {}
```
* * 3 Adding to Entity array
```typescript
export const entities = [
  BetaModel, // Also the Base Entity Model is Required for defination
  Person, // Table Inheritance Entity Model is also Required
  Parent // The Entity
];
```
* * 4 Import this Module to Parent Module
```java
@Module({
  imports: [
    PersonModule, 
    ParentModule, 
  ]
})
export class FeatureSchoolModule { }
```
* * 5 Import Parent Module to App Module
```java
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      email: 'root',
      password: 'root',
      database: 'schoolmgmt',
      // This how you Registered your Model Classes
      entities,
      synchronize: true,
      dropSchema: true,
      // logger: 'advanced-console',
      logging: true,
      // subscribers: [],
      // migrations: [],
    }),
    FeatureSchoolModule,
  ],
})
export class AppModule {}
```
### Create a Custom Meta Decorator
* Create a Decorator
* * [auth.decorator.ts](src/auth/auth.decorator.ts)
* How to Check the Meta Atached by the Decorator in the Guard
* * [auth.decorator.ts](src/auth/guard/auth.guard.ts)
* Configure the Guard as the provide in any Module
* * [auth.module.ts](src/auth/auth.module.ts)
```java
{
  // This could be set in any module
  provide: 'APP_GUARD',
  useClass: JwtAuthGuard,
},
```
* Set the Decorator on the Controller End point
* * [auth.controller.ts](src/auth/auth.controller.ts)
```java
@Post('sign-in')
// @UseGuards(LocalAuthGuard)
@Public()
signIn(@Request() req, @Body() body: SignInDto) {
  return this._ss.validateUser(body);
}
```
### New Topic
