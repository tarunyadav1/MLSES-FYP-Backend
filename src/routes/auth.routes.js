const express = require('express')
const passport = require('passport')
const {getuser,addUser} = require('../auth/auth')
const jwt = require('jsonwebtoken')
const router = express.Router()



router.post('/signup',
passport.authenticate('signup', { session : false}),
async (req,res,next) => {
              const time = "3600"
              const userdata = { _id: req.user._id, email: req.user.email ,name: req.user.name, contactnumber : req.user.contactnumber};
              const body = { _id: req.user._id, email: req.user.email, contactnumber : req.user.contactnumber};
              const token = jwt.sign({ user: body }, 'hkkkmnt');
          
    res.json({
        message: 'Signed Up successfully',
        ...userdata,
        token,
        expireIn: time
    })
}
)


router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            

            return res.status(401).send({err,info})
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);
              const time = "3600"
              const userdata = { _id: user._id, email: user.email ,name: user.name, contactnumber : user.contactnumber};
              const body = { _id: user._id, email: user.email, contactnumber : user.contactnumber};
              const token = jwt.sign({ user: body }, 'hkkkmnt');
            
              return res.json({...userdata, token ,expireIn: time});
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    ,{successRedirect: '/dashboard', failureRedirect : '/login'})(req, res, next);
  }
);

// router.get('/check',getuser)
// router.post('/singup',addUser)

module.exports = {
    routes: router
}