const jwt = require("jsonwebtoken");
const SECERET_KEY = process.env.JWT_SECRET;

const VerifyCandidate = async (req, res, next) => {
  try {
    const token = req?.cookies?.accesstoken ;
  
  if (!token) {
      return res.status(401).send({ message: 'Unauthorized user access' });
    }
    jwt.verify(token, SECERET_KEY,  (err, decodedToken) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid or expired token' });
      }
      const { Isorg } = decodedToken;
      if (Isorg === true) {
        return res.status(403).send({ message: 'Unable to do this action' });
      }
      
      req.user = decodedToken;
      next();

    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


module.exports = VerifyCandidate