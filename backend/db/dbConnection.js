import mongoose from "mongoose";

const dbConnection = async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database", error.message);
    }
}

export default dbConnection;