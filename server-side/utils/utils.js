const fast2sms = require("fast-two-sms");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

exports.generateOTP = (otp_length) => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.fast2sms = async ({ message, contactNumber }, next) => {
  try {
    // const res = await fast2sms.sendMessage({
    //   authorization: 'Ng7mfIWi1ZPhMByQYokzE6U0dTtKpvG4Rc3LqCnD5uXeFxJSA8gcq34M0sy8Hj6tAVSREDZGOlPpxUrB',
    //   message,
    //   numbers: [contactNumber],
    // });
    const res = await fast2sms.sendMessage({
        authorization: 'Ng7mfIWi1ZPhMByQYokzE6U0dTtKpvG4Rc3LqCnD5uXeFxJSA8gcq34M0sy8Hj6tAVSREDZGOlPpxUrB',
        message: 'otp sent',
        numbers: ['6302414774'],
      });
    console.log('checking response of sms api',res);
  } catch (error) {
    next(error);
  }
};



exports.createJwtToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "12h" });
  return token;
};

exports.verifyJwtToken = (token, next) => {
  try {
    const { userId } = jwt.verify(token, JWT_SECRET);
    return userId;
  } catch (err) {
    next(err);
  }
};


