const express = require( "express");
const {getAllSensors,SensorbyId,addSensor} =require( '../controllers/sensor.controller')

const router = express.Router();

router.get('/Sensors',getAllSensors)
router.post('/Sensor',addSensor)
router.get('/Sensors/:id',SensorbyId)

module.exports ={
    routes:router
}






// router.route("").get(userCtrl.list).post(userCtrl.create);

// router
//     .route("/api/users/:userId")
//     .get(authCtrl.requireSignin, userCtrl.read)
//     .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
//     .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

// router.param("userId", userCtrl.userByID);

// export default router;
