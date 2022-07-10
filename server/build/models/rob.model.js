"use strict";

var config = require('config');

var jwt = require('jsonwebtoken');

var mongoose = require('mongoose'); //simple schema


var UserSchema = new mongoose.Schema({
  handcashId: {
    type: String
  },
  connectAuthToken: {
    type: String
  },
  xauth: {
    type: String
  }
}); //custom method to generate authToken 

UserSchema.methods.generateAuthToken = function () {
  var token = jwt.sign({
    _id: this._id
  }, config.get('myprivatekey'));
  return token;
};

var Rob = mongoose.model('Rob', UserSchema);
exports.Rob = Rob;
//# sourceMappingURL=rob.model.js.map