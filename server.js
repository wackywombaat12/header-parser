var express = require("express");
var app = express();
var ipaddr = require('ipaddr.js');
var useragent = require('useragent');

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'];
    var lang = req.acceptsLanguages()[0];
    var software = useragent.parse(req.headers['user-agent']).os.toString();
    var json = {
        "ipaddress": ip,
        "language": lang,
        "software": software
    }
    res.send(json);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})