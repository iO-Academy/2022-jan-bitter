# 2022-jan-bitter
Bitter is the newest social media platform where you can share your thoughts with the world, as long as they are not fluffy, cheerful, joyous or nice.

Create a table in MySql called 'bittr'


To set up the supertokens core in docker, run the following command:
```
docker run \
--name supertokensCore \
-p 3567:3567 \
-e MYSQL_USER="root" \
-e MYSQL_PASSWORD="password" \
-e MYSQL_HOST="172.18.0.2" \
-e MYSQL_PORT="3306" \
-e MYSQL_DATABASE_NAME="bittr" \
-d registry.supertokens.io/supertokens/supertokens-mysql
```
