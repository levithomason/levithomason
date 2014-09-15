var express = require("express");
var logfmt = require("logfmt");

var app = express();
var port = Number(process.env.PORT || 8000);
var server = app.listen(port, function() {
    console.log("Listening on " + port);
});

app.use(logfmt.requestLogger());
app.use('/', express.static(__dirname + '/app'));

// let angular handle all routing requests (html5mode)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});
