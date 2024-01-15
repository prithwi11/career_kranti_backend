const express = require('express')
const router = express.Router()
const login_model = require('../Models/Login_Model')
const login_validator = require('../Validators/Login_Validator')
const util = require('../utility/util')

router.post('/login', async(req, res) => {
    let reqBody = req.body
    if (login_validator.login(reqBody)) {
        const resp = await login_model.login(reqBody)
        res.json({'success' : resp.success, 'status' : resp.status, 'message' : resp.message, 'response' : resp.response})
    }
    else {
        res.json({'success' : false, 'status' : util.STATUS_CODE.PARAMETER_MISSING, 'message' : 'Parameter Missing', 'response' : null})
    }
})

module.exports = router