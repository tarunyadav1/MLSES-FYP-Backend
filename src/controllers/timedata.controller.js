
const timedataValues = require('../models/timedata.model')
const addValues = async (req, res) =>{
    const sensor = new timedataValues(req.body)
    try{
    await sensor.save();
    return res.status(200).json({
      message: "value added to db",
    });
  } catch (err) {
    return res.status(400).json({
        message: err.message || "There is some issue with your type of params"
    });
  }
}
const valuesbyFid = async (req, res) => {

    const fieldid = req.params.fid
    timedataValues.find({"fid" : fieldid})
    .then(data => {
        if(!data)
            res.status(404).send({message: " No field found with id" + fieldid})
        else
            res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({message: err ||" Error occured while retrieving Field information"})
    })
}
const valuesbySid = async (req,res) => {
    const fieldid = req.params.fid
    const sensorid = req.params.sid
    timedataValues.find( { "fid" : fieldid , "sid" : sensorid}).limit(2)
    .then(data => {
        if(!data)
            res.status(404).send({message : "No sensor found with requested id" + sensorid})
        else
            res.send(data)
    })
    .catch(err => {
        res.status(500).send({message: err || "Error occured while retrieving Sensor information. Please try again later!"})
    })
}
// const getAllSensorsValues = async (req, res) => {
//     timedataValues.find()
//     .then(data => {
//         if(!data)
//             res.status(404).send({message: " No sensor found with id" + sensorid})
//         else
//             res.send(data);
//     })
//     .catch(err => {
//         res
//         .status(500)
//         .send({message: err ||" Error occured while retrieving Sensor information"})
//     })
    
// }

module.exports = {
    valuesbySid,
    valuesbyFid,
    addValues,
}