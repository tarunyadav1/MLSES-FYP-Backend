const User = require('../models/user.model') 

const addUser = async (req,res) => {
    const user = new User(req.body)
    try{
    await user.save();
    return res.status(200).json({
      message: "User added",
    });
  } catch (err) {
    return res.status(400).json({
        message: err.message || "user add nhi hora"
    });
  }

}

const getusers = async (req,res) => {
        User.find()
         .then(users =>{
           res.send(users)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || " ek error aya h bhai "
            })
        })

}
const getuserbyID = async (req,res) => {
        const userID = req.params.uid
        User.find({"uid" : userID})
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || " ek error aya h bhai "
            })
        })
    

}
module.exports = {
    addUser,
    getuserbyID,
    getusers,
}