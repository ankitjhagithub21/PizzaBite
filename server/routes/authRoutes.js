const express = require('express')
const router = express.Router()
const {register,login, logout, checkUser} = require("../controllers/authController")
const verifyToken = require('../middlewares/verifyToken')

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/checkUser",verifyToken,checkUser)
module.exports = router