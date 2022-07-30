## For TypeORM Migeration to Work
* npm i -g ts-node  @types/node typescript  typeorm
* npm i ts-node --save-dev tsconfig-paths
* npm run typeorm:cli
* npm run typeorm:cli migration:show

* typeorm init
* typeorm init --name my-project --express --module esm --database mysql
* typeorm init --docker
* npm run typeorm migration:generate -- -n migrationNameHere

### Configuration
* package.json scripts
```c
"typeorm": "typeorm-ts-node-esm"
```

## CREATING ENTITIES
* typeorm entity:create -n User
* typeorm entity:create -n User -d src/user/entity
* typeorm subscriber:create -n UserSubscriber
* typeorm subscriber:create -n UserSubscriber -d src/user/subscriber
## Package.json CLI
```json
{
    "typeorm": "typeorm-ts-node-commonjs",
    "typeorm:cli": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli -f src/core/config/ConfigTypeOrmMigration.ts",

    "migration:generate": "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -d src/core/config/ormconfig.ts",
    "migration:generate": "npm run typeorm:cli -- migration:generate -d src/core/db/migrations -n",
    "migration:create": "npm run typeorm:cli -- migration:create -d src/core/db/migrations -n",
    "migration:run": "npm run typeorm:cli -- migration:run",
    "migration:revert": "npm run typeorm:cli -- migration:revert",
    
    "migration:up": "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run -d src/modules/config/ormconfig.ts",
    "migration:down": "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:revert -d src/modules/config/ormconfig.ts",

}
    

```



# What is an Entity Listener
* Any of your entities can have methods with custom logic that listen to specific entity events. You must mark those methods with special decorators depending on what event you want to listen to.

# What is a Subscriber
* Marks a class as an event subscriber which can listen to specific entity events or any entity events. Events are firing using QueryBuilder and repository/manager methods. Example:

