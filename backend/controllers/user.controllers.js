import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserID = req.user._id;
    const usersData = await User.find({ _id: { $ne: loggedInUserID } }).select(
      "-password"
    ); //getting all users data except logged in User

    res.status(200).json(usersData);
  } catch (error) {
    console.log("Error while getting users", error.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};
