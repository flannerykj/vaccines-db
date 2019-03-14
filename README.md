
Run db migrations
```
./node_modules/.bin/sequelize db:migrate \
--config ./src/config/config.json  \
--migrations-path ./src/migrations/ \
--url 'mysql://flannerykj:cheesecake@db/vaccines'
```

Insert data
`docker cp csv-data/generic_vaccines.csv db:/var/lib/mysql-files/generic_vaccines.csv`
`docker cp scripts/insert-generic-vaccines.sql db:insert-generic-vaccines.sql`
`docker exec -it db bash`
`mysql -u root -p`
`use vaccines;`
`source insert-generic-vaccines.sql;`



