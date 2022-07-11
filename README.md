# Phaser 3 HandCash Template

## Introduction
I have created a boiler-plate template for implementing a Phaser 3 game on Heroku using Micro-Payments (as low as $0.00001) on Bitcoin SV mainnet. We use Express, Webpack, MongoDB for authentication and transpile using Babel. The server side code can easily be modified to work with other backend frameworks. Using A single Webpack bundle is recommended for multi-scene Phaser projects but this can impact performance in mobile environments. For more info visit: [https://webpack.js.org/guides/code-splitting/](https://webpack.js.org/guides/code-splitting/)

## Available Commands (Client)

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `./bundle.sh` | Builds code bundle with production settings (minification, uglification, etc..) and moves files into server directory. |


## API Calls

The fetch requests can be implemented in phaser simply using the FETCH api using virtually any API call, remember Phaser is just a JavaScript framework. Simply edit the `controller.js` files. There are a few different ways to deploy your app for testing. I reccomend setting up a test server on Heroku that you can push to so you can test in a real-world scenario. This is a bit more tedious but also more reliable for finding bugs. 

## Environment variables

The appropriate Environment variables must be added for the authentication system to work. Replace `appSecret` in the .env files with the appropriate appSecret provided by [HandCash](https://handcash.io/developers) as well as the `appId` (server side). Replace the `database` field in the sever side .env file with your mongodb URI. The .env files must be customized or replaced if using a wallet other than HandCash. You will also want to update the `user.model.js` Schema for the mongodb server. 


## Deploying to Heroku

Once your Client side code has been transpiled and migrated to your server folder using `./bundle.sh`; it is more or less ready to deploy to Heroku. Install heroku, login through BASH, migrate back to your main project folder and run the following commands:

| Command | Description |
|---------|-------------|
| `git add .` | Add repository to Heroku Git |
| `git commit -am "V.0.1" ` | Commit repository to Heroku Git |
| `git subtree push --prefix server heroku master` | deploy only the server folder to Heroku |
