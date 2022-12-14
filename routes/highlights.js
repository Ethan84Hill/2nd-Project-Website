var express = require('express');
var router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');
const isLoggedIn = require('../middleware/isLoggedIn')
const isLoggedOut = require('../middleware/isLoggedOut')
const axios = require("axios");


router.get('/highlights', (req, res, next) => {
    res.render('highlights.hbs')
})


module.exports = router;