var express = require('express');
var router = express.Router();

let sum = 0;
let more = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more++
  sum+=more;
  res.send(`Sum is: ${sum}` );
});

module.exports = router;