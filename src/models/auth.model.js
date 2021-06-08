const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { func, string } = require("joi");

const { Schema } = mongoose;

const AuthSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required : "Name is required",
    
  },
  contactnumber: {
    type: Number,
    unique: "Mobile number already exists",
  },
  isverified: {
    type: Boolean,
    default : false,
  }
});

AuthSchema.pre('save',
async function(next)

{
  const user = this;
  const hash = await bcrypt.hash(this.password,10);
  this.password=hash;

  next();
})


AuthSchema.methods.isValidPassword = async function(password){
  const user = this;
  const compare = await bcrypt.compare(password,user.password);

  return compare;
}






// AuthSchema.methods.setPassword = function (password) {
//   if (!password) return "";

//   this.salt = crypto.randomBytes(16).toString("hex");
//   this.hashed_password = crypto
//     .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
//     .toString("hex");
// };

// AuthSchema.methods.validatePassword = function (password) {
//   const hash = crypto
//     .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
//     .toString("hex");

//   return this.hashed_password === hash;
// };

// AuthSchema.methods.generateJWT = function () {
//   const today = new Date();
//   const expirationDate = new Date(today);
//   expirationDate.setDate(today.getDate() + 60);

//   return jwt.sign(
//     {
//       email: this.email,
//       id: this._id,
//       exp: parseInt(expirationDate.getDate() / 1000, 10),
//     },
//     "secret"
//   );
// };

// AuthSchema.methods.toAuthJSON = function () {
//   return {
//     _id: this._id,
//     email: this.email,
//     token: this.generateJWT(),
//   };
// };

module.exports = mongoose.model('UserAuthentication', AuthSchema);
