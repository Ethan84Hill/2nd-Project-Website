var express = require('express');
var router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');
const isLoggedIn = require('../middleware/isLoggedIn')
const isLoggedOut = require('../middleware/isLoggedOut')
const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://sports-data3.p.rapidapi.com/ufc',
    headers: {
      'X-RapidAPI-Key': '07430a7a21mshc4688a3bcb7b790p19a96bjsn18ff70964c39',
      'X-RapidAPI-Host': 'sports-data3.p.rapidapi.com'
    }
  };


router.get('/schedule', (req, res, next) => {
    axios.request(options)
    .then((response) => {
        console.log(response.data);
        res.render('schedule.hbs', {foundSchedule: response.data})
    })
    .catch((err) => {
        console.error(err);
    });
})



module.exports = router;