const User = require('../models/auth.model') 
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.serializeUser(function(user, done) {
done(null, user.id);
});

passport.deserializeUser(function(id, done) {
User.findById(id, function(err, user) {
done(err, user);
});
});

// ======================SIGNUP ===========================
passport.use('signup', new localStrategy({

usernameField : 'email',
passwordField : 'password',
passReqToCallback : true 
// allows us to pass back the entire request to the callback
},
function(req, email, password, done) {

    var newUser = new User();
      

 

      newUser.email    = email;
      newUser.password = password;
      newUser.name = req.body.name;
      newUser.contactnumber = req.body.contactnumber

        try{
          newUser.save(function(err){
            if(err)
            done(err)
            return done(null,newUser)
          })
        }
        catch(err) {
          return done(null, false , err)
        }


}));





passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy (
    {
      secretOrKey : 'hkkkmnt',
      jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async ( token , done) => {
      try {
        return done(null, token.user);
      }
      catch(error ) {
        done(error);
      }
    }
  )
)


// const addUser = async (req,res) => {
//     const user = new User(req.body)
//     try{
//     await user.save();
//     return res.status(200).json({
//       message: "Successfully signed up!",
//     });
//   } catch (err) {
//     return res.status(400).json({
//         message: err.message || "user add nhi hora"
//     });
//   }

// }

// const getuser = async (req,res) => {
//         User.find()
//         .then(users =>{
//             res.send(users)
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message: err.message || " ek error aya h bhai "
//             })
//         })
    

// }
