
Run db migrations
```
./node_modules/.bin/sequelize db:migrate \
--config ./src/config/config.json  \
--migrations-path ./src/migrations/ \
--url 'mysql://flannerykj:cheesecake@db/vaccines'
```

Insert data
`docker cp csv-data/. db:/var/lib/mysql-files/`
`docker cp scripts/. db:.`
`docker exec -it db bash`
`mysql -u root -p --default-character-set=utf8 vaccines < insert.sql`



