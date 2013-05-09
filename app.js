var express = require('express'),
    expressLayouts = require('express-ejs-layouts'),
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
    app.set('views', __dirname + '/views');
    app.set('layout', 'layout');
    app.use(expressLayouts);
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(config.PORT, function() {
    console.log('Express server running on port ' + config.PORT);
});