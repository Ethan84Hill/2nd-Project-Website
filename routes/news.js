var express = require('express');
var router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');
const isLoggedIn = require('../middleware/isLoggedIn')
const isLoggedOut = require('../middleware/isLoggedOut')
const axios = require("axios");


router.get('/news', (req, res, next) => {
    res.render('news.hbs')
})


module.exports = router;