'use strict'

var services = require("../services");
exports.authSession = function (req, res, next) {
  if (req.header("token")) {
    var token = req.header("token");
    services.auth.checkSession(token).then(
      function (session) {
        req.session = session;
        next();
      },
      function (err) {
        res.status(401).json({
          status: 'error',
          message: services.message.invalidToken
        });
      }
    );
  } else {
    res.status(401).json({
      status: 'error',
      message: services.message.noTokenSent
    });
  }
};