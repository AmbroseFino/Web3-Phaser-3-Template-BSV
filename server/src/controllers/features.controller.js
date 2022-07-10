const { User } = require("../models/user.model");
const {HandCashConnect} = require('@handcash/handcash-connect');
require('dotenv').config()
const handCashConnect = new HandCashConnect({ 
  appId: process.env.appId, 
  appSecret: process.env.appSecret,
});

// sends a transaction on behalf of the user
module.exports.sendTransaction = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  // define parameters 
  const handle = 'Bot account here'
  const amount = 5
  const note = 'Note'
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

// sends a transaction on behalf of the "auth" from .env file
module.exports.sendBot = async (req, res, next) => {

  // fetch the authenticated user and their profile + handle
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const { publicProfile } = await account.profile.getCurrentProfile();


// fetch the bot profile
  const bot = await User.findById(process.env.auth);
  const botAccount = await handCashConnect.getAccountFromAuthToken(bot.connectAuthToken);

  // define parameters 
  const handle = `${publicProfile.handle}`
  const amount = 5
  const note = 'Note'
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
  const payment = await botAccount.wallet.pay(paymentParameters).catch(err => {console.log(err)})
  res.send(payment)
  console.log(payment)

}

// sends a multisend transaction on behalf of the user
module.exports.sendMultisendTransaction = async (req, res, next) => {
  console.log("here")
  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  // define parameters 
  const handles = parseHandleArray(req.body.handles)
  const amount = parseInt(req.body.amount)
  const note = req.body.note
  const currencyCode = 'DUR'

  const payments = handles.map(handle => {return {
    destination: handle,
    currencyCode: currencyCode,
    sendAmount: amount
  }})

  console.log(payments)
  // configure the payment
  const paymentParameters = {
    description: note,
    appAction: "test-multi-send",
    payments: payments
  };

  // make the payment
  const payment = await account.wallet.pay(paymentParameters)
  console.log(payment)

  // display public profile with the recent transaction
  res.redirect("/auth/get-transaction?txid=" + payment.transactionId)
}

// sends a transaction with data on behalf of the user
module.exports.sendDataTransaction = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const { publicProfile } = await account.profile.getCurrentProfile()

  // define parameters 
  const handle = publicProfile.handle
  const amount = 500
  const note = 'Posting data to the chain'
  const data = ConvertStringToHex(req.body.text)
  console.log(data)
  const currencyCode = 'SAT'

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

    //attachment: { format: 'base64', value: 'ABEiM0RVZneImQCqu8zd7v8=' },
    attachment: { format: 'hex', value: data },
  };

  // make the payment
  const payment = await account.wallet.pay(paymentParameters).catch(err => console.log(err))

  // display public profile with the recent transaction
  res.redirect("/auth/get-transaction?txid=" + payment.transactionId)
}

// get specific transaction
module.exports.getTransaction = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);
  const paymentResult = await account.wallet.getPayment(req.query.txid)
 
  paymentResult.attachments = paymentResult.attachments.map(attachment => {
    if(attachment.format == 'hex') 
      attachment.hexValue = ConvertHexToString(attachment.value)
    return attachment
  })
  
  console.log(paymentResult)
  
  // display public profile with the recent transaction
  res.render('transaction', {
    tx: paymentResult,
    path: '/transaction'
  })
}

// encrypt a post with data
module.exports.postEncrypt = async (req, res, next) => {

  // fetch the authenticated user and their profile
  const user = await User.findById(req.user._id);
  const account = await handCashConnect.getAccountFromAuthToken(user.connectAuthToken);

  const { publicKey, privateKey } = await account.profile.getEncryptionKeypair();
  console.log(publicKey);

  const ecPrivateKey = PrivateKey.fromWIF(privateKey);
  const ecPublicKey = PublicKey.fromString(publicKey);
  const plainText = req.body.encryptText;

  const encryptedBuffer = ECIES().publicKey(ecPublicKey).encrypt(plainText);
  console.log(encryptedBuffer.toString('base64'));

  const decryptedBuffer = ECIES().privateKey(ecPrivateKey).decrypt(encryptedBuffer);
  console.log(decryptedBuffer.toString('utf8'));

  console.assert(decryptedBuffer.toString('utf8') == plainText);

  // display public profile with the recent transaction
  res.render('encryption', {
    encryptionDetails: {
      ecPrivateKey: ecPrivateKey,
      ecPublicKey: ecPublicKey,
      plainText: plainText,
      encryptedBuffer: encryptedBuffer.toString('hex'),
      decryptedBuffer: decryptedBuffer
    },
    path: '/encryption'
  })
}
