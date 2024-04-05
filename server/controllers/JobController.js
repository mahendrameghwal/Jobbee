const Job = require("../models/jobschema");
const asyncHandler = require("express-async-handler");
const GenrateJobId = require("../utils/GenrateJobId");
const { default: mongoose } = require("mongoose");
const { CastError } = require('mongoose').Error;
const Org = require("../models/Orgschema");
const User = require("../models/Userschema");
const Candidate = require("../models/Candidateschema");

const Createjob = async (req, res, next) => {

 
  try {
    const userId = req.user._id;
    const OrgId=req.user.Org ;
    const jobId = await GenrateJobId();
    const IsAvailableOrg = await Org.findOne({owner:userId});
    if(!IsAvailableOrg){
     return res.status(400).send({message:"Please Create an first Organization "})
    }else{
      const newJobData = {
        ...req.body,
        author: userId,
        orgname:OrgId,
        jobId
      };
      const newJob = await Job.create(newJobData);
      if (newJob) {
        const updatedOrg = await Org.findOneAndUpdate(
          { owner: userId },
          { $push: { jobs: newJob._id } },
          { new: true } 
        );
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { $push: { jobs: newJob._id } },
          { new: true } 
        );
  
        if (updatedOrg || updatedUser || updatedOrg && updatedUser) {
          return res.status(201).json(newJob);
        } else {
          return res.status(500).json({ error: "Failed to update Org document" });
        }
      }  
    }
  } catch (err) {
    if (err.name === "ValidationError") {
      const validationErrors = {};
      for (const field in err.errors) {
        validationErrors[field] = err.errors[field].message;
      }
      return res.status(400) .send({ error: "please Fill required fields", details: validationErrors });
    } else {
        next(err);
    }
  }
};

const getAllJobs = asyncHandler(async (req, res, next) => {
  try {
    const jobs = await Job.find().populate('orgname')
    if (!jobs ||jobs.length===0) {
      return res.status(404).send({message:"no jobs found"});
    }else{

      return res.status(200).send(jobs);
    }

  } catch (err) {

    console.error('Error fetching jobs:', err);
    next(err);
  }
});

const DeleteAlljob = asyncHandler(async (req, res, next) => {
  try {
    const jobs = await Job.deleteMany(); 
   return res.status(200).send({message:"successfully deleted"});
  } catch (err) {

    console.error('Error deleting jobs:', err);
    next(err);
  }
});


const GetJobById = asyncHandler(async(req,res, next)=>{
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate('orgname').populate('applicants');
    if (!job) {
      return res.status(404).send({ message: 'Job not found' });
    }
   return res.status(200).json({ job });
  } catch (err) {
    if (err instanceof CastError) {
     return res.status(400).send({ message: 'we could not find any Job 🧐' });
    }
    next(err); 
  }
})





const EditJob = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingJob = await Job.findById(id);
    const userId = req?.user?._id;
    const authorId = existingJob?.author.toString();

    if (!existingJob) {
      return res.status(404).send({ message: 'Job not found' });
    }

    if (authorId !== userId) {
      return res.status(403).send({ message: 'Unauthorized to edit this job' });
    }

    const updateData = { ...req.body };
    const updateKeys = Object.keys(updateData);
    console.log(existingJob);
    console.log(updateData);
    console.log(updateKeys);
    console.log(userId);
    console.log(authorId);
    const fieldsToRemove = updateKeys.filter((key) => updateData[key] === null);
    const unsetFields = {};
    fieldsToRemove.forEach((field) => {
      unsetFields[field] = 1;
      delete updateData[field];
    });
    // Update the job with the new data
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      {
        ...updateData,
        $unset: unsetFields,
      },
      { new: true }
    );

    res.status(200).send({ message: 'Job updated successfully', updatedJob });
  } catch (err) {
    if (err instanceof CastError) {
      res.status(400).send({ message: 'Invalid job ID or ID format' });
    } else {
      console.error('Error updating job:', err);
      next(err);
    }
  }
});


const SearchJobPost =asyncHandler (async(req,res, next)=>{
  try {
    const { title,category, location, skills, jobtype, joblevel, min, max , sort} = req.query;
    let query = {};
     if (title) {
      query.title = { $regex: new RegExp(title, 'i') };
    }
    if (category) {
      query.category = { $regex: new RegExp(category, 'i') };
    }
    if (location) {
      query.location = { $regex: new RegExp(location, 'i') };
    }
    if (skills) {
      const skillArray = skills.split(',').map(skill => new RegExp(skill.trim(), 'i'));
      query.skills = { $in: skillArray };
    }
    if (jobtype) {
      query.jobtype = { $regex: new RegExp(jobtype, 'i') };
    }
    if (joblevel) {
      query.joblevel = { $regex: new RegExp(joblevel, 'i') };
    }
    if (min || max) {
      query.salary = {};
     //minsalary and maxsalary 
      if (min && max) {
        const parsedMinSalary = parseInt(min, 10);
        const parsedMaxSalary = parseInt(max, 10);
  
        query.salary.$gte = parsedMinSalary;
        query.salary.$lte = parsedMaxSalary;
      } else {
        // minsalary or maxsalary 
        if (min) {
          const parsedMinSalary = parseInt(min, 10);
          query.salary.$gte = parsedMinSalary;
        }
        if (max) {
          const parsedMaxSalary = parseInt(max, 10);
          query.salary.$lte = parsedMaxSalary;
        }
      }
    }
    let sortBy = {};
    if (sort === 'newest') {
      sortBy = { createdAt: -1 };
    } else if (sort === 'oldest') {
      sortBy = { createdAt: 1 };
    } 
    const jobPosts = await Job.find(query).sort(sortBy);

    if (!jobPosts || jobPosts.length === 0) {
      return res.status(404).send({ message: 'No job posts found with the given criteria' });
    }

    res.status(200).json(jobPosts)
  } catch (err) {
    console.error('Error searching job posts:', err);
    next(err)
  }
})

const getPernoalizePost= asyncHandler (async(req,res, next)=>{
  try {
    const {authorid} = req.params;
   
    const isValidAuthorId = mongoose.Types.ObjectId.isValid(authorid);
      if (!isValidAuthorId) {
        return res.status(400).send({ message: 'Invalid author ID' });
      }
    if(authorid){
      const JobPosts = await Job.find({author: authorid }); 
      if (!JobPosts || JobPosts.length === 0) {
        return res.status(404).send({message:"no Job Found" });
      } else{

        return  res.status(200).send(JobPosts);
      }
    }

  } catch (err) {
    next(err);
    console.error('Error updating job:', err.message);
  }
})





module.exports =  {Createjob,DeleteAlljob, getAllJobs, GetJobById, EditJob , getPernoalizePost, SearchJobPost};
