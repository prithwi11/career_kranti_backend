const login_dao = require('../Daos/Login_Dao')
const bcrypt = require('../utility/bcrypt')
const util = require('../utility/util')
const middleware = require('../Middleware/middleware')
const logger = require('../winston.js')
const jest = require('jest')

module.exports.login = async(data) => {
    try {
        const checkEmail = await login_dao.checkEmail(data)
        if (checkEmail) {
            if (checkEmail.length > 0) {
                const savedPassword = checkEmail[0].password
                const checkPassword = await bcrypt.comparePass(data.password, savedPassword)
                if (checkPassword) {
                    const token = await middleware.createJWTToken(checkEmail[0])
                    checkEmail[0].token = token
                    logger.info('User logged in', {checkEmail})
                    return {'success' : true, 'status' : util.STATUS_CODE.SUCCESS, 'message' : 'User Logged in successfully', 'response' : checkEmail}                    
                }
                else {
                    logger.error('Wrong Password entered')
                    return {'success' : false, 'status' : util.STATUS_CODE.RECORDS_MISMATCH_1, 'message' : 'Wrong Password entered', 'response' : null}                    
                }
            }
            else {
                return {'success' : false, 'status' : util.STATUS_CODE.RECORDS_MISMATCH_2, 'message' : 'No Email Found', 'response' : null}        
            }
        }
        else {
            return {'success' : false, 'status' : util.STATUS_CODE.INTERNAL_SERVER_ERROR, 'message' : 'Internal Server Error', 'response' : null}    
        }
    }
    catch (e) {
        console.log(e)
        return {'success' : false, 'status' : util.STATUS_CODE.SOME_ERROR_OCCURRED, 'message' : 'Some Error Occurred', 'response' : null}
    }
}