const User = require('../models/auth.model') 

const addUser = async (req,res) => {
    const user = new User(req.body)
    try{
    await user.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
        message: err.message || "user add nhi hora"
    });
  }

}

const getuser = async (req,res) => {
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
module.exports = {
    getuser,
    addUser,
}