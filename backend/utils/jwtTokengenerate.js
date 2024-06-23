import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userID,res)=>{
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn: "15d"
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60, // 15 days in seconds
        httpsOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })

    return token

}