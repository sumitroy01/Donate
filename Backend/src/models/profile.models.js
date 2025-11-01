
import mongoose from "mongoose";

const profileSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
       

    },
     name:{
        type:String,
        required:true,
    },

  email: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
  match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
},

 
    phone: {
     type: String,
     required: true,
     match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number'],
    },

    age:{
        type:Number,
        required:true,

    },
    
    disease:{
        type:String,
        required:true,

    },

    profilePic:{
        type:String,
        default:"",
        required:true,
    },

    donationGoal:{
        type:Number,
        required:true,

    },
     donatedAmount:  {
         type: Number,
          default: 0 
        },

    
    bio:{
        type:String,
        required:true,

    },
    proofs:{
        type:[String],
        default:[],
        required:true,
    },
    
      goalMet: { type: Boolean, default: false },
  goalMetAt: { type: Date, default: null },
}, { timestamps: true 

    


    
});

const profile=mongoose.model("profile",profileSchema);
export default profile;
