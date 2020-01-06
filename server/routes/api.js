const express = require('express');
const shelterController = require('../controllers/shelterController');
<<<<<<< HEAD
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
  // res.sendStatus(200)
  res.status(200).render('../../Component/signUpComponent', (err) => {
    return res.sendStatus
  })
})


router.post('/signup', userController.createUser, (req, res) => {  //need to define sessionsController.startSession, cookieController.setSSIDCookie and add here
  return res.redirect('/api/home') //should redirect to the home page where users can search
}) 

//login
router.post('/', userController.verifyUser, (req, res) => {  //need to define sessionsController.startSession, cookieController.setSSIDCookie and add here
  const { login } = res.locals;
  if (login === 'failed') {
    console.log('In Login Falied')
    console.log('Header', req.headers)
    return res.redirect('/api/signup');
  } else {
   return res.redirect('/api/home');  //should redirect to the home page where users can search
  }
 
})




module.exports = router;
=======

const router = express.Router();

router.get('/', shelterController.getShelters, (req, res) => {
  res.status(200).json(res.locals.shelters);
});

module.exports = router;
>>>>>>> 45603716044f1eacc59a4f839c71c30522f82a5c
