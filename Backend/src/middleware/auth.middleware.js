import jwt from "jsonwebtoken"
import myUser from "../models/user.models.js"
const protectRoute=async (req,res,next) => {
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"unauthorised user"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message:"unauthorised user"});
        }

        const user=await myUser.findById(decoded.userID).select("-password");

        if(!user){
            return res.status(404).json({message:"user not found"});
        }

        req.user=user;
        next();

    } catch (error) {
        console.log("error in middleware protect route",error);
        res.status(500).json({message:"internal server error"});

    }



};

export default protectRoute;