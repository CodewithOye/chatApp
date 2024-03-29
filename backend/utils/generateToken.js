import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign(
        {userId},
        process.env.JWT_SECRET_KEY,{
            expiresIn:"15d"
        }
    )

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60  * 60, // 15 days in milliseconds
        httpOnly: true, // prevent xss attacks
        sameSite:"strict",// CSRF attackes cross-site request forgery attack
        secure: process.env.NODE_ENV !==  "development" // only send over https
    })
}


export default generateTokenAndSetCookie;