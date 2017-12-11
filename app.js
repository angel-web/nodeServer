var express = require('express');
var app = express();

app.use(express.static('build'))

app.get('*', function (req, res, next) {
  var options = {
    root: __dirname + '/build/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      // console.log('Sent:', fileName);
    }
  });
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});