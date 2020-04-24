var express = require('express');
var app = express();

app.use(express.static(__dirname + ''));

app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 5002;
app.listen(port);

console.log('server started on port: ', port);
