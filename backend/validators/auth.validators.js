import { z } from "zod";

const passwordSchema = z.string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .max(12, { message: "Password must be at most 12 characters long" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Password must contain at least one lowecase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" });

const signupSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  userName: z.string()
    .min(1, { message: "Username is required" })
    .max(10, { message: "Username must be at most 10 characters long" }),
  password: passwordSchema,
  confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
  gender: z.enum(["male", "female"], { message: "Gender must be either male or female" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // set the path of the error to confirmPassword
});

const loginSchema = z.object({
  userName: z.string().min(1, { message: "Username is required" }),
  password: passwordSchema,
});

export { signupSchema, loginSchema };
