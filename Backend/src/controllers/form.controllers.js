import profile from "../models/profile.models.js";
import myUser from "../models/user.models.js";

export const fillForm = async (req, res) => {
  try {
    const { name, email, phone, age, disease, donationGoal, bio } = req.body;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized, please login" });
    }

    const profilePicUrl = req.files?.profilePic?.[0]?.path;
    const proofsUrls = req.files?.proofs?.map(file => file.path) || [];

    // ✅ Only check for the required fields, not all
    if (!name || !email || !phone || !age || !disease || !profilePicUrl || !donationGoal) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check if this user already has a profile
    let userProfile = await profile.findOne({ user: userId });
    if (userProfile) {
      return res.status(400).json({ message: "Profile already exists", userProfile });
    }

    userProfile = new profile({
      user: userId,
      name,
      email,
      phone,
      age,
      disease,
      profilePic: profilePicUrl,
      donationGoal,
      bio,          // ✅ use bio instead of background
      proofs: proofsUrls, // ✅ optional
    });

    await userProfile.save();
    await myUser.findByIdAndUpdate(userId, { profile: userProfile._id });

    return res.status(201).json({
      message: "Profile created successfully",
      userProfile,
    });

  } catch (error) {
    console.error("Error in fillForm controller", error);

    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    return res.status(500).json({ message: "Something went wrong, please try again" });
  }
};





// CHECK IF USER HAS PROFILE
export const updateForm = async (req, res) => {
  try {
    const profileId = req.params.id;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userProfile = await profile.findById(profileId);
    if (!userProfile || String(userProfile.user) !== String(userId)) {
      return res.status(403).json({ message: "Forbidden: Not your profile" });
    }

    const profilePicUrl = req.files?.profilePic?.[0]?.path || userProfile.profilePic;

    // Handle proofs
    const existingProofs = Array.isArray(req.body.existingProofs)
      ? req.body.existingProofs
      : req.body.existingProofs
      ? [req.body.existingProofs]
      : [];
    const newProofs = req.files?.proofs?.map(file => file.path) || [];
    const proofsUrls = [...existingProofs, ...newProofs];

    // Build update object safely
    const updateData = {
      name: req.body.name || userProfile.name,
      bio: req.body.bio || userProfile.bio,
      email: req.body.email || userProfile.email,
      phone: req.body.phone || userProfile.phone,
      age: req.body.age ? Number(req.body.age) : userProfile.age,
      disease: req.body.disease || userProfile.disease,
      donationGoal: req.body.donationGoal ? Number(req.body.donationGoal) : userProfile.donationGoal,
      profilePic: profilePicUrl,
      proofs: proofsUrls,
    };

    const updatedProfile = await profile.findByIdAndUpdate(profileId, updateData, { new: true });

    res.status(200).json({
      message: "Profile updated successfully",
      userProfile: updatedProfile,
    });
  } catch (error) {
    console.log("Error in updateForm:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





export const hasprofile = async (req, res) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized. Please log in." });
    }

    const userProfile = await profile.findOne({ user: userId });

    if (userProfile) {
      return res.status(200).json({ hasProfile: true, profileId: userProfile._id });
    } else {
      return res.status(200).json({ hasProfile: false });
    }
  } catch (error) {
    console.error("Error in hasprofile controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET PROFILE BY ID
export const getProfileById = async (req, res) => {
  try {
    const profileId = req.params.id;

    const userProfile = await profile.findById(profileId);

    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ userProfile });
  } catch (error) {
    console.error("Error in getProfileById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL PROFILES
export const getAllProfiles = async (req, res) => {
  try {
    const userProfiles = await profile.find().populate('user', 'username email');
    res.status(200).json({ userProfiles });
  } catch (error) {
    console.error("Error in getAllProfiles controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET LOGGED-IN USER'S PROFILE
export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userProfile = await profile.findOne({ user: userId });

    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    return res.status(200).json({ userProfile });
  } catch (error) {
    console.error("Error in getMyProfile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
