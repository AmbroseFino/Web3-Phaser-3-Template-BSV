"use strict";

var mongoose = require('mongoose');

var _require = require('../.credentials.js'),
    liveServer = _require.liveServer;

mongoose.connect(liveServer);
module.exports = exports = mongoose;
//# sourceMappingURL=user.database.js.map