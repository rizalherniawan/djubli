const fixCap = require('express')()
const System = require('../../controller/system')

fixCap.get('/fix-cap', System.fixAndCapData)
fixCap.put('/fix-cap', System.editFixAndCap)
fixCap.delete('/fix-cap', System.deleteFixCap)

module.exports = fixCap