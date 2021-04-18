const express = require('express')
const {getusers,addUser,getuserbyID} = require('../controllers/user.controller')

const router = express.Router()


router.post('/user/save',addUser)
router.get('/user/:uid',getuserbyID)
router.get('/users',getusers)

module.exports = {
    routes: router
}