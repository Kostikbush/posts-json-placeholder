"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _testUtils = require("react-dom/test-utils");

var _types = require("./types");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  posts: []
};

var postsReducer = function postsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.GET_POSTS:
      var newPosts = action.payload.map(function (post) {
        return {
          title: post.title,
          id: post.id,
          body: post.body
        };
      });
      return _objectSpread({}, state, {
        posts: newPosts
      });

    case _types.DELETE_POST:
      return _objectSpread({}, state, {
        posts: state.posts.filter(function (item) {
          return item.id !== action.payload.id;
        })
      });

    case _types.ADD_POST:
      return _objectSpread({}, state, {
        posts: [action.payload].concat(_toConsumableArray(state.posts))
      });

    case _types.UPDATE_POST:
      var itemIndex = state.posts.findIndex(function (res) {
        return res.id === action.payload.id;
      });
      var newtPosts = [].concat(_toConsumableArray(state.posts.slice(0, itemIndex)), [action.payload], _toConsumableArray(state.posts.slice(itemIndex + 1)));
      return _objectSpread({}, state, {
        posts: newtPosts
      });

    default:
      return state;
  }
};

var _default = postsReducer;
exports["default"] = _default;