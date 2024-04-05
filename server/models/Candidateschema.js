const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  avtar: {
    type: String,
  },
  fullname: {
    type: String,
    required: [true, "Enter Your Name Please"],
  },
    gender: {
    type: String,
    required: [true, "Choose a gender "],
  },
  noticeperiod: {
    type: String,
    required: [true, "Choose a Period "],
  },
  empstatus: {
    type: String,
    required: [true, " Choose Employment Status "],
  },
  currentempstatus: {
    type: String,
    required: [true, "Choose current Employment Status "],
  },
  social: {
    type: [
      {
        name: String,
        link: String,
      }
    ],
    validate: {
      validator: function(social) {
        return social.some(entry => entry.name && entry.link);
      },
      message: 'Please provide at least one social entry with both name and link.'
    }
  }
 ,
  email: {
    type: String,
    unique: [true,'already given by other user'],
    trim: true,
    lowercase: true,
    required: [true, "enter your email address "],
    match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, "enter Phone no. "],
    validate: {
      validator:(value)=> {
          return /^\d{10}$/.test(value);
      },
      message: (props) =>`'${props.value}' is not a valid phone number! Please provide a valid mobile number.`,
    },

  },
  city: {
    type: String,
    required: [true, "Please select city "],
  },
  state: {
    type: String,
    required: [true, " Please select state"],

  },
  country: {
    type: String,
    required: [true, "Please select country"],
  },
  education: [
    {
      institute: {
        type: String,
      },
      degree: {
        type: String,
      },
      fieldofstudy: {
        type: String,
      },
      qualification: {
        type: String,
      },
      startdate: {
        type: Date,
      },
      enddate: {
        type: Date,
      },
      percentage: {
        type: String,
      },
    },
  ]
  ,resume:{
    type:String
  },
  summary:{
    type:String
  },
  skills: {
    type: [
      {
        skilltype: String,
        name: String
      }
    ],
    required: true,
    validate: {
      validator: function(skill) {
        return skill.some(entry => entry.name && entry.skilltype);
      },
      message: 'Please provide at least one skill entry with category name and skill.'
    }
  },
  employment:[
    {
      position: {
        type: String,
      },
      orgname: {
        type: String,
      },
      emptype: {
        type: String,
      },
      emplevel: {
        type: String,
      },
      empcategory: {
        type: String,
      },
      startdate: {
        type: Date,
      },
      enddate: {
        type: Date,
      },
      workskills:{
        type: [
          {
            category: String,
            name: String
          }
        ]
      }
    }
  ],
  project:[
    {
      title: {
        type: String,
      },
      status: {
        type: String,
      },
      description: {
        type: String,
      },
      startdate: {
        type: Date,
      },
      enddate: {
        type: Date,
      },
      projectrole: {
        type: String,
      },
      client: {
        type: String,
      },
      role_desc: {
        type: String,
      },
      githublink: {
        type: String,
      },
      livelink: {
        type: String,
      },
      projectskill:{
        type: [
          {
            category: String,
            name: String
          }
        ]
      }
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  appliedJobs: [
    {
      jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
      status: { type: String, enum: ['pending', 'shortlisted', 'rejected'], default: 'pending' },
      dateApplied: { type: Date, default: Date.now },
      phoneCall: {
        status: { type: String, enum: ['pending','shortlisted', 'rejected'], default: 'pending' },
        rating: { type: Number },
        feedback: { type: String },
        dateScheduled: { type: Date }
      },
      interview: {
        status: { type: String, enum: ['pending','shortlisted', 'rejected'], default: 'pending' },
        dateScheduled: { type: Date }
      },
      verification: {
        status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
        verificationDetails: { type: String },
        dateVerified: { type: Date }
      },
      success: {
        status: { type: String, enum: ['pending', 'hired'], default: 'pending' },
        dateHired: { type: Date }
      }
    }
  ],
  TotalAppliedJob:{
    type: Number,
    default: 0,
  }

}, {
    timestamps:true
});

const Candidate = mongoose.model("candidate",CandidateSchema);
module.exports = Candidate;



// [
//   {
//     jobId: { type: Schema.Types.ObjectId, ref: 'Job' },
//     status: { type: String, enum: ['pending', 'shortlisted', 'rejected'], default: 'pending' },
//     dateApplied: { type: Date, default: Date.now },
//     phoneCall: {
//       status: { type: String, enum: ['pending','shortlisted', 'rejected'], default: 'pending' },
//       rating: { type: Number },
//       feedback: { type: String },
//       dateScheduled: { type: Date }
//     },
//     interview: {
//       status: { type: String, enum: ['pending','shortlisted', 'rejected'], default: 'pending' },
//       dateScheduled: { type: Date }
//     },
//     verification: {
//       status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
//       verificationDetails: { type: String },
//       dateVerified: { type: Date }
//     },
//     success: {
//       status: { type: String, enum: ['pending', 'hired'], default: 'pending' },
//       dateHired: { type: Date }
//     }
//   }
// ]