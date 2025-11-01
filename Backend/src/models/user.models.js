import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        // sparse: true, // allows signup with email OR phone
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    resetOTP: String,
    resetOTPExpires: Date,


    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    isVerified: {
        type: Boolean,
        default: false, // true only after OTP/email/phone verification
    },

    otp: {
        type: String, // will store hashed OTP (for security)
    },

    otpExpires: {
        type: Date, // expiry time (e.g., 5 min after generation)
    },

    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
    },
}, { timestamps: true }); // auto adds createdAt & updatedAt

const myUser = mongoose.model("users", userSchema);

export default myUser;

