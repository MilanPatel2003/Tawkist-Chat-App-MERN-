import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import dbConnection from "./db/dbConnection.js";
import { server, io, app } from "./socket/Socket.js";
// import errorMiddleware from "./middlewares/errorMiddleware.js";
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // parse json data (from req.body)
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);
// app.use(errorMiddleware)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
