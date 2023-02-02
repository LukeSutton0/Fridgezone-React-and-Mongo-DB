const express = require('express')
const { loginUser,signUpUser} = require('../controllers/userController')
const router = express.Router()

//login route
router.post('/login',loginUser)


//signup route
router.post('/signUp',signUpUser)

module.exports = router