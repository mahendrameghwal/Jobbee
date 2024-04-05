const express = require("express");
const {CreateOrg, DeleteJob, GetOrgById,getAllOrg}  = require("../controllers/OrgController");
const VerifyToken = require("../middlewares/verifytoken");
const VerifyOrg = require("../middlewares/Verifyorg")
const router = express.Router();

router.post('/create',VerifyToken,VerifyOrg,CreateOrg);
router.get('/getall/org',getAllOrg);
router.get('/getorg/:id', GetOrgById);
router.delete('/job/delete/:id',VerifyToken,VerifyOrg,DeleteJob);
// router.patch('/short-list/:jobid',VerifyToken,VerifyOrg,Shortlistappliciants);

module.exports = router;