
var jwt = require('jsonwebtoken')

module.exports = {
  checkSession (req, res, next) {
    var token = req.headers['x-access-token']

    if (req.path === '/auth/signin' || req.path === '/auth/signup') {
      next()
    } else {
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' })

      jwt.verify(token, 'diogeqwe123', function (err, decoded) {

        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id
        next()
      })
    }
  }
}
