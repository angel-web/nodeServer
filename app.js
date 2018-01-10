var express = require('express');
var app = express();

// api
let articleList = require('./api/article.js');
app.use('/api/article/list', articleList)

app.use(express.static('build', {index: false}));

app.get('/userlist', function (req, res) {
  res.json({name: 'zm'})
})

app.get('*', function (req, res, next) {
  var options = {
    root: __dirname + '/build/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  let fileName = 'index.html';
  let hostname = req.hostname;
  if (hostname === 'localhost' || hostname === 'www.webxiaobai.top') {
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        // console.log('Sent:', fileName);
      }
    });
  } else if (hostname === 'webxiaobai.top') {
    res.redirect(fileName)
  } else {
    res.status(400).send('Bad Request 404');
  }
})

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});