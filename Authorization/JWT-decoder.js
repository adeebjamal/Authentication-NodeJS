const jwt = require("jsonwebtoken");

// Global variables
TOKEN_SECRET = "long-secret-string-with-alphanumeric-characters";

const verifyToken = (req,res,next)=> {
    const receivedToken = req.cookies.JWT_token;
    if(!receivedToken) {
        return res.status(401).json({message: "Unauthorized"});
    }
    jwt.verify(receivedToken, TOKEN_SECRET, (err,decoded)=> {
        if(err) {
            return res.status(401).json({message: "Unauthorized"});
        }
        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;