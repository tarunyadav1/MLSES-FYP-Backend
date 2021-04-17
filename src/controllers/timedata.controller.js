
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
const ValuesbySid = async (req, res) => {

    const sensorid = req.params.sid
    const fieldid = req.params.fid
    timedataValues.find({"sid" : sensorid , "fid" : fieldid})
    .then(data => {
        if(!data)
            res.status(404).send({message: " No sensor found with id" + sensorid})
        else
            res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({message: err ||" Error occured while retrieving Sensor information"})
    })
}
const getAllSensorsValues = async (req, res) => {
    timedataValues.find()
    .then(data => {
        if(!data)
            res.status(404).send({message: " No sensor found with id" + sensorid})
        else
            res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({message: err ||" Error occured while retrieving Sensor information"})
    })
    
}

module.exports = {
    getAllSensorsValues,
    ValuesbySid,
    addValues,
}