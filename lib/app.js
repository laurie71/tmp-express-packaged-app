// ./apps.js: main app

require.paths.unshift(__dirname+'/../node_modules');

var express = require('express');
var debug = require('debug');

var app = express.createServer();

app.configure(function() {
    this.set('view engine', 'ejs');
    this.set('views', __dirname + '/views');
    this.set('view options', { layout: false });
});

// uses packaged 'debug' app
app.use('/debug', debug.diagnostics());

app.get('/', function(req, res) { res.render('index.ejs'); });

if (! module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port);
}

