# 2022-jan-bitter
Bitter is the newest social media platform where you can share your thoughts with the world, as long as they are not fluffy, cheerful, joyous or nice.



## Easy mode setup using Docker ##

You will need docker and docker-compose installed on your system for easy set up.

Unpack the db folder into the root of the project.

Open a terminal inside the bittr root folder and run the following command to set up the
MySQL db and supertokens core (which is used for auth) docker containers:

`docker-compose up --detach`

This command also installs a local version of PHP MyAdmin. You will need to use this to create
the db table and import the sample data.

Open your browser and navigate to: http://localhost:8082
Log in with the following info:
* Server: mySql_db_bittr:3307
* Username: root
* Password: password

Unpack sampleData.zip and import the tables into the `bittr` database.


## Self host without Docker ##
If you would prefer to host the MySql db and supertokens core yourself please follow the
steps below:

1. Create a new table in MySql called 'bittr'.
2. Import the 'bittrSampleData.sql' to your 'bittr' db to import the tables
3. Follow the supertokens docs to set up an instance of 'core' that is connected to your db:
https://supertokens.com/docs/emailpassword/quick-setup/core/without-docker

## To run the program ##

### Set up the front end ###
In a new terminal window at the root of the project, navigate to ./frontend and run the following
command to download the dependencies: `npm install`

To start the listener run `npm start`

### Set up the backend ###
In a new terminal window at the root of the project, navigate to ./backend and run the following
command to download the dependencies: `npm install`

You will need to be on node version 16, check your version using:
`npm --version`

You can use nvm to switch versions (docs here: https://github.com/nvm-sh/nvm)
Switch to v16 using:
`nvm use v16`

Then to start the listener run: `nodemon app.js`

