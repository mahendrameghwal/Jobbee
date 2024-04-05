const express = require("express");
const {CreateCandidate, getAllCandidate, EditCandidateInformation, ApplyToJob, GetCandidateById} = require("../controllers/CandidateController");
const router = express.Router();
const VerifyToken = require('../middlewares/verifytoken');
const VerifyCandidate = require("../middlewares/VerifyCandidate");

router.get('/getall/candidate',getAllCandidate)
router.get('/get/:id',GetCandidateById)
router.post('/create',VerifyToken,VerifyCandidate,CreateCandidate);
router.patch('/edit/:id',VerifyToken,VerifyCandidate,EditCandidateInformation);
router.patch('/apply/:jobid',VerifyToken,VerifyCandidate,ApplyToJob);

module.exports = router
