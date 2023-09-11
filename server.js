const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

// Middlewares
app.use(express.urlencoded({
    extended: true
}));

app.set("view engine","ejs");

// Mongoose
mongoose.set("strictQuery",false);
mongoose.connect("mongodb://127.0.0.1:27017/Passport-App");

// Routes
app.use("/",require("./Routes/index"));
app.use("/users",require("./Routes/user"));

app.listen(3000, ()=> {
    console.log("Server is running at port 3000. Go to http://localhost:3000");
});