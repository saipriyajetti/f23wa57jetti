var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x")
        if(value === null)
        {
            value=Math.round(Math.random()*999);
        }     
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.write('Math.acosh() applied to ' + value + ' is ' + Math.acosh(2,value));
        res.write('<br>Math.log1p() applied to ' + value + ' is ' + Math.log1p(value))
        res.write('<br>Math.tan() applied to ' + value + ' is ' + Math.tan(value))
        res.write('<br>Math.sqrt() applied to ' + value + ' is ' + Math.sqrt(value))
        res.end()
    }

});

module.exports = router;