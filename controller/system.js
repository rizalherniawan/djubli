const { car, credit, fixAndCap, price } = require('../models')

class System {
    static async getData(req,res,next) {
        try {
            const respond = await car.findAll({include:['car_seller', 'car_price']})
            const data = respond.map(val => {
                return {
                    carId: val.id,
                    carBrandName: val.brand,
                    carGroupModelName: val.type,
                    carYear: val.carYear,
                    price: val.car_price.cashPrice,
                    creditPrice: val.car_price.creditPrice,
                    userId: val.car_seller.id,
                    userName: val.car_seller.userName,
                    phone: val.car_seller.phoneNumber,
                    postingAt: val.createdAt
                }
            })
            return res.status(200).json({message: "data successfully retrieved",data: data})
        } catch (error) {
            next(error)
        }
    }

    static async creditData(req,res,next) {
        try {
            const respond = await credit.findAll({attributes:['id', 'car_id',['tdp','dp'],['yearPeriod','tenor'], ['installment','cicilan']]})
            return res.status(200).json({message:"data successfully retrieved",data: respond})
        } catch (error) {
            next(error)
        }
    }

    static async fixAndCapData(req,res,next) {
        try {
            const respond = await fixAndCap.findAll({attributes:['id','car_id',['tdp','dp'],['yearStart','tahunPeriodeAwal'],['installmentStart','cicilanPeriodeAwal'],['yearAfter','tahunPeriodeLanjutan'],['installmentAfter','cicilanTahunLanjutan']]})
            return res.status(200).json({message:"data successfully retrieved",data: respond})
        } catch (error) {
            next(error)
        }
    }

    static async editCar(req,res,next) {
        try {
            const { id } = req.params
            const findId = await car.findOne({where:{id:id}})
            if(!findId) return res.status(400).json({message:"data not found"})
            await car.update(req.body,{where:{id:id}})
            return res.status(200).json({message: "data successfully updated"})
        } catch (error) {
            next(error)
        }
    }

    static async editCredit(req,res,next) {
        try {
            const { id, car_id } = req.body
            const findCredit = await credit.findOne({where:{id:id, car_id:car_id}})
            if(!findCredit) return res.status(400).json({message:"data not found"})
            await credit.update(req.body,{where:{id:id, car_id:car_id}})
            return res.status(200).json({message: "data successfully updated"})
        } catch (error) {
            next(error)
        }
    }

    static async editFixAndCap(req,res,next) {
        try {
            const { id, car_id } = req.body
            const findCredit = await fixAndCap.findOne({where:{id:id, car_id:car_id}})
            if(!findCredit) return res.status(400).json({message:"data not found"})
            await fixAndCap.update(req.body,{where:{id:id, car_id:car_id}})
            return res.status(200).json({message: "data successfully updated"})
        } catch (error) {
            next(error)
        }
    }

    static async editPrice(req,res,next) {
        try {
            const { id } = req.body
            const findPrice = await price.findOne({where:{id:id}})
            if(!findPrice) return res.status(400).json({message: "data not found"})
            await price.update(req.body, {where:{id:id}})
            return res.status(200).json({message: "data successfully updated"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteCar(req,res,next) {
        try {
            const { id } = req.body
            const findCar = await car.findOne({where:{id:id}})
            if(!findCar) return res.status(400).json({message: "data not found"})
            await car.destroy({where:{id:id}})
            return res.status(200).json({message: "data successfully deleted"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteCredit(req,res,next) {
        try {
            const { id, car_id } = req.body
            const findCredit = await credit.findOne({where:{id:id, car_id:car_id}})
            if(!findCredit) return res.status(400).json({message:"data not found"})
            await credit.destroy({where:{id:id, car_id:car_id}})
            return res.status(200).json({message: "data successfully deleted"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteFixCap(req,res,next) {
        try {
            const { id, car_id } = req.body
            const findCredit = await fixAndCap.findOne({where:{id:id, car_id:car_id}})
            if(!findCredit) return res.status(400).json({message:"data not found"})
            await fixAndCap.destroy({where:{id:id, car_id:car_id}})
            return res.status(200).json({message: "data successfully deleted"})            
        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = System