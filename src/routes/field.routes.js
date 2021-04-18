const express = require( "express");
const {getAllFields,fieldbyId,addField} =require( '../controllers/field.controller')

const router = express.Router();

router.get('/:uid/fields',getAllFields)
router.post('/fields/save',addField)
router.get('/fields/:fid',fieldbyId)

module.exports ={
    routes:router
}






