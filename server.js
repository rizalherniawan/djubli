const express = require('express')
const api = require('./routes')
const app = express()
const PORT = 9000
const errorHandler = require('./handler/errorHandler')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', api)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})