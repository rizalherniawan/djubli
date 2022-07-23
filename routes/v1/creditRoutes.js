const credit = require('express')()
const System = require('../../controller/system')

credit.get('/credit', System.creditData)
credit.put('/credit', System.editCredit)
credit.delete('/credit', System.deleteCredit)

module.exports = credit