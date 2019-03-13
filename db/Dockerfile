FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD sqlpassword

EXPOSE 3306

ADD setup.sql /docker-entrypoint-initdb.d
