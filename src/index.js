const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const middleware = require('./Middleware/middleware')
const config = require('./config')
const PORT = config.PORT
const CONTROLLER_PATH = config.CONTROLLER_PATH
const swaggerUi = require('swagger-ui-express')
const specs = require('./swaggerOptions')
const swaggerDocument = require('./swagger-output.json')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended : true,
}))
app.use(bodyParser.json())

app.use(middleware.logIncomingRequests)
app.use(middleware.authenticateToken)

fs.readdir(CONTROLLER_PATH, (err, files) => {
    if (err) throw err
    files.forEach(file => {
        app.use('/v1/', require(CONTROLLER_PATH + file))
    })
})

app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})