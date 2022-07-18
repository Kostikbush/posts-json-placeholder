"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.deletePost = deletePost;
exports.addPost = addPost;
exports.upDatePost = upDatePost;

var _types = require("./types");

var _uniqid = _interopRequireDefault(require("uniqid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPosts() {
  return function _callee(dispatch) {
    var respons, jsonData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/posts/?limit=4'));

          case 3:
            respons = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(respons.json());

          case 6:
            jsonData = _context.sent;
            dispatch({
              type: _types.GET_POSTS,
              payload: jsonData
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
}

function deletePost(id) {
  return function _callee2(dispatch) {
    var respons;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/posts/".concat(id), {
              method: 'DELETE'
            }));

          case 3:
            respons = _context2.sent;
            dispatch({
              type: _types.DELETE_POST,
              payload: {
                id: id
              }
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}

function addPost(title, body) {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: title,
                id: 115,
                body: body
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            }).then(function (res) {
              return res.json();
            }).then(function (data) {
              return dispatch({
                type: _types.ADD_POST,
                payload: data
              });
            }));

          case 3:
            _context3.next = 8;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 5]]);
  };
}

function upDatePost(title, body, id) {
  return function _callee4(dispatch) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/posts/".concat(id), {
              method: 'PUT',
              body: JSON.stringify({
                id: id,
                title: title,
                body: body,
                userId: (0, _uniqid["default"])()
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            }).then(function (res) {
              return res.json();
            }).then(function (data) {
              return dispatch({
                type: _types.UPDATE_POST,
                payload: data
              });
            }));

          case 3:
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 5]]);
  };
}