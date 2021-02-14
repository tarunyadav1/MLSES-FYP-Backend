const express = require('express')
const {getuser,addUser} = require('../controllers/user.controller')

const router = express.Router()

router.get('/Users',getuser)
router.post('/User',addUser)

module.exports = {
    routes: router
}