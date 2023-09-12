const jwt = require("jsonwebtoken");

// Global variables
TOKEN_SECRET = "long-secret-string-with-alphanumeric-characters";

// Model
const USER = require("../Models/user");

const getLoginMiddleware = async(req,res,next)=> {
    try {
        const token = req.cookies.JWT_token;
        if(token) {
            const decodedJWT = jwt.verify(token,TOKEN_SECRET);
            console.log(decodedJWT.email);
            const tempUser = await USER.findOne({email: decodedJWT.email});
            if(tempUser) {
                return res.render("dashboard",{
                    NAME: tempUser.name
                });
            }
        }
    }
    catch(error) {
        console.log(error);
    }
    next();
}

module.exports = getLoginMiddleware;