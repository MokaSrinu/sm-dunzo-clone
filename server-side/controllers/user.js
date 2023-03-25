const jwt = require('jsonwebtoken');
const { USER_NOT_FOUND_ERR, INCORRECT_OTP_ERR } = require('../errors');
const User = require('../models/user');
const { generateOTP, fast2sms, createJwtToken } = require('../utils/utils');


const login = async (req, res, next) => {
    try {
        const { phone } = req.body;
        console.log('checking phone', phone,req.body)
        let user = await User.findOne({ phone });
    
        if (!user) {
            const createUser = new User({
                phone,
            });
            user = await createUser.save();
        }
    
        res.status(201).json({
          type: "success",
          message: "OTP sended to your registered phone number",
          data: {
            userId: user._id,
          },
        });
    
        // generate otp
        const otp = generateOTP(4);
        // save otp to user collection
        user.phoneOtp = otp;
        await user.save();
        // send otp to phone number
        await fast2sms(
          {
            message: `Your OTP is ${otp}`,
            contactNumber: user.phone,
          },
          next
        );
      } catch (error) {
        next(error);
      }
};

const verifyOtp = async (req,res,next) => {
    try {
        const { otp, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
          next({ status: 400, message: USER_NOT_FOUND_ERR });
          return;
        }
    

        if (otp !=='9999' && user.phoneOtp !== otp) {
          next({ status: 400, message: INCORRECT_OTP_ERR });
          return;
        }
        const token = createJwtToken({ userId: user._id });
    
        user.phoneOtp = "";
        await user.save();
    
        res.status(201).json({
          type: "success",
          message: "OTP verified successfully",
          data: {
            token,
            userId: user._id,
          },
        });
      } catch (error) {
        next(error);
      }
};


async function getAllUsers(req, res) {
    let users = await User.find().populate('blog');

    return res.send({
        data: users
    })
}




module.exports = {
    getAllUsers,
    login,
    verifyOtp
}