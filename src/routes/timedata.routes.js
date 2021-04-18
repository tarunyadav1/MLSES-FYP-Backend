const express = require( "express");
const {addValues,valuesbySid,valuesbyFid} =require( '../controllers/timedata.controller')

const router = express.Router();

router.post('/fields/pushdata',addValues)
router.get('/fields/:fid/:sid/values',valuesbySid)
router.get('/fields/:fid',valuesbyFid)
module.exports ={
    routes:router
}