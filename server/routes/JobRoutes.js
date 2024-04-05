const express = require("express");
const {Createjob, getAllJobs, GetJobById, DeleteAlljob, EditJob, getPernoalizePost, SearchJobPost}  = require("../controllers/JobController");
const Verifyorg = require("../middlewares/Verifyorg")
const VerifyToken= require('../middlewares/verifytoken')
const router = express.Router();
router.post('/create',VerifyToken,Verifyorg,Createjob);
router.get('/getall/jobs', getAllJobs);
router.get('/getjob/:id', GetJobById);
router.get('/posts/my-posts/:authorid', getPernoalizePost);
router.get('/post/search', SearchJobPost);
router.delete('/deletejob/all', DeleteAlljob);
router.patch('/edit/:id',VerifyToken,Verifyorg, EditJob);

module.exports = router;