# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Using the bundled PHPMyAdmin ###
PHP MyAdmin has been bundled into the docker to make accessing the db easier. You can acccess
this on by navigating to `http://localhost:8082`
Use the following credentials to log in:
Server: mySql_db_bittr:3307
Username: root
Password: password

### Get Bleats API
To get all bleats 

`/bleats`

To get all bleats by userID

`/bleats?userId={userID}`
eg
`/bleats?userId=ef26ac69-533f-43b8-bdde-2c080e96aed6`


```
'SELECT `bleat`, `bleat_time`, `username`, `bleat_user_id`\n' +
            'FROM `bleats`\n' +
            'LEFT JOIN `user_data`\n' +
            'ON `bleats`.`bleat_user_id` = `user_data`.`user_id`\n' +
            'WHERE `bleats`.`bleat_user_id` = "' + urlUserId + '"'
```

returns JSON

```
{
        "bleat": "my only bleat",
        "bleat_time": 0,
        "username": "banana",
        "bleat_user_id": "ef26ac69-533f-43b8-bdde-2c080e96aed6"
    }
```

### POST Bleat 

`/bleats`

JSON format

```
{
    "userId": "ef26ac69-533f-43b8-bdde-2c080e96aed6",
    "bleat": "The price of towels is too high!"
}
```




