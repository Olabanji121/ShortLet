const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  };


  const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
  
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000
      ),
  
      httpOnly: true
    };   

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.cookie('jwt', token, cookieOptions);
    // remove password from output
    user.password = undefined;
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
        user
        }
    });
 
}

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;

    try {
      const newUser = await User.create({
        name,
        email,
        password
        
      });

    
      createSendToken(newUser, 201, res);
    } catch (err) {
      if(err.message.startsWith('E11000')){
        res.status(400).json({  msg: "User already exists"  });
      }else{
        res.status(500).json({
          status: 'failed',
          stack: err.stack,
          msg: err.message 
        });
      
      }
        
      
    }
  };
  

  exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // 1) if email and password exist
  
      if (!email || !password) {
        return res.status(400).json({ msg: 'Please input password and email' });
      }
  
      // 2) check if user exist  and password is correct
  
      const user = await User.findOne({ email }).select('+password');
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ msg: 'incorrect email or password' });
      }
      createSendToken(user, 200, res);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        status: 'error',
        msg: err.message,
        stack: err.stack
      });
    }
  };
  


  exports.protect = async (req, res, next) => {
    // 1) Get the token  and check if it there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    } else {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }
  
    // 2) verify  the token
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  
    // 3) check if user exists
      const currentUser = await User.findById(decoded.id);
  
      if (!currentUser) {
        return res
          .status(401)
          .json({ msg: 'The User with this token no longer exists.' });
      }
  
      // 4) check if user changed passward after token was issued
  
      if (currentUser.changededPasswordAfter(decoded.iat)) {
        return res.status(401).json({
          msg: 'The user recently changed paswword. Pleass login again'
        });
      }
  
      req.user = currentUser;
    } catch (err) {
      res.status(401).json({ msg: ` Token Error (${err.message}) ` });
    }
  
    next(); 
  };