const express = require('express')
const router = express.Router()

const category_model = require('../Models/Category_Model')
const category_dao = require('../Daos/Category_Dao')
const category_validator = require('../Validators/Category_Validator')
const util = require('../utility/util')

router.post('/addCategory', async(req, res) => {
    const reqBody = req.body
    if (category_validator.addCategory(reqBody)) {
        const addCategory = await category_model.addCategory(reqBody)
        res.json({'success' : addCategory.success, 'status' : addCategory.status, 'message' : addCategory.message, 'response' : addCategory.response})
    }
    else {
        res.json({'success' : false, 'status' : util.STATUS_CODE.PARAMETER_MISSING, 'message' : 'Parameter missing', 'response' : null})
    }
})

module.exports = router
