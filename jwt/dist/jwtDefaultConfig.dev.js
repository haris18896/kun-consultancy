"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./consts/index");

var apiEndPoints = {
  typeJWT: 'JWT',
  typeBearer: 'Bearer',
  storageTokenKeyName: 'accessToken',
  loginEndpoint: "".concat(_index.MAIN_SERVICE_URL, "/vpn/customer/loginCustomer")
};
var _default = apiEndPoints;
exports["default"] = _default;