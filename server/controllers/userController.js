const User = require('../models/userModel');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  console.log('req inside usercontroller.getAllUserrs', req)
  User.find({}, (err, users) => {
    if (err) return next('Error in userController.getAllUsers' + JSON.stringify(err));
    res.locals.users = users //is this storing tp the database
    return next()
  });
}


userController.createUser = (req, res, next) => {
  // console.log('req inside usercontroller.createuser', req)
  User.create({username : req.body.username, password : req.body.password, favorites : []}, (err, users) => { //favorites may not be needed here
    if (err) {
      console.log("error in userController create user")
      // res.render('../..Component/signUpComponent', {error: "error in userController.createUser"})
      return next(); 
    } else {
      res.locals.id = users._id
      console.log("res.locals.id in usercontroller.createuser", res.locals.id)
    }
    return next()
  });
}

userController.verifyUser = (req, res, next) => {
  console.log('req inside usercontroller.verifyuser', req.body)
  User.findOne({username : req.body.username, password : req.body.password}, (err, result) => {
    console.log('result in verify user', result)
    if (!result) {
      res.locals.login = 'failed';
      //res.redirect('/api/signup')
      // console.log('Req inside verifyUser', req)
      return next()
      // return res.render('./..component/signUpComponent', {error: "error in userController.createUser"}) ///add component/sign up page
    } else {
      res.locals.id = result._id
      console.log("res.locals.id in userController.verifyUser and we are logged in!", res.locals.id)
      return next()
    }
  })
}

module.exports = userController; 