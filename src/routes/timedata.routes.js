const express = require( "express");
const {addValues,valuesbySid,valuesbyFid,valuesbySidShowcase} =require( '../controllers/timedata.controller')

const router = express.Router();

router.post('/fields/pushdata',addValues)
router.get('/fields/:sid/values',valuesbySid)
router.get('/fields/:fid',valuesbyFid)
router.get('/field/:sid/',valuesbySidShowcase)
module.exports ={
    routes:router
}