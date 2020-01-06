const express = require('express');
const shelterController = require('../controllers/shelterController');
const userController = require('../controllers/userController')
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const router = express.Router();

router.get('/home', shelterController.getShelters, (req, res) => { //add sessionsController.setSession
  res.status(200).json(res.locals.shelters);
});


router.get("/favs", shelterController.getFavs, shelterController.addFavs,  (req, res, next) => { 
  res.status(200).json({
    favorites : res.locals.favs
  })
});

router.post("/favs", shelterController.getFavs, shelterController.addFavs, (req, res, next) => {
  res.status(200).json({
    favorites : res.locals.favs
  })
});


//These are login / signup routes
//signup
router.get('/signup', (req, res) => {
  res.status(200).render('../../Component/signUpComponent', {error:null})
})


router.post('/signup', userController.createUser, (req, res) => {  //need to define sessionsController.startSession, cookieController.setSSIDCookie and add here
   res.redirect('/api/home') //should redirect to the home page where users can search
}) 

//login
router.post('/', userController.verifyUser, (req, res) => {  //need to define sessionsController.startSession, cookieController.setSSIDCookie and add here
  const { login } = res.locals;
  if (login === 'failed') {
    res.redirect('/api/signup');
  } else {
    res.redirect('/api/home');  //should redirect to the home page where users can search
  }
 
})




module.exports = router;