## Facebook and Opengraph app with node, Express.js and AngularJS

This app fetches your friends and displays them in a searchable list with pagination using AngularJS.

### Installation:

Install the npm-dependencies:

```
$ npm install
````

Then open up *settings.js* inside your favourite editor and replace **APP_ID**, **APP_SECRET** and **APP_URL** with your app's values (that you obtain from [developers.facebook.com](https://developers.facebook.com/apps)). To prevent this configuration file from being further version-controlled you can run the update-index command from git: ```$ git update-index --assume-unchanged settings.js```

#### Heroku setup

If you want the application on Heroku, make sure these config vars is set

```
$ heroku config:set APP_ID <YOUR_APP_ID>
```
```
$ heroku config:set APP_SECRET <YOUR_APP_SECRET>
```
```
$ heroku config:set APP_URL <YOUR_APP_URL>
```

### Usage

Run the app by either executing ```$ node app.js``` or ```$ foreman start``` (assuming you have Heroku's Toolbelt installed)