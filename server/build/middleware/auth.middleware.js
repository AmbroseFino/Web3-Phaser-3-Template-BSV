"use strict";

var jwt = require("jsonwebtoken");

var config = require("config");

module.exports = function (req, res, next) {
  // get the token from the header if present
  var token = req.session.accessToken; // if no token found, return access denied response 

  if (!token) return res.status(401).redirect("/");

  try {
    //if can verify the token, set req.user and pass to next middleware
    var decoded = jwt.verify(token, config.get("myprivatekey"));
    req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};
//# sourceMappingURL=auth.middleware.js.map