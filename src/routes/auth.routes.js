const express = require('express')
const {getuser,addUser} = require('../controllers/auth.controller')

const router = express.Router()

router.get('/check',getuser)
router.post('/singup',addUser)

module.exports = {
    routes: router
}