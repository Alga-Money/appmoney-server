const crypto = require('crypto')

exports.encrypt = function (plainPassword) {
  var cipher = crypto.createCipher('aes256', 'wtPkGVAz3yXDrsSZVxHtJiMlOJm1ulov')
  var encrypted = cipher.update(plainPassword, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

exports.decrypt = function (encryptedPassword) {
  try {
    var decipher = crypto.createDecipher(
      'aes256',
      'wtPkGVAz3yXDrsSZVxHtJiMlOJm1ulov'
    )
    var dec = decipher.update(encryptedPassword, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec
  } catch (err) {
    return null
  }
}

exports.comparePassword = function (plainPassword, encryptedPassword) {
  const tempEncrypted = this.encrypt(plainPassword)
  if (encryptedPassword === tempEncrypted) {
    return true
  } else { return false }
}
