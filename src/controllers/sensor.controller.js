const Sensors = require('../models/sensor.model')

const addSensor = async (req, res) =>{
    const sensor = new Sensors(req.body)
    try{
    await sensor.save();
    return res.status(200).json({
      message: "Sensor value added to db",
    });
  } catch (err) {
    return res.status(400).json({
        message: err.message || "There is some issue with your type of params"
    });
  }
}
const SensorbyId = async (req,res) => {
    const sensorid = req.params.sid;
    Sensors.find({"sid" : sensorid})
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
const getAllSensors = async (req,res) => {
    
    Sensors.find()
    .then(
        sensors =>{
            res.send(sensors)
        }
    )
    .catch(err => {
        res.status(500)
        .send({message: err || "Try agian later"})
    })
}
const getAllSensorsbyFid = async (req,res) => {
    const fieldID = req.params.fid 
    Sensors.find({"fid" : fieldID})
    .then(
        sensors =>{
            res.send(sensors)
        }
    )
    .catch(err => {
        res.status(500)
        .send({message: err || "Try agian later"})
    })
}

module.exports ={
    addSensor,
    SensorbyId,
    getAllSensors,
    getAllSensorsbyFid
}