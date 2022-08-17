# NEST JS SETTINGS
## STARTING APPLICATION
### KNOWLEDGE
#### DIFFERENCE PNPM, NPM, YARN
* PNPM: PNPM is 3 times faster and more efficient than NPM. With both cold and hot cache, PNPM is faster than Yarn. Pnpm simply links files from the global store, while yarn copies files from its cache. Package versions are never saved more than once on a disk.
```shell
npm install -g pnpm // Fast installation
npm i -g @nestjs/cli
npm i --location=global @nestjs/cli
npm i --save @sendgrid/mail

npm cache clean --force
rm package-lock.json
nest new project-name
```
#### CONFIG NPM GLOBAL
```shell
npm config set timeout 6000000
npm config set fetch-retries 3
npm config set cache-min 3600
npm config set fetch-retry-maxtimeout 600000
```
#### CONFIG GIT GLOBAL
```shell
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
#### QUERY
* * Don't know the use case of dotenv cli
### DEPENDENCIES
```java
npm i --save @nestjs/config @nestjs/typeorm @nestjs/passport  @nestjs/jwt @nestjs/throttler  @nestjs/serve-static @nestjs-modules/mailer @casl/ability nodemailer typeorm mysql2 express-session bcrypt class-validator class-transformer  passport passport-local  passport-jwt typeorm-extension joi bcrypt helmet csurf cpx argon2 dotenv-parse dotenv-cli
```
### DEV DEPENDENCIES
```java
npm i -D @types/node @types/bcrypt @types/passport-local @types/passport-jwt @types/express-session  @types/joi @types/bcrypt @types/multer @types/express-session webpack-node-externals run-script-webpack-plugin webpack  
```
### LEGACY COMMAND / FORCE
```java
npm install --save-dev typeorm-seeder --legacy-peer-deps
```
### HOT RELOADING
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
      type: ENV.DB_TYPE,
      host: ENV.DB_HOST,
      port: ENV.DB_PORT,
      username: ENV.DB_USERNAME,
      password: ENV.DB_PASSWORD,
      database: ENV.DB_DATABASE,
      entities: [...baseEntities, ...entities], // STEP 2
      retryDelay: 10000,
      retryAttempts: 2, 
      logging: true,// ['query', 'error'] /* true, 'all', new MyCustomLogger()*/,
      // logger: 'advanced-console' // default
      synchronize: ENV.DB_SYNC,
      dropSchema: ENV.DB_DROP,
      // subscribers: [],
      // migrations: [],
    }),
    FeatureSchoolModule,
  ],
})
export class AppModule {}
```
### CUSTOM META DECORATOR
* Create a Decorator
* * [auth.decorator.ts](src/auth/auth.decorator.ts)
* How to Check the Meta Atached by the Decorator in the Guard
* * [auth.decorator.ts](src/auth/guard/auth.guard.ts)
* Configure the Guard as the provide in any Module
* * [auth.module.ts](src/auth/auth.module.ts)
```java
{
  // This could be set in any module
  provide: APP_GUARD,
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
### SEND EMAIL USING SENDGRID
```javascript
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(ENV.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

```
### TYPEORM MIGIRATION
* Packages to Install
```java
npm i typeorm
npm i -D typeorm-seeder --legacy-peer-deps
```
* package.json
```json
{
    "scripts": {
      "seed:config": "ts-node ./node_modules/typeorm-seeding/dist/cli.js config -n dist/core/config/ConfigTypeOrmMigration.js",
      "seed:run": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed -n dist/core/config/typeorm.config-migrations.ts"
    }
}
```
* To Customize the Seed Location 
```yaml
TYPEORM_SEEDING_FACTORIES=core/db/factories/**/*{.ts,.js}
TYPEORM_SEEDING_SEEDS=core/db/seeds/**/*{.ts,.js}
```
* Run the following command
```java
npm run seed:config
```
* * Should Display the following Result
```javascript
TypeORM Seeding v1.6.1
{
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'klp',
  entities: [
    [class AlphaModel],
    [class BetaModel extends AlphaModel],
    [class Appoinment],
    [class Book extends BetaModel],
    [class Casez extends BetaModel],
    [class City extends BetaModel],
    [class Court extends BetaModel],
    [class News extends BetaModel],
    [class User extends AlphaModel],
    [class Lawyer],
    [class LawyerClient],
    [class LawyerTeam],
    [class Specialization extends BetaModel],
    [class Task extends BetaModel],
    [class LawyerCase extends BetaModel]
  ],
  retryDelay: 10000,
  retryAttempts: 2,
  logging: true,
  synchronize: true,
  dropSchema: true,
  baseDirectory: 'D:\\Programming\\NEST_Best_Practice',
  factories: [ 'src/database/factories/**/*{.ts,.js}' ],
  seeds: [ 'src/database/seeds/**/*{.ts,.js}' ]
}
```