const Candidate = require("../models/Candidateschema");
const asyncHandler = require("express-async-handler");
const { cloudinary } = require("../utils/cloudinary");
const User = require("../models/Userschema");
const { CastError } = require("mongoose").Error;
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const Job = require("../models/jobschema");


const CreateCandidate = asyncHandler(async (req, res, next) => {
  try {
    const UserId = req.user._id;
    const AlreadyCandidate = await Candidate.find({ owner: UserId });
    if (!AlreadyCandidate || AlreadyCandidate?.length === 0) {
      let CandidateData;
      if (UserId) {
        const fileStr = req.body.avtar;
        if (fileStr) {
          const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: "avatar",
            transformation: [
              {
                width: 150,
                height: 150,
                gravity: "face",
                crop: "thumb",
                radius: "max",
              },
              { effect: "brightness:30" },
              { quality: "auto", fetch_format: "auto" },
            ],
          });
          CandidateData = await Candidate.create({
            ...req.body,
            avtar: uploadResponse?.secure_url,
            owner: UserId,
            jobs:undefined
          });
        } else {
          CandidateData = await Candidate.create({
            ...req.body,
            owner: UserId,
            jobs:undefined
          });
        }
        if(CandidateData){
          await User.findByIdAndUpdate(
            { _id: UserId },
            {
              $set: {
                candidate: CandidateData._id,
              },
              $unset: {
                jobs: 1,
              },
            },
            { new: true }
          );
           
          const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
          const ExistUser = await User.findById(req.user._id);
          const {Org,jobs, __v,createdAt,updatedAt, fullname, username, password, ...info } = ExistUser._doc;
          const token = jwt.sign(info,process.env.JWT_SECRET,  {expiresIn: '24h' });
          // res.cookie('accesstoken', token, {
          //   httpOnly: true,
          //   sameSite: 'none',
          //   secure: true, 
          //   expires: expirationDate,
          //   domain: 'localhost', 
          //   path: '/'
          // });
          res.cookie('accesstoken', token ,{
            httpOnly: false,
            secure: false, 
            sameSite: 'lax' ,
            expires: expirationDate, 
          });
          return res.status(201).send(CandidateData);
        }else{
          return res.status(400).send({message:"Unable to create Profile"});
        }
     
      } else {
        return res.status(422).send({ message: "Invalid owner ID" });
      }
    } else {
      return res
        .status(400)
        .send({ message: "You cannot create multiple profile" });
    }
  } catch (err) {
    if (err.name === "ValidationError") {
      const validationErrors = {};
      for (const field in err.errors) {
        validationErrors[field] = err?.errors[field].message;
      }
      return res
        .status(400)
        .send({ error: "Validation failed", details: validationErrors });
    }else if(err.code === 11000) {
      const duplicateKey = Object.keys(err.keyValue)[0];
      return res
        .status(400)
        .send({ message: ` Please use a different ${duplicateKey}` });
    } else {
      next(err);
    }
  }
});

const getAllCandidate = asyncHandler(async (req, res, next) => {
  try {
    const AllCandidate = await Candidate.find();
    if (!AllCandidate|| AllCandidate.length===0) {
      return res.status(404).send({ message: "no candidate found" });
    }
   return res.status(200).send(AllCandidate);
  } catch (err) {
    console.error("Error fetching candidate:", err);
    next(err);
  }
});

const EditCandidateInformation = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const existCandidate = await Candidate.findById(id);
    const userId = req?.user?._id;
    const CandidateId = existCandidate?._id.toString();
 

    if (!existCandidate) {
      return res.status(404).send({ message: "Candidate not found" });
    }

    if (userId !== CandidateId) {
      return res
        .status(403)
        .send({ message: "Unauthorized to edit Information " });
    }

    const updateData = { ...req.body };
    const updateKeys = Object.keys(updateData);

    const fieldsToRemove = updateKeys.filter(key => updateData[key] === null);
    const unsetFields = {};

    fieldsToRemove.forEach(field => {
      unsetFields[field] = 1;
      delete updateData[field];
    });

    const UpdatedCandidate = await Job.findByIdAndUpdate(
      id,
      {
        ...updateData,
        $unset: unsetFields,
      },
      { new: true }
    );

    res
      .status(200)
      .send({ message: "Candidate updated successfully", UpdatedCandidate });
  } catch (err) {
    if (err instanceof CastError) {
      return  res.status(400).send({ message: "Invalid job ID or ID format" });
    } else {
      console.error("Error updating job:", err);
      next(err);
    }
  }
});


const ApplyToJob = asyncHandler(async (req, res, next) => {
  
try {
  const {jobid}=req.params;
  const CandidateId = req.user.candidate;
  const IsCandidateAvailable = !CandidateId || CandidateId === undefined || CandidateId === '';
  if(IsCandidateAvailable){
    return res.status(400).send({ message: "Please Create Profile First" });    
  }else{

  const IsValidCandidateId = mongoose.Types.ObjectId.isValid(CandidateId);
  if(!IsValidCandidateId){
    return res.status(400).send({ message: "Invalid candidate ID provided" }); 
  }else{

   if(CandidateId){
    const availablecandidate = await Candidate.findById(CandidateId);
    if(!availablecandidate){
      return res
      .status(400)
      .send({ message: "candidate not available" }); 
    }else{
    
      const IsAlreadyAppliedJobs =  availablecandidate.appliedJobs.some(job => job.jobId.toString() == jobid.toString());
  
      if(IsAlreadyAppliedJobs){
        return res.status(400).send({ message: "You have already applied for this job" }); 
      }else{
        const SuccessCandidateUpdate = await Candidate.findByIdAndUpdate(
          availablecandidate._id,
          {
            $inc: { TotalAppliedJob: 1 },
            $push: { appliedJobs: { jobId: jobid } },
          },
          { new: true }
        );
          
           if(SuccessCandidateUpdate){
            const SuccessJobUpdate = await Job.findByIdAndUpdate(
              jobid,
              {
                $inc: { totalapplication: 1 },
                $push: { applicants: availablecandidate._id },
              },
              { new: true }
            );

            if(SuccessJobUpdate){
              return res.status(200).send({ message: "Applied Successfully" })
            }else{
              return res.status(400).send({ message: "something wrong to Apply Job." })
            }
           }else{
            return res.status(400).send({ message: " failed to apply Please try again later" })

           }
           
            
      }
    }
   }

  }
  }
} catch (err) {
  if (err instanceof CastError) {
    return  res.status(400).send({ message: "Invalid ID format" });
  } else {
    next(err);
  }
}
});


const GetCandidateById = asyncHandler(async(req,res, next)=>{
  try {
    const { id } = req.params;
    const candidate = await Candidate.findById(id).populate('appliedJobs.jobId');
    if (!candidate) {
      return res.status(404).send({ message: 'Candidate not found' });
    }
   return res.status(200).json(candidate);
  } catch (err) {
    if (err instanceof CastError) {
      return res.status(404).send({ message: 'Candidate not found. Please verify the ID and try again.' });
    }
    next(err); 
  }
})



module.exports = {
  CreateCandidate,
  getAllCandidate,
  EditCandidateInformation,
  ApplyToJob,
  GetCandidateById
};
