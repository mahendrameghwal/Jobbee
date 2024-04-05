const jwt = require("jsonwebtoken");
const SECERET_KEY = process.env.JWT_SECRET;

const VerifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.accesstoken;
    if (!token) {
      return res.status(401).send({ message: 'Login to access Unauthorized User' });
    }
    jwt.verify(token, SECERET_KEY, (err, decodedToken) => {
      if (err) {
        return res.status(403).send({ message: 'Invalid or expired token' });
      }else{
        req.user = decodedToken;
        next();
      }
    });
  } catch (err) {
     return res.status(500).send({ message: err.message });
  }
};


module.exports = VerifyToken