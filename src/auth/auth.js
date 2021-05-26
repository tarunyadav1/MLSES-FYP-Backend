const User = require('../models/auth.model') 
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt


passport.use('signup' , new localStrategy(
  {
    name:'Name',
    usernameField : 'email',
    passwordField : 'password'
  },
  async (email,password , done) => {
    try{
      const user = await User.create( {name,email,password})
      return done(null,user);
  } catch(error) {
    done(error);
  }
}
));

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
      secretOrKey : 'TOP_SECRET',
      jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
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
