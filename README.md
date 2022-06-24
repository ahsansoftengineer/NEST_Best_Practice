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