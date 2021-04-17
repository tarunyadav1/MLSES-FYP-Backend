const express = require( "express");
const {getAllSensorsValues,addValues,ValuesbySid} =require( '../controllers/timedata.controller')

const router = express.Router();

router.get('/Values',getAllSensorsValues)
router.post('/post-value',addValues)
router.get('/:fid/:sid/values',ValuesbySid)

module.exports ={
    routes:router
}