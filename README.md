# 2022-jan-bitter
Bitter is the newest social media platform where you can share your thoughts with the world, as long as they are not fluffy, cheerful, joyous or nice.



## Easy mode setup ##

You will need docker and docker-compose installed on your system for easy set up.

Extract the folder 'db' from the 'db.zip' and place in the project root.
Open a terminal inside the bittr root folder and run the following command to set up the
MySQL db and supertokens core (which is used for auth) docker containers:

`docker-compose up --detach`


## Self host ##
If you would prefer to host the MySql db and supertokens core yourself please follow the
steps below:

1. Create a new table in MySql called 'bittr'.
2. Import the 'bittrSampleData.sql' to your 'bittr' db to import the tables
3. Follow the supertokens doc to set up an instance of 'core': 
https://supertokens.com/docs/emailpassword/quick-setup/core/with-docker

## To run the program ##

### Set up the front end ###
In a new terminal window, navigate to ./frontend and run the following command to initialise: `npm init`

To start the listener run `npm start`

### Set up the backend ###
In a new terminal window, navigate to ./backend and run the following command to initialise: `npm init`

Then to start the listener run: `nodemon app.js`

