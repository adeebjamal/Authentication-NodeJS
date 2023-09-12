# Authentication-NodeJS
<br>
## Table of Contents
<br>
#### 1. Introduction
#### 2. Project Structure
#### 3. Dependencies
#### 4. Setting Up
#### 5. Routes
#### 6. Middleware
#### 7. Models
#### 8. Authorization
#### 9. Conclusion
<br><br>
### 1. Introduction
<p>This Node.js Authentication project provides a simple web application for user registration, login, and logout using Express.js, Mongoose for database interaction, and JWT (JSON Web Tokens) for authentication. It uses EJS as a templating engine for rendering views.</p>
<br>
### 2. Project Structure
<p>The project structure is organized as follows:</p>
* `Root Directory (/)`: Contains the main server.js file and configuration.
* `Routes Directory (/Routes)`: Contains route handling files:
<ul>
    <li>`index.js`: Handles the root route.</li>
    <li>`user.js`: Handles user-related routes including registration, login, logout, and a protected route.</li>
</ul>
* `Models Directory (/Models)`: Contains Mongoose schema definitions:
<ul>
    <li>`user.js`: Defines the User schema.</li>
</ul>
* `Authorization Directory (/Authorization)`: Contains authorization-related files:
<ul>
    <li>`JWT-decoder.js`: Defines the JWT decoding middleware.</li>
    <li>`Login-middleware.js`: Defines the login middleware.</li>
</ul>
* Views Directory (/views): Contains EJS templates for rendering pages:
<ul>
    <li>`dashboard.ejs`: Dashboard template.</li>
    <li>`homepage.ejs`: Homepage template.</li>
    <li>`login.ejs`: Login template.</li>
    <li>`register.ejs`: Registration template.</li>
</ul>
<br>
### 3. Dependencies
<p>This project uses the following dependencies:</p>
* `express`: Web application framework for Node.js.
* `mongoose`: MongoDB object modeling tool.
* `ejs`: Templating engine for rendering views.
* `cookie-parser`: Middleware for handling cookies.
* `jsonwebtoken`: Library for creating and verifying JWTs.
* `md5`: Library for hashing passwords.
<br>
### 4. Setting Up
* Clone the project from the GitHub repository using following command:
`git clone https://github.com/adeebjamal/Authentication-NodeJS.git`
* Install dependencies: Open terminal in the root of the project's directory and run following command
`npm install`
* Start the server: Run following command in the terminal
`nodemon server.js`
* NOTE: Make sure `MongoDB` is running and `Nodemon` is installed on your machine.
<br>
### 5. Routes
* GET `/`: Renders the homepage.
* GET `/users/register`: Renders the registration form.
* POST `/users/register`: Handles user registration.
* GET `/users/login`: Renders the login form.
* POST `/users/login`: Handles user login, sets a JWT cookie, and renders the dashboard on successful login.
* GET `/users/logout`: Logs out the user by clearing the JWT cookie and renders the homepage.
* GET `/users/protected`: A protected route that requires JWT authentication. Returns user information in JSON format when authenticated.
<br>
### 6. Middleware
* `getLoginMiddleware`: A middleware that checks for a JWT token in the user's cookies. If a valid token is found, it renders the dashboard directly. It is applied to the /users/login route.
* `verifyToken`: This is a middleware in `/users/protected` route which verifies JWT tokens and adds the decoded user data to the request object.
<br>
### 7. Models
* `User Model`: Defined in `/Models/user.js`, represents the User schema with fields name, email, and password.
<br>
### 8. Authorization
* `JWT-decoder`: Middleware in `/Authorization/JWT-decoder.js` that verifies JWT tokens and adds the decoded user data to the request object.
* `Login-middleware`: Middleware in `/Authorization/Login-middleware.js` that checks for a JWT token and renders the dashboard if the token is valid.
<br>
### 9. Conclusion
<p>This Node.js Authentication project provides a basic foundation for user registration, login, and authentication using JWT tokens. You can extend and customize it further to suit your specific needs.</p>