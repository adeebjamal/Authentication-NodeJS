# Authentication-NodeJS

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Structure](#2-project-structure)
3. [Dependencies](#3-dependencies)
4. [Setting Up](#4-setting-up)
5. [Routes](#5-routes)
6. [Middleware](#6-middleware)
7. [Models](#7-models)
8. [Authorization](#8-authorization)
9. [Conclusion](#9-conclusion)

## 1. Introduction

This Node.js Authentication project provides a simple web application for user registration, login, and logout using Express.js, Mongoose for database interaction, and JWT (JSON Web Tokens) for authentication. It uses EJS as a templating engine for rendering views.

## 2. Project Structure

The project structure is organized as follows:

- **Root Directory (/)**: Contains the main server.js file and configuration.
- **Routes Directory (/Routes)**: Contains route handling files:
  - `index.js`: Handles the root route.
  - `user.js`: Handles user-related routes including registration, login, logout, and a protected route.
- **Models Directory (/Models)**: Contains Mongoose schema definitions:
  - `user.js`: Defines the User schema.
- **Authorization Directory (/Authorization)**: Contains authorization-related files:
  - `JWT-decoder.js`: Defines the JWT decoding middleware.
  - `Login-middleware.js`: Defines the login middleware.
- **Views Directory (/views)**: Contains EJS templates for rendering pages:
  - `dashboard.ejs`: Dashboard template.
  - `homepage.ejs`: Homepage template.
  - `login.ejs`: Login template.
  - `register.ejs`: Registration template.

## 3. Dependencies

This project uses the following dependencies:

- `express`: Web application framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `ejs`: Templating engine for rendering views.
- `cookie-parser`: Middleware for handling cookies.
- `jsonwebtoken`: Library for creating and verifying JWTs.
- `md5`: Library for hashing passwords.

## 4. Setting Up

- Clone the project from the GitHub repository using the following command:
`git clone https://github.com/adeebjamal/Authentication-NodeJS.git`
- Install dependencies: Open the terminal in the root of the project's directory and run the following command:
`npm install`
- Start the server: Run the following command in the terminal:
`nodemon server.js`
**NOTE**: Make sure `MongoDB` is running and `Nodemon` is installed on your machine.

## 5. Routes

- **GET `/`**: Renders the homepage.
- **GET `/users/register`**: Renders the registration form.
- **POST `/users/register`**: Handles user registration.
- **GET `/users/login`**: Renders the login form.
- **POST `/users/login`**: Handles user login, sets a JWT cookie, and renders the dashboard on successful login.
- **GET `/users/logout`**: Logs out the user by clearing the JWT cookie and renders the homepage.
- **GET `/users/protected`**: A protected route that requires JWT authentication. Returns user information in JSON format when authenticated.

## 6. Middleware

- `getLoginMiddleware`: A middleware that checks for a JWT token in the user's cookies. If a valid token is found, it renders the dashboard directly. It is applied to the `/users/login` route.
- `verifyToken`: This is a middleware in `/users/protected` route which verifies JWT tokens and adds the decoded user data to the request object.

## 7. Models

- **User Model**: Defined in `/Models/user.js`, represents the User schema with fields name, email, and password.

## 8. Authorization

- `JWT-decoder`: Middleware in `/Authorization/JWT-decoder.js` that verifies JWT tokens and adds the decoded user data to the request object.
- `Login-middleware`: Middleware in `/Authorization/Login-middleware.js` that checks for a JWT token and renders the dashboard if the token is valid.

## 9. Conclusion

This Node.js Authentication project provides a basic foundation for user registration, login, and authentication using JWT tokens. You can extend and customize it further to suit your specific needs.
