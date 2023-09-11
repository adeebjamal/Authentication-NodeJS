const express = require("express");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const router = express.Router();

// importing models
const USER = require("../Models/user");

// importing functions
const verifyToken = require("../Authorization/JWT-decoder");

// Global variables
TOKEN_SECRET = "long-secret-string-with-alphanumeric-characters";

// ---------- GET routes ----------
router.get("/register", async(req,res)=> {
    res.render("register",{
        message: ""
    });
});

router.get("/login", async(req,res)=> {
    res.render("login",{
        message: ""
    });
});

router.get("/logout", async(req,res)=> {
    // This destroys the saved JWT_token
    res.clearCookie("JWT_token");
    res.render("homepage",{
        message: "Logout successful."
    });
});

router.get("/protected", verifyToken, async(req,res)=> {
    result = {
        email: req.user.email,
        status: "Logged in"
    }
    res.json(result);
});

// ---------- POST routes ----------
router.post("/register", async(req,res)=> {
    try {
        console.log(req.body);
        if(!req.body.newName || !req.body.newUsername || !req.body.newPassword || !req.body.confirmPassword) {
            res.render("register", {
                message: "Please fill all the required fields."
            });
            return;
        }
        if(req.body.newPassword !== req.body.confirmPassword) {
            res.render("register",{
                message: "Passwords doesn't match."
            });
            return;
        }
        if(req.body.newPassword.length < 6) {
            res.render("register",{
                message: "Password is too weak."
            });
            return;
        }
        const foundUser = await USER.findOne({email: req.body.newUsername});
        if(foundUser) {
            res.render("register",{
                message: "User with entered email already exists."
            });
            return;
        }
        const newUser = new USER({
            name: req.body.newName,
            email: req.body.newUsername,
            password: md5(req.body.newPassword)
        });
        await newUser.save();
        console.log(newUser);
        res.render("login",{
            message: "Registration successful. You can login now."
        });
    }
    catch(error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/login", async(req,res)=> {
    try {
        console.log(req.body);
        if(!req.body.username || !req.body.userPassword) {
            res.render("login", {
                message: "Please fill all the required fields."
            });
            return;
        }
        const tempUser = await USER.findOne({email: req.body.username});
        if(!tempUser) {
            res.render("login", {
                message: "User with entered email doesn't exists."
            });
            return;
        }
        if(tempUser.password !== md5(req.body.userPassword)) {
            res.render("login", {
                message: "Incorrect password."
            });
            return;
        }
        payload = {email: req.body.username};
        const jwtToken = jwt.sign(payload,TOKEN_SECRET);
        res.cookie("JWT_token", jwtToken);      // Sending the JWT to the client as a cookie.
        res.render("dashboard", {
            NAME: tempUser.name
        });
    }
    catch(error) {
        console.log(error);
        res.send(error);
    }
});

module.exports = router;