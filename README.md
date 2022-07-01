## Basic Setup for NestJS
### Starting Appliication
```java
npm i -g @nestjs/cli
nest new project-name
```
### Dependencies
```java
npm i --save @nestjs/typeorm @nestjs/passport  @nestjs/jwt typeorm mysql2 bcrypt class-validator class-transformer  passport passport-local  passport-jwt typeorm-extension 
```
### DevDependencies
```java
npm i -D @types/bcrypt -D @types/passport-local @types/passport-jwt @types/express-session  webpack-node-externals run-script-webpack-plugin webpack
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
  BaseModel, // Also the Base Entity Model is Required for defination
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
      username: 'root',
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