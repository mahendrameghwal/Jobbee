
const expressAsyncHandler = require("express-async-handler");
const Org = require("../models/Orgschema");
const {cloudinary} = require("../utils/cloudinary");
const User = require("../models/Userschema");
const jwt= require("jsonwebtoken");
const { CastError } = require('mongoose').Error;
const Candidate = require("../models/Candidateschema");
const Job = require("../models/jobschema");

const CreateOrg = async (req, res, next) => {
  try {
    console.log(req.user);
    const ownerId = req.user._id;
    const AlreadyCandidate = await Org.find({ owner: ownerId });
    console.log(AlreadyCandidate);
    if(!AlreadyCandidate|| AlreadyCandidate.length===0){
        let orgData;
        if (req.body.avtar) {
          const fileStr = req.body.avtar;
          const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'avatar',
            transformation: [
              { width: 150, height: 150, gravity: "face", crop: "thumb", radius: "max" },
              { effect: "brightness:30" },
              { quality: 'auto', fetch_format: 'auto' },
            ],
          });
          orgData = await Org.create({ ...req.body, avtar: uploadResponse.secure_url,owner:ownerId,candidate:null});
        } else {
          orgData = await Org.create({ ...req.body, owner:ownerId ,jobs:[],candidate:null});
        }
        if(orgData){
          await User.findByIdAndUpdate(
            { _id: ownerId },
            {
              $set: {
                Org: orgData._id,
                jobs:[]
              },
              $unset: {
                candidate: 1,
              },
            },
            { new: true }
          );
          const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
          const ExistUser = await User.findById(req.user._id);
          const {candidate,jobs, __v,createdAt,updatedAt, fullname, username, password, ...info } = ExistUser._doc;
          const token = jwt.sign(info,process.env.JWT_SECRET,  {expiresIn: '24h' });
          res.cookie('accesstoken', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true, 
            expires: expirationDate,
            domain: 'localhost', 
            path: '/'
          });
         return res.status(201).json(orgData);
        }else{
          return res.status(400).json({message:"Unable to create Profile"});
        }
      
    }else{
      return res.status(400).send({ message: "You cannot create multiple profile" }); 
    }
  } catch (err) {
    if (err.name === "ValidationError"){
      const validationErrors = {};
      for (const field in err.errors) {
        validationErrors[field] = err.errors[field].message;
      }
      return res.status(400).send({ error: "Validation failed", details: validationErrors });
    }else if(err.code === 11000) {
      const duplicateKey = Object.keys(err.keyValue)[0];
      return res
        .status(400)
        .send({ message: ` Please use a different ${duplicateKey}` });
    } else {
     return next(err);
    }
  }
};


const getAllOrg = expressAsyncHandler(async (req, res, next) => {
  try {
    const AllOrganization = await Org.find();
    if (!AllOrganization|| AllOrganization.length===0) {
      return res.status(404).send({ message: "no organization found" });
    }
    return  res.status(200).send(AllOrganization);
  } catch (err) {
    console.error("Error fetching candidate:", err);
    next(err);
  }
});


const GetOrgById = expressAsyncHandler(async(req,res, next)=>{
  try {
    const { id } = req.params;
    const org = await Org.findById(id).populate('jobs');
    if (!org) {
      return res.status(404).send({ message: 'Profile not found' });
    }
   return res.status(200).json(org);
  } catch (err) {
    if (err instanceof CastError) {
     return res.status(400).send({ message: 'Profile not found. Please check and try again' });
    }
    next(err); 
  }
})



const DeleteJob = expressAsyncHandler (async (req,res, next)=>{
  try {
    const { id } = req.params;
    const IsavailableJob = await Job.findById(id);
    const userId = req.user._id;
    const authorId = IsavailableJob.author.toString();

    if (!IsavailableJob ||IsavailableJob === undefined) {
      return res.status(404).send({ message: 'Job not found' });
    }
    if (!userId || !authorId || authorId !== userId) {
      return res.status(403).send({ message: 'You do not have permission to delete this job' });
    }else{
      await Job.findByIdAndDelete(id);
      await Org.findOneAndUpdate(
        { owner: userId },
        { $pull: { jobs: id } },
        { new: true } 
      );
      await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { jobs: id } },
        { new: true } 
      );
      const AppliedCandidateId = IsavailableJob.applicants.map(candidate => candidate._id);
      

       console.log(AppliedCandidateId);


      console.log(AppliedCandidateId);
     const Result= await Candidate.bulkWrite([
        {
          updateMany: {
            filter: { _id: AppliedCandidateId },
            update: { $pull: { appliedJobs: { jobId: IsavailableJob._id } } },
          },
        },
        {
          updateOne: {
            filter: { _id: AppliedCandidateId },
            update: { $inc: { TotalAppliedJob: -1 } },
          },
        },
      ]);

     console.log(Result);
     return res.status(200).send({ message: 'Job deleted successfully'});
    } 
  } catch (err) {
    if (err instanceof CastError) {
      res.status(400).send({ message: 'Invalid job ID or ID format' });
    }
    console.error('Error deleting job:', err);
    next(err);
  }
})

// const Shortlistappliciants = expressAsyncHandler(async (req, res, next) => {
//   try {
//     const {jobid}=req.params;
//     const OrgId = req.user.Org;
//     const Isorgs = !OrgId || OrgId === undefined || OrgId === '';
//     if(Isorgs){
//       return res
//       .status(400)
//       .send({ message: "Please Create Profile First" });    
//     }else{
//       const Isorgvalid= mongoose.Types.ObjectId.isValid(OrgId);

//     }
  
//   } catch (err) {
  
//   }
// });

  
module.exports = { CreateOrg, getAllOrg ,GetOrgById , DeleteJob};
  