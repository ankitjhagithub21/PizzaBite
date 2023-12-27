const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const isExist = await User.findOne({ email })
    if (isExist) {
      res.status(400).json({
        success: false,
        message: "Email already exist."
      })
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      res.status(201).json({ success: true, message: 'Registration Successful!' });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }

}


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
   
    const user = await User.findOne({ email });

    if (user) {
      
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
       
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        
        res.cookie("token", token, {
          httpOnly: true,
          expiresIn: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
           
          
        });

        
        res.status(200).json({
          success: true,
          message: "Login Successful.",
          user
        });
      } else {
        
        res.status(400).json({
          success: false,
          message: "Wrong Password!"
        });
      }
    } else {
      // If the user with the given email doesn't exist, respond with an error message
      res.status(400).json({
        success: false,
        message: "User not found."
      });
    }
  } catch (error) {
    // If an error occurs during the process, respond with a server error message
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const logout = async (req, res) => {
  try {
    
    res.clearCookie('token'); 
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });

  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



const checkUser = async (req, res) => {
  const id = req.id;

  
  if (!id) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }

  try {
    
    const user = await User.findById(id).select('-password');
    
   
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found. Please log in!'
      });
    }

    
    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


module.exports = { register, login, logout, checkUser }