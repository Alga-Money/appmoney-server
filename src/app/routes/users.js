var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/singup', UserController.singnup);

router.get('/singup', UserController.singnup);

module.exports = router;