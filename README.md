
Run db migrations
```
./node_modules/.bin/sequelize db:migrate \
--config ./src/config/config.json  \
--migrations-path ./src/migrations/ \
--url 'mysql://flannerykj:cheesecake@db/vaccines'
```
