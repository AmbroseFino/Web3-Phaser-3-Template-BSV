"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Model =
/*#__PURE__*/
function () {
  function Model() {
    (0, _classCallCheck2["default"])(this, Model);
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
  }

  (0, _createClass2["default"])(Model, [{
    key: "musicOn",
    set: function set(value) {
      this._musicOn = value;
    },
    get: function get() {
      return this._musicOn;
    }
  }, {
    key: "soundOn",
    set: function set(value) {
      this._soundOn = value;
    },
    get: function get() {
      return this._soundOn;
    }
  }, {
    key: "bgMusicPlaying",
    set: function set(value) {
      this._bgMusicPlaying = value;
    },
    get: function get() {
      return this._bgMusicPlaying;
    }
  }]);
  return Model;
}();

exports["default"] = Model;
//# sourceMappingURL=Model.js.map