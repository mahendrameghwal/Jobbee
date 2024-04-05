
const User = require("../models/Userschema");
const Org = require('../models/Orgschema')
const Job = require('../models/jobschema')
const Candidate = require('../models/Candidateschema')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECERET_KEY = process?.env?.JWT_SECRET;
const asyncHandler = require('express-async-handler')
const crypto = require("crypto");
const { sendResetPasswordEmail } = require("../utils/emailServices");
const validator = require("validator");

// res.cookie('accesstoken', token ,{
      //   httpOnly: false,
      //   secure: false, 
      //   sameSite: 'lax' ,
      //   expires: expirationDate, 
      // });


//* register
const register = asyncHandler(async (req, res, next) => {
try {
let Hashpassword
if ( req.body.password.length >=5 && req.body.password.length <= 16){
   Hashpassword = await bcrypt.hash(req.body.password, 10);
}else {
  !req.body.password=='' &&   res.status(401).send({message:"password must be conatain between 5 to 16 chacater"})
}
    const ExistUser = await User.findOne({ email: req.body.email });

   
    if (ExistUser) {
     return res.status(403).send({message:"user already exist"});
    } else {
          const NewUser = new User({
            ...req.body,
            password: Hashpassword,
          });
      
          await NewUser.save();
         
          return res.status(201).send({message:"user created successfully",data:NewUser});
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = {};
      for (const field in err.errors) {
        validationErrors[field] = err.errors[field].message;
      }
     return res.status(400).send({ error: 'Validation failed', details: validationErrors });
    } else {
      next(err);
    }
  }
});
//* login
const login = async (req, res, next) => {

  try {
  
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: " Please fill in all required fields" });
    }
    const ExistUser = await User.findOne({ email });

    if (!ExistUser) {
      return res.status(404).send({ message: "user not found" });
    } else {
      const Iscorrect = bcrypt.compareSync(
        req.body.password,
        ExistUser.password
      );
     
      if (!Iscorrect) {
        return res.status(400).send({ message: "check password or username" });
      }
     if(ExistUser.Isorg){
      const {candidate,jobs, __v,createdAt,updatedAt, fullname, username, password, ...info } = ExistUser._doc;
      const token = jwt.sign(info,SECERET_KEY,  {expiresIn: '24h' });
      // res.cookie('accesstoken', token, {
      //   httpOnly: false,
      //   sameSite: 'none',
      //   secure: true, 
      //   expires: expirationDate, 
      //   path: '/',
      //   domain:'localhost'
      // });

      res.cookie('accesstoken', token ,{
        httpOnly: false,
        secure: false, 
        sameSite: 'lax' ,
        expires: expirationDate, 
      });

      return res.status(200).send({ message: "login success", token });
     }else{
      const {Org,jobs, __v,createdAt,updatedAt, fullname, username, password, ...info } = ExistUser._doc;
      const token = jwt.sign(info,SECERET_KEY,  {expiresIn: '24h' });
      // res.cookie('accesstoken', token, {
      //   httpOnly: true,
      //   sameSite: 'none',
      //   secure: true, 
      //   expires: expirationDate,
      //   domain: 'localhost', 
      //   path: '/',
      // });

      res.cookie('accesstoken', token ,{
        httpOnly: false,
        secure: false, 
        sameSite: 'lax' ,
        expires: expirationDate, 
      });
      return res.status(200).send({ message: "login success", token });
     }
    
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = {};
      for (const field in err.errors) {
        validationErrors[field] = err.errors[field].message;
      }
     return res.status(400).send({ error: 'Validation failed', details: validationErrors });
    } else {
      next(err);
    }
  }
};



const ResetRequest = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (email==='') {
    return res.status(404).send({message:"Please Provide a email address"});
  }
  if (!validator.isEmail(email)) {
    return res.status(400).send({message:"Email must be a valid email."});
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User does not exist for this email." });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();
    await sendResetPasswordEmail(user.email, resetToken);

    return res
      .status(200)
      .send({ message: "Password reset email sent successfully." });
  } catch (error) {
     next(error)
  }
});

const resetPassword = asyncHandler(async (req,res, next) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log(token,password);

  
  try {
    
      let Hashpassword ;
      if ( password.length >=5 && password.length <= 16){
         Hashpassword = await bcrypt.hash(password, 10);
      }else {
        !password=='' &&   res.status(401).send({message:"password must be conatain between 5 to 16 chacater"})
      }
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .send({
          message: "Please request a new  reset link",
        });
    }

    user.password = Hashpassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    return res.status(200).send({ message: "Password reset successfully." });
  } catch (error) {
    
    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      return res.status(500).send({ message: "Network error occurred. Please try again later." });
    }
   next(error)
  }
});


const logout = asyncHandler(async (req,res,next) => {
  try {
    res.cookie('accesstoken', '', {
      httpOnly: true,
      expires: new Date(0),
    })
      .status(200)
      .send({ message: "user has logged out succesfully" });
  } catch (error) {
    next(error)
  }
});


const GetUserDetail = asyncHandler(async (req,res,next)=>{
  try {
    const userid = req.user._id;
    const user = await User.findOne({ _id: userid });
   if(!user){
   return res.status(400)
   .send({ message: "User not found" })
   }
   if(!user.Isorg){
    const populatedUser = await user.populate('candidate');
    const {Org,password, jobs, ...Candidatedetail} = populatedUser.toObject();
    return res.status(200).send(Candidatedetail);
  }else{
    const populatedUser = (await user.populate('Org'));
    const { password, candidate, ...Orgdetails } = populatedUser.toObject();
    return res.status(200).send(Orgdetails);
  }    
  } catch (error) {
       next(error)
  }
})


const DeleteAcountPerManently = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = req.cookies.accesstoken;
    if (!accessToken) {
      return res.status(401).send({ message: "Login first before deleting the account" });
    }
    const decodedToken = jwt.decode(accessToken);

    if (!decodedToken || !decodedToken._id) {
      return res.status(401).send({ message: " missing user ID in the access token" });
    }
    const userId = decodedToken._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (user.Isorg) {
      
        await Org.findOneAndDelete({ owner: userId });
        await Job.deleteMany({ author: userId });
        await User.findByIdAndDelete(userId);    
        res.clearCookie('accesstoken', {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
          domain: 'localhost', 
          path: '/',
        });  
        return res.status(200).send({ message: "Successfully deleted account" });
  
    } else {
        await Candidate.findOneAndDelete({ owner: userId });
        await Job.deleteMany({ author: userId });
        const deleteUser = await User.findByIdAndDelete(userId);
        res.clearCookie('accesstoken', {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
          domain: 'localhost', 
          path: '/',
        });  
        return res.status(200).send({ message: "Successfully deleted account", deleteUser});
      
    }
  } catch (error) {
    console.error(error.message);
    next(error);
  }
});


module.exports = { login, logout, register , resetPassword,ResetRequest, DeleteAcountPerManently , GetUserDetail};
