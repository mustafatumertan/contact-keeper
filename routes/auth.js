const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');

const config = require("config")
const auth = require("../middleware/auth")
const User = require("../models/User");

// @route   GET  api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
   
   try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
   } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
   }


});

// @route   POST  api/auth
// @desc    Auth user and get token
// @access  Public
router.post("/", [
   body("email", "Please include a valid email").isEmail(),
   body("password", "Please enter a password with 6 or more characters").exists()
],
   async (req, res) => {
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() }); }
      
      const { email, password } = req.body;
      
      try {

         // find a user with matching email.
         let user = await User.findOne({ email });
         if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
         }
         
         // if a user with a matching email is found, then compare the stored hash password with the unhashed input password.
         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
         }

         // Prepare Json Web Token and send it back with the payload
         const payload = { user: { id: user.id } }
         jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 360000
         },
            (err, token) => {
               if (err) throw err;
               res.json({ token });
            });

      } catch (err) {
         console.error(err.message);
         res.status(500).send("Server Error");
      }
});

module.exports = router;