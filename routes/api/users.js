const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
//Product Model
const User = require('../../Models/User')
const config = require('config')
const jwt = require('jsonwebtoken')

router.get('/',(req,res)=>{
    User.find()
        .then(users=>res.json(users))
})
module.exports=router;