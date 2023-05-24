const Usercab = require('../models/user.model');
const { generateOTP } = require("../utils/generateOTP");
const jwt = require('jsonwebtoken');
const {JWT_KEY, JWT_ALGRIOTHM} = require('../config.js');

exports.Signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const  phone = "+91" +req.body.phone;
  if(!phone && !name && !email){
      return res.status(422).json({error: "Plz filled the field properly"});
  }
  else{
      const otp = generateOTP();
      
      Usercab.findOne({phone:phone})
          .then((userExist)=>{
              if(userExist){
                  return res.status(200).json({message: "User already exist", otp : null});
              }
              else {
              const User = new Usercab({name:name,email:email,phone:phone,phoneOtp:otp});
              User.save().then(()=>{
                  return res.status(200).json({message:"New user added",otp : otp});
              }).catch((err)=> {
                return res.status(500).json({error: "not added user"});
              })
          }
          }).catch((err)=>{console.error(err);})
    }
};

exports.Login = async (req, res) => {
    const  phone = "+91" +req.body.phone;
    if(!phone){
        return res.status(422).json({error: "Plz filled the field properly"});
    }
    else{
        const otp = generateOTP(6);
        Usercab.findOne({phone:phone})
            .then((userExist)=>{
                if(userExist){
                  Usercab.findByIdAndUpdate(userExist._id, { phoneOtp: otp })
                     .then(()=>{
                         return res.status(200).json({message: "Welcome back!",otp:otp});
                     }).catch((err)=> {
                         return res.status(500).json({error: err});
                    })
                }
                else {
                return res.status(200).json({message: "You are not valid user. Plz SignUp.."});
            }
            }).catch((err)=>{console.error(err);})
      }
};


exports.verifyOTP = async (req, res) => {

    const phoneNumber = "+91" +req.body.phone;
    const OTP = req.body.otp;
    if(!phoneNumber && !OTP){
      return res.status(422).json({error: "Plz filled the field properly"});
  }
    try {
      // Find the user in the database
      const User = await Usercab.findOne({phone:phoneNumber})
      // Check if the OTP is correct
      
      if (User.phoneOtp == OTP) {
        // Generate JWT token
        const payload = {
            userId: phoneNumber
          }; 
        const authToken = jwt.sign(payload, JWT_KEY, { algorithm: JWT_ALGRIOTHM }, {expiresIn: '1h'});
        // res.setHeader('Authorization', authToken);             
        res.status(200).json({ "user" : User,"token": authToken });
      } else {
        res.status(401).json({ message: 'Invalid OTP' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to verify OTP' });
    }
};
