import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/jwtTokengenerate.js";

// Signup route
export const signup = async (req, res) => {
  try {
    //Deconstructing request body
    const { fullName, userName, password, confirmPassword, gender } =
      await req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password do not match" });
    }

    //Finding User
    const user = await User.findOne({ userName });

    //Checking if user exist or not
    if (user) {
      res.status(400).json({ error: "Username already exists" });
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //Create Profile pic using api
    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    //Create user if it doesn't exist
    const createUser = await User.create({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilepic : girlProfilepic,
    });

    //If User created sending response else error
    if (createUser) {
      //Generate JWT token
      const token = generateTokenAndSetCookie(createUser._id, res);

      await createUser.save();
      return res.status(200).json({
        message: "User created successfully",
        _id: createUser._id,
        token,
      });
    } else {
      res.status(400).json({ error: "invalid User data" });
    }
  } catch (error) {
    console.log("Error while creating User", error.message);
    res.status(400).json({ error: "Internal Server error" });
  }
};

// Login route
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userExists = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists?.password || ""
    );

    if (!userExists || !isPasswordCorrect) {
      res.status(400).json({ error: "!Invalid Credentias" });
    }
    const token = generateTokenAndSetCookie(userExists._id, res);
    console.log("user logged in");
    res.status(200).json({
      message: "Login Successful...",
      fullName: userExists.fullName,
      userName: userExists.userName,
      gender: userExists.gender,
      profilePic: userExists.profilePic,
      _id: userExists._id,
      token,
    });
  } catch (error) {
    console.log("Error while Logging User", error.message);
    res.status(400).json({ error: "Internal Server error" });
  }
};

// Logout route
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 }); // deleting cookie by expiring it manually
    res.status(200).json({ message: "Logged out Successfully..." });
  } catch (error) {
    console.log("Error while Looging out User", error.message);
    res.status(400).json({ error: "Internal Server error" });
  }
};
