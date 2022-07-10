const { User } = require("../models/user.model");
const {HandCashConnect} = require('@handcash/handcash-connect');
require('dotenv').config()
const handCashConnect = new HandCashConnect({ 
  appId: process.env.appId, 
  appSecret: process.env.appSecret,
});

// sends a transaction on behalf of the user
module.exports.sendTransaction5 = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  // define parameters 
  const handle = 'runonbsv'
  const amount = 5
  const note = 'Play Game'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };

// make the payment
const payment = await account.wallet.pay(paymentParameters).catch(err => {console.log(err)})
res.send(payment)
console.log(payment)
}

module.exports.sendTransaction25 = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  // define parameters 
  const handle = 'runonbsv'
  const amount = 25
  const note = 'Play Game'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };
  
// make the payment
const payment = await account.wallet.pay(paymentParameters).catch(err => {console.log(err)})
res.send(payment)
console.log(payment)


}

module.exports.sendTransaction50 = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  // define parameters 
  const handle = 'runonbsv'
  const amount = 50
  const note = 'Play Game'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };

// make the payment
const payment = await account.wallet.pay(paymentParameters).catch(err => {console.log(err)})
res.send(payment)
console.log(payment)

}

module.exports.sendTransaction100 = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  // define parameters 
  const handle = 'runonbsv'
  const amount = 100
  const note = 'Play Game'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };
  
// make the payment
const payment = await account.wallet.pay(paymentParameters).catch(err => {console.log(err)})
res.send(payment)
console.log(payment)

}

// sends a transaction on behalf of the ROB
module.exports.sendWinner5 = async (req, res, next) => {

  // fetch the authenticated user and their profile + handle
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const { publicProfile } = await account.profile.getCurrentProfile();


// fetch the bot profile
  const rob = await User.findById(process.env.auth);
  const runonbsv = await handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

  // define parameters 
  const handle = `${publicProfile.handle}`
  const amount = 20
  const note = 'Run On BSV Winner!'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };

  // make the payment
  const payment = await runonbsv.wallet.pay(paymentParameters).catch(err => {console.log(err)})
  res.send(payment)
  console.log(payment)

}

module.exports.sendWinner25 = async (req, res, next) => {

  // fetch the authenticated user and their profile + handle
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const { publicProfile } = await account.profile.getCurrentProfile();


// fetch the bot profile
  const rob = await User.findById(process.env.auth);
  const runonbsv = await handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

  // define parameters 
  const handle = `${publicProfile.handle}`
  const amount = 100
  const note = 'Run On BSV Winner!'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };

  // make the payment
  const payment = await runonbsv.wallet.pay(paymentParameters).catch(err => {console.log(err)})
  res.send(payment)
  console.log(payment)

}

module.exports.sendWinner50 = async (req, res, next) => {

  // fetch the authenticated user and their profile + handle
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const { publicProfile } = await account.profile.getCurrentProfile();


// fetch the bot profile
  const rob = await User.findById(process.env.auth);
  const runonbsv = await handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

  // define parameters 
  const handle = `${publicProfile.handle}`
  const amount = 200
  const note = 'Run On BSV Winner!'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };

  // make the payment
  const payment = await runonbsv.wallet.pay(paymentParameters).catch(err => {console.log(err)})
  res.send(payment)
  console.log(payment)

}

module.exports.sendWinner100 = async (req, res, next) => {

  // fetch the authenticated user and their profile + handle
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const { publicProfile } = await account.profile.getCurrentProfile();


// fetch the bot profile
  const rob = await User.findById(process.env.auth);
  const runonbsv = await handCashConnect.getAccountFromAuthToken(rob.connectAuthToken);

  // define parameters 
  const handle = `${publicProfile.handle}`
  const amount = 400
  const note = 'Run On BSV Winner!'
  const currencyCode = 'DUR'

  // construct the payment
  const paymentParameters = {
    description: note,
    payments:
      [
        {
          destination: handle,
          currencyCode: currencyCode,
          sendAmount: amount,
        },
      ],
  };

  // make the payment
  const payment = await runonbsv.wallet.pay(paymentParameters).catch(err => {console.log(err)})
  res.send(payment)
  console.log(payment)

}

