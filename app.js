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

app.get('/auth', function(req, res) {
    if (!req.query.code) {

        var authURL = graph.getOauthUrl({
            'client_id': config.APP_ID,
            'redirect_uri': config.APP_URL + '/auth',
            'scope': config.SCOPE
        });

        if (!req.query.error)
            res.redirect(authURL);

        return;
    }

    graph.authorize({
        'client_id': config.APP_ID,
        'redirect_uri': config.APP_URL + '/auth',
        'client_secret': config.APP_SECRET,
        'code': req.query.code
    }, function (err, fbRes) {
        res.redirect('/friends');
    });

});

app.get('/friends', function(req, res) {
    graph.get('me/friends?fields=picture,first_name,last_name', function(err, fbRes) {
        res.render('friends', { friends: JSON.stringify(fbRes.data) });
    });
});

app.listen(config.PORT, function() {
    console.log('Express server running on port ' + config.PORT);
});