var express = require('express');
var router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');
const Fighter = require('../models/Favorites.model')
const isLoggedIn = require('../middleware/isLoggedIn')
const isLoggedOut = require('../middleware/isLoggedOut')
const axios = require("axios");


router.get('/list-favorites', (req, res, next) => {
    Fighter.find({owner: req.session.user._id})
    .then((foundfighters) => {
    res.render('list-favorites.hbs', {foundfighters})
  })
    .catch((err) => {
    console.log(err)
  })
})


router.get('/create-favorites', (req, res, next) => {
    res.render('create-favorites.hbs')
})

router.post('/create-favorites', (req, res, next) => {
    console.log(req.body)
    Fighter.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        owner: req.session.user
    })
        .then(addedFighter => {
            console.log('I ADDED A FIGHTER', addedFighter);
            res.redirect('/list-favorites')
        })
        .catch(err => {
            res.send(err)
    })
  })


  router.post('/fighter/:id/delete', (req, res, next) => {
    Fighter.findById(req.params.id)
      .then((foundFighter) => {
          foundFighter.delete()
          res.redirect('/list-favorites')
      })
      .catch((err) => {
        console.log(err)
      })
  })
  
  router.get('/fighter/:id/edit-favorites', (req, res, next) => {
    Fighter.findById(req.params.id)
      .then((foundFighter) => {
        res.render('edit-favorites', foundFighter)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  
  router.post('/fighter/:id/edit-favorites', (req, res, next) => {
    Fighter.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    }, {new: true})
    .then((updatedFighter) => {
      console.log("Updated Fighter:", updatedFighter)
      res.redirect('/list-favorites')
    })
    .catch((err) => {
      console.log(err)
    })
  })


module.exports = router;