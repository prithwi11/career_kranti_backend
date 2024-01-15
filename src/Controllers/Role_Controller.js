const express = require('express')
const router = express.Router()

router.get('/testAPI', async(req, res) => {
    res.json({'success' : true, 'status' : 200, 'message' : 'API tested successfully', 'response' : null})
})

module.exports = router