const express = require('express');
const { login, verifyOtp } = require('../controllers/user');
const userRouter = express.Router();

userRouter.post('/api/auth/login', login);
userRouter.post('/api/auth/verify-otp', verifyOtp);

module.exports = userRouter;
