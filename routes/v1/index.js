const v1 = require('express')()
const car = require('./carRoutes')
const credit = require('./creditRoutes')
const fixCap = require('./fixandcapRoutes')


v1.use(car)
v1.use(credit)
v1.use(fixCap)

module.exports = v1
