var express = require('express'),
    graph = require('fbgraph'),
    settings = require('./settings'),
    app = express();

var config = {
    APP_ID: process.env.APP_ID || settings.APP_ID,
    APP_SECRET: process.env.APP_SECRET || settings.APP_SECRET,
    APP_URL: process.env.APP_URL || settings.APP_URL,
    SCOPE: '',
    PORT: process.env.PORT || 3000
};

app.configure(function() {
    app.set('view engine', 'ejs');
});

app.get('/', function(req, res) {
    res.render('index', { title: 'Facebook app' })
});

app.listen(config.PORT, function() {
    console.log('Express server running on port ' + config.PORT);
});