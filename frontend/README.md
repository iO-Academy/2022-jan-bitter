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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Using the bundled PHPMyAdmin ###
PHP MyAdmin has been bundled into the docker to make accessing the db easier. You can acccess
this on by navigating to `http://localhost:8081`
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
    "bleat": "my bleat with time again"
}
```




