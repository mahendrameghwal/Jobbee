const mongoose = require("mongoose");
const passwordValidator= require("password-validator")

const schema = new passwordValidator();

schema
  .is().min(8)                                    // Minimum length 8
  .is().max(100)                                  // Maximum length 100
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits()                                 // Must have digits
  .has().not().spaces();
const Userschema = new mongoose.Schema({
  fullname:{
    type:String,
    required:[true, 'please enter fullname']
  },
  username:{
    type:String,
    required:[true, ' enter username']
  },
  email:{
    type:String,
    required:[true, ' enter your email '],
    unique: [true, 'already exist email'],
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address',],
   },
   password: {
    type: String,
    required: [true, ' enter your password '],
    validate: {
      validator: function (value) {
        return schema.validate(value) ? true : false;
      },
      message: 'Password does not meet the criteria'
    }
  },
   Isorg:{
    type: Boolean,
    required:true,
    default:false
   },
   candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'candidate',
  },
  Org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Org',
    default:null
  },
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job',}],

  
   resetPasswordToken: String,
   resetPasswordExpires: Date
},{
  timestamps:true
});


const User = mongoose.model("User", Userschema);

module.exports = User;

