var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('to na página users');
});

router.get('/ttt', function(req, res, next) {
  res.send('testetestetet página de testetet ');
});

router.get('/ttt/u', function(req, res, next) {
  res.send('tuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuutetet ');
});
module.exports = router;
