const Fields = require('../models/field.model')

const addField = async (req, res) =>{
    const field = new Fields(req.body)
    try{
    await field.save();
    return res.status(200).json({
      message: "Field information added",
    });
  } catch (err) {
    return res.status(400).json({
        message: err.message || "There is some issue with your type of params"
    });
  }
}
const fieldbyId = async (req,res) => {
    const fieldID = req.params.fid;
    Fields.find({"fid" : fieldID})
    .then(data => {
        if(!data)
            res.status(404).send({message: " No field found with id" + fieldID})
        else
            res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({message: err ||" Error occured while retrieving Sensor information"})
    })
}
const getAllFields = async (req,res) => {
    const userID = req.params.uid
    Fields.find({"uid" : userID})
    .then(
        fieldsdata =>{
            res.send(fieldsdata)
        }
    )
    .catch(err => {
        res.status(500)
        .send({message: err || "Try agian later"})
    })
}

module.exports ={
    addField,
    getAllFields,
    fieldbyId
}