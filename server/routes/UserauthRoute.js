const { login, register,logout, ResetRequest,resetPassword,DeleteAcountPerManently,GetUserDetail } = require("../controllers/UserAuthController");
const express = require("express");
const VerifyToken = require("../middlewares/verifytoken");
const router = express.Router();


router.post('/register',register);
router.post('/login',login);
router.post('/logout',VerifyToken,logout);
router.post('/forgotpassword',ResetRequest);
router.put('/reset/:token',resetPassword);
router.delete('/delete',VerifyToken,DeleteAcountPerManently)
router.get('/getdetail',VerifyToken, GetUserDetail)
module.exports = router;