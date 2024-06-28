import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ error: "Unauthorized - No token" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decode.userID).select("-password");
    if (!user) {
      res.status(401).json({ error: "Unauthorized - User Not Found" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in Protect route middleware", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
