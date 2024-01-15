const util = require('../utility/util')
const categroy_dao = require('../Daos/Category_Dao')

module.exports.addCategory = async(data) => {
    try {
        const addCategory = await categroy_dao.addCategory(data)
        if (addCategory) {
            return {'success' : true, 'status' : util.STATUS_CODE.SUCCESS, 'message' : 'Category Added Successfully', 'response' : null}
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