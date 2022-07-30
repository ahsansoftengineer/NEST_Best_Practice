## For TypeORM Migeration to Work
* npm i -g ts-node  @types/node typescript  typeorm
* npm i ts-node --save-dev
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

### WHERE TO PUT THIS CONFIGURATIONS
* This configuration is the part of entity
```c
{
    cli: {
        entitiesDir: "src/entity"
    }
}
{
    cli: {
        subscribersDir: "src/subscriber"
    }
}
```
# What is an Entity Listener
* Any of your entities can have methods with custom logic that listen to specific entity events. You must mark those methods with special decorators depending on what event you want to listen to.

# What is a Subscriber
* Marks a class as an event subscriber which can listen to specific entity events or any entity events. Events are firing using QueryBuilder and repository/manager methods. Example:
