const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const errorHandler = require("./handler/errorhandler");
const fileUpload = require("express-fileupload");
const ConnectDB = require("./config/DbConfig");
const cookieParser = require('cookie-parser');
ConnectDB();

//middlewares
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  next();
});




app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload({ limits: { fileSize: 5 * 1024 * 1024 }, useTempFiles: true }));

//Routes
const GetAPIRoute = require("./routes/GetAPIRoute");
const jobroutes = require("./routes/JobRoutes");
const Orgroutes = require("./routes/OrgRoute");
const CandidateRoutes = require("./routes/CandidateRoute");
const Userroute = require("./routes/UserauthRoute");
app.use("/api/user", Userroute);
app.use("/api/org", Orgroutes);
app.use("/api/job", jobroutes);
app.use("/api", GetAPIRoute);
app.use("/api/candidate", CandidateRoutes);
app.use(errorHandler);

app.listen(port,() => {
  console.log(`server Listing on Port ${port}`);
});
