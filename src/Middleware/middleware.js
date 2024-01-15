const config = require('../config')
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = config.JWT_SECRET_KEY

const logIncomingRequests = async(req, res, next) => {
    console.log(`${new Date()} ${req.url} ${req.method}`)
    next()
}

const createJWTToken = async(data) => {
    data.reqtime = Date.now()
    let secret = JWT_SECRET_KEY
    return jwt.sign(data, secret)
}

const authenticateToken = async(req, res, next) => {
    if (!config.omitTokenPath.includes(req.url)) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            res.json({'success' : false, 'statusCode' : 401, 'message' : 'Token missing', 'response' : null})    
        }
        else {
            const data = await extractJWTToken({payload : token})
            if (data) {
                next()
            }
            else {
                res.json({'success' : false, 'statusCode' : 408, 'message' : 'Invalid Token', 'response' : null})        
            }
        }
    }
    else {
        next()
    }
}

const extractJWTToken = async (data) => {
    let secret = data.secret ? data.secret : process.env.JWT_KEY;
    delete data.secret;
    try {
        return jwt.verify(data.payload, secret)
    } catch (err) {
        console.log("JWT EXTRACT ERROR : ", err);
        return false
    }
};


module.exports = {
    logIncomingRequests : logIncomingRequests,
    authenticateToken : authenticateToken,
    createJWTToken : createJWTToken
}