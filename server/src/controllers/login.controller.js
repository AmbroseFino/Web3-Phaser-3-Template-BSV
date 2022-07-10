const { User } = require("../models/user.model");
const {HandCashConnect} = require('@handcash/handcash-connect');
require('dotenv').config()
const handCashConnect = new HandCashConnect({ 
   appId: process.env.appId, 
   appSecret: process.env.appSecret,
});


// login page
module.exports.getLoginLink = async (req, res, next) => {

  // fetch authentication url using the SDK
  const redirectUrl = await handCashConnect.getRedirectionUrl();
  
  // return page with a login button
  res.render('index', {
    redirectUrl: redirectUrl,
    docTitle: 'Login',
    path: '/'
  })
};

// authenticate
module.exports.getAuthenticate = async (req, res, next) => {

  // create a user upon a new login
  const authToken = req.query.authToken;

  // get user profile, and save alias to the user 
  const account = await handCashConnect.getAccountFromAuthToken(authToken);
  const { publicProfile } = await account.profile.getCurrentProfile()
  const handcashId = publicProfile.id


  // check if the user exists, if not create a new one
  let user = await User.findOne({handcashId: handcashId})
  if(!user){
    user = new User();
    user.handcashId = handcashId
  }

  // update authToken
  user.connectAuthToken = authToken
  
  // save user
  await user.save();


  // generating a jwt
  req.session.accessToken = user.generateAuthToken();
  res.redirect('/auth/game'); 
  
};

