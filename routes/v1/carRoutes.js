const car = require('express')()
const System = require('../../controller/system')

car.get('/car', System.getData)
car.delete('/car', System.deleteCar)
car.put('/car/:id', System.editCar)
car.put('/price', System.editPrice)

module.exports = car