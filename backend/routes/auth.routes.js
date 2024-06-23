import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
import validate from "../middlewares/validate.js";
import { loginSchema, signupSchema } from "../validators/auth.validators.js";

// Create a router object
const router = express.Router();

// Handle post request for "/login" endpoint
router.post("/login", validate(loginSchema),login);

// Handle post request for "/signup" endpoint
router.post("/signup",validate(signupSchema) ,signup);

// Handle post request for "/logout" endpoint
router.post("/logout", logout);

// Export the router object
export default router;
