var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(21);
var index_string = fs.readFile('index.html');
buffer.write(index_string);

app.get('/', function(request, response) {
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
