#!/usr/bin/env node
/// <reference path="../typings/webpack-extension-reloader.d.ts" />
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("minimist"), require("webpack"), require("lodash"), require("useragent"), require("ws"), require("webpack-sources"));
	else if(typeof define === 'function' && define.amd)
		define(["minimist", "webpack", "lodash", "useragent", "ws", "webpack-sources"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("minimist"), require("webpack"), require("lodash"), require("useragent"), require("ws"), require("webpack-sources")) : factory(root["minimist"], root["webpack"], root["lodash"], root["useragent"], root["ws"], root["webpack-sources"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__3476__, __WEBPACK_EXTERNAL_MODULE__9582__, __WEBPACK_EXTERNAL_MODULE__467__, __WEBPACK_EXTERNAL_MODULE__6884__, __WEBPACK_EXTERNAL_MODULE__7836__, __WEBPACK_EXTERNAL_MODULE__5327__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var util_1 = __webpack_require__(3837);

var webpack = __webpack_require__(9582);

var ExtensionReloader_1 = __webpack_require__(6048);

var logger_1 = __webpack_require__(6373);

var ExtensionCompiler = /*#__PURE__*/function () {
  function ExtensionCompiler(config, pluginOptions) {
    _classCallCheck(this, ExtensionCompiler);

    this.compiler = webpack(config);
    new ExtensionReloader_1["default"](pluginOptions).apply(this.compiler);
  }

  _createClass(ExtensionCompiler, [{
    key: "watch",
    value: function watch() {
      this.compiler.watch({}, function (err, stats) {
        if (err) {
          return ExtensionCompiler.treatErrors(err);
        }

        logger_1.info(stats.toString({
          colors: true
        }));
      });
    }
  }], [{
    key: "treatErrors",
    value: function treatErrors(err) {
      util_1.log(err.stack || err);

      if (err.details) {
        util_1.log(err.details);
      }
    }
  }]);

  return ExtensionCompiler;
}();

exports["default"] = ExtensionCompiler;

/***/ }),

/***/ 5106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var path_1 = __webpack_require__(1017);

var process_1 = __webpack_require__(7282);

var util_1 = __webpack_require__(3837);

var options_constants_1 = __webpack_require__(8804);

var args_constant_1 = __webpack_require__(2205);

var events_constants_1 = __webpack_require__(3443);

var manual_1 = __webpack_require__(3128);

exports["default"] = function (args) {
  if (args[args_constant_1.HELP]) {
    util_1.log(manual_1["default"]());
    throw {
      type: events_constants_1.SIG_EXIT,
      payload: 0
    };
  }

  var config = args[args_constant_1.CONFIG] || options_constants_1.DEFAULT_CONFIG;
  var port = args[args_constant_1.PORT] || options_constants_1.DEFAULT_PORT;
  var manifest = args[args_constant_1.MANIFEST] || null;
  var pluginOptions = {
    manifest: manifest,
    port: port,
    reloadPage: !args[args_constant_1.NO_PAGE_RELOAD]
  };
  var optPath = path_1.resolve(process_1.cwd(), config);

  try {
    // tslint:disable-next-line: no-eval
    var webpackConfig = eval("require")(optPath);
    return {
      webpackConfig: webpackConfig,
      pluginOptions: pluginOptions
    };
  } catch (err) {
    util_1.log("[Error] Couldn't require the file: ".concat(optPath));
    util_1.log(err);
    throw {
      type: events_constants_1.SIG_EXIT,
      payload: 1
    };
  }
};

/***/ }),

/***/ 2205:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MANIFEST = exports.NO_PAGE_RELOAD = exports.PORT = exports.CONFIG = exports.HELP = void 0;
exports.HELP = "help";
exports.CONFIG = "config";
exports.PORT = "port";
exports.NO_PAGE_RELOAD = "no-page-reload";
exports.MANIFEST = "manifest";

/***/ }),

/***/ 3443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SIG_EXIT = void 0;
exports.SIG_EXIT = "SIG_EXIT";

/***/ }),

/***/ 8777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var minimist = __webpack_require__(3476);

var source_map_support_1 = __webpack_require__(6252);

var util_1 = __webpack_require__(3837);

var args_parser_1 = __webpack_require__(5106);

var events_constants_1 = __webpack_require__(3443);

var ExtensionCompiler_1 = __webpack_require__(5658);

source_map_support_1.install();

var _a = minimist(process.argv.slice(2)),
    _ = _a._,
    args = __rest(_a, ["_"]);

try {
  var _args_parser_1$defaul = args_parser_1["default"](args),
      webpackConfig = _args_parser_1$defaul.webpackConfig,
      pluginOptions = _args_parser_1$defaul.pluginOptions;

  var compiler = new ExtensionCompiler_1["default"](webpackConfig, pluginOptions);
  compiler.watch();
} catch (err) {
  if (err.type === events_constants_1.SIG_EXIT) {
    process.exit(err.payload);
  } else {
    util_1.log(err);
    process.exit(err.code);
  }
}

/***/ }),

/***/ 3128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
})); // tslint:disable: max-line-length

var options_constants_1 = __webpack_require__(8804);

exports["default"] = function () {
  return "\nUsage:\n    wer [--config <config_path>] [--port <port_number>] [--no-page-reload] [--content-script <content_script_paths>] [--background <bg_script_path>] [--extension-page <extension_page_paths>]\n\nComplete API:\n+------------------------------------------------------------------------------------------------------------+\n|        name        |    default        |                               description                         |\n|--------------------|-------------------|-------------------------------------------------------------------|\n| --help             |                   | Show this help\n| --config           | ".concat(options_constants_1.DEFAULT_CONFIG, " | The webpack configuration file path                               |\n| --port             | ").concat(options_constants_1.DEFAULT_PORT, "   | The port to run the server                                        |\n| --content-script   | ").concat(options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY, "    | The **entry/entries** name(s) for the content script(s)           |\n| --background       | ").concat(options_constants_1.DEFAULT_BACKGROUND_ENTRY, "        | The **entry** name for the background script                      |\n| --extension-page   | ").concat(options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY, "             | The **entry/entries** name(s) for the extension pages(s)          |\n| --manifest         |        null       | The **manifest.json** path                                        |\n| --no-page-reload   |                   | Disable the auto reloading of all **pages** which runs the plugin |\n+------------------------------------------------------------------------------------------------------------+\n");
};

/***/ }),

/***/ 6048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var webpack_1 = __webpack_require__(9582);

var hot_reload_1 = __webpack_require__(3009);

var warnings_1 = __webpack_require__(2436);

var middleware_1 = __webpack_require__(6392);

var default_options_1 = __webpack_require__(6961);

var logger_1 = __webpack_require__(6373);

var manifest_1 = __webpack_require__(6005);

var AbstractExtensionReloader_1 = __webpack_require__(4257);

var CompilerEventsFacade_1 = __webpack_require__(8675);

var ExtensionReloaderImpl = /*#__PURE__*/function (_AbstractExtensionRel) {
  _inherits(ExtensionReloaderImpl, _AbstractExtensionRel);

  var _super = _createSuper(ExtensionReloaderImpl);

  function ExtensionReloaderImpl(options) {
    var _this;

    _classCallCheck(this, ExtensionReloaderImpl);

    _this = _super.call(this);
    _this._opts = options;
    _this._chunkVersions = {};
    return _this;
  }

  _createClass(ExtensionReloaderImpl, [{
    key: "_isWebpackGToEV4",
    value: function _isWebpackGToEV4() {
      if (webpack_1.version) {
        var _webpack_1$version$sp = webpack_1.version.split("."),
            _webpack_1$version$sp2 = _slicedToArray(_webpack_1$version$sp, 1),
            major = _webpack_1$version$sp2[0];

        if (parseInt(major, 10) >= 4) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_whatChanged",
    value: function _whatChanged(chunks, _ref) {
      var background = _ref.background,
          contentScript = _ref.contentScript,
          extensionPage = _ref.extensionPage;
      var changedChunks = [];

      var _iterator = _createForOfIteratorHelper(chunks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var chunk = _step.value;
          var oldVersion = this._chunkVersions[chunk.name];
          this._chunkVersions[chunk.name] = chunk.hash;
          if (chunk.hash !== oldVersion) changedChunks.push(chunk);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var contentOrBgChanged = changedChunks.some(function (_ref2) {
        var name = _ref2.name;
        var contentChanged = false;
        var bgChanged = name === background;

        if (Array.isArray(contentScript)) {
          contentChanged = contentScript.some(function (script) {
            return script === name;
          });
        } else {
          contentChanged = name === contentScript;
        }

        return contentChanged || bgChanged;
      }); //

      var onlyPageChanged = !contentOrBgChanged && changedChunks.some(function (_ref3) {
        var name = _ref3.name;
        var pageChanged = false;

        if (Array.isArray(extensionPage)) {
          pageChanged = extensionPage.some(function (script) {
            return script === name;
          });
        } else {
          pageChanged = name === extensionPage;
        } //


        return pageChanged;
      });
      return {
        contentOrBgChanged: contentOrBgChanged,
        onlyPageChanged: onlyPageChanged
      };
    }
  }, {
    key: "_registerPlugin",
    value: function _registerPlugin(compiler) {
      var _this2 = this;

      var _lodash_1$merge = lodash_1.merge(default_options_1["default"], this._opts),
          reloadPage = _lodash_1$merge.reloadPage,
          port = _lodash_1$merge.port,
          entries = _lodash_1$merge.entries,
          manifest = _lodash_1$merge.manifest;

      var parsedEntries = manifest ? manifest_1.extractEntries(compiler.options.entry, compiler.options.output, manifest) : entries;
      this._eventAPI = new CompilerEventsFacade_1["default"](compiler);
      this._injector = middleware_1.middlewareInjector(parsedEntries, {
        port: port,
        reloadPage: reloadPage
      });
      this._triggerer = hot_reload_1.changesTriggerer(port, reloadPage);

      this._eventAPI.afterOptimizeChunkAssets(function (comp, chunks) {
        comp.assets = Object.assign(Object.assign({}, comp.assets), _this2._injector(comp.assets, chunks));
      });

      this._eventAPI.afterEmit(function (comp) {
        var _this2$_whatChanged = _this2._whatChanged(comp.chunks, parsedEntries),
            contentOrBgChanged = _this2$_whatChanged.contentOrBgChanged,
            onlyPageChanged = _this2$_whatChanged.onlyPageChanged;

        if (contentOrBgChanged || onlyPageChanged) {
          _this2._triggerer(onlyPageChanged);
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(compiler) {
      if ((this._isWebpackGToEV4() ? compiler.options.mode : process.env.NODE_ENV) === "development") {
        this._registerPlugin(compiler);
      } else {
        logger_1.warn(warnings_1.onlyOnDevelopmentMsg.get());
      }
    }
  }]);

  return ExtensionReloaderImpl;
}(AbstractExtensionReloader_1["default"]);

exports["default"] = ExtensionReloaderImpl;

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NEW_FAST_RELOAD_CALLS = exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = exports.NEW_FAST_RELOAD_CHROME_VERSION = exports.FAST_RELOAD_WAIT = exports.FAST_RELOAD_CALLS = exports.FAST_RELOAD_DEBOUNCING_FRAME = void 0;
/**
 * Chrome lets only a max number of calls in a time frame
 * before block the plugin for be reloading itself to much
 * @see https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader/issues/2
 */

exports.FAST_RELOAD_DEBOUNCING_FRAME = 2000;
exports.FAST_RELOAD_CALLS = 6;
exports.FAST_RELOAD_WAIT = 10 * 1000; // ================================================================================================================= //

/**
 * A new reloading rate was created after opening a bug ticket on
 * Chromium, and the revision was merged to master
 * @see https://chromium-review.googlesource.com/c/chromium/src/+/1340272
 */

/**
 * The Chrome/Chromium version number that includes the new rates
 * @see https://storage.googleapis.com/chromium-find-releases-static/d3b.html#d3b25e1380984b2f1f23d0e8dc1a337743c6caaf
 */

exports.NEW_FAST_RELOAD_CHROME_VERSION = [73, 0, 3637];
exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = 1000;
exports.NEW_FAST_RELOAD_CALLS = 30;

/***/ }),

/***/ 1918:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEBUG = exports.ERROR = exports.WARN = exports.INFO = exports.LOG = exports.NONE = void 0;
exports.NONE = 0;
exports.LOG = 1;
exports.INFO = 2;
exports.WARN = 3;
exports.ERROR = 4;
exports.DEBUG = 5;

/***/ }),

/***/ 5934:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SOCKET_ERR_CODE_REF = exports.RECONNECT_INTERVAL = void 0;
exports.RECONNECT_INTERVAL = 2000;
exports.SOCKET_ERR_CODE_REF = "https://tools.ietf.org/html/rfc6455#section-7.4.1";

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_EXTENSION_PAGE_ENTRY = exports.DEFAULT_BACKGROUND_ENTRY = exports.DEFAULT_CONTENT_SCRIPT_ENTRY = exports.DEFAULT_RELOAD_PAGE = exports.DEFAULT_CONFIG = exports.DEFAULT_PORT = void 0;
exports.DEFAULT_PORT = 9090;
exports.DEFAULT_CONFIG = "webpack.config.js";
exports.DEFAULT_RELOAD_PAGE = true;
exports.DEFAULT_CONTENT_SCRIPT_ENTRY = "content-script";
exports.DEFAULT_BACKGROUND_ENTRY = "background";
exports.DEFAULT_EXTENSION_PAGE_ENTRY = "popup";

/***/ }),

/***/ 6578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.REF_URL = void 0;
exports.REF_URL = "https://github.com/rubenspgcavalcante/webpack-extension-reloader/wiki/General-Information";

/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var useragent_1 = __webpack_require__(6884);

var ws_1 = __webpack_require__(7836);

var logger_1 = __webpack_require__(6373);

var SignEmitter_1 = __webpack_require__(7574);

var HotReloaderServer = /*#__PURE__*/function () {
  function HotReloaderServer(port) {
    _classCallCheck(this, HotReloaderServer);

    this._server = new ws_1.Server({
      port: port
    });
  }

  _createClass(HotReloaderServer, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      this._server.on("connection", function (ws, msg) {
        var userAgent = useragent_1.parse(msg.headers["user-agent"]);
        _this._signEmitter = new SignEmitter_1["default"](_this._server, userAgent);
        ws.on("message", function (data) {
          return logger_1.info("Message from ".concat(userAgent.family, ": ").concat(JSON.parse(data).payload));
        });
        ws.on("error", function () {// NOOP - swallow socket errors due to http://git.io/vbhSN
        });
      });
    }
  }, {
    key: "signChange",
    value: function signChange(reloadPage, onlyPageChanged) {
      if (this._signEmitter) {
        return this._signEmitter.safeSignChange(reloadPage, onlyPageChanged);
      } else {
        return Promise.resolve(null);
      }
    }
  }]);

  return HotReloaderServer;
}();

exports["default"] = HotReloaderServer;

/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var ws_1 = __webpack_require__(7836);

var fast_reloading_constants_1 = __webpack_require__(9871);

var block_protection_1 = __webpack_require__(9832);

var signals_1 = __webpack_require__(1873);

var SignEmitter = /*#__PURE__*/function () {
  function SignEmitter(server, _ref) {
    var family = _ref.family,
        major = _ref.major,
        minor = _ref.minor,
        patch = _ref.patch;

    _classCallCheck(this, SignEmitter);

    this._server = server;

    if (family === "Chrome") {
      var _ref2 = this._satisfies([parseInt(major, 10), parseInt(minor, 10), parseInt(patch, 10)], fast_reloading_constants_1.NEW_FAST_RELOAD_CHROME_VERSION) ? [fast_reloading_constants_1.NEW_FAST_RELOAD_CALLS, fast_reloading_constants_1.NEW_FAST_RELOAD_DEBOUNCING_FRAME] : [fast_reloading_constants_1.FAST_RELOAD_CALLS, fast_reloading_constants_1.FAST_RELOAD_DEBOUNCING_FRAME],
          _ref3 = _slicedToArray(_ref2, 2),
          reloadCalls = _ref3[0],
          reloadDeboucingFrame = _ref3[1];

      var debouncer = block_protection_1.debounceSignal(reloadDeboucingFrame, this);
      var blocker = block_protection_1.fastReloadBlocker(reloadCalls, fast_reloading_constants_1.FAST_RELOAD_WAIT, this);
      this._safeSignChange = debouncer(blocker(this._setupSafeSignChange()));
    } else {
      this._safeSignChange = this._setupSafeSignChange();
    }
  }

  _createClass(SignEmitter, [{
    key: "safeSignChange",
    value: function safeSignChange(reloadPage, onlyPageChanged) {
      var _this = this;

      return new Promise(function (res, rej) {
        _this._safeSignChange(reloadPage, onlyPageChanged, res, rej);
      });
    }
  }, {
    key: "_setupSafeSignChange",
    value: function _setupSafeSignChange() {
      var _this2 = this;

      return function (reloadPage, onlyPageChanged, onSuccess, onError) {
        try {
          _this2._sendMsg(signals_1.signChange({
            reloadPage: reloadPage,
            onlyPageChanged: onlyPageChanged
          }));

          onSuccess();
        } catch (err) {
          onError(err);
        }
      };
    }
  }, {
    key: "_sendMsg",
    value: function _sendMsg(msg) {
      this._server.clients.forEach(function (client) {
        if (client.readyState === ws_1.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    }
  }, {
    key: "_satisfies",
    value: function _satisfies(browserVersion, targetVersion) {
      var versionPairs = lodash_1.zip(browserVersion, targetVersion);

      var _iterator = _createForOfIteratorHelper(versionPairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              _step$value$ = _step$value[0],
              version = _step$value$ === void 0 ? 0 : _step$value$,
              _step$value$2 = _step$value[1],
              target = _step$value$2 === void 0 ? 0 : _step$value$2;

          if (version !== target) {
            return version > target;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }]);

  return SignEmitter;
}();

exports["default"] = SignEmitter;

/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var logger_1 = __webpack_require__(6373);

var HotReloaderServer_1 = __webpack_require__(1692);

var changesTriggerer = function changesTriggerer(port, reloadPage) {
  var server = new HotReloaderServer_1["default"](port);
  logger_1.info("[ Starting the Hot Extension Reload Server... ]");
  server.listen();
  return function (onlyPageChanged) {
    return server.signChange(reloadPage, onlyPageChanged);
  };
};

exports["default"] = changesTriggerer;

/***/ }),

/***/ 3009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changesTriggerer = void 0;

var changes_triggerer_1 = __webpack_require__(3362);

exports.changesTriggerer = changes_triggerer_1["default"];

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var safe_1 = __webpack_require__(4431);

var lodash_1 = __webpack_require__(467);

var log_constants_1 = __webpack_require__(1918);

var reference_docs_constants_1 = __webpack_require__(6578);

var Message = /*#__PURE__*/function () {
  function Message(type, referenceNumber, message) {
    _classCallCheck(this, Message);

    this.type = type;
    this.referenceNumber = referenceNumber;
    this.message = message;
  }

  _createClass(Message, [{
    key: "get",
    value: function get() {
      var additionalData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var code = "WER-".concat(this.getPrefix()).concat(this.referenceNumber);
      var refLink = safe_1.bold(safe_1.white("".concat(reference_docs_constants_1.REF_URL, "#").concat(code)));
      return "[".concat(code, "] ").concat(lodash_1.template(this.message, additionalData), ".\nVisit ").concat(refLink, " for complete details\n");
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.get();
    }
  }, {
    key: "getPrefix",
    value: function getPrefix() {
      switch (this.type) {
        case log_constants_1.INFO:
          return "I";

        case log_constants_1.WARN:
          return "W";

        case log_constants_1.ERROR:
          return "E";
      }
    }
  }]);

  return Message;
}();

exports["default"] = Message;

/***/ }),

/***/ 1049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bgScriptManifestRequiredMsg = exports.bgScriptEntryErrorMsg = void 0;

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.bgScriptEntryErrorMsg = new Message_1["default"](log_constants_1.ERROR, 1, "Background script webpack entry not found/match \
the provided on 'manifest.json' or 'entry.background' \
option of the plugin");
exports.bgScriptManifestRequiredMsg = new Message_1["default"](log_constants_1.ERROR, 2, "Background script on manifest is required");

/***/ }),

/***/ 2436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.onlyOnDevelopmentMsg = void 0;

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.onlyOnDevelopmentMsg = new Message_1["default"](log_constants_1.WARN, 1, "Warning, Extension Reloader Plugin was not enabled! \
It runs only on webpack --mode=development (v4 or more) \
or with NODE_ENV=development (lower versions)");

/***/ }),

/***/ 6392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.middlewareInjector = void 0;

var middleware_injector_1 = __webpack_require__(91);

exports.middlewareInjector = middleware_injector_1["default"];

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_sources_1 = __webpack_require__(5327);

var middleware_source_builder_1 = __webpack_require__(6271);

var middlewareInjector = function middlewareInjector(_ref, _ref2) {
  var background = _ref.background,
      contentScript = _ref.contentScript,
      extensionPage = _ref.extensionPage;
  var port = _ref2.port,
      reloadPage = _ref2.reloadPage;
  var source = middleware_source_builder_1["default"]({
    port: port,
    reloadPage: reloadPage
  });

  var sourceFactory = function sourceFactory() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    return _construct(webpack_sources_1.ConcatSource, sources);
  };

  var matchBgOrContentOrPage = function matchBgOrContentOrPage(name) {
    return name === background || name === contentScript || contentScript && contentScript.includes(name) || name === extensionPage || extensionPage && extensionPage.includes(name);
  };

  return function (assets, chunks) {
    return Array.from(chunks).reduce(function (prev, _ref3) {
      var name = _ref3.name,
          files = _ref3.files;

      if (matchBgOrContentOrPage(name)) {
        files.forEach(function (entryPoint) {
          console.log("Entry point: ".concat(entryPoint));

          if (/\.js$/.test(entryPoint)) {
            var finalSrc = sourceFactory(source, assets[entryPoint]);
            prev[entryPoint] = finalSrc;
          }
        });
      }

      return prev;
    }, {});
  };
};

exports["default"] = middlewareInjector;

/***/ }),

/***/ 6271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var wer_middleware_raw_1 = __webpack_require__(3653);

var raw_loader_webextension_polyfill_1 = __webpack_require__(2634);

var webpack_sources_1 = __webpack_require__(5327);

var middleware_config_constants_1 = __webpack_require__(5934);

var signals = __webpack_require__(1873);

function middleWareSourceBuilder(_ref) {
  var port = _ref.port,
      reloadPage = _ref.reloadPage;
  var tmpl = lodash_1.template(wer_middleware_raw_1["default"]);
  return new webpack_sources_1.RawSource(tmpl({
    WSHost: "ws://localhost:".concat(port),
    config: JSON.stringify({
      RECONNECT_INTERVAL: middleware_config_constants_1.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF: middleware_config_constants_1.SOCKET_ERR_CODE_REF
    }),
    polyfillSource: "\"||".concat(raw_loader_webextension_polyfill_1["default"], "\""),
    reloadPage: "".concat(reloadPage),
    signals: JSON.stringify(signals)
  }));
}

exports["default"] = middleWareSourceBuilder;

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fastReloadBlocker = exports.debounceSignal = void 0;

var lodash_1 = __webpack_require__(467);

var logger_1 = __webpack_require__(6373);

exports.debounceSignal = function (deboucingFrame, context) {
  return function (func) {
    if (context) {
      lodash_1.runInContext(context);
    }

    return lodash_1.debounce(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return func.apply(context, args);
    }, deboucingFrame);
  };
};

exports.fastReloadBlocker = function (maxCalls, wait, context) {
  return function (func) {
    var calls = 0;
    var inWait = false;
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (inWait) {
        return;
      } else if (calls === maxCalls) {
        calls = 0;
        inWait = true;
        var interval = wait / 1000;
        logger_1.warn("Please wait ".concat(interval, " secs. for next reload to prevent your extension being blocked"));
        var logInterval = setInterval(function () {
          return logger_1.warn("".concat(--interval, " ..."));
        }, 1000);
        setTimeout(function () {
          clearInterval(logInterval);
          logger_1.info("Signing for reload now");
          func.apply(context, args);
          inWait = false;
        }, wait);
      } else {
        calls++;
        return func.apply(context, args);
      }
    };
  };
};

/***/ }),

/***/ 6961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var options_constants_1 = __webpack_require__(8804);

exports["default"] = {
  entries: {
    background: options_constants_1.DEFAULT_BACKGROUND_ENTRY,
    contentScript: options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY,
    extensionPage: options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY
  },
  port: options_constants_1.DEFAULT_PORT,
  reloadPage: options_constants_1.DEFAULT_RELOAD_PAGE
};

/***/ }),

/***/ 6373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.debug = exports.error = exports.warn = exports.info = exports.log = exports.setLogLevel = void 0; // tslint:disable: no-console

var safe_1 = __webpack_require__(4431);

var log_constants_1 = __webpack_require__(1918);

var logLevel;

exports.setLogLevel = function (level) {
  return logLevel = level;
};

exports.log = function (message) {
  return logLevel >= log_constants_1.LOG && console.log(message);
};

exports.info = function (message) {
  return logLevel >= log_constants_1.INFO && console.info(safe_1.green(message));
};

exports.warn = function (message) {
  return logLevel >= log_constants_1.WARN && console.warn(safe_1.yellow(message));
};

exports.error = function (message) {
  return logLevel >= log_constants_1.ERROR && console.error(safe_1.red(message));
};

exports.debug = function (message) {
  return logLevel >= log_constants_1.DEBUG && console.debug(safe_1.white(exports.debug(message)));
};

/***/ }),

/***/ 6005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractEntries = void 0;

var fs_1 = __webpack_require__(7147);

var lodash_1 = __webpack_require__(467);

var errors_1 = __webpack_require__(1049);

function extractEntries(webpackEntry) {
  var webpackOutput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var manifestPath = arguments.length > 2 ? arguments[2] : undefined;
  var manifestJson = JSON.parse(fs_1.readFileSync(manifestPath).toString());
  var background = manifestJson.background,
      content_scripts = manifestJson.content_scripts;
  var filename = webpackOutput.filename;

  if (!filename) {
    throw new Error();
  }

  if (!(background === null || background === void 0 ? void 0 : background.scripts)) {
    throw new TypeError(errors_1.bgScriptManifestRequiredMsg.get());
  }

  var bgScriptFileNames = background.scripts;
  var toRemove = filename.replace("[name]", "");
  var bgWebpackEntry = Object.keys(webpackEntry).find(function (entryName) {
    return bgScriptFileNames.some(function (bgManifest) {
      return bgManifest.replace(toRemove, "") === entryName;
    });
  });

  if (!bgWebpackEntry) {
    throw new TypeError(errors_1.bgScriptEntryErrorMsg.get());
  }

  var contentEntries = content_scripts ? lodash_1.flatMapDeep(Object.keys(webpackEntry), function (entryName) {
    return content_scripts.map(function (_ref) {
      var js = _ref.js;
      return js.map(function (contentItem) {
        return contentItem.replace(toRemove, "");
      }).filter(function (contentItem) {
        return contentItem === entryName;
      });
    });
  }) : null;
  return {
    background: bgWebpackEntry,
    contentScript: contentEntries,
    extensionPage: null
  };
}

exports.extractEntries = extractEntries;

/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.signLog = exports.signReloaded = exports.signReload = exports.signChange = exports.SIGN_CONNECT = exports.SIGN_LOG = exports.SIGN_RELOADED = exports.SIGN_RELOAD = exports.SIGN_CHANGE = void 0;
exports.SIGN_CHANGE = "SIGN_CHANGE";
exports.SIGN_RELOAD = "SIGN_RELOAD";
exports.SIGN_RELOADED = "SIGN_RELOADED";
exports.SIGN_LOG = "SIGN_LOG";
exports.SIGN_CONNECT = "SIGN_CONNECT";

exports.signChange = function (_ref) {
  var _ref$reloadPage = _ref.reloadPage,
      reloadPage = _ref$reloadPage === void 0 ? true : _ref$reloadPage,
      _ref$onlyPageChanged = _ref.onlyPageChanged,
      onlyPageChanged = _ref$onlyPageChanged === void 0 ? false : _ref$onlyPageChanged;
  return {
    payload: {
      reloadPage: reloadPage,
      onlyPageChanged: onlyPageChanged
    },
    type: exports.SIGN_CHANGE
  };
};

exports.signReload = function () {
  return {
    type: exports.SIGN_RELOAD
  };
};

exports.signReloaded = function (msg) {
  return {
    payload: msg,
    type: exports.SIGN_RELOADED
  };
};

exports.signLog = function (msg) {
  return {
    payload: msg,
    type: exports.SIGN_LOG
  };
};

/***/ }),

/***/ 4257:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var AbstractExtensionReloader = /*#__PURE__*/_createClass(function AbstractExtensionReloader() {
  _classCallCheck(this, AbstractExtensionReloader);
});

exports["default"] = AbstractExtensionReloader;

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var CompilerEventsFacade = /*#__PURE__*/function () {
  function CompilerEventsFacade(compiler) {
    _classCallCheck(this, CompilerEventsFacade);

    this._compiler = compiler;
    this._legacyTapable = !compiler.hooks;
  }

  _createClass(CompilerEventsFacade, [{
    key: "afterOptimizeChunkAssets",
    value: function afterOptimizeChunkAssets(call) {
      return this._legacyTapable ? this._compiler.plugin("compilation", function (comp) {
        return comp.plugin("after-optimize-chunk-assets", function (chunks) {
          return call(comp, chunks);
        });
      }) : this._compiler.hooks.compilation.tap(CompilerEventsFacade.extensionName, function (comp) {
        return comp.hooks.afterOptimizeChunkAssets.tap(CompilerEventsFacade.extensionName, function (chunks) {
          return call(comp, chunks);
        });
      });
    }
  }, {
    key: "afterEmit",
    value: function afterEmit(call) {
      return this._legacyTapable ? this._compiler.plugin("after-emit", call) : this._compiler.hooks.afterEmit.tap(CompilerEventsFacade.extensionName, call);
    }
  }]);

  return CompilerEventsFacade;
}();

exports["default"] = CompilerEventsFacade;
CompilerEventsFacade.extensionName = "webpack-extension-reloader";

/***/ }),

/***/ 5420:
/***/ ((module) => {

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ 2517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __webpack_require__(3837);
var ansiStyles = colors.styles = __webpack_require__(5784);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = (__webpack_require__(6561).supportsColor);

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if(!styleMap && style in colors){
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __webpack_require__(5117);
colors.zalgo = __webpack_require__(1492);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(6260)(colors);
colors.maps.zebra = __webpack_require__(3270)(colors);
colors.maps.rainbow = __webpack_require__(5920)(colors);
colors.maps.random = __webpack_require__(2449)(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),

/***/ 5117:
/***/ ((module) => {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),

/***/ 1492:
/***/ ((module) => {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),

/***/ 6260:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),

/***/ 5920:
/***/ ((module) => {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),

/***/ 2449:
/***/ ((module) => {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),

/***/ 3270:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),

/***/ 5784:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),

/***/ 4340:
/***/ ((module) => {

"use strict";
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 6561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __webpack_require__(2037);
var hasFlag = __webpack_require__(4340);

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};


/***/ }),

/***/ 4431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//
// Remark: Requiring this file will use the "safe" colors API,
// which will not touch String.prototype.
//
//   var colors = require('colors/safe');
//   colors.red("foo")
//
//
var colors = __webpack_require__(2517);
module['exports'] = colors;


/***/ }),

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* tslint:disable */\n\n/* -------------------------------------------------- */\n\n/*      Start of Webpack Hot Extension Middleware     */\n\n/* ================================================== */\n\n/*  This will be converted into a lodash templ., any  */\n\n/*  external argument must be provided using it       */\n\n/* -------------------------------------------------- */\n(function () {\n  try {\n    window;\n  } catch (_a) {\n    var window;\n  }\n\n  var injectionContext = window || this || {\n    browser: null\n  };\n  (function () {\n    \"<%= polyfillSource %>\";\n  }).bind(injectionContext)();\n\n  var _ref = injectionContext || {},\n      browser = _ref.browser;\n\n  var signals = JSON.parse('<%= signals %>');\n  var config = JSON.parse('<%= config %>');\n  var reloadPage = \"<%= reloadPage %>\" === \"true\";\n  var wsHost = \"<%= WSHost %>\";\n  var SIGN_CHANGE = signals.SIGN_CHANGE,\n      SIGN_RELOAD = signals.SIGN_RELOAD,\n      SIGN_RELOADED = signals.SIGN_RELOADED,\n      SIGN_LOG = signals.SIGN_LOG,\n      SIGN_CONNECT = signals.SIGN_CONNECT;\n  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,\n      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;\n\n  var _ref2 = browser || {},\n      extension = _ref2.extension,\n      runtime = _ref2.runtime,\n      tabs = _ref2.tabs;\n\n  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //\n\n  var formatter = function formatter(msg) {\n    return \"[ WER: \".concat(msg, \" ]\");\n  };\n\n  var logger = function logger(msg) {\n    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n    return console[level](formatter(msg));\n  };\n\n  var timeFormatter = function timeFormatter(date) {\n    return date.toTimeString().replace(/.*(\\d{2}:\\d{2}:\\d{2}).*/, \"$1\");\n  }; // ========================== Called only on content scripts ============================== //\n\n\n  function contentScriptWorker() {\n    console.log('contentScriptWorker');\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref3) {\n      var type = _ref3.type,\n          payload = _ref3.payload;\n\n      switch (type) {\n        case SIGN_RELOAD:\n          logger(\"Detected Changes. Reloading ...\");\n          reloadPage && (window === null || window === void 0 ? void 0 : window.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n      }\n    });\n  } // ======================== Called only on background scripts ============================= //\n\n\n  function backgroundWorker(socket) {\n    runtime.onMessage.addListener(function (action, sender) {\n      if (action.type === SIGN_CONNECT) {\n        return Promise.resolve(formatter(\"Connected to Extension Hot Reloader\"));\n      }\n\n      return true;\n    });\n    socket.addEventListener(\"message\", function (_ref4) {\n      var data = _ref4.data;\n\n      var _JSON$parse = JSON.parse(data),\n          type = _JSON$parse.type,\n          payload = _JSON$parse.payload;\n\n      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {\n        tabs.query({\n          status: \"complete\"\n        }).then(function (loadedTabs) {\n          loadedTabs.forEach(function (tab) {\n            return tab.id && tabs.sendMessage(tab.id, {\n              type: SIGN_RELOAD\n            });\n          });\n          socket.send(JSON.stringify({\n            type: SIGN_RELOADED,\n            payload: formatter(\"\".concat(timeFormatter(new Date()), \" - \").concat(manifest.name, \" successfully reloaded\"))\n          }));\n          runtime.reload();\n        });\n      } else {\n        runtime.sendMessage({\n          type: type,\n          payload: payload\n        });\n      }\n    });\n    socket.addEventListener(\"close\", function (_ref5) {\n      var code = _ref5.code;\n      logger(\"Socket connection closed. Code \".concat(code, \". See more in \").concat(SOCKET_ERR_CODE_REF), \"warn\");\n      var intId = setInterval(function () {\n        logger(\"Attempting to reconnect (tip: Check if Webpack is running)\");\n        var ws = new WebSocket(wsHost);\n\n        ws.onerror = function () {\n          return logger(\"Error trying to re-connect. Reattempting in \".concat(RECONNECT_INTERVAL / 1000, \"s\"), \"warn\");\n        };\n\n        ws.addEventListener(\"open\", function () {\n          clearInterval(intId);\n          logger(\"Reconnected. Reloading plugin\");\n          runtime.reload();\n        });\n      }, RECONNECT_INTERVAL);\n    });\n  } // ======================== Called only on extension pages that are not the background ============================= //\n\n\n  function extensionPageWorker() {\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref6) {\n      var type = _ref6.type,\n          payload = _ref6.payload;\n\n      switch (type) {\n        case SIGN_CHANGE:\n          logger(\"Detected Changes. Reloading ...\");\n          reloadPage && (window === null || window === void 0 ? void 0 : window.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n      }\n    });\n  } // ======================= Bootstraps the middleware =========================== //\n\n\n  runtime.reload ? !window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();\n})();\n/* ----------------------------------------------- */\n\n/* End of Webpack Hot Extension Middleware  */\n\n/* ----------------------------------------------- */");

/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("(function (global, factory) {\n  if (typeof define === \"function\" && define.amd) {\n    define(\"webextension-polyfill\", [\"module\"], factory);\n  } else if (typeof exports !== \"undefined\") {\n    factory(module);\n  } else {\n    var mod = {\n      exports: {}\n    };\n    factory(mod);\n    global.browser = mod.exports;\n  }\n})(this, function (module) {\n  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */\n  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */\n  /* vim: set sts=2 sw=2 et tw=80: */\n  /* This Source Code Form is subject to the terms of the Mozilla Public\n   * License, v. 2.0. If a copy of the MPL was not distributed with this\n   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n  \"use strict\";\n\n  if (typeof browser === \"undefined\" || Object.getPrototypeOf(browser) !== Object.prototype) {\n    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = \"The message port closed before a response was received.\";\n    const SEND_RESPONSE_DEPRECATION_WARNING = \"Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)\";\n\n    // Wrapping the bulk of this polyfill in a one-time-use function is a minor\n    // optimization for Firefox. Since Spidermonkey does not fully parse the\n    // contents of a function until the first time it's called, and since it will\n    // never actually need to be called, this allows the polyfill to be included\n    // in Firefox nearly for free.\n    const wrapAPIs = extensionAPIs => {\n      // NOTE: apiMetadata is associated to the content of the api-metadata.json file\n      // at build time by replacing the following \"include\" with the content of the\n      // JSON file.\n      const apiMetadata = {\n        \"alarms\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"clearAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"bookmarks\": {\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getChildren\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getRecent\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getSubTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTree\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"browserAction\": {\n          \"disable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"enable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"getBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"openPopup\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"browsingData\": {\n          \"remove\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"removeCache\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCookies\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeDownloads\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFormData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeHistory\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeLocalStorage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePasswords\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePluginData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"settings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"commands\": {\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"contextMenus\": {\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"cookies\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAllCookieStores\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"devtools\": {\n          \"inspectedWindow\": {\n            \"eval\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 2,\n              \"singleCallbackArg\": false\n            }\n          },\n          \"panels\": {\n            \"create\": {\n              \"minArgs\": 3,\n              \"maxArgs\": 3,\n              \"singleCallbackArg\": true\n            }\n          }\n        },\n        \"downloads\": {\n          \"cancel\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"download\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"erase\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFileIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"open\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"pause\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFile\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"resume\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"extension\": {\n          \"isAllowedFileSchemeAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"isAllowedIncognitoAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"history\": {\n          \"addUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"deleteRange\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getVisits\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"i18n\": {\n          \"detectLanguage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAcceptLanguages\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"identity\": {\n          \"launchWebAuthFlow\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"idle\": {\n          \"queryState\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"management\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setEnabled\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"uninstallSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"notifications\": {\n          \"clear\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPermissionLevel\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"pageAction\": {\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"hide\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"permissions\": {\n          \"contains\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"request\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"runtime\": {\n          \"getBackgroundPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPlatformInfo\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"openOptionsPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"requestUpdateCheck\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"sendMessage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 3\n          },\n          \"sendNativeMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"setUninstallURL\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"sessions\": {\n          \"getDevices\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getRecentlyClosed\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"restore\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"storage\": {\n          \"local\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          },\n          \"managed\": {\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            }\n          },\n          \"sync\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          }\n        },\n        \"tabs\": {\n          \"captureVisibleTab\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"detectLanguage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"discard\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"duplicate\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"executeScript\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getZoom\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getZoomSettings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"highlight\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"insertCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"query\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"reload\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"sendMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 3\n          },\n          \"setZoom\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"setZoomSettings\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"update\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          }\n        },\n        \"topSites\": {\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"webNavigation\": {\n          \"getAllFrames\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFrame\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"webRequest\": {\n          \"handlerBehaviorChanged\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"windows\": {\n          \"create\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getLastFocused\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        }\n      };\n\n      if (Object.keys(apiMetadata).length === 0) {\n        throw new Error(\"api-metadata.json has not been included in browser-polyfill\");\n      }\n\n      /**\n       * A WeakMap subclass which creates and stores a value for any key which does\n       * not exist when accessed, but behaves exactly as an ordinary WeakMap\n       * otherwise.\n       *\n       * @param {function} createItem\n       *        A function which will be called in order to create the value for any\n       *        key which does not exist, the first time it is accessed. The\n       *        function receives, as its only argument, the key being created.\n       */\n      class DefaultWeakMap extends WeakMap {\n        constructor(createItem, items = undefined) {\n          super(items);\n          this.createItem = createItem;\n        }\n\n        get(key) {\n          if (!this.has(key)) {\n            this.set(key, this.createItem(key));\n          }\n\n          return super.get(key);\n        }\n      }\n\n      /**\n       * Returns true if the given object is an object with a `then` method, and can\n       * therefore be assumed to behave as a Promise.\n       *\n       * @param {*} value The value to test.\n       * @returns {boolean} True if the value is thenable.\n       */\n      const isThenable = value => {\n        return value && typeof value === \"object\" && typeof value.then === \"function\";\n      };\n\n      /**\n       * Creates and returns a function which, when called, will resolve or reject\n       * the given promise based on how it is called:\n       *\n       * - If, when called, `chrome.runtime.lastError` contains a non-null object,\n       *   the promise is rejected with that value.\n       * - If the function is called with exactly one argument, the promise is\n       *   resolved to that value.\n       * - Otherwise, the promise is resolved to an array containing all of the\n       *   function's arguments.\n       *\n       * @param {object} promise\n       *        An object containing the resolution and rejection functions of a\n       *        promise.\n       * @param {function} promise.resolve\n       *        The promise's resolution function.\n       * @param {function} promise.rejection\n       *        The promise's rejection function.\n       * @param {object} metadata\n       *        Metadata about the wrapped method which has created the callback.\n       * @param {integer} metadata.maxResolvedArgs\n       *        The maximum number of arguments which may be passed to the\n       *        callback created by the wrapped async function.\n       *\n       * @returns {function}\n       *        The generated callback function.\n       */\n      const makeCallback = (promise, metadata) => {\n        return (...callbackArgs) => {\n          if (extensionAPIs.runtime.lastError) {\n            promise.reject(extensionAPIs.runtime.lastError);\n          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {\n            promise.resolve(callbackArgs[0]);\n          } else {\n            promise.resolve(callbackArgs);\n          }\n        };\n      };\n\n      const pluralizeArguments = numArgs => numArgs == 1 ? \"argument\" : \"arguments\";\n\n      /**\n       * Creates a wrapper function for a method with the given name and metadata.\n       *\n       * @param {string} name\n       *        The name of the method which is being wrapped.\n       * @param {object} metadata\n       *        Metadata about the method being wrapped.\n       * @param {integer} metadata.minArgs\n       *        The minimum number of arguments which must be passed to the\n       *        function. If called with fewer than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxArgs\n       *        The maximum number of arguments which may be passed to the\n       *        function. If called with more than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxResolvedArgs\n       *        The maximum number of arguments which may be passed to the\n       *        callback created by the wrapped async function.\n       *\n       * @returns {function(object, ...*)}\n       *       The generated wrapper function.\n       */\n      const wrapAsyncFunction = (name, metadata) => {\n        return function asyncFunctionWrapper(target, ...args) {\n          if (args.length < metadata.minArgs) {\n            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          if (args.length > metadata.maxArgs) {\n            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          return new Promise((resolve, reject) => {\n            if (metadata.fallbackToNoCallback) {\n              // This API method has currently no callback on Chrome, but it return a promise on Firefox,\n              // and so the polyfill will try to call it with a callback first, and it will fallback\n              // to not passing the callback if the first call fails.\n              try {\n                target[name](...args, makeCallback({ resolve, reject }, metadata));\n              } catch (cbError) {\n                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + \"falling back to call it without a callback: \", cbError);\n\n                target[name](...args);\n\n                // Update the API method metadata, so that the next API calls will not try to\n                // use the unsupported callback anymore.\n                metadata.fallbackToNoCallback = false;\n                metadata.noCallback = true;\n\n                resolve();\n              }\n            } else if (metadata.noCallback) {\n              target[name](...args);\n              resolve();\n            } else {\n              target[name](...args, makeCallback({ resolve, reject }, metadata));\n            }\n          });\n        };\n      };\n\n      /**\n       * Wraps an existing method of the target object, so that calls to it are\n       * intercepted by the given wrapper function. The wrapper function receives,\n       * as its first argument, the original `target` object, followed by each of\n       * the arguments passed to the original method.\n       *\n       * @param {object} target\n       *        The original target object that the wrapped method belongs to.\n       * @param {function} method\n       *        The method being wrapped. This is used as the target of the Proxy\n       *        object which is created to wrap the method.\n       * @param {function} wrapper\n       *        The wrapper function which is called in place of a direct invocation\n       *        of the wrapped method.\n       *\n       * @returns {Proxy<function>}\n       *        A Proxy object for the given method, which invokes the given wrapper\n       *        method in its place.\n       */\n      const wrapMethod = (target, method, wrapper) => {\n        return new Proxy(method, {\n          apply(targetMethod, thisObj, args) {\n            return wrapper.call(thisObj, target, ...args);\n          }\n        });\n      };\n\n      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n\n      /**\n       * Wraps an object in a Proxy which intercepts and wraps certain methods\n       * based on the given `wrappers` and `metadata` objects.\n       *\n       * @param {object} target\n       *        The target object to wrap.\n       *\n       * @param {object} [wrappers = {}]\n       *        An object tree containing wrapper functions for special cases. Any\n       *        function present in this object tree is called in place of the\n       *        method in the same location in the `target` object tree. These\n       *        wrapper methods are invoked as described in {@see wrapMethod}.\n       *\n       * @param {object} [metadata = {}]\n       *        An object tree containing metadata used to automatically generate\n       *        Promise-based wrapper functions for asynchronous. Any function in\n       *        the `target` object tree which has a corresponding metadata object\n       *        in the same location in the `metadata` tree is replaced with an\n       *        automatically-generated wrapper function, as described in\n       *        {@see wrapAsyncFunction}\n       *\n       * @returns {Proxy<object>}\n       */\n      const wrapObject = (target, wrappers = {}, metadata = {}) => {\n        let cache = Object.create(null);\n        let handlers = {\n          has(proxyTarget, prop) {\n            return prop in target || prop in cache;\n          },\n\n          get(proxyTarget, prop, receiver) {\n            if (prop in cache) {\n              return cache[prop];\n            }\n\n            if (!(prop in target)) {\n              return undefined;\n            }\n\n            let value = target[prop];\n\n            if (typeof value === \"function\") {\n              // This is a method on the underlying object. Check if we need to do\n              // any wrapping.\n\n              if (typeof wrappers[prop] === \"function\") {\n                // We have a special-case wrapper for this method.\n                value = wrapMethod(target, target[prop], wrappers[prop]);\n              } else if (hasOwnProperty(metadata, prop)) {\n                // This is an async method that we have metadata for. Create a\n                // Promise wrapper for it.\n                let wrapper = wrapAsyncFunction(prop, metadata[prop]);\n                value = wrapMethod(target, target[prop], wrapper);\n              } else {\n                // This is a method that we don't know or care about. Return the\n                // original method, bound to the underlying object.\n                value = value.bind(target);\n              }\n            } else if (typeof value === \"object\" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {\n              // This is an object that we need to do some wrapping for the children\n              // of. Create a sub-object wrapper for it with the appropriate child\n              // metadata.\n              value = wrapObject(value, wrappers[prop], metadata[prop]);\n            } else {\n              // We don't need to do any wrapping for this property,\n              // so just forward all access to the underlying object.\n              Object.defineProperty(cache, prop, {\n                configurable: true,\n                enumerable: true,\n                get() {\n                  return target[prop];\n                },\n                set(value) {\n                  target[prop] = value;\n                }\n              });\n\n              return value;\n            }\n\n            cache[prop] = value;\n            return value;\n          },\n\n          set(proxyTarget, prop, value, receiver) {\n            if (prop in cache) {\n              cache[prop] = value;\n            } else {\n              target[prop] = value;\n            }\n            return true;\n          },\n\n          defineProperty(proxyTarget, prop, desc) {\n            return Reflect.defineProperty(cache, prop, desc);\n          },\n\n          deleteProperty(proxyTarget, prop) {\n            return Reflect.deleteProperty(cache, prop);\n          }\n        };\n\n        // Per contract of the Proxy API, the \"get\" proxy handler must return the\n        // original value of the target if that value is declared read-only and\n        // non-configurable. For this reason, we create an object with the\n        // prototype set to `target` instead of using `target` directly.\n        // Otherwise we cannot return a custom object for APIs that\n        // are declared read-only and non-configurable, such as `chrome.devtools`.\n        //\n        // The proxy handlers themselves will still use the original `target`\n        // instead of the `proxyTarget`, so that the methods and properties are\n        // dereferenced via the original targets.\n        let proxyTarget = Object.create(target);\n        return new Proxy(proxyTarget, handlers);\n      };\n\n      /**\n       * Creates a set of wrapper functions for an event object, which handles\n       * wrapping of listener functions that those messages are passed.\n       *\n       * A single wrapper is created for each listener function, and stored in a\n       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`\n       * retrieve the original wrapper, so that  attempts to remove a\n       * previously-added listener work as expected.\n       *\n       * @param {DefaultWeakMap<function, function>} wrapperMap\n       *        A DefaultWeakMap object which will create the appropriate wrapper\n       *        for a given listener function when one does not exist, and retrieve\n       *        an existing one when it does.\n       *\n       * @returns {object}\n       */\n      const wrapEvent = wrapperMap => ({\n        addListener(target, listener, ...args) {\n          target.addListener(wrapperMap.get(listener), ...args);\n        },\n\n        hasListener(target, listener) {\n          return target.hasListener(wrapperMap.get(listener));\n        },\n\n        removeListener(target, listener) {\n          target.removeListener(wrapperMap.get(listener));\n        }\n      });\n\n      // Keep track if the deprecation warning has been logged at least once.\n      let loggedSendResponseDeprecationWarning = false;\n\n      const onMessageWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n\n        /**\n         * Wraps a message listener function so that it may send responses based on\n         * its return value, rather than by returning a sentinel value and calling a\n         * callback. If the listener function returns a Promise, the response is\n         * sent when the promise either resolves or rejects.\n         *\n         * @param {*} message\n         *        The message sent by the other end of the channel.\n         * @param {object} sender\n         *        Details about the sender of the message.\n         * @param {function(*)} sendResponse\n         *        A callback which, when called with an arbitrary argument, sends\n         *        that value as a response.\n         * @returns {boolean}\n         *        True if the wrapped listener returned a Promise, which will later\n         *        yield a response. False otherwise.\n         */\n        return function onMessage(message, sender, sendResponse) {\n          let didCallSendResponse = false;\n\n          let wrappedSendResponse;\n          let sendResponsePromise = new Promise(resolve => {\n            wrappedSendResponse = function (response) {\n              if (!loggedSendResponseDeprecationWarning) {\n                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);\n                loggedSendResponseDeprecationWarning = true;\n              }\n              didCallSendResponse = true;\n              resolve(response);\n            };\n          });\n\n          let result;\n          try {\n            result = listener(message, sender, wrappedSendResponse);\n          } catch (err) {\n            result = Promise.reject(err);\n          }\n\n          const isResultThenable = result !== true && isThenable(result);\n\n          // If the listener didn't returned true or a Promise, or called\n          // wrappedSendResponse synchronously, we can exit earlier\n          // because there will be no response sent from this listener.\n          if (result !== true && !isResultThenable && !didCallSendResponse) {\n            return false;\n          }\n\n          // A small helper to send the message if the promise resolves\n          // and an error if the promise rejects (a wrapped sendMessage has\n          // to translate the message into a resolved promise or a rejected\n          // promise).\n          const sendPromisedResult = promise => {\n            promise.then(msg => {\n              // send the message value.\n              sendResponse(msg);\n            }, error => {\n              // Send a JSON representation of the error if the rejected value\n              // is an instance of error, or the object itself otherwise.\n              let message;\n              if (error && (error instanceof Error || typeof error.message === \"string\")) {\n                message = error.message;\n              } else {\n                message = \"An unexpected error occurred\";\n              }\n\n              sendResponse({\n                __mozWebExtensionPolyfillReject__: true,\n                message\n              });\n            }).catch(err => {\n              // Print an error on the console if unable to send the response.\n              console.error(\"Failed to send onMessage rejected reply\", err);\n            });\n          };\n\n          // If the listener returned a Promise, send the resolved value as a\n          // result, otherwise wait the promise related to the wrappedSendResponse\n          // callback to resolve and send it as a response.\n          if (isResultThenable) {\n            sendPromisedResult(result);\n          } else {\n            sendPromisedResult(sendResponsePromise);\n          }\n\n          // Let Chrome know that the listener is replying.\n          return true;\n        };\n      });\n\n      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {\n        if (extensionAPIs.runtime.lastError) {\n          // Detect when none of the listeners replied to the sendMessage call and resolve\n          // the promise to undefined as in Firefox.\n          // See https://github.com/mozilla/webextension-polyfill/issues/130\n          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {\n            resolve();\n          } else {\n            reject(extensionAPIs.runtime.lastError);\n          }\n        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {\n          // Convert back the JSON representation of the error into\n          // an Error instance.\n          reject(new Error(reply.message));\n        } else {\n          resolve(reply);\n        }\n      };\n\n      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {\n        if (args.length < metadata.minArgs) {\n          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        if (args.length > metadata.maxArgs) {\n          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        return new Promise((resolve, reject) => {\n          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });\n          args.push(wrappedCb);\n          apiNamespaceObj.sendMessage(...args);\n        });\n      };\n\n      const staticWrappers = {\n        runtime: {\n          onMessage: wrapEvent(onMessageWrappers),\n          onMessageExternal: wrapEvent(onMessageWrappers),\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", { minArgs: 1, maxArgs: 3 })\n        },\n        tabs: {\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", { minArgs: 2, maxArgs: 3 })\n        }\n      };\n      const settingMetadata = {\n        clear: { minArgs: 1, maxArgs: 1 },\n        get: { minArgs: 1, maxArgs: 1 },\n        set: { minArgs: 1, maxArgs: 1 }\n      };\n      apiMetadata.privacy = {\n        network: {\n          networkPredictionEnabled: settingMetadata,\n          webRTCIPHandlingPolicy: settingMetadata\n        },\n        services: {\n          passwordSavingEnabled: settingMetadata\n        },\n        websites: {\n          hyperlinkAuditingEnabled: settingMetadata,\n          referrersEnabled: settingMetadata\n        }\n      };\n\n      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);\n    };\n\n    if (typeof chrome != \"object\" || !chrome || !chrome.runtime || !chrome.runtime.id) {\n      throw new Error(\"This script should only be loaded in a browser extension.\");\n    }\n\n    // The build process adds a UMD wrapper around this file, which makes the\n    // `module` variable available.\n    module.exports = wrapAPIs(chrome);\n  } else {\n    module.exports = browser;\n  }\n});\n//# sourceMappingURL=browser-polyfill.js.map\n");

/***/ }),

/***/ 6252:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var SourceMapConsumer = (__webpack_require__(9125).SourceMapConsumer);
var path = __webpack_require__(1017);

var fs;
try {
  fs = __webpack_require__(7147);
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(5420);

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function globalProcessVersion() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.version;
  } else {
    return '';
  }
}

function globalProcessStderr() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.stderr;
  }
}

function globalProcessExit(code) {
  if ((typeof process === 'object') && (process !== null) && (typeof process.exit === 'function')) {
    return process.exit(code);
  }
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  var stderr = globalProcessStderr();
  if (stderr && stderr._handle && stderr._handle.setBlocking) {
    stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  globalProcessExit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ 8213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.I = ArraySet;


/***/ }),

/***/ 6400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(7923);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ 7923:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ 1188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.H = MappingList;


/***/ }),

/***/ 2826:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.U = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ 6771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);
var binarySearch = __webpack_require__(9216);
var ArraySet = (__webpack_require__(8213)/* .ArraySet */ .I);
var base64VLQ = __webpack_require__(6400);
var quickSort = (__webpack_require__(2826)/* .quickSort */ .U);

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

__webpack_unused_export__ = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

__webpack_unused_export__ = IndexedSourceMapConsumer;


/***/ }),

/***/ 4433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(6400);
var util = __webpack_require__(2728);
var ArraySet = (__webpack_require__(8213)/* .ArraySet */ .I);
var MappingList = (__webpack_require__(1188)/* .MappingList */ .H);

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.h = SourceMapGenerator;


/***/ }),

/***/ 7085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = (__webpack_require__(4433)/* .SourceMapGenerator */ .h);
var util = __webpack_require__(2728);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

__webpack_unused_export__ = SourceNode;


/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
/* unused reexport */ __webpack_require__(4433)/* .SourceMapGenerator */ .h;
exports.SourceMapConsumer = __webpack_require__(6771).SourceMapConsumer;
/* unused reexport */ __webpack_require__(7085);


/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 467:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__467__;

/***/ }),

/***/ 3476:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3476__;

/***/ }),

/***/ 6884:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6884__;

/***/ }),

/***/ 9582:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9582__;

/***/ }),

/***/ 5327:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5327__;

/***/ }),

/***/ 7836:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7836__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(8777);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxrQ0FBa0M7QUFDN0YsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0NBQWtDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RCxZQUFZO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLHNCQUFzQiwrQ0FBK0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBZ0M7Ozs7Ozs7O0FDeG5DaEMsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLElBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLElBQVE7QUFDM0IsZUFBZSw2Q0FBK0I7QUFDOUMsa0JBQWtCLGdEQUFxQzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUEwQjs7Ozs7Ozs7O0FDeGExQixpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHVEQUFvRDtBQUM3RSxXQUFXLG1CQUFPLENBQUMsSUFBUTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7O0FDdmV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQXFGO0FBQ3JGLHVFQUFrRjtBQUNsRiwrQ0FBNEQ7Ozs7Ozs7OztBQ1A1RDs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUpBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vY2xpZW50L0V4dGVuc2lvbkNvbXBpbGVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vY2xpZW50L2FyZ3MtcGFyc2VyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vY2xpZW50L2FyZ3MuY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9jbGllbnQvZXZlbnRzLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL2NsaWVudC9tYW51YWwudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvRXh0ZW5zaW9uUmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvY29uc3RhbnRzL2Zhc3QtcmVsb2FkaW5nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbG9nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbWlkZGxld2FyZS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvcmVmZXJlbmNlLWRvY3MuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvSG90UmVsb2FkZXJTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvaG90LXJlbG9hZC9TaWduRW1pdHRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL2NoYW5nZXMtdHJpZ2dlcmVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvTWVzc2FnZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9tZXNzYWdlcy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvd2FybmluZ3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9taWRkbGV3YXJlL21pZGRsZXdhcmUtaW5qZWN0b3IudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9taWRkbGV3YXJlLXNvdXJjZS1idWlsZGVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvdXRpbHMvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy91dGlscy9tYW5pZmVzdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy91dGlscy9zaWduYWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy93ZWJwYWNrL0NvbXBpbGVyRXZlbnRzRmFjYWRlLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci1mcm9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY3VzdG9tL3RyYXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vemFsZ28uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL2FtZXJpY2EuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhaW5ib3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvemVicmEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vaGFzLWZsYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9zYWZlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL21pZGRsZXdhcmUvd2VyLW1pZGRsZXdhcmUucmF3LnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L3NvdXJjZS1tYXAtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9hcnJheS1zZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmFzZTY0LXZscS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmluYXJ5LXNlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9tYXBwaW5nLWxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvcXVpY2stc29ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1ub2RlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9zb3VyY2UtbWFwLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJvc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInByb2Nlc3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwidXRpbFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcImxvZGFzaFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIm1pbmltaXN0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgdW1kIFwidXNlcmFnZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgdW1kIFwid2VicGFja1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIndlYnBhY2stc291cmNlc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIndzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW5pbWlzdFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW5pbWlzdFwiLCBcIndlYnBhY2tcIiwgXCJsb2Rhc2hcIiwgXCJ1c2VyYWdlbnRcIiwgXCJ3c1wiLCBcIndlYnBhY2stc291cmNlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWluaW1pc3RcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrXCIpLCByZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwidXNlcmFnZW50XCIpLCByZXF1aXJlKFwid3NcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLXNvdXJjZXNcIikpIDogZmFjdG9yeShyb290W1wibWluaW1pc3RcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1wibG9kYXNoXCJdLCByb290W1widXNlcmFnZW50XCJdLCByb290W1wid3NcIl0sIHJvb3RbXCJ3ZWJwYWNrLXNvdXJjZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zNDc2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzk1ODJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNDY3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzY4ODRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzgzNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX181MzI3X18pIHtcbnJldHVybiAiLCJpbXBvcnQgeyBsb2cgfSBmcm9tIFwidXRpbFwiO1xuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IEV4dGVuc2lvblJlbG9hZGVySW1wbCBmcm9tIFwiLi4vc3JjL0V4dGVuc2lvblJlbG9hZGVyXCI7XG5pbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4uL3NyYy91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uQ29tcGlsZXIge1xuICBwcml2YXRlIHN0YXRpYyB0cmVhdEVycm9ycyhlcnIpIHtcbiAgICBsb2coZXJyLnN0YWNrIHx8IGVycik7XG4gICAgaWYgKGVyci5kZXRhaWxzKSB7XG4gICAgICBsb2coZXJyLmRldGFpbHMpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbXBpbGVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogd2VicGFjay5Db25maWd1cmF0aW9uLCBwbHVnaW5PcHRpb25zOiBJUGx1Z2luT3B0aW9ucykge1xuICAgIHRoaXMuY29tcGlsZXIgPSB3ZWJwYWNrKGNvbmZpZyk7XG4gICAgbmV3IEV4dGVuc2lvblJlbG9hZGVySW1wbChwbHVnaW5PcHRpb25zKS5hcHBseSh0aGlzLmNvbXBpbGVyKTtcbiAgfVxuXG4gIHB1YmxpYyB3YXRjaCgpIHtcbiAgICB0aGlzLmNvbXBpbGVyLndhdGNoKHt9LCAoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gRXh0ZW5zaW9uQ29tcGlsZXIudHJlYXRFcnJvcnMoZXJyKTtcbiAgICAgIH1cbiAgICAgIGluZm8oc3RhdHMudG9TdHJpbmcoeyBjb2xvcnM6IHRydWUgfSkpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGN3ZCB9IGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwidXRpbFwiO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9DT05GSUcsXG4gIERFRkFVTFRfUE9SVCxcbn0gZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvb3B0aW9ucy5jb25zdGFudHNcIjtcbmltcG9ydCB7IElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXJcIjtcbmltcG9ydCB7IENPTkZJRywgSEVMUCwgTUFOSUZFU1QsIE5PX1BBR0VfUkVMT0FELCBQT1JUIH0gZnJvbSBcIi4vYXJncy5jb25zdGFudFwiO1xuaW1wb3J0IHsgU0lHX0VYSVQgfSBmcm9tIFwiLi9ldmVudHMuY29uc3RhbnRzXCI7XG5pbXBvcnQgbWFudWFsIGZyb20gXCIuL21hbnVhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoYXJnczogb2JqZWN0KSA9PiB7XG4gIGlmIChhcmdzW0hFTFBdKSB7XG4gICAgbG9nKG1hbnVhbCgpKTtcbiAgICB0aHJvdyB7IHR5cGU6IFNJR19FWElULCBwYXlsb2FkOiAwIH07XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBhcmdzW0NPTkZJR10gfHwgREVGQVVMVF9DT05GSUc7XG4gIGNvbnN0IHBvcnQgPSBhcmdzW1BPUlRdIHx8IERFRkFVTFRfUE9SVDtcbiAgY29uc3QgbWFuaWZlc3QgPSBhcmdzW01BTklGRVNUXSB8fCBudWxsO1xuXG4gIGNvbnN0IHBsdWdpbk9wdGlvbnM6IElQbHVnaW5PcHRpb25zID0ge1xuICAgIG1hbmlmZXN0LFxuICAgIHBvcnQsXG4gICAgcmVsb2FkUGFnZTogIWFyZ3NbTk9fUEFHRV9SRUxPQURdLFxuICB9O1xuXG4gIGNvbnN0IG9wdFBhdGggPSByZXNvbHZlKGN3ZCgpLCBjb25maWcpO1xuXG4gIHRyeSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ldmFsXG4gICAgY29uc3Qgd2VicGFja0NvbmZpZyA9IGV2YWwoXCJyZXF1aXJlXCIpKG9wdFBhdGgpO1xuICAgIHJldHVybiB7IHdlYnBhY2tDb25maWcsIHBsdWdpbk9wdGlvbnMgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nKGBbRXJyb3JdIENvdWxkbid0IHJlcXVpcmUgdGhlIGZpbGU6ICR7b3B0UGF0aH1gKTtcbiAgICBsb2coZXJyKTtcbiAgICB0aHJvdyB7IHR5cGU6IFNJR19FWElULCBwYXlsb2FkOiAxIH07XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgSEVMUCA9IFwiaGVscFwiO1xuZXhwb3J0IGNvbnN0IENPTkZJRyA9IFwiY29uZmlnXCI7XG5leHBvcnQgY29uc3QgUE9SVCA9IFwicG9ydFwiO1xuZXhwb3J0IGNvbnN0IE5PX1BBR0VfUkVMT0FEID0gXCJuby1wYWdlLXJlbG9hZFwiO1xuZXhwb3J0IGNvbnN0IE1BTklGRVNUID0gXCJtYW5pZmVzdFwiO1xuIiwiZXhwb3J0IGNvbnN0IFNJR19FWElUID0gXCJTSUdfRVhJVFwiO1xuIiwiaW1wb3J0ICogYXMgbWluaW1pc3QgZnJvbSBcIm1pbmltaXN0XCI7XG5pbXBvcnQgeyBpbnN0YWxsIH0gZnJvbSBcInNvdXJjZS1tYXAtc3VwcG9ydFwiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcInV0aWxcIjtcbmltcG9ydCBhcmdzUGFyc2VyIGZyb20gXCIuL2FyZ3MtcGFyc2VyXCI7XG5pbXBvcnQgeyBTSUdfRVhJVCB9IGZyb20gXCIuL2V2ZW50cy5jb25zdGFudHNcIjtcbmltcG9ydCBFeHRlbnNpb25Db21waWxlciBmcm9tIFwiLi9FeHRlbnNpb25Db21waWxlclwiO1xuXG5pbnN0YWxsKCk7XG5jb25zdCB7IF8sIC4uLmFyZ3MgfSA9IG1pbmltaXN0KHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG5cbnRyeSB7XG4gIGNvbnN0IHsgd2VicGFja0NvbmZpZywgcGx1Z2luT3B0aW9ucyB9ID0gYXJnc1BhcnNlcihhcmdzKTtcbiAgY29uc3QgY29tcGlsZXIgPSBuZXcgRXh0ZW5zaW9uQ29tcGlsZXIod2VicGFja0NvbmZpZywgcGx1Z2luT3B0aW9ucyk7XG4gIGNvbXBpbGVyLndhdGNoKCk7XG59IGNhdGNoIChlcnIpIHtcbiAgaWYgKGVyci50eXBlID09PSBTSUdfRVhJVCkge1xuICAgIHByb2Nlc3MuZXhpdChlcnIucGF5bG9hZCk7XG4gIH0gZWxzZSB7XG4gICAgbG9nKGVycik7XG4gICAgcHJvY2Vzcy5leGl0KGVyci5jb2RlKTtcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6IG1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHtcbiAgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxuICBERUZBVUxUX0NPTkZJRyxcbiAgREVGQVVMVF9DT05URU5UX1NDUklQVF9FTlRSWSxcbiAgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcbiAgREVGQVVMVF9QT1JULFxufSBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBgXG5Vc2FnZTpcbiAgICB3ZXIgWy0tY29uZmlnIDxjb25maWdfcGF0aD5dIFstLXBvcnQgPHBvcnRfbnVtYmVyPl0gWy0tbm8tcGFnZS1yZWxvYWRdIFstLWNvbnRlbnQtc2NyaXB0IDxjb250ZW50X3NjcmlwdF9wYXRocz5dIFstLWJhY2tncm91bmQgPGJnX3NjcmlwdF9wYXRoPl0gWy0tZXh0ZW5zaW9uLXBhZ2UgPGV4dGVuc2lvbl9wYWdlX3BhdGhzPl1cblxuQ29tcGxldGUgQVBJOlxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbnwgICAgICAgIG5hbWUgICAgICAgIHwgICAgZGVmYXVsdCAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICB8XG58LS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxufCAtLWhlbHAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8IFNob3cgdGhpcyBoZWxwXG58IC0tY29uZmlnICAgICAgICAgICB8ICR7REVGQVVMVF9DT05GSUd9IFxcfCBUaGUgd2VicGFjayBjb25maWd1cmF0aW9uIGZpbGUgcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG58IC0tcG9ydCAgICAgICAgICAgICB8ICR7REVGQVVMVF9QT1JUfSAgIHwgVGhlIHBvcnQgdG8gcnVuIHRoZSBzZXJ2ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxufCAtLWNvbnRlbnQtc2NyaXB0ICAgfCAke0RFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUll9ICAgIHwgVGhlICoqZW50cnkvZW50cmllcyoqIG5hbWUocykgZm9yIHRoZSBjb250ZW50IHNjcmlwdChzKSAgICAgICAgICAgfFxufCAtLWJhY2tncm91bmQgICAgICAgfCAke0RFRkFVTFRfQkFDS0dST1VORF9FTlRSWX0gICAgICAgIHwgVGhlICoqZW50cnkqKiBuYW1lIGZvciB0aGUgYmFja2dyb3VuZCBzY3JpcHQgICAgICAgICAgICAgICAgICAgICAgfFxufCAtLWV4dGVuc2lvbi1wYWdlICAgfCAke0RFRkFVTFRfRVhURU5TSU9OX1BBR0VfRU5UUll9ICAgICAgICAgICAgIHwgVGhlICoqZW50cnkvZW50cmllcyoqIG5hbWUocykgZm9yIHRoZSBleHRlbnNpb24gcGFnZXMocykgICAgICAgICAgfFxufCAtLW1hbmlmZXN0ICAgICAgICAgfCAgICAgICAgbnVsbCAgICAgICB8IFRoZSAqKm1hbmlmZXN0Lmpzb24qKiBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgLS1uby1wYWdlLXJlbG9hZCAgIHwgICAgICAgICAgICAgICAgICAgfCBEaXNhYmxlIHRoZSBhdXRvIHJlbG9hZGluZyBvZiBhbGwgKipwYWdlcyoqIHdoaWNoIHJ1bnMgdGhlIHBsdWdpbiB8XG4rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuYDtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQ29tcGlsZXIsIENvbXBpbGF0aW9uLCBDaHVuaywgRW50cnksIHZlcnNpb24gfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IHsgY2hhbmdlc1RyaWdnZXJlciB9IGZyb20gXCIuL2hvdC1yZWxvYWRcIjtcbmltcG9ydCB7IG9ubHlPbkRldmVsb3BtZW50TXNnIH0gZnJvbSBcIi4vbWVzc2FnZXMvd2FybmluZ3NcIjtcbmltcG9ydCB7IG1pZGRsZXdhcmVJbmplY3RvciB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjtcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi91dGlscy9kZWZhdWx0LW9wdGlvbnNcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IGV4dHJhY3RFbnRyaWVzIH0gZnJvbSBcIi4vdXRpbHMvbWFuaWZlc3RcIjtcbmltcG9ydCBBYnN0cmFjdFBsdWdpblJlbG9hZGVyIGZyb20gXCIuL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlclwiO1xuaW1wb3J0IENvbXBpbGVyRXZlbnRzRmFjYWRlIGZyb20gXCIuL3dlYnBhY2svQ29tcGlsZXJFdmVudHNGYWNhZGVcIjtcblxuaW1wb3J0IHtcbiAgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2UsXG4gIElQbHVnaW5PcHRpb25zLFxufSBmcm9tIFwiLi4vdHlwaW5ncy93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnNpb25SZWxvYWRlckltcGwgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblJlbG9hZGVyXG4gIGltcGxlbWVudHMgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2Uge1xuICBwcml2YXRlIF9vcHRzPzogSVBsdWdpbk9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IElQbHVnaW5PcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9vcHRzID0gb3B0aW9ucztcbiAgICB0aGlzLl9jaHVua1ZlcnNpb25zID0ge307XG4gIH1cblxuICBwdWJsaWMgX2lzV2VicGFja0dUb0VWNCgpIHtcbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgY29uc3QgW21ham9yXSA9IHZlcnNpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgaWYgKHBhcnNlSW50KG1ham9yLCAxMCkgPj0gNCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIF93aGF0Q2hhbmdlZChcbiAgICBjaHVua3M6IENvbXBpbGF0aW9uW1wiY2h1bmtzXCJdLFxuICAgIHsgYmFja2dyb3VuZCwgY29udGVudFNjcmlwdCwgZXh0ZW5zaW9uUGFnZSB9OiBJRW50cmllc09wdGlvbixcbiAgKSB7XG4gICAgY29uc3QgY2hhbmdlZENodW5rcyA9IFtdIGFzIENodW5rW107XG5cbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgY29uc3Qgb2xkVmVyc2lvbiA9IHRoaXMuX2NodW5rVmVyc2lvbnNbY2h1bmsubmFtZV07XG4gICAgICB0aGlzLl9jaHVua1ZlcnNpb25zW2NodW5rLm5hbWVdID0gY2h1bmsuaGFzaDtcbiAgICAgIGlmIChjaHVuay5oYXNoICE9PSBvbGRWZXJzaW9uKSBjaGFuZ2VkQ2h1bmtzLnB1c2goY2h1bmspO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRPckJnQ2hhbmdlZCA9IGNoYW5nZWRDaHVua3Muc29tZSgoeyBuYW1lIH0pID0+IHtcbiAgICAgIGxldCBjb250ZW50Q2hhbmdlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgYmdDaGFuZ2VkID0gbmFtZSA9PT0gYmFja2dyb3VuZDtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudFNjcmlwdCkpIHtcbiAgICAgICAgY29udGVudENoYW5nZWQgPSBjb250ZW50U2NyaXB0LnNvbWUoc2NyaXB0ID0+IHNjcmlwdCA9PT0gbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50Q2hhbmdlZCA9IG5hbWUgPT09IGNvbnRlbnRTY3JpcHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50Q2hhbmdlZCB8fCBiZ0NoYW5nZWQ7XG4gICAgfSk7XG5cbiAgICAvL1xuICAgIGNvbnN0IG9ubHlQYWdlQ2hhbmdlZCA9XG4gICAgICAhY29udGVudE9yQmdDaGFuZ2VkICYmXG4gICAgICBjaGFuZ2VkQ2h1bmtzLnNvbWUoKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGxldCBwYWdlQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVuc2lvblBhZ2UpKSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBleHRlbnNpb25QYWdlLnNvbWUoc2NyaXB0ID0+IHNjcmlwdCA9PT0gbmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBuYW1lID09PSBleHRlbnNpb25QYWdlO1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VDaGFuZ2VkO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4geyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9O1xuICB9XG5cbiAgcHVibGljIF9yZWdpc3RlclBsdWdpbihjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBjb25zdCB7IHJlbG9hZFBhZ2UsIHBvcnQsIGVudHJpZXMsIG1hbmlmZXN0IH0gPSBtZXJnZShcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgdGhpcy5fb3B0cyxcbiAgICApO1xuXG4gICAgY29uc3QgcGFyc2VkRW50cmllczogSUVudHJpZXNPcHRpb24gPSBtYW5pZmVzdFxuICAgICAgPyBleHRyYWN0RW50cmllcyhcbiAgICAgICAgICBjb21waWxlci5vcHRpb25zLmVudHJ5IGFzIEVudHJ5LFxuICAgICAgICAgIGNvbXBpbGVyLm9wdGlvbnMub3V0cHV0IGFzIENvbXBpbGVyW1wib3B0aW9uc1wiXVtcIm91dHB1dFwiXSxcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgKVxuICAgICAgOiBlbnRyaWVzO1xuXG4gICAgdGhpcy5fZXZlbnRBUEkgPSBuZXcgQ29tcGlsZXJFdmVudHNGYWNhZGUoY29tcGlsZXIpO1xuICAgIHRoaXMuX2luamVjdG9yID0gbWlkZGxld2FyZUluamVjdG9yKHBhcnNlZEVudHJpZXMsIHsgcG9ydCwgcmVsb2FkUGFnZSB9KTtcbiAgICB0aGlzLl90cmlnZ2VyZXIgPSBjaGFuZ2VzVHJpZ2dlcmVyKHBvcnQsIHJlbG9hZFBhZ2UpO1xuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cygoY29tcCwgY2h1bmtzKSA9PiB7XG4gICAgICBjb21wLmFzc2V0cyA9IHtcbiAgICAgICAgLi4uY29tcC5hc3NldHMsXG4gICAgICAgIC4uLnRoaXMuX2luamVjdG9yKGNvbXAuYXNzZXRzLCBjaHVua3MpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyRW1pdChjb21wID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGVudE9yQmdDaGFuZ2VkLCBvbmx5UGFnZUNoYW5nZWQgfSA9IHRoaXMuX3doYXRDaGFuZ2VkKFxuICAgICAgICBjb21wLmNodW5rcyxcbiAgICAgICAgcGFyc2VkRW50cmllcyxcbiAgICAgICk7XG5cbiAgICAgIGlmIChjb250ZW50T3JCZ0NoYW5nZWQgfHwgb25seVBhZ2VDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJlcihvbmx5UGFnZUNoYW5nZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFwcGx5KGNvbXBpbGVyOiBDb21waWxlcikge1xuICAgIGlmIChcbiAgICAgICh0aGlzLl9pc1dlYnBhY2tHVG9FVjQoKVxuICAgICAgICA/IGNvbXBpbGVyLm9wdGlvbnMubW9kZVxuICAgICAgICA6IHByb2Nlc3MuZW52Lk5PREVfRU5WKSA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclBsdWdpbihjb21waWxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4ob25seU9uRGV2ZWxvcG1lbnRNc2cuZ2V0KCkpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBDaHJvbWUgbGV0cyBvbmx5IGEgbWF4IG51bWJlciBvZiBjYWxscyBpbiBhIHRpbWUgZnJhbWVcbiAqIGJlZm9yZSBibG9jayB0aGUgcGx1Z2luIGZvciBiZSByZWxvYWRpbmcgaXRzZWxmIHRvIG11Y2hcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3J1YmVuc3BnY2F2YWxjYW50ZS93ZWJwYWNrLWNocm9tZS1leHRlbnNpb24tcmVsb2FkZXIvaXNzdWVzLzJcbiAqL1xuZXhwb3J0IGNvbnN0IEZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUgPSAyMDAwO1xuXG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfQ0FMTFMgPSA2O1xuZXhwb3J0IGNvbnN0IEZBU1RfUkVMT0FEX1dBSVQgPSAxMCAqIDEwMDA7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbi8qKlxuICogQSBuZXcgcmVsb2FkaW5nIHJhdGUgd2FzIGNyZWF0ZWQgYWZ0ZXIgb3BlbmluZyBhIGJ1ZyB0aWNrZXQgb25cbiAqIENocm9taXVtLCBhbmQgdGhlIHJldmlzaW9uIHdhcyBtZXJnZWQgdG8gbWFzdGVyXG4gKiBAc2VlIGh0dHBzOi8vY2hyb21pdW0tcmV2aWV3Lmdvb2dsZXNvdXJjZS5jb20vYy9jaHJvbWl1bS9zcmMvKy8xMzQwMjcyXG4gKi9cblxuLyoqXG4gKiBUaGUgQ2hyb21lL0Nocm9taXVtIHZlcnNpb24gbnVtYmVyIHRoYXQgaW5jbHVkZXMgdGhlIG5ldyByYXRlc1xuICogQHNlZSBodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY2hyb21pdW0tZmluZC1yZWxlYXNlcy1zdGF0aWMvZDNiLmh0bWwjZDNiMjVlMTM4MDk4NGIyZjFmMjNkMGU4ZGMxYTMzNzc0M2M2Y2FhZlxuICovXG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0NIUk9NRV9WRVJTSU9OOiBCcm93c2VyVmVyc2lvbiA9IFs3MywgMCwgMzYzN107XG5cbmV4cG9ydCBjb25zdCBORVdfRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSA9IDEwMDA7XG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0NBTExTID0gMzA7XG4iLCJleHBvcnQgY29uc3QgTk9ORTogTE9HX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IExPRzogTE9HX0xPRyA9IDE7XG5leHBvcnQgY29uc3QgSU5GTzogTE9HX0lORk8gPSAyO1xuZXhwb3J0IGNvbnN0IFdBUk46IExPR19XQVJOID0gMztcbmV4cG9ydCBjb25zdCBFUlJPUjogTE9HX0VSUk9SID0gNDtcbmV4cG9ydCBjb25zdCBERUJVRzogTE9HX0RFQlVHID0gNTtcbiIsImV4cG9ydCBjb25zdCBSRUNPTk5FQ1RfSU5URVJWQUwgPSAyMDAwO1xuZXhwb3J0IGNvbnN0IFNPQ0tFVF9FUlJfQ09ERV9SRUYgPVxuICBcImh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NDU1I3NlY3Rpb24tNy40LjFcIjtcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX1BPUlQgPSA5MDkwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHID0gXCJ3ZWJwYWNrLmNvbmZpZy5qc1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVMT0FEX1BBR0UgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlkgPSBcImNvbnRlbnQtc2NyaXB0XCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZID0gXCJiYWNrZ3JvdW5kXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSA9IFwicG9wdXBcIjtcbiIsImV4cG9ydCBjb25zdCBSRUZfVVJMID1cbiAgXCJodHRwczovL2dpdGh1Yi5jb20vcnViZW5zcGdjYXZhbGNhbnRlL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dpa2kvR2VuZXJhbC1JbmZvcm1hdGlvblwiO1xuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwidXNlcmFnZW50XCI7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwid3NcIjtcbmltcG9ydCB7IGluZm8gfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgU2lnbkVtaXR0ZXIgZnJvbSBcIi4vU2lnbkVtaXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90UmVsb2FkZXJTZXJ2ZXIge1xuICBwcml2YXRlIF9zZXJ2ZXI6IFNlcnZlcjtcbiAgcHJpdmF0ZSBfc2lnbkVtaXR0ZXI6IFNpZ25FbWl0dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHBvcnQ6IG51bWJlcikge1xuICAgIHRoaXMuX3NlcnZlciA9IG5ldyBTZXJ2ZXIoeyBwb3J0IH0pO1xuICB9XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLl9zZXJ2ZXIub24oXCJjb25uZWN0aW9uXCIsICh3cywgbXNnKSA9PiB7XG4gICAgICBjb25zdCB1c2VyQWdlbnQgPSBwYXJzZShtc2cuaGVhZGVyc1tcInVzZXItYWdlbnRcIl0pO1xuICAgICAgdGhpcy5fc2lnbkVtaXR0ZXIgPSBuZXcgU2lnbkVtaXR0ZXIodGhpcy5fc2VydmVyLCB1c2VyQWdlbnQpO1xuXG4gICAgICB3cy5vbihcIm1lc3NhZ2VcIiwgKGRhdGE6IHN0cmluZykgPT5cbiAgICAgICAgaW5mbyhgTWVzc2FnZSBmcm9tICR7dXNlckFnZW50LmZhbWlseX06ICR7SlNPTi5wYXJzZShkYXRhKS5wYXlsb2FkfWApLFxuICAgICAgKTtcbiAgICAgIHdzLm9uKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgICAvLyBOT09QIC0gc3dhbGxvdyBzb2NrZXQgZXJyb3JzIGR1ZSB0byBodHRwOi8vZ2l0LmlvL3ZiaFNOXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduQ2hhbmdlKFxuICAgIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4gICAgb25seVBhZ2VDaGFuZ2VkOiBib29sZWFuLFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLl9zaWduRW1pdHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25FbWl0dGVyLnNhZmVTaWduQ2hhbmdlKHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB6aXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBBZ2VudCB9IGZyb20gXCJ1c2VyYWdlbnRcIjtcbmltcG9ydCB7IE9QRU4sIFNlcnZlciB9IGZyb20gXCJ3c1wiO1xuXG5pbXBvcnQge1xuICBGQVNUX1JFTE9BRF9DQUxMUyxcbiAgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSxcbiAgRkFTVF9SRUxPQURfV0FJVCxcbiAgTkVXX0ZBU1RfUkVMT0FEX0NBTExTLFxuICBORVdfRkFTVF9SRUxPQURfQ0hST01FX1ZFUlNJT04sXG4gIE5FV19GQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2Zhc3QtcmVsb2FkaW5nLmNvbnN0YW50c1wiO1xuaW1wb3J0IHsgZGVib3VuY2VTaWduYWwsIGZhc3RSZWxvYWRCbG9ja2VyIH0gZnJvbSBcIi4uL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb25cIjtcbmltcG9ydCB7IHNpZ25DaGFuZ2UgfSBmcm9tIFwiLi4vdXRpbHMvc2lnbmFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRW1pdHRlciB7XG4gIHByaXZhdGUgX3NhZmVTaWduQ2hhbmdlOiAoXG4gICAgcmVsb2FkUGFnZTogYm9vbGVhbixcbiAgICBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sXG4gICAgb25TdWNjZXNzOiAodmFsPzogYW55KSA9PiB2b2lkLFxuICAgIG9uRXJyb3I6IChlcnI6IEVycm9yKSA9PiB2b2lkLFxuICApID0+IHZvaWQ7XG4gIHByaXZhdGUgX3NlcnZlcjogU2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlcjogU2VydmVyLCB7IGZhbWlseSwgbWFqb3IsIG1pbm9yLCBwYXRjaCB9OiBBZ2VudCkge1xuICAgIHRoaXMuX3NlcnZlciA9IHNlcnZlcjtcbiAgICBpZiAoZmFtaWx5ID09PSBcIkNocm9tZVwiKSB7XG4gICAgICBjb25zdCBbcmVsb2FkQ2FsbHMsIHJlbG9hZERlYm91Y2luZ0ZyYW1lXSA9IHRoaXMuX3NhdGlzZmllcyhcbiAgICAgICAgW3BhcnNlSW50KG1ham9yLCAxMCksIHBhcnNlSW50KG1pbm9yLCAxMCksIHBhcnNlSW50KHBhdGNoLCAxMCldLFxuICAgICAgICBORVdfRkFTVF9SRUxPQURfQ0hST01FX1ZFUlNJT04sXG4gICAgICApXG4gICAgICAgID8gW05FV19GQVNUX1JFTE9BRF9DQUxMUywgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUVdXG4gICAgICAgIDogW0ZBU1RfUkVMT0FEX0NBTExTLCBGQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FXTtcblxuICAgICAgY29uc3QgZGVib3VuY2VyID0gZGVib3VuY2VTaWduYWwocmVsb2FkRGVib3VjaW5nRnJhbWUsIHRoaXMpO1xuICAgICAgY29uc3QgYmxvY2tlciA9IGZhc3RSZWxvYWRCbG9ja2VyKHJlbG9hZENhbGxzLCBGQVNUX1JFTE9BRF9XQUlULCB0aGlzKTtcbiAgICAgIHRoaXMuX3NhZmVTaWduQ2hhbmdlID0gZGVib3VuY2VyKGJsb2NrZXIodGhpcy5fc2V0dXBTYWZlU2lnbkNoYW5nZSgpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NhZmVTaWduQ2hhbmdlID0gdGhpcy5fc2V0dXBTYWZlU2lnbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYWZlU2lnbkNoYW5nZShcbiAgICByZWxvYWRQYWdlOiBib29sZWFuLFxuICAgIG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbixcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZShyZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQsIHJlcywgcmVqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4gICAgICBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sXG4gICAgICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQsXG4gICAgICBvbkVycm9yOiAoZXJyOiBFcnJvcikgPT4gdm9pZCxcbiAgICApID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NlbmRNc2coc2lnbkNoYW5nZSh7IHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCB9KSk7XG4gICAgICAgIG9uU3VjY2VzcygpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VuZE1zZyhtc2c6IGFueSkge1xuICAgIHRoaXMuX3NlcnZlci5jbGllbnRzLmZvckVhY2goY2xpZW50ID0+IHtcbiAgICAgIGlmIChjbGllbnQucmVhZHlTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdGlzZmllcyhcbiAgICBicm93c2VyVmVyc2lvbjogQnJvd3NlclZlcnNpb24sXG4gICAgdGFyZ2V0VmVyc2lvbjogQnJvd3NlclZlcnNpb24sXG4gICkge1xuICAgIGNvbnN0IHZlcnNpb25QYWlyczogVmVyc2lvblBhaXJbXSA9IHppcChicm93c2VyVmVyc2lvbiwgdGFyZ2V0VmVyc2lvbik7XG5cbiAgICBmb3IgKGNvbnN0IFt2ZXJzaW9uID0gMCwgdGFyZ2V0ID0gMF0gb2YgdmVyc2lvblBhaXJzKSB7XG4gICAgICBpZiAodmVyc2lvbiAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uID4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCBIb3RSZWxvYWRlclNlcnZlciBmcm9tIFwiLi9Ib3RSZWxvYWRlclNlcnZlclwiO1xuXG5jb25zdCBjaGFuZ2VzVHJpZ2dlcmVyOiBUcmlnZ2VyZXJGYWN0b3J5ID0gKFxuICBwb3J0OiBudW1iZXIsXG4gIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4pID0+IHtcbiAgY29uc3Qgc2VydmVyID0gbmV3IEhvdFJlbG9hZGVyU2VydmVyKHBvcnQpO1xuXG4gIGluZm8oXCJbIFN0YXJ0aW5nIHRoZSBIb3QgRXh0ZW5zaW9uIFJlbG9hZCBTZXJ2ZXIuLi4gXVwiKTtcbiAgc2VydmVyLmxpc3RlbigpO1xuXG4gIHJldHVybiAob25seVBhZ2VDaGFuZ2VkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICByZXR1cm4gc2VydmVyLnNpZ25DaGFuZ2UocmVsb2FkUGFnZSwgb25seVBhZ2VDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZXNUcmlnZ2VyZXI7XG4iLCJpbXBvcnQgX2NoYW5nZXNUcmlnZ2VyZXIgZnJvbSBcIi4vY2hhbmdlcy10cmlnZ2VyZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZXNUcmlnZ2VyZXIgPSBfY2hhbmdlc1RyaWdnZXJlcjtcbiIsImltcG9ydCB7IGJvbGQsIHdoaXRlIH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XG5pbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEVSUk9SLCBJTkZPLCBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRUZfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9yZWZlcmVuY2UtZG9jcy5jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG4gIHByaXZhdGUgcmVmZXJlbmNlTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgdHlwZTogTE9HX0lORk8gfCBMT0dfV0FSTiB8IExPR19FUlJPUjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgcmVmZXJlbmNlTnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZmVyZW5jZU51bWJlciA9IHJlZmVyZW5jZU51bWJlcjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIGdldChhZGRpdGlvbmFsRGF0YTogb2JqZWN0ID0ge30pIHtcbiAgICBjb25zdCBjb2RlID0gYFdFUi0ke3RoaXMuZ2V0UHJlZml4KCl9JHt0aGlzLnJlZmVyZW5jZU51bWJlcn1gO1xuICAgIGNvbnN0IHJlZkxpbmsgPSBib2xkKHdoaXRlKGAke1JFRl9VUkx9IyR7Y29kZX1gKSk7XG4gICAgcmV0dXJuIGBbJHtjb2RlfV0gJHt0ZW1wbGF0ZShcbiAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgIGFkZGl0aW9uYWxEYXRhLFxuICAgICl9LlxcblZpc2l0ICR7cmVmTGlua30gZm9yIGNvbXBsZXRlIGRldGFpbHNcXG5gO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmVmaXgoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgSU5GTzpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgICAgY2FzZSBXQVJOOlxuICAgICAgICByZXR1cm4gXCJXXCI7XG4gICAgICBjYXNlIEVSUk9SOlxuICAgICAgICByZXR1cm4gXCJFXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBFUlJPUiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgYmdTY3JpcHRFbnRyeUVycm9yTXNnID0gbmV3IE1lc3NhZ2UoXG4gIEVSUk9SLFxuICAxLFxuICBcIkJhY2tncm91bmQgc2NyaXB0IHdlYnBhY2sgZW50cnkgbm90IGZvdW5kL21hdGNoIFxcXG50aGUgcHJvdmlkZWQgb24gJ21hbmlmZXN0Lmpzb24nIG9yICdlbnRyeS5iYWNrZ3JvdW5kJyBcXFxub3B0aW9uIG9mIHRoZSBwbHVnaW5cIixcbik7XG5cbmV4cG9ydCBjb25zdCBiZ1NjcmlwdE1hbmlmZXN0UmVxdWlyZWRNc2cgPSBuZXcgTWVzc2FnZShcbiAgRVJST1IsXG4gIDIsXG4gIFwiQmFja2dyb3VuZCBzY3JpcHQgb24gbWFuaWZlc3QgaXMgcmVxdWlyZWRcIixcbik7XG4iLCJpbXBvcnQgeyBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBvbmx5T25EZXZlbG9wbWVudE1zZyA9IG5ldyBNZXNzYWdlKFxuICBXQVJOLFxuICAxLFxuICBcIldhcm5pbmcsIEV4dGVuc2lvbiBSZWxvYWRlciBQbHVnaW4gd2FzIG5vdCBlbmFibGVkISBcXFxuSXQgcnVucyBvbmx5IG9uIHdlYnBhY2sgLS1tb2RlPWRldmVsb3BtZW50ICh2NCBvciBtb3JlKSBcXFxub3Igd2l0aCBOT0RFX0VOVj1kZXZlbG9wbWVudCAobG93ZXIgdmVyc2lvbnMpXCIsXG4pO1xuIiwiaW1wb3J0IF9taWRkbGV3YXJlSW5qZWN0b3IgZnJvbSBcIi4vbWlkZGxld2FyZS1pbmplY3RvclwiO1xuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZUluamVjdG9yID0gX21pZGRsZXdhcmVJbmplY3RvcjtcbiIsImltcG9ydCB7IENvbXBpbGF0aW9uIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB7IENvbmNhdFNvdXJjZSwgU291cmNlIH0gZnJvbSBcIndlYnBhY2stc291cmNlc1wiO1xuaW1wb3J0IHsgU291cmNlRmFjdG9yeSB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XG5pbXBvcnQgbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIgZnJvbSBcIi4vbWlkZGxld2FyZS1zb3VyY2UtYnVpbGRlclwiO1xuXG5jb25zdCBtaWRkbGV3YXJlSW5qZWN0b3I6IE1pZGRsZXdhcmVJbmplY3RvciA9IChcbiAgeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH0sXG4gIHsgcG9ydCwgcmVsb2FkUGFnZSB9LFxuKSA9PiB7XG4gIGNvbnN0IHNvdXJjZTogU291cmNlID0gbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIoeyBwb3J0LCByZWxvYWRQYWdlIH0pO1xuICBjb25zdCBzb3VyY2VGYWN0b3J5OiBTb3VyY2VGYWN0b3J5ID0gKC4uLnNvdXJjZXMpOiBTb3VyY2UgPT5cbiAgICBuZXcgQ29uY2F0U291cmNlKC4uLnNvdXJjZXMpO1xuXG4gIGNvbnN0IG1hdGNoQmdPckNvbnRlbnRPclBhZ2UgPSAobmFtZTogc3RyaW5nKSA9PlxuICAgIG5hbWUgPT09IGJhY2tncm91bmQgfHxcbiAgICBuYW1lID09PSBjb250ZW50U2NyaXB0IHx8XG4gICAgKGNvbnRlbnRTY3JpcHQgJiYgY29udGVudFNjcmlwdC5pbmNsdWRlcyhuYW1lKSkgfHxcbiAgICBuYW1lID09PSBleHRlbnNpb25QYWdlIHx8XG4gICAgKGV4dGVuc2lvblBhZ2UgJiYgZXh0ZW5zaW9uUGFnZS5pbmNsdWRlcyhuYW1lKSk7XG5cbiAgcmV0dXJuIChhc3NldHMsIGNodW5rczogQ29tcGlsYXRpb25bXCJjaHVua3NcIl0pID0+XG4gICAgQXJyYXkuZnJvbShjaHVua3MpLnJlZHVjZSgocHJldiwgeyBuYW1lLCBmaWxlcyB9KSA9PiB7XG4gICAgICBpZiAobWF0Y2hCZ09yQ29udGVudE9yUGFnZShuYW1lKSkge1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGVudHJ5UG9pbnQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFbnRyeSBwb2ludDogJHtlbnRyeVBvaW50fWApO1xuICAgICAgICAgIGlmICgvXFwuanMkLy50ZXN0KGVudHJ5UG9pbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFNyYyA9IHNvdXJjZUZhY3Rvcnkoc291cmNlLCBhc3NldHNbZW50cnlQb2ludF0pO1xuICAgICAgICAgICAgcHJldltlbnRyeVBvaW50XSA9IGZpbmFsU3JjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlSW5qZWN0b3I7XG4iLCJpbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCByYXdTb3VyY2UgZnJvbSBcInJhdy1sb2FkZXIhLi93ZXItbWlkZGxld2FyZS5yYXdcIjtcbmltcG9ydCBwb2x5ZmlsbFNvdXJjZSBmcm9tIFwicmF3LWxvYWRlciF3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcbmltcG9ydCB7IFJhd1NvdXJjZSwgU291cmNlIH0gZnJvbSBcIndlYnBhY2stc291cmNlc1wiO1xuXG5pbXBvcnQge1xuICBSRUNPTk5FQ1RfSU5URVJWQUwsXG4gIFNPQ0tFVF9FUlJfQ09ERV9SRUYsXG59IGZyb20gXCIuLi9jb25zdGFudHMvbWlkZGxld2FyZS1jb25maWcuY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBzaWduYWxzIGZyb20gXCIuLi91dGlscy9zaWduYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZVdhcmVTb3VyY2VCdWlsZGVyKHtcbiAgcG9ydCxcbiAgcmVsb2FkUGFnZSxcbn06IElNaWRkbGV3YXJlVGVtcGxhdGVQYXJhbXMpOiBTb3VyY2Uge1xuICBjb25zdCB0bXBsID0gdGVtcGxhdGUocmF3U291cmNlKTtcblxuICByZXR1cm4gbmV3IFJhd1NvdXJjZShcbiAgICB0bXBsKHtcbiAgICAgIFdTSG9zdDogYHdzOi8vbG9jYWxob3N0OiR7cG9ydH1gLFxuICAgICAgY29uZmlnOiBKU09OLnN0cmluZ2lmeSh7IFJFQ09OTkVDVF9JTlRFUlZBTCwgU09DS0VUX0VSUl9DT0RFX1JFRiB9KSxcbiAgICAgIHBvbHlmaWxsU291cmNlOiBgXCJ8fCR7cG9seWZpbGxTb3VyY2V9XCJgLFxuICAgICAgcmVsb2FkUGFnZTogYCR7cmVsb2FkUGFnZX1gLFxuICAgICAgc2lnbmFsczogSlNPTi5zdHJpbmdpZnkoc2lnbmFscyksXG4gICAgfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSwgcnVuSW5Db250ZXh0IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgaW5mbywgd2FybiB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2VTaWduYWwgPSAoZGVib3VjaW5nRnJhbWU6IG51bWJlciwgY29udGV4dD86IG9iamVjdCkgPT4gKFxuICBmdW5jOiAoLi4uYXJnczogYW55W10pID0+IGFueSxcbikgPT4ge1xuICBpZiAoY29udGV4dCkge1xuICAgIHJ1bkluQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSgoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9LCBkZWJvdWNpbmdGcmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmFzdFJlbG9hZEJsb2NrZXIgPSAobWF4Q2FsbHM6IG51bWJlciwgd2FpdDogbnVtYmVyLCBjb250ZXh0KSA9PiAoXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LFxuKSA9PiB7XG4gIGxldCBjYWxscyA9IDA7XG4gIGxldCBpbldhaXQgPSBmYWxzZTtcblxuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoaW5XYWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjYWxscyA9PT0gbWF4Q2FsbHMpIHtcbiAgICAgIGNhbGxzID0gMDtcbiAgICAgIGluV2FpdCA9IHRydWU7XG5cbiAgICAgIGxldCBpbnRlcnZhbCA9IHdhaXQgLyAxMDAwO1xuICAgICAgd2FybihcbiAgICAgICAgYFBsZWFzZSB3YWl0ICR7aW50ZXJ2YWx9IHNlY3MuIGZvciBuZXh0IHJlbG9hZCB0byBwcmV2ZW50IHlvdXIgZXh0ZW5zaW9uIGJlaW5nIGJsb2NrZWRgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGxvZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gd2FybihgJHstLWludGVydmFsfSAuLi5gKSwgMTAwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGxvZ0ludGVydmFsKTtcbiAgICAgICAgaW5mbyhcIlNpZ25pbmcgZm9yIHJlbG9hZCBub3dcIik7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGluV2FpdCA9IGZhbHNlO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxzKys7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IHtcbiAgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxuICBERUZBVUxUX0NPTlRFTlRfU0NSSVBUX0VOVFJZLFxuICBERUZBVUxUX0VYVEVOU0lPTl9QQUdFX0VOVFJZLFxuICBERUZBVUxUX1BPUlQsXG4gIERFRkFVTFRfUkVMT0FEX1BBR0UsXG59IGZyb20gXCIuLi9jb25zdGFudHMvb3B0aW9ucy5jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbnRyaWVzOiB7XG4gICAgYmFja2dyb3VuZDogREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxuICAgIGNvbnRlbnRTY3JpcHQ6IERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlksXG4gICAgZXh0ZW5zaW9uUGFnZTogREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcbiAgfSxcbiAgcG9ydDogREVGQVVMVF9QT1JULFxuICByZWxvYWRQYWdlOiBERUZBVUxUX1JFTE9BRF9QQUdFLFxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOiBuby1jb25zb2xlXG5pbXBvcnQgeyBncmVlbiwgcmVkLCB3aGl0ZSwgeWVsbG93IH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XG5pbXBvcnQgeyBERUJVRywgRVJST1IsIElORk8sIExPRywgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuXG5sZXQgbG9nTGV2ZWw7XG5leHBvcnQgY29uc3Qgc2V0TG9nTGV2ZWwgPSAobGV2ZWw6IExPR19MRVZFTCkgPT4gKGxvZ0xldmVsID0gbGV2ZWwpO1xuXG5leHBvcnQgY29uc3QgbG9nID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gTE9HICYmIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuZXhwb3J0IGNvbnN0IGluZm8gPSAobWVzc2FnZTogc3RyaW5nKSA9PlxuICBsb2dMZXZlbCA+PSBJTkZPICYmIGNvbnNvbGUuaW5mbyhncmVlbihtZXNzYWdlKSk7XG5leHBvcnQgY29uc3Qgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gIGxvZ0xldmVsID49IFdBUk4gJiYgY29uc29sZS53YXJuKHllbGxvdyhtZXNzYWdlKSk7XG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZTogc3RyaW5nKSA9PlxuICBsb2dMZXZlbCA+PSBFUlJPUiAmJiBjb25zb2xlLmVycm9yKHJlZChtZXNzYWdlKSk7XG5leHBvcnQgY29uc3QgZGVidWcgPSAobWVzc2FnZTogc3RyaW5nKSA9PlxuICBsb2dMZXZlbCA+PSBERUJVRyAmJiBjb25zb2xlLmRlYnVnKHdoaXRlKGRlYnVnKG1lc3NhZ2UpKSk7XG4iLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGZsYXRNYXBEZWVwIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQ29tcGlsZXIsIEVudHJ5IH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB7XG4gIGJnU2NyaXB0RW50cnlFcnJvck1zZyxcbiAgYmdTY3JpcHRNYW5pZmVzdFJlcXVpcmVkTXNnLFxufSBmcm9tIFwiLi4vbWVzc2FnZXMvZXJyb3JzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RW50cmllcyhcbiAgd2VicGFja0VudHJ5OiBFbnRyeSxcbiAgd2VicGFja091dHB1dDogQ29tcGlsZXJbXCJvcHRpb25zXCJdW1wib3V0cHV0XCJdID0ge30sXG4gIG1hbmlmZXN0UGF0aDogc3RyaW5nLFxuKTogSUVudHJpZXNPcHRpb24ge1xuICBjb25zdCBtYW5pZmVzdEpzb24gPSBKU09OLnBhcnNlKFxuICAgIHJlYWRGaWxlU3luYyhtYW5pZmVzdFBhdGgpLnRvU3RyaW5nKCksXG4gICkgYXMgSUV4dGVuc2lvbk1hbmlmZXN0O1xuICBjb25zdCB7IGJhY2tncm91bmQsIGNvbnRlbnRfc2NyaXB0cyB9ID0gbWFuaWZlc3RKc29uO1xuICBjb25zdCB7IGZpbGVuYW1lIH0gPSB3ZWJwYWNrT3V0cHV0O1xuXG4gIGlmICghZmlsZW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgfVxuXG4gIGlmICghYmFja2dyb3VuZD8uc2NyaXB0cykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYmdTY3JpcHRNYW5pZmVzdFJlcXVpcmVkTXNnLmdldCgpKTtcbiAgfVxuXG4gIGNvbnN0IGJnU2NyaXB0RmlsZU5hbWVzID0gYmFja2dyb3VuZC5zY3JpcHRzO1xuICBjb25zdCB0b1JlbW92ZSA9IChmaWxlbmFtZSBhcyBzdHJpbmcpLnJlcGxhY2UoXCJbbmFtZV1cIiwgXCJcIik7XG5cbiAgY29uc3QgYmdXZWJwYWNrRW50cnkgPSBPYmplY3Qua2V5cyh3ZWJwYWNrRW50cnkpLmZpbmQoZW50cnlOYW1lID0+XG4gICAgYmdTY3JpcHRGaWxlTmFtZXMuc29tZShcbiAgICAgIGJnTWFuaWZlc3QgPT4gYmdNYW5pZmVzdC5yZXBsYWNlKHRvUmVtb3ZlLCBcIlwiKSA9PT0gZW50cnlOYW1lLFxuICAgICksXG4gICk7XG5cbiAgaWYgKCFiZ1dlYnBhY2tFbnRyeSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYmdTY3JpcHRFbnRyeUVycm9yTXNnLmdldCgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnRFbnRyaWVzOiB1bmtub3duID0gY29udGVudF9zY3JpcHRzXG4gICAgPyBmbGF0TWFwRGVlcChPYmplY3Qua2V5cyh3ZWJwYWNrRW50cnkpLCBlbnRyeU5hbWUgPT5cbiAgICAgICAgY29udGVudF9zY3JpcHRzLm1hcCgoeyBqcyB9KSA9PlxuICAgICAgICAgIGpzXG4gICAgICAgICAgICAubWFwKGNvbnRlbnRJdGVtID0+IGNvbnRlbnRJdGVtLnJlcGxhY2UodG9SZW1vdmUsIFwiXCIpKVxuICAgICAgICAgICAgLmZpbHRlcihjb250ZW50SXRlbSA9PiBjb250ZW50SXRlbSA9PT0gZW50cnlOYW1lKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZDogYmdXZWJwYWNrRW50cnksXG4gICAgY29udGVudFNjcmlwdDogY29udGVudEVudHJpZXMgYXMgc3RyaW5nW10sXG4gICAgZXh0ZW5zaW9uUGFnZTogbnVsbCxcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBTSUdOX0NIQU5HRTogQWN0aW9uVHlwZSA9IFwiU0lHTl9DSEFOR0VcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1JFTE9BRDogQWN0aW9uVHlwZSA9IFwiU0lHTl9SRUxPQURcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1JFTE9BREVEOiBBY3Rpb25UeXBlID0gXCJTSUdOX1JFTE9BREVEXCI7XG5leHBvcnQgY29uc3QgU0lHTl9MT0c6IEFjdGlvblR5cGUgPSBcIlNJR05fTE9HXCI7XG5leHBvcnQgY29uc3QgU0lHTl9DT05ORUNUOiBBY3Rpb25UeXBlID0gXCJTSUdOX0NPTk5FQ1RcIjtcblxuZXhwb3J0IGNvbnN0IHNpZ25DaGFuZ2U6IEFjdGlvbkZhY3RvcnkgPSAoe1xuICByZWxvYWRQYWdlID0gdHJ1ZSxcbiAgb25seVBhZ2VDaGFuZ2VkID0gZmFsc2UsXG59KSA9PiAoe1xuICBwYXlsb2FkOiB7IHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCB9LFxuICB0eXBlOiBTSUdOX0NIQU5HRSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNpZ25SZWxvYWQ6IEFjdGlvbkZhY3RvcnkgPSAoKSA9PiAoeyB0eXBlOiBTSUdOX1JFTE9BRCB9KTtcbmV4cG9ydCBjb25zdCBzaWduUmVsb2FkZWQ6IEFjdGlvbkZhY3RvcnkgPSAobXNnOiBzdHJpbmcpID0+ICh7XG4gIHBheWxvYWQ6IG1zZyxcbiAgdHlwZTogU0lHTl9SRUxPQURFRCxcbn0pO1xuZXhwb3J0IGNvbnN0IHNpZ25Mb2c6IEFjdGlvbkZhY3RvcnkgPSAobXNnOiBzdHJpbmcpID0+ICh7XG4gIHBheWxvYWQ6IG1zZyxcbiAgdHlwZTogU0lHTl9MT0csXG59KTtcbiIsImltcG9ydCB7IENvbXBpbGVyIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCBDb21waWxlckV2ZW50c0ZhY2FkZSBmcm9tIFwiLi9Db21waWxlckV2ZW50c0ZhY2FkZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEV4dGVuc2lvblJlbG9hZGVyIHtcbiAgcHVibGljIGNvbnRleHQ6IGFueTtcbiAgcHJvdGVjdGVkIF9pbmplY3RvcjogSW5qZWN0TWlkZGxld2FyZTtcbiAgcHJvdGVjdGVkIF90cmlnZ2VyZXI6IFRyaWdnZXJlcjtcbiAgcHJvdGVjdGVkIF9ldmVudEFQSTogQ29tcGlsZXJFdmVudHNGYWNhZGU7XG4gIHByb3RlY3RlZCBfY2h1bmtWZXJzaW9uczogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKTtcbn1cbiIsImltcG9ydCB7IENvbXBpbGVyLCBDb21waWxhdGlvbiB9IGZyb20gXCJ3ZWJwYWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGVyRXZlbnRzRmFjYWRlIHtcbiAgcHVibGljIHN0YXRpYyBleHRlbnNpb25OYW1lID0gXCJ3ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlclwiO1xuICBwcml2YXRlIF9jb21waWxlcjogQ29tcGlsZXI7XG4gIHByaXZhdGUgX2xlZ2FjeVRhcGFibGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29tcGlsZXI6IENvbXBpbGVyKSB7XG4gICAgdGhpcy5fY29tcGlsZXIgPSBjb21waWxlcjtcbiAgICB0aGlzLl9sZWdhY3lUYXBhYmxlID0gIWNvbXBpbGVyLmhvb2tzO1xuICB9XG5cbiAgcHVibGljIGFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cyhcbiAgICBjYWxsOiAoY29tcGlsYXRpb246IENvbXBpbGF0aW9uLCBjaHVua3M6IENvbXBpbGF0aW9uW1wiY2h1bmtzXCJdKSA9PiB2b2lkLFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fbGVnYWN5VGFwYWJsZVxuICAgICAgPyAodGhpcy5fY29tcGlsZXIgYXMgYW55KS5wbHVnaW4oXCJjb21waWxhdGlvblwiLCBjb21wID0+XG4gICAgICAgICAgY29tcC5wbHVnaW4oXCJhZnRlci1vcHRpbWl6ZS1jaHVuay1hc3NldHNcIiwgY2h1bmtzID0+XG4gICAgICAgICAgICBjYWxsKGNvbXAsIGNodW5rcyksXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLl9jb21waWxlci5ob29rcy5jb21waWxhdGlvbi50YXAoXG4gICAgICAgICAgQ29tcGlsZXJFdmVudHNGYWNhZGUuZXh0ZW5zaW9uTmFtZSxcbiAgICAgICAgICBjb21wID0+XG4gICAgICAgICAgICBjb21wLmhvb2tzLmFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cy50YXAoXG4gICAgICAgICAgICAgIENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgICAgIGNodW5rcyA9PiBjYWxsKGNvbXAsIGNodW5rcyksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICB9XG5cbiAgcHVibGljIGFmdGVyRW1pdChjYWxsOiAoY29tcGlsYXRpb246IENvbXBpbGF0aW9uKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZ2FjeVRhcGFibGVcbiAgICAgID8gKHRoaXMuX2NvbXBpbGVyIGFzIGFueSkucGx1Z2luKFwiYWZ0ZXItZW1pdFwiLCBjYWxsKVxuICAgICAgOiB0aGlzLl9jb21waWxlci5ob29rcy5hZnRlckVtaXQudGFwKFxuICAgICAgICAgIENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgY2FsbCxcbiAgICAgICAgKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbnZhciBpc01vZGVybiA9IChcbiAgdHlwZW9mIEJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIEJ1ZmZlci5hbGxvYyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBCdWZmZXIuZnJvbSA9PT0gJ2Z1bmN0aW9uJ1xuKVxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyIChpbnB1dCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpbnB1dCkuc2xpY2UoOCwgLTEpID09PSAnQXJyYXlCdWZmZXInXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAob2JqLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYnl0ZU9mZnNldCA+Pj49IDBcblxuICB2YXIgbWF4TGVuZ3RoID0gb2JqLmJ5dGVMZW5ndGggLSBieXRlT2Zmc2V0XG5cbiAgaWYgKG1heExlbmd0aCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidvZmZzZXQnIGlzIG91dCBvZiBib3VuZHNcIilcbiAgfVxuXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IG1heExlbmd0aFxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA+Pj49IDBcblxuICAgIGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiJ2xlbmd0aCcgaXMgb3V0IG9mIGJvdW5kc1wiKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20ob2JqLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBsZW5ndGgpKVxuICAgIDogbmV3IEJ1ZmZlcihuZXcgVWludDhBcnJheShvYmouc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGxlbmd0aCkpKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20oc3RyaW5nLCBlbmNvZGluZylcbiAgICA6IG5ldyBCdWZmZXIoc3RyaW5nLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYnVmZmVyRnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoaXNBcnJheUJ1ZmZlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGlzTW9kZXJuXG4gICAgPyBCdWZmZXIuZnJvbSh2YWx1ZSlcbiAgICA6IG5ldyBCdWZmZXIodmFsdWUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyRnJvbVxuIiwiLypcblxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbk9yaWdpbmFsIExpYnJhcnlcbiAgLSBDb3B5cmlnaHQgKGMpIE1hcmFrIFNxdWlyZXNcblxuQWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5XG4gLSBDb3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG5cbnZhciBjb2xvcnMgPSB7fTtcbm1vZHVsZVsnZXhwb3J0cyddID0gY29sb3JzO1xuXG5jb2xvcnMudGhlbWVzID0ge307XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGFuc2lTdHlsZXMgPSBjb2xvcnMuc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcbnZhciBkZWZpbmVQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIG5ld0xpbmVSZWdleCA9IG5ldyBSZWdFeHAoL1tcXHJcXG5dKy9nKTtcblxuY29sb3JzLnN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCcuL3N5c3RlbS9zdXBwb3J0cy1jb2xvcnMnKS5zdXBwb3J0c0NvbG9yO1xuXG5pZiAodHlwZW9mIGNvbG9ycy5lbmFibGVkID09PSAndW5kZWZpbmVkJykge1xuICBjb2xvcnMuZW5hYmxlZCA9IGNvbG9ycy5zdXBwb3J0c0NvbG9yKCkgIT09IGZhbHNlO1xufVxuXG5jb2xvcnMuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gIGNvbG9ycy5lbmFibGVkID0gdHJ1ZTtcbn07XG5cbmNvbG9ycy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gIGNvbG9ycy5lbmFibGVkID0gZmFsc2U7XG59O1xuXG5jb2xvcnMuc3RyaXBDb2xvcnMgPSBjb2xvcnMuc3RyaXAgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuICgnJyArIHN0cikucmVwbGFjZSgvXFx4MUJcXFtcXGQrbS9nLCAnJyk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbnZhciBzdHlsaXplID0gY29sb3JzLnN0eWxpemUgPSBmdW5jdGlvbiBzdHlsaXplKHN0ciwgc3R5bGUpIHtcbiAgaWYgKCFjb2xvcnMuZW5hYmxlZCkge1xuICAgIHJldHVybiBzdHIrJyc7XG4gIH1cblxuICB2YXIgc3R5bGVNYXAgPSBhbnNpU3R5bGVzW3N0eWxlXTtcblxuICAvLyBTdHlsaXplIHNob3VsZCB3b3JrIGZvciBub24tQU5TSSBzdHlsZXMsIHRvb1xuICBpZighc3R5bGVNYXAgJiYgc3R5bGUgaW4gY29sb3JzKXtcbiAgICAvLyBTdHlsZSBtYXBzIGxpa2UgdHJhcCBvcGVyYXRlIGFzIGZ1bmN0aW9ucyBvbiBzdHJpbmdzO1xuICAgIC8vIHRoZXkgZG9uJ3QgaGF2ZSBwcm9wZXJ0aWVzIGxpa2Ugb3BlbiBvciBjbG9zZS5cbiAgICByZXR1cm4gY29sb3JzW3N0eWxlXShzdHIpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlTWFwLm9wZW4gKyBzdHIgKyBzdHlsZU1hcC5jbG9zZTtcbn07XG5cbnZhciBtYXRjaE9wZXJhdG9yc1JlID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xudmFyIGVzY2FwZVN0cmluZ1JlZ2V4cCA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG4gIHJldHVybiBzdHIucmVwbGFjZShtYXRjaE9wZXJhdG9yc1JlLCAnXFxcXCQmJyk7XG59O1xuXG5mdW5jdGlvbiBidWlsZChfc3R5bGVzKSB7XG4gIHZhciBidWlsZGVyID0gZnVuY3Rpb24gYnVpbGRlcigpIHtcbiAgICByZXR1cm4gYXBwbHlTdHlsZS5hcHBseShidWlsZGVyLCBhcmd1bWVudHMpO1xuICB9O1xuICBidWlsZGVyLl9zdHlsZXMgPSBfc3R5bGVzO1xuICAvLyBfX3Byb3RvX18gaXMgdXNlZCBiZWNhdXNlIHdlIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24sIGJ1dCB0aGVyZSBpc1xuICAvLyBubyB3YXkgdG8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aCBhIGRpZmZlcmVudCBwcm90b3R5cGUuXG4gIGJ1aWxkZXIuX19wcm90b19fID0gcHJvdG87XG4gIHJldHVybiBidWlsZGVyO1xufVxuXG52YXIgc3R5bGVzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgcmV0ID0ge307XG4gIGFuc2lTdHlsZXMuZ3JleSA9IGFuc2lTdHlsZXMuZ3JheTtcbiAgT2JqZWN0LmtleXMoYW5zaVN0eWxlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBhbnNpU3R5bGVzW2tleV0uY2xvc2VSZSA9XG4gICAgICBuZXcgUmVnRXhwKGVzY2FwZVN0cmluZ1JlZ2V4cChhbnNpU3R5bGVzW2tleV0uY2xvc2UpLCAnZycpO1xuICAgIHJldFtrZXldID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkKHRoaXMuX3N0eWxlcy5jb25jYXQoa2V5KSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufSkoKTtcblxudmFyIHByb3RvID0gZGVmaW5lUHJvcHMoZnVuY3Rpb24gY29sb3JzKCkge30sIHN0eWxlcyk7XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICB2YXIgc3RyID0gYXJncy5tYXAoZnVuY3Rpb24oYXJnKSB7XG4gICAgLy8gVXNlIHdlYWsgZXF1YWxpdHkgY2hlY2sgc28gd2UgY2FuIGNvbG9yaXplIG51bGwvdW5kZWZpbmVkIGluIHNhZmUgbW9kZVxuICAgIGlmIChhcmcgIT0gbnVsbCAmJiBhcmcuY29uc3RydWN0b3IgPT09IFN0cmluZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHV0aWwuaW5zcGVjdChhcmcpO1xuICAgIH1cbiAgfSkuam9pbignICcpO1xuXG4gIGlmICghY29sb3JzLmVuYWJsZWQgfHwgIXN0cikge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgbmV3TGluZXNQcmVzZW50ID0gc3RyLmluZGV4T2YoJ1xcbicpICE9IC0xO1xuXG4gIHZhciBuZXN0ZWRTdHlsZXMgPSB0aGlzLl9zdHlsZXM7XG5cbiAgdmFyIGkgPSBuZXN0ZWRTdHlsZXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGNvZGUgPSBhbnNpU3R5bGVzW25lc3RlZFN0eWxlc1tpXV07XG4gICAgc3RyID0gY29kZS5vcGVuICsgc3RyLnJlcGxhY2UoY29kZS5jbG9zZVJlLCBjb2RlLm9wZW4pICsgY29kZS5jbG9zZTtcbiAgICBpZiAobmV3TGluZXNQcmVzZW50KSB7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXdMaW5lUmVnZXgsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBjb2RlLmNsb3NlICsgbWF0Y2ggKyBjb2RlLm9wZW47XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG5jb2xvcnMuc2V0VGhlbWUgPSBmdW5jdGlvbih0aGVtZSkge1xuICBpZiAodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJykge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvcnMuc2V0VGhlbWUgbm93IG9ubHkgYWNjZXB0cyBhbiBvYmplY3QsIG5vdCBhIHN0cmluZy4gICcgK1xuICAgICAgJ0lmIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBhIHRoZW1lIGZyb20gYSBmaWxlLCBpdCBpcyBub3cgeW91ciAodGhlICcgK1xuICAgICAgJ2NhbGxlclxcJ3MpIHJlc3BvbnNpYmlsaXR5IHRvIHJlcXVpcmUgdGhlIGZpbGUuICBUaGUgb2xkIHN5bnRheCAnICtcbiAgICAgICdsb29rZWQgbGlrZSBjb2xvcnMuc2V0VGhlbWUoX19kaXJuYW1lICsgJyArXG4gICAgICAnXFwnLy4uL3RoZW1lcy9nZW5lcmljLWxvZ2dpbmcuanNcXCcpOyBUaGUgbmV3IHN5bnRheCBsb29rcyBsaWtlICcrXG4gICAgICAnY29sb3JzLnNldFRoZW1lKHJlcXVpcmUoX19kaXJuYW1lICsgJyArXG4gICAgICAnXFwnLy4uL3RoZW1lcy9nZW5lcmljLWxvZ2dpbmcuanNcXCcpKTsnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIgc3R5bGUgaW4gdGhlbWUpIHtcbiAgICAoZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgIGNvbG9yc1tzdHlsZV0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGVtZVtzdHlsZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIG91dCA9IHN0cjtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHRoZW1lW3N0eWxlXSkge1xuICAgICAgICAgICAgb3V0ID0gY29sb3JzW3RoZW1lW3N0eWxlXVtpXV0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3JzW3RoZW1lW3N0eWxlXV0oc3RyKTtcbiAgICAgIH07XG4gICAgfSkoc3R5bGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICB2YXIgcmV0ID0ge307XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0W25hbWVdID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkKFtuYW1lXSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG52YXIgc2VxdWVuY2VyID0gZnVuY3Rpb24gc2VxdWVuY2VyKG1hcCwgc3RyKSB7XG4gIHZhciBleHBsb2RlZCA9IHN0ci5zcGxpdCgnJyk7XG4gIGV4cGxvZGVkID0gZXhwbG9kZWQubWFwKG1hcCk7XG4gIHJldHVybiBleHBsb2RlZC5qb2luKCcnKTtcbn07XG5cbi8vIGN1c3RvbSBmb3JtYXR0ZXIgbWV0aG9kc1xuY29sb3JzLnRyYXAgPSByZXF1aXJlKCcuL2N1c3RvbS90cmFwJyk7XG5jb2xvcnMuemFsZ28gPSByZXF1aXJlKCcuL2N1c3RvbS96YWxnbycpO1xuXG4vLyBtYXBzXG5jb2xvcnMubWFwcyA9IHt9O1xuY29sb3JzLm1hcHMuYW1lcmljYSA9IHJlcXVpcmUoJy4vbWFwcy9hbWVyaWNhJykoY29sb3JzKTtcbmNvbG9ycy5tYXBzLnplYnJhID0gcmVxdWlyZSgnLi9tYXBzL3plYnJhJykoY29sb3JzKTtcbmNvbG9ycy5tYXBzLnJhaW5ib3cgPSByZXF1aXJlKCcuL21hcHMvcmFpbmJvdycpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy5yYW5kb20gPSByZXF1aXJlKCcuL21hcHMvcmFuZG9tJykoY29sb3JzKTtcblxuZm9yICh2YXIgbWFwIGluIGNvbG9ycy5tYXBzKSB7XG4gIChmdW5jdGlvbihtYXApIHtcbiAgICBjb2xvcnNbbWFwXSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIHNlcXVlbmNlcihjb2xvcnMubWFwc1ttYXBdLCBzdHIpO1xuICAgIH07XG4gIH0pKG1hcCk7XG59XG5cbmRlZmluZVByb3BzKGNvbG9ycywgaW5pdCgpKTtcbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24gcnVuVGhlVHJhcCh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdGV4dCA9IHRleHQgfHwgJ1J1biB0aGUgdHJhcCwgZHJvcCB0aGUgYmFzcyc7XG4gIHRleHQgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgdmFyIHRyYXAgPSB7XG4gICAgYTogWydcXHUwMDQwJywgJ1xcdTAxMDQnLCAnXFx1MDIzYScsICdcXHUwMjQ1JywgJ1xcdTAzOTQnLCAnXFx1MDM5YicsICdcXHUwNDE0J10sXG4gICAgYjogWydcXHUwMGRmJywgJ1xcdTAxODEnLCAnXFx1MDI0MycsICdcXHUwMjZlJywgJ1xcdTAzYjInLCAnXFx1MGUzZiddLFxuICAgIGM6IFsnXFx1MDBhOScsICdcXHUwMjNiJywgJ1xcdTAzZmUnXSxcbiAgICBkOiBbJ1xcdTAwZDAnLCAnXFx1MDE4YScsICdcXHUwNTAwJywgJ1xcdTA1MDEnLCAnXFx1MDUwMicsICdcXHUwNTAzJ10sXG4gICAgZTogWydcXHUwMGNiJywgJ1xcdTAxMTUnLCAnXFx1MDE4ZScsICdcXHUwMjU4JywgJ1xcdTAzYTMnLCAnXFx1MDNiZScsICdcXHUwNGJjJyxcbiAgICAgICdcXHUwYTZjJ10sXG4gICAgZjogWydcXHUwNGZhJ10sXG4gICAgZzogWydcXHUwMjYyJ10sXG4gICAgaDogWydcXHUwMTI2JywgJ1xcdTAxOTUnLCAnXFx1MDRhMicsICdcXHUwNGJhJywgJ1xcdTA0YzcnLCAnXFx1MDUwYSddLFxuICAgIGk6IFsnXFx1MGYwZiddLFxuICAgIGo6IFsnXFx1MDEzNCddLFxuICAgIGs6IFsnXFx1MDEzOCcsICdcXHUwNGEwJywgJ1xcdTA0YzMnLCAnXFx1MDUxZSddLFxuICAgIGw6IFsnXFx1MDEzOSddLFxuICAgIG06IFsnXFx1MDI4ZCcsICdcXHUwNGNkJywgJ1xcdTA0Y2UnLCAnXFx1MDUyMCcsICdcXHUwNTIxJywgJ1xcdTBkNjknXSxcbiAgICBuOiBbJ1xcdTAwZDEnLCAnXFx1MDE0YicsICdcXHUwMTlkJywgJ1xcdTAzNzYnLCAnXFx1MDNhMCcsICdcXHUwNDhhJ10sXG4gICAgbzogWydcXHUwMGQ4JywgJ1xcdTAwZjUnLCAnXFx1MDBmOCcsICdcXHUwMWZlJywgJ1xcdTAyOTgnLCAnXFx1MDQ3YScsICdcXHUwNWRkJyxcbiAgICAgICdcXHUwNmRkJywgJ1xcdTBlNGYnXSxcbiAgICBwOiBbJ1xcdTAxZjcnLCAnXFx1MDQ4ZSddLFxuICAgIHE6IFsnXFx1MDljZCddLFxuICAgIHI6IFsnXFx1MDBhZScsICdcXHUwMWE2JywgJ1xcdTAyMTAnLCAnXFx1MDI0YycsICdcXHUwMjgwJywgJ1xcdTA0MmYnXSxcbiAgICBzOiBbJ1xcdTAwYTcnLCAnXFx1MDNkZScsICdcXHUwM2RmJywgJ1xcdTAzZTgnXSxcbiAgICB0OiBbJ1xcdTAxNDEnLCAnXFx1MDE2NicsICdcXHUwMzczJ10sXG4gICAgdTogWydcXHUwMWIxJywgJ1xcdTA1NGQnXSxcbiAgICB2OiBbJ1xcdTA1ZDgnXSxcbiAgICB3OiBbJ1xcdTA0MjgnLCAnXFx1MDQ2MCcsICdcXHUwNDdjJywgJ1xcdTBkNzAnXSxcbiAgICB4OiBbJ1xcdTA0YjInLCAnXFx1MDRmZScsICdcXHUwNGZjJywgJ1xcdTA0ZmQnXSxcbiAgICB5OiBbJ1xcdTAwYTUnLCAnXFx1MDRiMCcsICdcXHUwNGNiJ10sXG4gICAgejogWydcXHUwMWI1JywgJ1xcdTAyNDAnXSxcbiAgfTtcbiAgdGV4dC5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICBjID0gYy50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBjaGFycyA9IHRyYXBbY10gfHwgWycgJ107XG4gICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpO1xuICAgIGlmICh0eXBlb2YgdHJhcFtjXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCArPSB0cmFwW2NdW3JhbmRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gYztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIHBsZWFzZSBub1xubW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbiB6YWxnbyh0ZXh0LCBvcHRpb25zKSB7XG4gIHRleHQgPSB0ZXh0IHx8ICcgICBoZSBpcyBoZXJlICAgJztcbiAgdmFyIHNvdWwgPSB7XG4gICAgJ3VwJzogW1xuICAgICAgJ8yNJywgJ8yOJywgJ8yEJywgJ8yFJyxcbiAgICAgICfMvycsICfMkScsICfMhicsICfMkCcsXG4gICAgICAnzZInLCAnzZcnLCAnzZEnLCAnzIcnLFxuICAgICAgJ8yIJywgJ8yKJywgJ82CJywgJ8yTJyxcbiAgICAgICfMiCcsICfNiicsICfNiycsICfNjCcsXG4gICAgICAnzIMnLCAnzIInLCAnzIwnLCAnzZAnLFxuICAgICAgJ8yAJywgJ8yBJywgJ8yLJywgJ8yPJyxcbiAgICAgICfMkicsICfMkycsICfMlCcsICfMvScsXG4gICAgICAnzIknLCAnzaMnLCAnzaQnLCAnzaUnLFxuICAgICAgJ82mJywgJ82nJywgJ82oJywgJ82pJyxcbiAgICAgICfNqicsICfNqycsICfNrCcsICfNrScsXG4gICAgICAnza4nLCAnza8nLCAnzL4nLCAnzZsnLFxuICAgICAgJ82GJywgJ8yaJyxcbiAgICBdLFxuICAgICdkb3duJzogW1xuICAgICAgJ8yWJywgJ8yXJywgJ8yYJywgJ8yZJyxcbiAgICAgICfMnCcsICfMnScsICfMnicsICfMnycsXG4gICAgICAnzKAnLCAnzKQnLCAnzKUnLCAnzKYnLFxuICAgICAgJ8ypJywgJ8yqJywgJ8yrJywgJ8ysJyxcbiAgICAgICfMrScsICfMricsICfMrycsICfMsCcsXG4gICAgICAnzLEnLCAnzLInLCAnzLMnLCAnzLknLFxuICAgICAgJ8y6JywgJ8y7JywgJ8y8JywgJ82FJyxcbiAgICAgICfNhycsICfNiCcsICfNiScsICfNjScsXG4gICAgICAnzY4nLCAnzZMnLCAnzZQnLCAnzZUnLFxuICAgICAgJ82WJywgJ82ZJywgJ82aJywgJ8yjJyxcbiAgICBdLFxuICAgICdtaWQnOiBbXG4gICAgICAnzJUnLCAnzJsnLCAnzIAnLCAnzIEnLFxuICAgICAgJ82YJywgJ8yhJywgJ8yiJywgJ8ynJyxcbiAgICAgICfMqCcsICfMtCcsICfMtScsICfMticsXG4gICAgICAnzZwnLCAnzZ0nLCAnzZ4nLFxuICAgICAgJ82fJywgJ82gJywgJ82iJywgJ8y4JyxcbiAgICAgICfMtycsICfNoScsICcg0oknLFxuICAgIF0sXG4gIH07XG4gIHZhciBhbGwgPSBbXS5jb25jYXQoc291bC51cCwgc291bC5kb3duLCBzb3VsLm1pZCk7XG5cbiAgZnVuY3Rpb24gcmFuZG9tTnVtYmVyKHJhbmdlKSB7XG4gICAgdmFyIHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NoYXIoY2hhcmFjdGVyKSB7XG4gICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICBhbGwuZmlsdGVyKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGJvb2wgPSAoaSA9PT0gY2hhcmFjdGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm9vbDtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gaGVDb21lcyh0ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBjb3VudHM7XG4gICAgdmFyIGw7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9uc1sndXAnXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1sndXAnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWyd1cCddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydtaWQnXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1snbWlkJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snbWlkJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ2Rvd24nXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1snZG93biddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ2Rvd24nXSA6IHRydWU7XG4gICAgb3B0aW9uc1snc2l6ZSddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydzaXplJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snc2l6ZSddIDogJ21heGknO1xuICAgIHRleHQgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgICBmb3IgKGwgaW4gdGV4dCkge1xuICAgICAgaWYgKGlzQ2hhcihsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHRleHRbbF07XG4gICAgICBjb3VudHMgPSB7J3VwJzogMCwgJ2Rvd24nOiAwLCAnbWlkJzogMH07XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICBjYXNlICdtaW5pJzpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoOCk7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcigyKTtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4aSc6XG4gICAgICAgICAgY291bnRzLnVwID0gcmFuZG9tTnVtYmVyKDE2KSArIDM7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcig0KSArIDE7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoNjQpICsgMztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoOCkgKyAxO1xuICAgICAgICAgIGNvdW50cy5taWQgPSByYW5kb21OdW1iZXIoNikgLyAyO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDgpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdmFyIGFyciA9IFsndXAnLCAnbWlkJywgJ2Rvd24nXTtcbiAgICAgIGZvciAodmFyIGQgaW4gYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFycltkXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnRzW2luZGV4XTsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbaW5kZXhdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBzb3VsW2luZGV4XVtyYW5kb21OdW1iZXIoc291bFtpbmRleF0ubGVuZ3RoKV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLy8gZG9uJ3Qgc3VtbW9uIGhpbVxuICByZXR1cm4gaGVDb21lcyh0ZXh0LCBvcHRpb25zKTtcbn07XG5cbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJyAnKSByZXR1cm4gbGV0dGVyO1xuICAgIHN3aXRjaCAoaSUzKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBjb2xvcnMucmVkKGxldHRlcik7XG4gICAgICBjYXNlIDE6IHJldHVybiBjb2xvcnMud2hpdGUobGV0dGVyKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGNvbG9ycy5ibHVlKGxldHRlcik7XG4gICAgfVxuICB9O1xufTtcbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIC8vIFJvWSBHIEJpVlxuICB2YXIgcmFpbmJvd0NvbG9ycyA9IFsncmVkJywgJ3llbGxvdycsICdncmVlbicsICdibHVlJywgJ21hZ2VudGEnXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICBpZiAobGV0dGVyID09PSAnICcpIHtcbiAgICAgIHJldHVybiBsZXR0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb2xvcnNbcmFpbmJvd0NvbG9yc1tpKysgJSByYWluYm93Q29sb3JzLmxlbmd0aF1dKGxldHRlcik7XG4gICAgfVxuICB9O1xufTtcblxuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgdmFyIGF2YWlsYWJsZSA9IFsndW5kZXJsaW5lJywgJ2ludmVyc2UnLCAnZ3JleScsICd5ZWxsb3cnLCAncmVkJywgJ2dyZWVuJyxcbiAgICAnYmx1ZScsICd3aGl0ZScsICdjeWFuJywgJ21hZ2VudGEnLCAnYnJpZ2h0WWVsbG93JywgJ2JyaWdodFJlZCcsXG4gICAgJ2JyaWdodEdyZWVuJywgJ2JyaWdodEJsdWUnLCAnYnJpZ2h0V2hpdGUnLCAnYnJpZ2h0Q3lhbicsICdicmlnaHRNYWdlbnRhJ107XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgcmV0dXJuIGxldHRlciA9PT0gJyAnID8gbGV0dGVyIDpcbiAgICAgIGNvbG9yc1tcbiAgICAgICAgICBhdmFpbGFibGVbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGF2YWlsYWJsZS5sZW5ndGggLSAyKSldXG4gICAgICBdKGxldHRlcik7XG4gIH07XG59O1xuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICByZXR1cm4gaSAlIDIgPT09IDAgPyBsZXR0ZXIgOiBjb2xvcnMuaW52ZXJzZShsZXR0ZXIpO1xuICB9O1xufTtcbiIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgc3R5bGVzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IHN0eWxlcztcblxudmFyIGNvZGVzID0ge1xuICByZXNldDogWzAsIDBdLFxuXG4gIGJvbGQ6IFsxLCAyMl0sXG4gIGRpbTogWzIsIDIyXSxcbiAgaXRhbGljOiBbMywgMjNdLFxuICB1bmRlcmxpbmU6IFs0LCAyNF0sXG4gIGludmVyc2U6IFs3LCAyN10sXG4gIGhpZGRlbjogWzgsIDI4XSxcbiAgc3RyaWtldGhyb3VnaDogWzksIDI5XSxcblxuICBibGFjazogWzMwLCAzOV0sXG4gIHJlZDogWzMxLCAzOV0sXG4gIGdyZWVuOiBbMzIsIDM5XSxcbiAgeWVsbG93OiBbMzMsIDM5XSxcbiAgYmx1ZTogWzM0LCAzOV0sXG4gIG1hZ2VudGE6IFszNSwgMzldLFxuICBjeWFuOiBbMzYsIDM5XSxcbiAgd2hpdGU6IFszNywgMzldLFxuICBncmF5OiBbOTAsIDM5XSxcbiAgZ3JleTogWzkwLCAzOV0sXG5cbiAgYnJpZ2h0UmVkOiBbOTEsIDM5XSxcbiAgYnJpZ2h0R3JlZW46IFs5MiwgMzldLFxuICBicmlnaHRZZWxsb3c6IFs5MywgMzldLFxuICBicmlnaHRCbHVlOiBbOTQsIDM5XSxcbiAgYnJpZ2h0TWFnZW50YTogWzk1LCAzOV0sXG4gIGJyaWdodEN5YW46IFs5NiwgMzldLFxuICBicmlnaHRXaGl0ZTogWzk3LCAzOV0sXG5cbiAgYmdCbGFjazogWzQwLCA0OV0sXG4gIGJnUmVkOiBbNDEsIDQ5XSxcbiAgYmdHcmVlbjogWzQyLCA0OV0sXG4gIGJnWWVsbG93OiBbNDMsIDQ5XSxcbiAgYmdCbHVlOiBbNDQsIDQ5XSxcbiAgYmdNYWdlbnRhOiBbNDUsIDQ5XSxcbiAgYmdDeWFuOiBbNDYsIDQ5XSxcbiAgYmdXaGl0ZTogWzQ3LCA0OV0sXG4gIGJnR3JheTogWzEwMCwgNDldLFxuICBiZ0dyZXk6IFsxMDAsIDQ5XSxcblxuICBiZ0JyaWdodFJlZDogWzEwMSwgNDldLFxuICBiZ0JyaWdodEdyZWVuOiBbMTAyLCA0OV0sXG4gIGJnQnJpZ2h0WWVsbG93OiBbMTAzLCA0OV0sXG4gIGJnQnJpZ2h0Qmx1ZTogWzEwNCwgNDldLFxuICBiZ0JyaWdodE1hZ2VudGE6IFsxMDUsIDQ5XSxcbiAgYmdCcmlnaHRDeWFuOiBbMTA2LCA0OV0sXG4gIGJnQnJpZ2h0V2hpdGU6IFsxMDcsIDQ5XSxcblxuICAvLyBsZWdhY3kgc3R5bGVzIGZvciBjb2xvcnMgcHJlIHYxLjAuMFxuICBibGFja0JHOiBbNDAsIDQ5XSxcbiAgcmVkQkc6IFs0MSwgNDldLFxuICBncmVlbkJHOiBbNDIsIDQ5XSxcbiAgeWVsbG93Qkc6IFs0MywgNDldLFxuICBibHVlQkc6IFs0NCwgNDldLFxuICBtYWdlbnRhQkc6IFs0NSwgNDldLFxuICBjeWFuQkc6IFs0NiwgNDldLFxuICB3aGl0ZUJHOiBbNDcsIDQ5XSxcblxufTtcblxuT2JqZWN0LmtleXMoY29kZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gIHZhciB2YWwgPSBjb2Rlc1trZXldO1xuICB2YXIgc3R5bGUgPSBzdHlsZXNba2V5XSA9IFtdO1xuICBzdHlsZS5vcGVuID0gJ1xcdTAwMWJbJyArIHZhbFswXSArICdtJztcbiAgc3R5bGUuY2xvc2UgPSAnXFx1MDAxYlsnICsgdmFsWzFdICsgJ20nO1xufSk7XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxudGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxudGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xudXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXNcbm9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkb1xuc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZsYWcsIGFyZ3YpIHtcbiAgYXJndiA9IGFyZ3YgfHwgcHJvY2Vzcy5hcmd2O1xuXG4gIHZhciB0ZXJtaW5hdG9yUG9zID0gYXJndi5pbmRleE9mKCctLScpO1xuICB2YXIgcHJlZml4ID0gL14tezEsMn0vLnRlc3QoZmxhZykgPyAnJyA6ICctLSc7XG4gIHZhciBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cbiAgcmV0dXJuIHBvcyAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3MgPT09IC0xID8gdHJ1ZSA6IHBvcyA8IHRlcm1pbmF0b3JQb3MpO1xufTtcbiIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBvcyA9IHJlcXVpcmUoJ29zJyk7XG52YXIgaGFzRmxhZyA9IHJlcXVpcmUoJy4vaGFzLWZsYWcuanMnKTtcblxudmFyIGVudiA9IHByb2Nlc3MuZW52O1xuXG52YXIgZm9yY2VDb2xvciA9IHZvaWQgMDtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8IGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8IGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykpIHtcbiAgZm9yY2VDb2xvciA9IGZhbHNlO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8IGhhc0ZsYWcoJ2NvbG9ycycpIHx8IGhhc0ZsYWcoJ2NvbG9yPXRydWUnKVxuICAgICAgICAgICB8fCBoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuICBmb3JjZUNvbG9yID0gdHJ1ZTtcbn1cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuICBmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMFxuICAgIHx8IHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApICE9PSAwO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxldmVsOiBsZXZlbCxcbiAgICBoYXNCYXNpYzogdHJ1ZSxcbiAgICBoYXMyNTY6IGxldmVsID49IDIsXG4gICAgaGFzMTZtOiBsZXZlbCA+PSAzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuICBpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fCBoYXNGbGFnKCdjb2xvcj1mdWxsJylcbiAgICAgIHx8IGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgbWluID0gZm9yY2VDb2xvciA/IDEgOiAwO1xuXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgLy8gTm9kZS5qcyA3LjUuMCBpcyB0aGUgZmlyc3QgdmVyc2lvbiBvZiBOb2RlLmpzIHRvIGluY2x1ZGUgYSBwYXRjaCB0b1xuICAgIC8vIGxpYnV2IHRoYXQgZW5hYmxlcyAyNTYgY29sb3Igb3V0cHV0IG9uIFdpbmRvd3MuIEFueXRoaW5nIGVhcmxpZXIgYW5kIGl0XG4gICAgLy8gd29uJ3Qgd29yay4gSG93ZXZlciwgaGVyZSB3ZSB0YXJnZXQgTm9kZS5qcyA4IGF0IG1pbmltdW0gYXMgaXQgaXMgYW4gTFRTXG4gICAgLy8gcmVsZWFzZSwgYW5kIE5vZGUuanMgNyBpcyBub3QuIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0XG4gICAgLy8gV2luZG93cyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy4gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGVcbiAgICAvLyBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cbiAgICB2YXIgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG4gICAgaWYgKE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOFxuICAgICAgICAmJiBOdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4Nikge1xuICAgICAgcmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoJ0NJJyBpbiBlbnYpIHtcbiAgICBpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJ10uc29tZShmdW5jdGlvbihzaWduKSB7XG4gICAgICByZXR1cm4gc2lnbiBpbiBlbnY7XG4gICAgfSkgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBtaW47XG4gIH1cblxuICBpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuICAgIHJldHVybiAoL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDBcbiAgICApO1xuICB9XG5cbiAgaWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuICAgIHZhciB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG4gICAgc3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG4gICAgICBjYXNlICdpVGVybS5hcHAnOlxuICAgICAgICByZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG4gICAgICBjYXNlICdIeXBlcic6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAnQXBwbGVfVGVybWluYWwnOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIC8vIE5vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICBpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgaWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgcmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuICB2YXIgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSk7XG4gIHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG4gIHN0ZG91dDogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3Rkb3V0KSxcbiAgc3RkZXJyOiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRlcnIpLFxufTtcbiIsIi8vXG4vLyBSZW1hcms6IFJlcXVpcmluZyB0aGlzIGZpbGUgd2lsbCB1c2UgdGhlIFwic2FmZVwiIGNvbG9ycyBBUEksXG4vLyB3aGljaCB3aWxsIG5vdCB0b3VjaCBTdHJpbmcucHJvdG90eXBlLlxuLy9cbi8vICAgdmFyIGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycy9zYWZlJyk7XG4vLyAgIGNvbG9ycy5yZWQoXCJmb29cIilcbi8vXG4vL1xudmFyIGNvbG9ycyA9IHJlcXVpcmUoJy4vbGliL2NvbG9ycycpO1xubW9kdWxlWydleHBvcnRzJ10gPSBjb2xvcnM7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIHRzbGludDpkaXNhYmxlICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAgICAgIFN0YXJ0IG9mIFdlYnBhY2sgSG90IEV4dGVuc2lvbiBNaWRkbGV3YXJlICAgICAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogIFRoaXMgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBhIGxvZGFzaCB0ZW1wbC4sIGFueSAgKi9cXG5cXG4vKiAgZXh0ZXJuYWwgYXJndW1lbnQgbXVzdCBiZSBwcm92aWRlZCB1c2luZyBpdCAgICAgICAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuKGZ1bmN0aW9uICgpIHtcXG4gIHRyeSB7XFxuICAgIHdpbmRvdztcXG4gIH0gY2F0Y2ggKF9hKSB7XFxuICAgIHZhciB3aW5kb3c7XFxuICB9XFxuXFxuICB2YXIgaW5qZWN0aW9uQ29udGV4dCA9IHdpbmRvdyB8fCB0aGlzIHx8IHtcXG4gICAgYnJvd3NlcjogbnVsbFxcbiAgfTtcXG4gIChmdW5jdGlvbiAoKSB7XFxuICAgIFxcXCI8JT0gcG9seWZpbGxTb3VyY2UgJT5cXFwiO1xcbiAgfSkuYmluZChpbmplY3Rpb25Db250ZXh0KSgpO1xcblxcbiAgdmFyIF9yZWYgPSBpbmplY3Rpb25Db250ZXh0IHx8IHt9LFxcbiAgICAgIGJyb3dzZXIgPSBfcmVmLmJyb3dzZXI7XFxuXFxuICB2YXIgc2lnbmFscyA9IEpTT04ucGFyc2UoJzwlPSBzaWduYWxzICU+Jyk7XFxuICB2YXIgY29uZmlnID0gSlNPTi5wYXJzZSgnPCU9IGNvbmZpZyAlPicpO1xcbiAgdmFyIHJlbG9hZFBhZ2UgPSBcXFwiPCU9IHJlbG9hZFBhZ2UgJT5cXFwiID09PSBcXFwidHJ1ZVxcXCI7XFxuICB2YXIgd3NIb3N0ID0gXFxcIjwlPSBXU0hvc3QgJT5cXFwiO1xcbiAgdmFyIFNJR05fQ0hBTkdFID0gc2lnbmFscy5TSUdOX0NIQU5HRSxcXG4gICAgICBTSUdOX1JFTE9BRCA9IHNpZ25hbHMuU0lHTl9SRUxPQUQsXFxuICAgICAgU0lHTl9SRUxPQURFRCA9IHNpZ25hbHMuU0lHTl9SRUxPQURFRCxcXG4gICAgICBTSUdOX0xPRyA9IHNpZ25hbHMuU0lHTl9MT0csXFxuICAgICAgU0lHTl9DT05ORUNUID0gc2lnbmFscy5TSUdOX0NPTk5FQ1Q7XFxuICB2YXIgUkVDT05ORUNUX0lOVEVSVkFMID0gY29uZmlnLlJFQ09OTkVDVF9JTlRFUlZBTCxcXG4gICAgICBTT0NLRVRfRVJSX0NPREVfUkVGID0gY29uZmlnLlNPQ0tFVF9FUlJfQ09ERV9SRUY7XFxuXFxuICB2YXIgX3JlZjIgPSBicm93c2VyIHx8IHt9LFxcbiAgICAgIGV4dGVuc2lvbiA9IF9yZWYyLmV4dGVuc2lvbixcXG4gICAgICBydW50aW1lID0gX3JlZjIucnVudGltZSxcXG4gICAgICB0YWJzID0gX3JlZjIudGFicztcXG5cXG4gIHZhciBtYW5pZmVzdCA9IHJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWxwZXIgZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xcblxcbiAgdmFyIGZvcm1hdHRlciA9IGZ1bmN0aW9uIGZvcm1hdHRlcihtc2cpIHtcXG4gICAgcmV0dXJuIFxcXCJbIFdFUjogXFxcIi5jb25jYXQobXNnLCBcXFwiIF1cXFwiKTtcXG4gIH07XFxuXFxuICB2YXIgbG9nZ2VyID0gZnVuY3Rpb24gbG9nZ2VyKG1zZykge1xcbiAgICB2YXIgbGV2ZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFxcXCJpbmZvXFxcIjtcXG4gICAgcmV0dXJuIGNvbnNvbGVbbGV2ZWxdKGZvcm1hdHRlcihtc2cpKTtcXG4gIH07XFxuXFxuICB2YXIgdGltZUZvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVGb3JtYXR0ZXIoZGF0ZSkge1xcbiAgICByZXR1cm4gZGF0ZS50b1RpbWVTdHJpbmcoKS5yZXBsYWNlKC8uKihcXFxcZHsyfTpcXFxcZHsyfTpcXFxcZHsyfSkuKi8sIFxcXCIkMVxcXCIpO1xcbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2FsbGVkIG9ubHkgb24gY29udGVudCBzY3JpcHRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xcblxcblxcbiAgZnVuY3Rpb24gY29udGVudFNjcmlwdFdvcmtlcigpIHtcXG4gICAgY29uc29sZS5sb2coJ2NvbnRlbnRTY3JpcHRXb3JrZXInKTtcXG4gICAgcnVudGltZS5zZW5kTWVzc2FnZSh7XFxuICAgICAgdHlwZTogU0lHTl9DT05ORUNUXFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKG1zZykge1xcbiAgICAgIHJldHVybiBjb25zb2xlLmluZm8obXNnKTtcXG4gICAgfSk7XFxuICAgIHJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChfcmVmMykge1xcbiAgICAgIHZhciB0eXBlID0gX3JlZjMudHlwZSxcXG4gICAgICAgICAgcGF5bG9hZCA9IF9yZWYzLnBheWxvYWQ7XFxuXFxuICAgICAgc3dpdGNoICh0eXBlKSB7XFxuICAgICAgICBjYXNlIFNJR05fUkVMT0FEOlxcbiAgICAgICAgICBsb2dnZXIoXFxcIkRldGVjdGVkIENoYW5nZXMuIFJlbG9hZGluZyAuLi5cXFwiKTtcXG4gICAgICAgICAgcmVsb2FkUGFnZSAmJiAod2luZG93ID09PSBudWxsIHx8IHdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcXG4gICAgICAgICAgYnJlYWs7XFxuXFxuICAgICAgICBjYXNlIFNJR05fTE9HOlxcbiAgICAgICAgICBjb25zb2xlLmluZm8ocGF5bG9hZCk7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBDYWxsZWQgb25seSBvbiBiYWNrZ3JvdW5kIHNjcmlwdHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGJhY2tncm91bmRXb3JrZXIoc29ja2V0KSB7XFxuICAgIHJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChhY3Rpb24sIHNlbmRlcikge1xcbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gU0lHTl9DT05ORUNUKSB7XFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvcm1hdHRlcihcXFwiQ29ubmVjdGVkIHRvIEV4dGVuc2lvbiBIb3QgUmVsb2FkZXJcXFwiKSk7XFxuICAgICAgfVxcblxcbiAgICAgIHJldHVybiB0cnVlO1xcbiAgICB9KTtcXG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXFxcIm1lc3NhZ2VcXFwiLCBmdW5jdGlvbiAoX3JlZjQpIHtcXG4gICAgICB2YXIgZGF0YSA9IF9yZWY0LmRhdGE7XFxuXFxuICAgICAgdmFyIF9KU09OJHBhcnNlID0gSlNPTi5wYXJzZShkYXRhKSxcXG4gICAgICAgICAgdHlwZSA9IF9KU09OJHBhcnNlLnR5cGUsXFxuICAgICAgICAgIHBheWxvYWQgPSBfSlNPTiRwYXJzZS5wYXlsb2FkO1xcblxcbiAgICAgIGlmICh0eXBlID09PSBTSUdOX0NIQU5HRSAmJiAoIXBheWxvYWQgfHwgIXBheWxvYWQub25seVBhZ2VDaGFuZ2VkKSkge1xcbiAgICAgICAgdGFicy5xdWVyeSh7XFxuICAgICAgICAgIHN0YXR1czogXFxcImNvbXBsZXRlXFxcIlxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAobG9hZGVkVGFicykge1xcbiAgICAgICAgICBsb2FkZWRUYWJzLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xcbiAgICAgICAgICAgIHJldHVybiB0YWIuaWQgJiYgdGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcXG4gICAgICAgICAgICAgIHR5cGU6IFNJR05fUkVMT0FEXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XFxuICAgICAgICAgICAgdHlwZTogU0lHTl9SRUxPQURFRCxcXG4gICAgICAgICAgICBwYXlsb2FkOiBmb3JtYXR0ZXIoXFxcIlxcXCIuY29uY2F0KHRpbWVGb3JtYXR0ZXIobmV3IERhdGUoKSksIFxcXCIgLSBcXFwiKS5jb25jYXQobWFuaWZlc3QubmFtZSwgXFxcIiBzdWNjZXNzZnVsbHkgcmVsb2FkZWRcXFwiKSlcXG4gICAgICAgICAgfSkpO1xcbiAgICAgICAgICBydW50aW1lLnJlbG9hZCgpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xcbiAgICAgICAgICB0eXBlOiB0eXBlLFxcbiAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcXFwiY2xvc2VcXFwiLCBmdW5jdGlvbiAoX3JlZjUpIHtcXG4gICAgICB2YXIgY29kZSA9IF9yZWY1LmNvZGU7XFxuICAgICAgbG9nZ2VyKFxcXCJTb2NrZXQgY29ubmVjdGlvbiBjbG9zZWQuIENvZGUgXFxcIi5jb25jYXQoY29kZSwgXFxcIi4gU2VlIG1vcmUgaW4gXFxcIikuY29uY2F0KFNPQ0tFVF9FUlJfQ09ERV9SRUYpLCBcXFwid2FyblxcXCIpO1xcbiAgICAgIHZhciBpbnRJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIGxvZ2dlcihcXFwiQXR0ZW1wdGluZyB0byByZWNvbm5lY3QgKHRpcDogQ2hlY2sgaWYgV2VicGFjayBpcyBydW5uaW5nKVxcXCIpO1xcbiAgICAgICAgdmFyIHdzID0gbmV3IFdlYlNvY2tldCh3c0hvc3QpO1xcblxcbiAgICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgcmV0dXJuIGxvZ2dlcihcXFwiRXJyb3IgdHJ5aW5nIHRvIHJlLWNvbm5lY3QuIFJlYXR0ZW1wdGluZyBpbiBcXFwiLmNvbmNhdChSRUNPTk5FQ1RfSU5URVJWQUwgLyAxMDAwLCBcXFwic1xcXCIpLCBcXFwid2FyblxcXCIpO1xcbiAgICAgICAgfTtcXG5cXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXFxcIm9wZW5cXFwiLCBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50SWQpO1xcbiAgICAgICAgICBsb2dnZXIoXFxcIlJlY29ubmVjdGVkLiBSZWxvYWRpbmcgcGx1Z2luXFxcIik7XFxuICAgICAgICAgIHJ1bnRpbWUucmVsb2FkKCk7XFxuICAgICAgICB9KTtcXG4gICAgICB9LCBSRUNPTk5FQ1RfSU5URVJWQUwpO1xcbiAgICB9KTtcXG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09IENhbGxlZCBvbmx5IG9uIGV4dGVuc2lvbiBwYWdlcyB0aGF0IGFyZSBub3QgdGhlIGJhY2tncm91bmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGV4dGVuc2lvblBhZ2VXb3JrZXIoKSB7XFxuICAgIHJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xcbiAgICAgIHR5cGU6IFNJR05fQ09OTkVDVFxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChtc2cpIHtcXG4gICAgICByZXR1cm4gY29uc29sZS5pbmZvKG1zZyk7XFxuICAgIH0pO1xcbiAgICBydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX3JlZjYpIHtcXG4gICAgICB2YXIgdHlwZSA9IF9yZWY2LnR5cGUsXFxuICAgICAgICAgIHBheWxvYWQgPSBfcmVmNi5wYXlsb2FkO1xcblxcbiAgICAgIHN3aXRjaCAodHlwZSkge1xcbiAgICAgICAgY2FzZSBTSUdOX0NIQU5HRTpcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJEZXRlY3RlZCBDaGFuZ2VzLiBSZWxvYWRpbmcgLi4uXFxcIik7XFxuICAgICAgICAgIHJlbG9hZFBhZ2UgJiYgKHdpbmRvdyA9PT0gbnVsbCB8fCB3aW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XFxuICAgICAgICAgIGJyZWFrO1xcblxcbiAgICAgICAgY2FzZSBTSUdOX0xPRzpcXG4gICAgICAgICAgY29uc29sZS5pbmZvKHBheWxvYWQpO1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBCb290c3RyYXBzIHRoZSBtaWRkbGV3YXJlID09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xcblxcblxcbiAgcnVudGltZS5yZWxvYWQgPyAhd2luZG93ID8gYmFja2dyb3VuZFdvcmtlcihuZXcgV2ViU29ja2V0KHdzSG9zdCkpIDogZXh0ZW5zaW9uUGFnZVdvcmtlcigpIDogY29udGVudFNjcmlwdFdvcmtlcigpO1xcbn0pKCk7XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBFbmQgb2YgV2VicGFjayBIb3QgRXh0ZW5zaW9uIE1pZGRsZXdhcmUgICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cIiIsImV4cG9ydCBkZWZhdWx0IFwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcXFwiZnVuY3Rpb25cXFwiICYmIGRlZmluZS5hbWQpIHtcXG4gICAgZGVmaW5lKFxcXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcXFwiLCBbXFxcIm1vZHVsZVxcXCJdLCBmYWN0b3J5KTtcXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFxcXCJ1bmRlZmluZWRcXFwiKSB7XFxuICAgIGZhY3RvcnkobW9kdWxlKTtcXG4gIH0gZWxzZSB7XFxuICAgIHZhciBtb2QgPSB7XFxuICAgICAgZXhwb3J0czoge31cXG4gICAgfTtcXG4gICAgZmFjdG9yeShtb2QpO1xcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xcbiAgfVxcbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcXG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjUuMCAtIFRodSBTZXAgMjYgMjAxOSAyMjoyMjoyNiAqL1xcbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xcbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXFxuICBcXFwidXNlIHN0cmljdFxcXCI7XFxuXFxuICBpZiAodHlwZW9mIGJyb3dzZXIgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihicm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcXFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxcXCI7XFxuICAgIGNvbnN0IFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORyA9IFxcXCJSZXR1cm5pbmcgYSBQcm9taXNlIGlzIHRoZSBwcmVmZXJyZWQgd2F5IHRvIHNlbmQgYSByZXBseSBmcm9tIGFuIG9uTWVzc2FnZS9vbk1lc3NhZ2VFeHRlcm5hbCBsaXN0ZW5lciwgYXMgdGhlIHNlbmRSZXNwb25zZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgc3BlY3MgKFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9ydW50aW1lL29uTWVzc2FnZSlcXFwiO1xcblxcbiAgICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXFxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXFxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XFxuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXFxcImluY2x1ZGVcXFwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXFxuICAgICAgLy8gSlNPTiBmaWxlLlxcbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xcbiAgICAgICAgXFxcImFsYXJtc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImNsZWFyQWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImJvb2ttYXJrc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Q2hpbGRyZW5cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UmVjZW50XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFN1YlRyZWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0VHJlZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVUcmVlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlYXJjaFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImJyb3dzZXJBY3Rpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJkaXNhYmxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZW5hYmxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QmFkZ2VUZXh0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm9wZW5Qb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEJhZGdlVGV4dFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEljb25cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0UG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJicm93c2luZ0RhdGFcXFwiOiB7XFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQ2FjaGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQ29va2llc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVEb3dubG9hZHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlRm9ybURhdGFcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlSGlzdG9yeVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVMb2NhbFN0b3JhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlUGFzc3dvcmRzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVBsdWdpbkRhdGFcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0dGluZ3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImNvbW1hbmRzXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJjb250ZXh0TWVudXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiY29va2llc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsQ29va2llU3RvcmVzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImRldnRvb2xzXFxcIjoge1xcbiAgICAgICAgICBcXFwiaW5zcGVjdGVkV2luZG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJldmFsXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgICAgXFxcInNpbmdsZUNhbGxiYWNrQXJnXFxcIjogZmFsc2VcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJwYW5lbHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMyxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMyxcXG4gICAgICAgICAgICAgIFxcXCJzaW5nbGVDYWxsYmFja0FyZ1xcXCI6IHRydWVcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiZG93bmxvYWRzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY2FuY2VsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRvd25sb2FkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImVyYXNlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEZpbGVJY29uXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm9wZW5cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJwYXVzZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVGaWxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlc3VtZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZWFyY2hcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2hvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJleHRlbnNpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiaGlzdG9yeVxcXCI6IHtcXG4gICAgICAgICAgXFxcImFkZFVybFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkZWxldGVBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGVsZXRlUmFuZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGVsZXRlVXJsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFZpc2l0c1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZWFyY2hcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImkxOG5cXFwiOiB7XFxuICAgICAgICAgIFxcXCJkZXRlY3RMYW5ndWFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBY2NlcHRMYW5ndWFnZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImlkZW50aXR5XFxcIjoge1xcbiAgICAgICAgICBcXFwibGF1bmNoV2ViQXV0aEZsb3dcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImlkbGVcXFwiOiB7XFxuICAgICAgICAgIFxcXCJxdWVyeVN0YXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJtYW5hZ2VtZW50XFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRTZWxmXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEVuYWJsZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidW5pbnN0YWxsU2VsZlxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwibm90aWZpY2F0aW9uc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UGVybWlzc2lvbkxldmVsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwicGFnZUFjdGlvblxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImhpZGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRJY29uXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0VGl0bGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzaG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInBlcm1pc3Npb25zXFxcIjoge1xcbiAgICAgICAgICBcXFwiY29udGFpbnNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXF1ZXN0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJydW50aW1lXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0QmFja2dyb3VuZFBhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UGxhdGZvcm1JbmZvXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm9wZW5PcHRpb25zUGFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VuZE1lc3NhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogM1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VuZE5hdGl2ZU1lc3NhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0VW5pbnN0YWxsVVJMXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJzZXNzaW9uc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldERldmljZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UmVjZW50bHlDbG9zZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVzdG9yZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwic3RvcmFnZVxcXCI6IHtcXG4gICAgICAgICAgXFxcImxvY2FsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldEJ5dGVzSW5Vc2VcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJzZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJtYW5hZ2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRCeXRlc0luVXNlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic3luY1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwiY2xlYXJcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRCeXRlc0luVXNlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwic2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInRhYnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjYXB0dXJlVmlzaWJsZVRhYlxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGV0ZWN0TGFuZ3VhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGlzY2FyZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkdXBsaWNhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZXhlY3V0ZVNjcmlwdFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Q3VycmVudFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRab29tXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFpvb21TZXR0aW5nc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJoaWdobGlnaHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaW5zZXJ0Q1NTXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicXVlcnlcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVsb2FkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVDU1NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VuZE1lc3NhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogM1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0Wm9vbVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRab29tU2V0dGluZ3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ0b3BTaXRlc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwid2ViTmF2aWdhdGlvblxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldEFsbEZyYW1lc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRGcmFtZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwid2ViUmVxdWVzdFxcXCI6IHtcXG4gICAgICAgICAgXFxcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIndpbmRvd3NcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRDdXJyZW50XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldExhc3RGb2N1c2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfTtcXG5cXG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxcXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFxcXCIpO1xcbiAgICAgIH1cXG5cXG4gICAgICAvKipcXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcXG4gICAgICAgKiBvdGhlcndpc2UuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXFxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XFxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cXG4gICAgICAgKi9cXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgc3VwZXIoaXRlbXMpO1xcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgZ2V0KGtleSkge1xcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcXG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC8qKlxcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxcbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxcbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cXG4gICAgICAgKi9cXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXFxcIm9iamVjdFxcXCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFxcXCJmdW5jdGlvblxcXCI7XFxuICAgICAgfTtcXG5cXG4gICAgICAvKipcXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcXG4gICAgICAgKlxcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cXG4gICAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXFxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxcbiAgICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXFxuICAgICAgICogICAgICAgIHByb21pc2UuXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdGlvblxcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heFJlc29sdmVkQXJnc1xcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXFxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XFxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXFxuICAgICAgICovXFxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XFxuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcXG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfTtcXG4gICAgICB9O1xcblxcbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXFxcImFyZ3VtZW50XFxcIiA6IFxcXCJhcmd1bWVudHNcXFwiO1xcblxcbiAgICAgIC8qKlxcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXFxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxcbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxcbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heFJlc29sdmVkQXJnc1xcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXFxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cXG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXFxuICAgICAgICovXFxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cXG4gICAgICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soeyByZXNvbHZlLCByZWplY3QgfSwgbWV0YWRhdGEpKTtcXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFxcXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFxcXCIsIGNiRXJyb3IpO1xcblxcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XFxuXFxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXFxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XFxuXFxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7IHJlc29sdmUsIHJlamVjdCB9LCBtZXRhZGF0YSkpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9O1xcbiAgICAgIH07XFxuXFxuICAgICAgLyoqXFxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxcbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxcbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxcbiAgICAgICAqL1xcbiAgICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XFxuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuICAgICAgfTtcXG5cXG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XFxuXFxuICAgICAgLyoqXFxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXFxuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcXG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXFxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXFxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXFxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXFxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXFxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXFxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XFxuICAgICAgICovXFxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcXG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XFxuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XFxuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XFxuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcXG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XFxuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XFxuXFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXFxcImZ1bmN0aW9uXFxcIikge1xcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cXG5cXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcXG4gICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcXFwib2JqZWN0XFxcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXFxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcXG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuXFxuICAgICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFxcXCJnZXRcXFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXFxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXFxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXFxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cXG4gICAgICAgIC8vXFxuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXFxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxcbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xcbiAgICAgIH07XFxuXFxuICAgICAgLyoqXFxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXFxuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cXG4gICAgICAgKlxcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXFxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge29iamVjdH1cXG4gICAgICAgKi9cXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XFxuICAgICAgICBhZGRMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyLCAuLi5hcmdzKSB7XFxuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcXG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcXG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XFxuICAgICAgICB9XFxuICAgICAgfSk7XFxuXFxuICAgICAgLy8gS2VlcCB0cmFjayBpZiB0aGUgZGVwcmVjYXRpb24gd2FybmluZyBoYXMgYmVlbiBsb2dnZWQgYXQgbGVhc3Qgb25jZS5cXG4gICAgICBsZXQgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gZmFsc2U7XFxuXFxuICAgICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXFxcImZ1bmN0aW9uXFxcIikge1xcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKipcXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxcbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXFxuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXFxuICAgICAgICAgKlxcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXFxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxcbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXFxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxcbiAgICAgICAgICovXFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XFxuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XFxuXFxuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICAgIGlmICghbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nKSB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcsIG5ldyBFcnJvcigpLnN0YWNrKTtcXG4gICAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XFxuICAgICAgICAgICAgfTtcXG4gICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgIGxldCByZXN1bHQ7XFxuICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XFxuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcXG5cXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXFxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxcbiAgICAgICAgICAvLyBwcm9taXNlKS5cXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XFxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XFxuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxcbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XFxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xcbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcXFwic3RyaW5nXFxcIikpIHtcXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XFxuICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXFxcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcXFwiO1xcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcXG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXFxuICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcXFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XFxcIiwgZXJyKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgfTtcXG5cXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxcbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xcbiAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXFxuICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgfTtcXG4gICAgICB9KTtcXG5cXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7IHJlamVjdCwgcmVzb2x2ZSB9LCByZXBseSkgPT4ge1xcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcXG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXFxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcXG4gICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXFxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XFxuICAgICAgICB9XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcXG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcXG4gICAgICAgIHJ1bnRpbWU6IHtcXG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFxcXCJzZW5kTWVzc2FnZVxcXCIsIHsgbWluQXJnczogMSwgbWF4QXJnczogMyB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHRhYnM6IHtcXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFxcXCJzZW5kTWVzc2FnZVxcXCIsIHsgbWluQXJnczogMiwgbWF4QXJnczogMyB9KVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xcbiAgICAgICAgY2xlYXI6IHsgbWluQXJnczogMSwgbWF4QXJnczogMSB9LFxcbiAgICAgICAgZ2V0OiB7IG1pbkFyZ3M6IDEsIG1heEFyZ3M6IDEgfSxcXG4gICAgICAgIHNldDogeyBtaW5BcmdzOiAxLCBtYXhBcmdzOiAxIH1cXG4gICAgICB9O1xcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XFxuICAgICAgICBuZXR3b3JrOiB7XFxuICAgICAgICAgIG5ldHdvcmtQcmVkaWN0aW9uRW5hYmxlZDogc2V0dGluZ01ldGFkYXRhLFxcbiAgICAgICAgICB3ZWJSVENJUEhhbmRsaW5nUG9saWN5OiBzZXR0aW5nTWV0YWRhdGFcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXJ2aWNlczoge1xcbiAgICAgICAgICBwYXNzd29yZFNhdmluZ0VuYWJsZWQ6IHNldHRpbmdNZXRhZGF0YVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdlYnNpdGVzOiB7XFxuICAgICAgICAgIGh5cGVybGlua0F1ZGl0aW5nRW5hYmxlZDogc2V0dGluZ01ldGFkYXRhLFxcbiAgICAgICAgICByZWZlcnJlcnNFbmFibGVkOiBzZXR0aW5nTWV0YWRhdGFcXG4gICAgICAgIH1cXG4gICAgICB9O1xcblxcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XFxuICAgIH07XFxuXFxuICAgIGlmICh0eXBlb2YgY2hyb21lICE9IFxcXCJvYmplY3RcXFwiIHx8ICFjaHJvbWUgfHwgIWNocm9tZS5ydW50aW1lIHx8ICFjaHJvbWUucnVudGltZS5pZCkge1xcbiAgICAgIHRocm93IG5ldyBFcnJvcihcXFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXFxcIik7XFxuICAgIH1cXG5cXG4gICAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXFxuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcXG4gIH0gZWxzZSB7XFxuICAgIG1vZHVsZS5leHBvcnRzID0gYnJvd3NlcjtcXG4gIH1cXG59KTtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxcblwiIiwidmFyIFNvdXJjZU1hcENvbnN1bWVyID0gcmVxdWlyZSgnc291cmNlLW1hcCcpLlNvdXJjZU1hcENvbnN1bWVyO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbnZhciBmcztcbnRyeSB7XG4gIGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jIHx8ICFmcy5yZWFkRmlsZVN5bmMpIHtcbiAgICAvLyBmcyBkb2Vzbid0IGhhdmUgYWxsIG1ldGhvZHMgd2UgbmVlZFxuICAgIGZzID0gbnVsbDtcbiAgfVxufSBjYXRjaCAoZXJyKSB7XG4gIC8qIG5vcCAqL1xufVxuXG52YXIgYnVmZmVyRnJvbSA9IHJlcXVpcmUoJ2J1ZmZlci1mcm9tJyk7XG5cbi8qKlxuICogUmVxdWlyZXMgYSBtb2R1bGUgd2hpY2ggaXMgcHJvdGVjdGVkIGFnYWluc3QgYnVuZGxlciBtaW5pZmljYXRpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTW9kdWxlfSBtb2RcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGR5bmFtaWNSZXF1aXJlKG1vZCwgcmVxdWVzdCkge1xuICByZXR1cm4gbW9kLnJlcXVpcmUocmVxdWVzdCk7XG59XG5cbi8vIE9ubHkgaW5zdGFsbCBvbmNlIGlmIGNhbGxlZCBtdWx0aXBsZSB0aW1lc1xudmFyIGVycm9yRm9ybWF0dGVySW5zdGFsbGVkID0gZmFsc2U7XG52YXIgdW5jYXVnaHRTaGltSW5zdGFsbGVkID0gZmFsc2U7XG5cbi8vIElmIHRydWUsIHRoZSBjYWNoZXMgYXJlIHJlc2V0IGJlZm9yZSBhIHN0YWNrIHRyYWNlIGZvcm1hdHRpbmcgb3BlcmF0aW9uXG52YXIgZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zID0gZmFsc2U7XG5cbi8vIFN1cHBvcnRzIHticm93c2VyLCBub2RlLCBhdXRvfVxudmFyIGVudmlyb25tZW50ID0gXCJhdXRvXCI7XG5cbi8vIE1hcHMgYSBmaWxlIHBhdGggdG8gYSBzdHJpbmcgY29udGFpbmluZyB0aGUgZmlsZSBjb250ZW50c1xudmFyIGZpbGVDb250ZW50c0NhY2hlID0ge307XG5cbi8vIE1hcHMgYSBmaWxlIHBhdGggdG8gYSBzb3VyY2UgbWFwIGZvciB0aGF0IGZpbGVcbnZhciBzb3VyY2VNYXBDYWNoZSA9IHt9O1xuXG4vLyBSZWdleCBmb3IgZGV0ZWN0aW5nIHNvdXJjZSBtYXBzXG52YXIgcmVTb3VyY2VNYXAgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uW14sXStiYXNlNjQsLztcblxuLy8gUHJpb3JpdHkgbGlzdCBvZiByZXRyaWV2ZSBoYW5kbGVyc1xudmFyIHJldHJpZXZlRmlsZUhhbmRsZXJzID0gW107XG52YXIgcmV0cmlldmVNYXBIYW5kbGVycyA9IFtdO1xuXG5mdW5jdGlvbiBpc0luQnJvd3NlcigpIHtcbiAgaWYgKGVudmlyb25tZW50ID09PSBcImJyb3dzZXJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGVudmlyb25tZW50ID09PSBcIm5vZGVcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSAnZnVuY3Rpb24nKSAmJiAhKHdpbmRvdy5yZXF1aXJlICYmIHdpbmRvdy5tb2R1bGUgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gXCJyZW5kZXJlclwiKSk7XG59XG5cbmZ1bmN0aW9uIGhhc0dsb2JhbFByb2Nlc3NFdmVudEVtaXR0ZXIoKSB7XG4gIHJldHVybiAoKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgJiYgKHByb2Nlc3MgIT09IG51bGwpICYmICh0eXBlb2YgcHJvY2Vzcy5vbiA9PT0gJ2Z1bmN0aW9uJykpO1xufVxuXG5mdW5jdGlvbiBnbG9iYWxQcm9jZXNzVmVyc2lvbigpIHtcbiAgaWYgKCh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpICYmIChwcm9jZXNzICE9PSBudWxsKSkge1xuICAgIHJldHVybiBwcm9jZXNzLnZlcnNpb247XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdsb2JhbFByb2Nlc3NTdGRlcnIoKSB7XG4gIGlmICgodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSAmJiAocHJvY2VzcyAhPT0gbnVsbCkpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5zdGRlcnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2xvYmFsUHJvY2Vzc0V4aXQoY29kZSkge1xuICBpZiAoKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgJiYgKHByb2Nlc3MgIT09IG51bGwpICYmICh0eXBlb2YgcHJvY2Vzcy5leGl0ID09PSAnZnVuY3Rpb24nKSkge1xuICAgIHJldHVybiBwcm9jZXNzLmV4aXQoY29kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlckV4ZWMobGlzdCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmV0ID0gbGlzdFtpXShhcmcpO1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIHJldHJpZXZlRmlsZSA9IGhhbmRsZXJFeGVjKHJldHJpZXZlRmlsZUhhbmRsZXJzKTtcblxucmV0cmlldmVGaWxlSGFuZGxlcnMucHVzaChmdW5jdGlvbihwYXRoKSB7XG4gIC8vIFRyaW0gdGhlIHBhdGggdG8gbWFrZSBzdXJlIHRoZXJlIGlzIG5vIGV4dHJhIHdoaXRlc3BhY2UuXG4gIHBhdGggPSBwYXRoLnRyaW0oKTtcbiAgaWYgKC9eZmlsZTovLnRlc3QocGF0aCkpIHtcbiAgICAvLyBleGlzdHNTeW5jL3JlYWRGaWxlU3luYyBjYW4ndCBoYW5kbGUgZmlsZSBwcm90b2NvbCwgYnV0IG9uY2Ugc3RyaXBwZWQsIGl0IHdvcmtzXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvZmlsZTpcXC9cXC9cXC8oXFx3Oik/LywgZnVuY3Rpb24ocHJvdG9jb2wsIGRyaXZlKSB7XG4gICAgICByZXR1cm4gZHJpdmUgP1xuICAgICAgICAnJyA6IC8vIGZpbGU6Ly8vQzovZGlyL2ZpbGUgLT4gQzovZGlyL2ZpbGVcbiAgICAgICAgJy8nOyAvLyBmaWxlOi8vL3Jvb3QtZGlyL2ZpbGUgLT4gL3Jvb3QtZGlyL2ZpbGVcbiAgICB9KTtcbiAgfVxuICBpZiAocGF0aCBpbiBmaWxlQ29udGVudHNDYWNoZSkge1xuICAgIHJldHVybiBmaWxlQ29udGVudHNDYWNoZVtwYXRoXTtcbiAgfVxuXG4gIHZhciBjb250ZW50cyA9ICcnO1xuICB0cnkge1xuICAgIGlmICghZnMpIHtcbiAgICAgIC8vIFVzZSBTSkFYIGlmIHdlIGFyZSBpbiB0aGUgYnJvd3NlclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBhdGgsIC8qKiBhc3luYyAqLyBmYWxzZSk7XG4gICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29udGVudHMgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgdGhlIGZpbGVzeXN0ZW1cbiAgICAgIGNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGY4Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlcikge1xuICAgIC8qIGlnbm9yZSBhbnkgZXJyb3JzICovXG4gIH1cblxuICByZXR1cm4gZmlsZUNvbnRlbnRzQ2FjaGVbcGF0aF0gPSBjb250ZW50cztcbn0pO1xuXG4vLyBTdXBwb3J0IFVSTHMgcmVsYXRpdmUgdG8gYSBkaXJlY3RvcnksIGJ1dCBiZSBjYXJlZnVsIGFib3V0IGEgcHJvdG9jb2wgcHJlZml4XG4vLyBpbiBjYXNlIHdlIGFyZSBpbiB0aGUgYnJvd3NlciAoaS5lLiBkaXJlY3RvcmllcyBtYXkgc3RhcnQgd2l0aCBcImh0dHA6Ly9cIiBvciBcImZpbGU6Ly8vXCIpXG5mdW5jdGlvbiBzdXBwb3J0UmVsYXRpdmVVUkwoZmlsZSwgdXJsKSB7XG4gIGlmICghZmlsZSkgcmV0dXJuIHVybDtcbiAgdmFyIGRpciA9IHBhdGguZGlybmFtZShmaWxlKTtcbiAgdmFyIG1hdGNoID0gL15cXHcrOlxcL1xcL1teXFwvXSovLmV4ZWMoZGlyKTtcbiAgdmFyIHByb3RvY29sID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xuICB2YXIgc3RhcnRQYXRoID0gZGlyLnNsaWNlKHByb3RvY29sLmxlbmd0aCk7XG4gIGlmIChwcm90b2NvbCAmJiAvXlxcL1xcd1xcOi8udGVzdChzdGFydFBhdGgpKSB7XG4gICAgLy8gaGFuZGxlIGZpbGU6Ly8vQzovIHBhdGhzXG4gICAgcHJvdG9jb2wgKz0gJy8nO1xuICAgIHJldHVybiBwcm90b2NvbCArIHBhdGgucmVzb2x2ZShkaXIuc2xpY2UocHJvdG9jb2wubGVuZ3RoKSwgdXJsKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gIH1cbiAgcmV0dXJuIHByb3RvY29sICsgcGF0aC5yZXNvbHZlKGRpci5zbGljZShwcm90b2NvbC5sZW5ndGgpLCB1cmwpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVNvdXJjZU1hcFVSTChzb3VyY2UpIHtcbiAgdmFyIGZpbGVEYXRhO1xuXG4gIGlmIChpc0luQnJvd3NlcigpKSB7XG4gICAgIHRyeSB7XG4gICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgIHhoci5vcGVuKCdHRVQnLCBzb3VyY2UsIGZhbHNlKTtcbiAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICBmaWxlRGF0YSA9IHhoci5yZWFkeVN0YXRlID09PSA0ID8geGhyLnJlc3BvbnNlVGV4dCA6IG51bGw7XG5cbiAgICAgICAvLyBTdXBwb3J0IHByb3ZpZGluZyBhIHNvdXJjZU1hcHBpbmdVUkwgdmlhIHRoZSBTb3VyY2VNYXAgaGVhZGVyXG4gICAgICAgdmFyIHNvdXJjZU1hcEhlYWRlciA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIlNvdXJjZU1hcFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVNvdXJjZU1hcFwiKTtcbiAgICAgICBpZiAoc291cmNlTWFwSGVhZGVyKSB7XG4gICAgICAgICByZXR1cm4gc291cmNlTWFwSGVhZGVyO1xuICAgICAgIH1cbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIFVSTCBvZiB0aGUgc291cmNlIG1hcFxuICBmaWxlRGF0YSA9IHJldHJpZXZlRmlsZShzb3VyY2UpO1xuICB2YXIgcmUgPSAvKD86XFwvXFwvW0AjXVtcXHNdKnNvdXJjZU1hcHBpbmdVUkw9KFteXFxzJ1wiXSspW1xcc10qJCl8KD86XFwvXFwqW0AjXVtcXHNdKnNvdXJjZU1hcHBpbmdVUkw9KFteXFxzKidcIl0rKVtcXHNdKig/OlxcKlxcLylbXFxzXSokKS9tZztcbiAgLy8gS2VlcCBleGVjdXRpbmcgdGhlIHNlYXJjaCB0byBmaW5kIHRoZSAqbGFzdCogc291cmNlTWFwcGluZ1VSTCB0byBhdm9pZFxuICAvLyBwaWNraW5nIHVwIHNvdXJjZU1hcHBpbmdVUkxzIGZyb20gY29tbWVudHMsIHN0cmluZ3MsIGV0Yy5cbiAgdmFyIGxhc3RNYXRjaCwgbWF0Y2g7XG4gIHdoaWxlIChtYXRjaCA9IHJlLmV4ZWMoZmlsZURhdGEpKSBsYXN0TWF0Y2ggPSBtYXRjaDtcbiAgaWYgKCFsYXN0TWF0Y2gpIHJldHVybiBudWxsO1xuICByZXR1cm4gbGFzdE1hdGNoWzFdO1xufTtcblxuLy8gQ2FuIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHJldHJpZXZlU291cmNlTWFwIG9wdGlvbiB0byBpbnN0YWxsLiBUYWtlcyBhXG4vLyBnZW5lcmF0ZWQgc291cmNlIGZpbGVuYW1lOyByZXR1cm5zIGEge21hcCwgb3B0aW9uYWwgdXJsfSBvYmplY3QsIG9yIG51bGwgaWZcbi8vIHRoZXJlIGlzIG5vIHNvdXJjZSBtYXAuICBUaGUgbWFwIGZpZWxkIG1heSBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgdGhlIHBhcnNlZFxuLy8gSlNPTiBvYmplY3QgKGllLCBpdCBtdXN0IGJlIGEgdmFsaWQgYXJndW1lbnQgdG8gdGhlIFNvdXJjZU1hcENvbnN1bWVyXG4vLyBjb25zdHJ1Y3RvcikuXG52YXIgcmV0cmlldmVTb3VyY2VNYXAgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZU1hcEhhbmRsZXJzKTtcbnJldHJpZXZlTWFwSGFuZGxlcnMucHVzaChmdW5jdGlvbihzb3VyY2UpIHtcbiAgdmFyIHNvdXJjZU1hcHBpbmdVUkwgPSByZXRyaWV2ZVNvdXJjZU1hcFVSTChzb3VyY2UpO1xuICBpZiAoIXNvdXJjZU1hcHBpbmdVUkwpIHJldHVybiBudWxsO1xuXG4gIC8vIFJlYWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzb3VyY2UgbWFwXG4gIHZhciBzb3VyY2VNYXBEYXRhO1xuICBpZiAocmVTb3VyY2VNYXAudGVzdChzb3VyY2VNYXBwaW5nVVJMKSkge1xuICAgIC8vIFN1cHBvcnQgc291cmNlIG1hcCBVUkwgYXMgYSBkYXRhIHVybFxuICAgIHZhciByYXdEYXRhID0gc291cmNlTWFwcGluZ1VSTC5zbGljZShzb3VyY2VNYXBwaW5nVVJMLmluZGV4T2YoJywnKSArIDEpO1xuICAgIHNvdXJjZU1hcERhdGEgPSBidWZmZXJGcm9tKHJhd0RhdGEsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gICAgc291cmNlTWFwcGluZ1VSTCA9IHNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdXBwb3J0IHNvdXJjZSBtYXAgVVJMcyByZWxhdGl2ZSB0byB0aGUgc291cmNlIFVSTFxuICAgIHNvdXJjZU1hcHBpbmdVUkwgPSBzdXBwb3J0UmVsYXRpdmVVUkwoc291cmNlLCBzb3VyY2VNYXBwaW5nVVJMKTtcbiAgICBzb3VyY2VNYXBEYXRhID0gcmV0cmlldmVGaWxlKHNvdXJjZU1hcHBpbmdVUkwpO1xuICB9XG5cbiAgaWYgKCFzb3VyY2VNYXBEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVybDogc291cmNlTWFwcGluZ1VSTCxcbiAgICBtYXA6IHNvdXJjZU1hcERhdGFcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtYXBTb3VyY2VQb3NpdGlvbihwb3NpdGlvbikge1xuICB2YXIgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXTtcbiAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAvLyBDYWxsIHRoZSAob3ZlcnJpZGVhYmxlKSByZXRyaWV2ZVNvdXJjZU1hcCBmdW5jdGlvbiB0byBnZXQgdGhlIHNvdXJjZSBtYXAuXG4gICAgdmFyIHVybEFuZE1hcCA9IHJldHJpZXZlU291cmNlTWFwKHBvc2l0aW9uLnNvdXJjZSk7XG4gICAgaWYgKHVybEFuZE1hcCkge1xuICAgICAgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXSA9IHtcbiAgICAgICAgdXJsOiB1cmxBbmRNYXAudXJsLFxuICAgICAgICBtYXA6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1cmxBbmRNYXAubWFwKVxuICAgICAgfTtcblxuICAgICAgLy8gTG9hZCBhbGwgc291cmNlcyBzdG9yZWQgaW5saW5lIHdpdGggdGhlIHNvdXJjZSBtYXAgaW50byB0aGUgZmlsZSBjYWNoZVxuICAgICAgLy8gdG8gcHJldGVuZCBsaWtlIHRoZXkgYXJlIGFscmVhZHkgbG9hZGVkLiBUaGV5IG1heSBub3QgZXhpc3Qgb24gZGlzay5cbiAgICAgIGlmIChzb3VyY2VNYXAubWFwLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICAgIHNvdXJjZU1hcC5tYXAuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSwgaSkge1xuICAgICAgICAgIHZhciBjb250ZW50cyA9IHNvdXJjZU1hcC5tYXAuc291cmNlc0NvbnRlbnRbaV07XG4gICAgICAgICAgaWYgKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gc3VwcG9ydFJlbGF0aXZlVVJMKHNvdXJjZU1hcC51cmwsIHNvdXJjZSk7XG4gICAgICAgICAgICBmaWxlQ29udGVudHNDYWNoZVt1cmxdID0gY29udGVudHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXSA9IHtcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBtYXA6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzb2x2ZSB0aGUgc291cmNlIFVSTCByZWxhdGl2ZSB0byB0aGUgVVJMIG9mIHRoZSBzb3VyY2UgbWFwXG4gIGlmIChzb3VyY2VNYXAgJiYgc291cmNlTWFwLm1hcCAmJiB0eXBlb2Ygc291cmNlTWFwLm1hcC5vcmlnaW5hbFBvc2l0aW9uRm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG9yaWdpbmFsUG9zaXRpb24gPSBzb3VyY2VNYXAubWFwLm9yaWdpbmFsUG9zaXRpb25Gb3IocG9zaXRpb24pO1xuXG4gICAgLy8gT25seSByZXR1cm4gdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGlmIGEgbWF0Y2hpbmcgbGluZSB3YXMgZm91bmQuIElmIG5vXG4gICAgLy8gbWF0Y2hpbmcgbGluZSBpcyBmb3VuZCB0aGVuIHdlIHJldHVybiBwb3NpdGlvbiBpbnN0ZWFkLCB3aGljaCB3aWxsIGNhdXNlXG4gICAgLy8gdGhlIHN0YWNrIHRyYWNlIHRvIHByaW50IHRoZSBwYXRoIGFuZCBsaW5lIGZvciB0aGUgY29tcGlsZWQgZmlsZS4gSXQgaXNcbiAgICAvLyBiZXR0ZXIgdG8gZ2l2ZSBhIHByZWNpc2UgbG9jYXRpb24gaW4gdGhlIGNvbXBpbGVkIGZpbGUgdGhhbiBhIHZhZ3VlXG4gICAgLy8gbG9jYXRpb24gaW4gdGhlIG9yaWdpbmFsIGZpbGUuXG4gICAgaWYgKG9yaWdpbmFsUG9zaXRpb24uc291cmNlICE9PSBudWxsKSB7XG4gICAgICBvcmlnaW5hbFBvc2l0aW9uLnNvdXJjZSA9IHN1cHBvcnRSZWxhdGl2ZVVSTChcbiAgICAgICAgc291cmNlTWFwLnVybCwgb3JpZ2luYWxQb3NpdGlvbi5zb3VyY2UpO1xuICAgICAgcmV0dXJuIG9yaWdpbmFsUG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG4vLyBQYXJzZXMgY29kZSBnZW5lcmF0ZWQgYnkgRm9ybWF0RXZhbE9yaWdpbigpLCBhIGZ1bmN0aW9uIGluc2lkZSBWODpcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvc291cmNlL2Jyb3dzZS90cnVuay9zcmMvbWVzc2FnZXMuanNcbmZ1bmN0aW9uIG1hcEV2YWxPcmlnaW4ob3JpZ2luKSB7XG4gIC8vIE1vc3QgZXZhbCgpIGNhbGxzIGFyZSBpbiB0aGlzIGZvcm1hdFxuICB2YXIgbWF0Y2ggPSAvXmV2YWwgYXQgKFteKF0rKSBcXCgoLispOihcXGQrKTooXFxkKylcXCkkLy5leGVjKG9yaWdpbik7XG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBwb3NpdGlvbiA9IG1hcFNvdXJjZVBvc2l0aW9uKHtcbiAgICAgIHNvdXJjZTogbWF0Y2hbMl0sXG4gICAgICBsaW5lOiArbWF0Y2hbM10sXG4gICAgICBjb2x1bW46IG1hdGNoWzRdIC0gMVxuICAgIH0pO1xuICAgIHJldHVybiAnZXZhbCBhdCAnICsgbWF0Y2hbMV0gKyAnICgnICsgcG9zaXRpb24uc291cmNlICsgJzonICtcbiAgICAgIHBvc2l0aW9uLmxpbmUgKyAnOicgKyAocG9zaXRpb24uY29sdW1uICsgMSkgKyAnKSc7XG4gIH1cblxuICAvLyBQYXJzZSBuZXN0ZWQgZXZhbCgpIGNhbGxzIHVzaW5nIHJlY3Vyc2lvblxuICBtYXRjaCA9IC9eZXZhbCBhdCAoW14oXSspIFxcKCguKylcXCkkLy5leGVjKG9yaWdpbik7XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiAnZXZhbCBhdCAnICsgbWF0Y2hbMV0gKyAnICgnICsgbWFwRXZhbE9yaWdpbihtYXRjaFsyXSkgKyAnKSc7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2Ugc3RpbGwgcmV0dXJuIHVzZWZ1bCBpbmZvcm1hdGlvbiBpZiB3ZSBkaWRuJ3QgZmluZCBhbnl0aGluZ1xuICByZXR1cm4gb3JpZ2luO1xufVxuXG4vLyBUaGlzIGlzIGNvcGllZCBhbG1vc3QgdmVyYmF0aW0gZnJvbSB0aGUgVjggc291cmNlIGNvZGUgYXRcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvc291cmNlL2Jyb3dzZS90cnVuay9zcmMvbWVzc2FnZXMuanMuIFRoZVxuLy8gaW1wbGVtZW50YXRpb24gb2Ygd3JhcENhbGxTaXRlKCkgdXNlZCB0byBqdXN0IGZvcndhcmQgdG8gdGhlIGFjdHVhbCBzb3VyY2Vcbi8vIGNvZGUgb2YgQ2FsbFNpdGUucHJvdG90eXBlLnRvU3RyaW5nIGJ1dCB1bmZvcnR1bmF0ZWx5IGEgbmV3IHJlbGVhc2Ugb2YgVjhcbi8vIGRpZCBzb21ldGhpbmcgdG8gdGhlIHByb3RvdHlwZSBjaGFpbiBhbmQgYnJva2UgdGhlIHNoaW0uIFRoZSBvbmx5IGZpeCBJXG4vLyBjb3VsZCBmaW5kIHdhcyBjb3B5L3Bhc3RlLlxuZnVuY3Rpb24gQ2FsbFNpdGVUb1N0cmluZygpIHtcbiAgdmFyIGZpbGVOYW1lO1xuICB2YXIgZmlsZUxvY2F0aW9uID0gXCJcIjtcbiAgaWYgKHRoaXMuaXNOYXRpdmUoKSkge1xuICAgIGZpbGVMb2NhdGlvbiA9IFwibmF0aXZlXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsZU5hbWUgPSB0aGlzLmdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCgpO1xuICAgIGlmICghZmlsZU5hbWUgJiYgdGhpcy5pc0V2YWwoKSkge1xuICAgICAgZmlsZUxvY2F0aW9uID0gdGhpcy5nZXRFdmFsT3JpZ2luKCk7XG4gICAgICBmaWxlTG9jYXRpb24gKz0gXCIsIFwiOyAgLy8gRXhwZWN0aW5nIHNvdXJjZSBwb3NpdGlvbiB0byBmb2xsb3cuXG4gICAgfVxuXG4gICAgaWYgKGZpbGVOYW1lKSB7XG4gICAgICBmaWxlTG9jYXRpb24gKz0gZmlsZU5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvdXJjZSBjb2RlIGRvZXMgbm90IG9yaWdpbmF0ZSBmcm9tIGEgZmlsZSBhbmQgaXMgbm90IG5hdGl2ZSwgYnV0IHdlXG4gICAgICAvLyBjYW4gc3RpbGwgZ2V0IHRoZSBzb3VyY2UgcG9zaXRpb24gaW5zaWRlIHRoZSBzb3VyY2Ugc3RyaW5nLCBlLmcuIGluXG4gICAgICAvLyBhbiBldmFsIHN0cmluZy5cbiAgICAgIGZpbGVMb2NhdGlvbiArPSBcIjxhbm9ueW1vdXM+XCI7XG4gICAgfVxuICAgIHZhciBsaW5lTnVtYmVyID0gdGhpcy5nZXRMaW5lTnVtYmVyKCk7XG4gICAgaWYgKGxpbmVOdW1iZXIgIT0gbnVsbCkge1xuICAgICAgZmlsZUxvY2F0aW9uICs9IFwiOlwiICsgbGluZU51bWJlcjtcbiAgICAgIHZhciBjb2x1bW5OdW1iZXIgPSB0aGlzLmdldENvbHVtbk51bWJlcigpO1xuICAgICAgaWYgKGNvbHVtbk51bWJlcikge1xuICAgICAgICBmaWxlTG9jYXRpb24gKz0gXCI6XCIgKyBjb2x1bW5OdW1iZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGxpbmUgPSBcIlwiO1xuICB2YXIgZnVuY3Rpb25OYW1lID0gdGhpcy5nZXRGdW5jdGlvbk5hbWUoKTtcbiAgdmFyIGFkZFN1ZmZpeCA9IHRydWU7XG4gIHZhciBpc0NvbnN0cnVjdG9yID0gdGhpcy5pc0NvbnN0cnVjdG9yKCk7XG4gIHZhciBpc01ldGhvZENhbGwgPSAhKHRoaXMuaXNUb3BsZXZlbCgpIHx8IGlzQ29uc3RydWN0b3IpO1xuICBpZiAoaXNNZXRob2RDYWxsKSB7XG4gICAgdmFyIHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSgpO1xuICAgIC8vIEZpeGVzIHNoaW0gdG8gYmUgYmFja3dhcmQgY29tcGF0YWJsZSB3aXRoIE5vZGUgdjAgdG8gdjRcbiAgICBpZiAodHlwZU5hbWUgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgIHR5cGVOYW1lID0gXCJudWxsXCI7XG4gICAgfVxuICAgIHZhciBtZXRob2ROYW1lID0gdGhpcy5nZXRNZXRob2ROYW1lKCk7XG4gICAgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgaWYgKHR5cGVOYW1lICYmIGZ1bmN0aW9uTmFtZS5pbmRleE9mKHR5cGVOYW1lKSAhPSAwKSB7XG4gICAgICAgIGxpbmUgKz0gdHlwZU5hbWUgKyBcIi5cIjtcbiAgICAgIH1cbiAgICAgIGxpbmUgKz0gZnVuY3Rpb25OYW1lO1xuICAgICAgaWYgKG1ldGhvZE5hbWUgJiYgZnVuY3Rpb25OYW1lLmluZGV4T2YoXCIuXCIgKyBtZXRob2ROYW1lKSAhPSBmdW5jdGlvbk5hbWUubGVuZ3RoIC0gbWV0aG9kTmFtZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGxpbmUgKz0gXCIgW2FzIFwiICsgbWV0aG9kTmFtZSArIFwiXVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lICs9IHR5cGVOYW1lICsgXCIuXCIgKyAobWV0aG9kTmFtZSB8fCBcIjxhbm9ueW1vdXM+XCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0NvbnN0cnVjdG9yKSB7XG4gICAgbGluZSArPSBcIm5ldyBcIiArIChmdW5jdGlvbk5hbWUgfHwgXCI8YW5vbnltb3VzPlwiKTtcbiAgfSBlbHNlIGlmIChmdW5jdGlvbk5hbWUpIHtcbiAgICBsaW5lICs9IGZ1bmN0aW9uTmFtZTtcbiAgfSBlbHNlIHtcbiAgICBsaW5lICs9IGZpbGVMb2NhdGlvbjtcbiAgICBhZGRTdWZmaXggPSBmYWxzZTtcbiAgfVxuICBpZiAoYWRkU3VmZml4KSB7XG4gICAgbGluZSArPSBcIiAoXCIgKyBmaWxlTG9jYXRpb24gKyBcIilcIjtcbiAgfVxuICByZXR1cm4gbGluZTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDYWxsU2l0ZShmcmFtZSkge1xuICB2YXIgb2JqZWN0ID0ge307XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihmcmFtZSkpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIG9iamVjdFtuYW1lXSA9IC9eKD86aXN8Z2V0KS8udGVzdChuYW1lKSA/IGZ1bmN0aW9uKCkgeyByZXR1cm4gZnJhbWVbbmFtZV0uY2FsbChmcmFtZSk7IH0gOiBmcmFtZVtuYW1lXTtcbiAgfSk7XG4gIG9iamVjdC50b1N0cmluZyA9IENhbGxTaXRlVG9TdHJpbmc7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHdyYXBDYWxsU2l0ZShmcmFtZSwgc3RhdGUpIHtcbiAgLy8gcHJvdmlkZXMgaW50ZXJmYWNlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGF0ZSA9IHsgbmV4dFBvc2l0aW9uOiBudWxsLCBjdXJQb3NpdGlvbjogbnVsbCB9XG4gIH1cbiAgaWYoZnJhbWUuaXNOYXRpdmUoKSkge1xuICAgIHN0YXRlLmN1clBvc2l0aW9uID0gbnVsbDtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBNb3N0IGNhbGwgc2l0ZXMgd2lsbCByZXR1cm4gdGhlIHNvdXJjZSBmaWxlIGZyb20gZ2V0RmlsZU5hbWUoKSwgYnV0IGNvZGVcbiAgLy8gcGFzc2VkIHRvIGV2YWwoKSBlbmRpbmcgaW4gXCIvLyMgc291cmNlVVJMPS4uLlwiIHdpbGwgcmV0dXJuIHRoZSBzb3VyY2UgZmlsZVxuICAvLyBmcm9tIGdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCgpIGluc3RlYWRcbiAgdmFyIHNvdXJjZSA9IGZyYW1lLmdldEZpbGVOYW1lKCkgfHwgZnJhbWUuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCk7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgbGluZSA9IGZyYW1lLmdldExpbmVOdW1iZXIoKTtcbiAgICB2YXIgY29sdW1uID0gZnJhbWUuZ2V0Q29sdW1uTnVtYmVyKCkgLSAxO1xuXG4gICAgLy8gRml4IHBvc2l0aW9uIGluIE5vZGUgd2hlcmUgc29tZSAoaW50ZXJuYWwpIGNvZGUgaXMgcHJlcGVuZGVkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvbm9kZS1zb3VyY2UtbWFwLXN1cHBvcnQvaXNzdWVzLzM2XG4gICAgLy8gSGVhZGVyIHJlbW92ZWQgaW4gbm9kZSBhdCBeMTAuMTYgfHwgPj0xMS4xMS4wXG4gICAgLy8gdjExIGlzIG5vdCBhbiBMVFMgY2FuZGlkYXRlLCB3ZSBjYW4ganVzdCB0ZXN0IHRoZSBvbmUgdmVyc2lvbiB3aXRoIGl0LlxuICAgIC8vIFRlc3Qgbm9kZSB2ZXJzaW9ucyBmb3I6IDEwLjE2LTE5LCAxMC4yMCssIDEyLTE5LCAyMC05OSwgMTAwKywgb3IgMTEuMTFcbiAgICB2YXIgbm9IZWFkZXIgPSAvXnYoMTBcXC4xWzYtOV18MTBcXC5bMi05XVswLTldfDEwXFwuWzAtOV17Myx9fDFbMi05XVxcZCp8WzItOV1cXGR8XFxkezMsfXwxMVxcLjExKS87XG4gICAgdmFyIGhlYWRlckxlbmd0aCA9IG5vSGVhZGVyLnRlc3QoZ2xvYmFsUHJvY2Vzc1ZlcnNpb24oKSkgPyAwIDogNjI7XG4gICAgaWYgKGxpbmUgPT09IDEgJiYgY29sdW1uID4gaGVhZGVyTGVuZ3RoICYmICFpc0luQnJvd3NlcigpICYmICFmcmFtZS5pc0V2YWwoKSkge1xuICAgICAgY29sdW1uIC09IGhlYWRlckxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb24gPSBtYXBTb3VyY2VQb3NpdGlvbih7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIGxpbmU6IGxpbmUsXG4gICAgICBjb2x1bW46IGNvbHVtblxuICAgIH0pO1xuICAgIHN0YXRlLmN1clBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgZnJhbWUgPSBjbG9uZUNhbGxTaXRlKGZyYW1lKTtcbiAgICB2YXIgb3JpZ2luYWxGdW5jdGlvbk5hbWUgPSBmcmFtZS5nZXRGdW5jdGlvbk5hbWU7XG4gICAgZnJhbWUuZ2V0RnVuY3Rpb25OYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc3RhdGUubmV4dFBvc2l0aW9uID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25OYW1lKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGUubmV4dFBvc2l0aW9uLm5hbWUgfHwgb3JpZ2luYWxGdW5jdGlvbk5hbWUoKTtcbiAgICB9O1xuICAgIGZyYW1lLmdldEZpbGVOYW1lID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5zb3VyY2U7IH07XG4gICAgZnJhbWUuZ2V0TGluZU51bWJlciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24ubGluZTsgfTtcbiAgICBmcmFtZS5nZXRDb2x1bW5OdW1iZXIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLmNvbHVtbiArIDE7IH07XG4gICAgZnJhbWUuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5zb3VyY2U7IH07XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLy8gQ29kZSBjYWxsZWQgdXNpbmcgZXZhbCgpIG5lZWRzIHNwZWNpYWwgaGFuZGxpbmdcbiAgdmFyIG9yaWdpbiA9IGZyYW1lLmlzRXZhbCgpICYmIGZyYW1lLmdldEV2YWxPcmlnaW4oKTtcbiAgaWYgKG9yaWdpbikge1xuICAgIG9yaWdpbiA9IG1hcEV2YWxPcmlnaW4ob3JpZ2luKTtcbiAgICBmcmFtZSA9IGNsb25lQ2FsbFNpdGUoZnJhbWUpO1xuICAgIGZyYW1lLmdldEV2YWxPcmlnaW4gPSBmdW5jdGlvbigpIHsgcmV0dXJuIG9yaWdpbjsgfTtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBJZiB3ZSBnZXQgaGVyZSB0aGVuIHdlIHdlcmUgdW5hYmxlIHRvIGNoYW5nZSB0aGUgc291cmNlIHBvc2l0aW9uXG4gIHJldHVybiBmcmFtZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0IG9mIHRoZSBWOCBzdGFjayB0cmFjZSBBUEksIGZvciBtb3JlIGluZm8gc2VlOlxuLy8gaHR0cHM6Ly92OC5kZXYvZG9jcy9zdGFjay10cmFjZS1hcGlcbmZ1bmN0aW9uIHByZXBhcmVTdGFja1RyYWNlKGVycm9yLCBzdGFjaykge1xuICBpZiAoZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zKSB7XG4gICAgZmlsZUNvbnRlbnRzQ2FjaGUgPSB7fTtcbiAgICBzb3VyY2VNYXBDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIG5hbWUgPSBlcnJvci5uYW1lIHx8ICdFcnJvcic7XG4gIHZhciBtZXNzYWdlID0gZXJyb3IubWVzc2FnZSB8fCAnJztcbiAgdmFyIGVycm9yU3RyaW5nID0gbmFtZSArIFwiOiBcIiArIG1lc3NhZ2U7XG5cbiAgdmFyIHN0YXRlID0geyBuZXh0UG9zaXRpb246IG51bGwsIGN1clBvc2l0aW9uOiBudWxsIH07XG4gIHZhciBwcm9jZXNzZWRTdGFjayA9IFtdO1xuICBmb3IgKHZhciBpID0gc3RhY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBwcm9jZXNzZWRTdGFjay5wdXNoKCdcXG4gICAgYXQgJyArIHdyYXBDYWxsU2l0ZShzdGFja1tpXSwgc3RhdGUpKTtcbiAgICBzdGF0ZS5uZXh0UG9zaXRpb24gPSBzdGF0ZS5jdXJQb3NpdGlvbjtcbiAgfVxuICBzdGF0ZS5jdXJQb3NpdGlvbiA9IHN0YXRlLm5leHRQb3NpdGlvbiA9IG51bGw7XG4gIHJldHVybiBlcnJvclN0cmluZyArIHByb2Nlc3NlZFN0YWNrLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cblxuLy8gR2VuZXJhdGUgcG9zaXRpb24gYW5kIHNuaXBwZXQgb2Ygb3JpZ2luYWwgc291cmNlIHdpdGggcG9pbnRlclxuZnVuY3Rpb24gZ2V0RXJyb3JTb3VyY2UoZXJyb3IpIHtcbiAgdmFyIG1hdGNoID0gL1xcbiAgICBhdCBbXihdKyBcXCgoLiopOihcXGQrKTooXFxkKylcXCkvLmV4ZWMoZXJyb3Iuc3RhY2spO1xuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgc291cmNlID0gbWF0Y2hbMV07XG4gICAgdmFyIGxpbmUgPSArbWF0Y2hbMl07XG4gICAgdmFyIGNvbHVtbiA9ICttYXRjaFszXTtcblxuICAgIC8vIFN1cHBvcnQgdGhlIGlubGluZSBzb3VyY2VDb250ZW50cyBpbnNpZGUgdGhlIHNvdXJjZSBtYXBcbiAgICB2YXIgY29udGVudHMgPSBmaWxlQ29udGVudHNDYWNoZVtzb3VyY2VdO1xuXG4gICAgLy8gU3VwcG9ydCBmaWxlcyBvbiBkaXNrXG4gICAgaWYgKCFjb250ZW50cyAmJiBmcyAmJiBmcy5leGlzdHNTeW5jKHNvdXJjZSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHNvdXJjZSwgJ3V0ZjgnKTtcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIGNvbnRlbnRzID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9ybWF0IHRoZSBsaW5lIGZyb20gdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlIGxpa2Ugbm9kZSBkb2VzXG4gICAgaWYgKGNvbnRlbnRzKSB7XG4gICAgICB2YXIgY29kZSA9IGNvbnRlbnRzLnNwbGl0KC8oPzpcXHJcXG58XFxyfFxcbikvKVtsaW5lIC0gMV07XG4gICAgICBpZiAoY29kZSkge1xuICAgICAgICByZXR1cm4gc291cmNlICsgJzonICsgbGluZSArICdcXG4nICsgY29kZSArICdcXG4nICtcbiAgICAgICAgICBuZXcgQXJyYXkoY29sdW1uKS5qb2luKCcgJykgKyAnXic7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBwcmludEVycm9yQW5kRXhpdCAoZXJyb3IpIHtcbiAgdmFyIHNvdXJjZSA9IGdldEVycm9yU291cmNlKGVycm9yKTtcblxuICAvLyBFbnN1cmUgZXJyb3IgaXMgcHJpbnRlZCBzeW5jaHJvbm91c2x5IGFuZCBub3QgdHJ1bmNhdGVkXG4gIHZhciBzdGRlcnIgPSBnbG9iYWxQcm9jZXNzU3RkZXJyKCk7XG4gIGlmIChzdGRlcnIgJiYgc3RkZXJyLl9oYW5kbGUgJiYgc3RkZXJyLl9oYW5kbGUuc2V0QmxvY2tpbmcpIHtcbiAgICBzdGRlcnIuX2hhbmRsZS5zZXRCbG9ja2luZyh0cnVlKTtcbiAgfVxuXG4gIGlmIChzb3VyY2UpIHtcbiAgICBjb25zb2xlLmVycm9yKCk7XG4gICAgY29uc29sZS5lcnJvcihzb3VyY2UpO1xuICB9XG5cbiAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjayk7XG4gIGdsb2JhbFByb2Nlc3NFeGl0KDEpO1xufVxuXG5mdW5jdGlvbiBzaGltRW1pdFVuY2F1Z2h0RXhjZXB0aW9uICgpIHtcbiAgdmFyIG9yaWdFbWl0ID0gcHJvY2Vzcy5lbWl0O1xuXG4gIHByb2Nlc3MuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICd1bmNhdWdodEV4Y2VwdGlvbicpIHtcbiAgICAgIHZhciBoYXNTdGFjayA9IChhcmd1bWVudHNbMV0gJiYgYXJndW1lbnRzWzFdLnN0YWNrKTtcbiAgICAgIHZhciBoYXNMaXN0ZW5lcnMgPSAodGhpcy5saXN0ZW5lcnModHlwZSkubGVuZ3RoID4gMCk7XG5cbiAgICAgIGlmIChoYXNTdGFjayAmJiAhaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgIHJldHVybiBwcmludEVycm9yQW5kRXhpdChhcmd1bWVudHNbMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcmlnRW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG52YXIgb3JpZ2luYWxSZXRyaWV2ZUZpbGVIYW5kbGVycyA9IHJldHJpZXZlRmlsZUhhbmRsZXJzLnNsaWNlKDApO1xudmFyIG9yaWdpbmFsUmV0cmlldmVNYXBIYW5kbGVycyA9IHJldHJpZXZlTWFwSGFuZGxlcnMuc2xpY2UoMCk7XG5cbmV4cG9ydHMud3JhcENhbGxTaXRlID0gd3JhcENhbGxTaXRlO1xuZXhwb3J0cy5nZXRFcnJvclNvdXJjZSA9IGdldEVycm9yU291cmNlO1xuZXhwb3J0cy5tYXBTb3VyY2VQb3NpdGlvbiA9IG1hcFNvdXJjZVBvc2l0aW9uO1xuZXhwb3J0cy5yZXRyaWV2ZVNvdXJjZU1hcCA9IHJldHJpZXZlU291cmNlTWFwO1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChvcHRpb25zLmVudmlyb25tZW50KSB7XG4gICAgZW52aXJvbm1lbnQgPSBvcHRpb25zLmVudmlyb25tZW50O1xuICAgIGlmIChbXCJub2RlXCIsIFwiYnJvd3NlclwiLCBcImF1dG9cIl0uaW5kZXhPZihlbnZpcm9ubWVudCkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbnZpcm9ubWVudCBcIiArIGVudmlyb25tZW50ICsgXCIgd2FzIHVua25vd24uIEF2YWlsYWJsZSBvcHRpb25zIGFyZSB7YXV0bywgYnJvd3Nlciwgbm9kZX1cIilcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvdyBzb3VyY2VzIHRvIGJlIGZvdW5kIGJ5IG1ldGhvZHMgb3RoZXIgdGhhbiByZWFkaW5nIHRoZSBmaWxlc1xuICAvLyBkaXJlY3RseSBmcm9tIGRpc2suXG4gIGlmIChvcHRpb25zLnJldHJpZXZlRmlsZSkge1xuICAgIGlmIChvcHRpb25zLm92ZXJyaWRlUmV0cmlldmVGaWxlKSB7XG4gICAgICByZXRyaWV2ZUZpbGVIYW5kbGVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHJldHJpZXZlRmlsZUhhbmRsZXJzLnVuc2hpZnQob3B0aW9ucy5yZXRyaWV2ZUZpbGUpO1xuICB9XG5cbiAgLy8gQWxsb3cgc291cmNlIG1hcHMgdG8gYmUgZm91bmQgYnkgbWV0aG9kcyBvdGhlciB0aGFuIHJlYWRpbmcgdGhlIGZpbGVzXG4gIC8vIGRpcmVjdGx5IGZyb20gZGlzay5cbiAgaWYgKG9wdGlvbnMucmV0cmlldmVTb3VyY2VNYXApIHtcbiAgICBpZiAob3B0aW9ucy5vdmVycmlkZVJldHJpZXZlU291cmNlTWFwKSB7XG4gICAgICByZXRyaWV2ZU1hcEhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0cmlldmVNYXBIYW5kbGVycy51bnNoaWZ0KG9wdGlvbnMucmV0cmlldmVTb3VyY2VNYXApO1xuICB9XG5cbiAgLy8gU3VwcG9ydCBydW50aW1lIHRyYW5zcGlsZXJzIHRoYXQgaW5jbHVkZSBpbmxpbmUgc291cmNlIG1hcHNcbiAgaWYgKG9wdGlvbnMuaG9va1JlcXVpcmUgJiYgIWlzSW5Ccm93c2VyKCkpIHtcbiAgICAvLyBVc2UgZHluYW1pY1JlcXVpcmUgdG8gYXZvaWQgaW5jbHVkaW5nIGluIGJyb3dzZXIgYnVuZGxlc1xuICAgIHZhciBNb2R1bGUgPSBkeW5hbWljUmVxdWlyZShtb2R1bGUsICdtb2R1bGUnKTtcbiAgICB2YXIgJGNvbXBpbGUgPSBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlO1xuXG4gICAgaWYgKCEkY29tcGlsZS5fX3NvdXJjZU1hcFN1cHBvcnQpIHtcbiAgICAgIE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUgPSBmdW5jdGlvbihjb250ZW50LCBmaWxlbmFtZSkge1xuICAgICAgICBmaWxlQ29udGVudHNDYWNoZVtmaWxlbmFtZV0gPSBjb250ZW50O1xuICAgICAgICBzb3VyY2VNYXBDYWNoZVtmaWxlbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAkY29tcGlsZS5jYWxsKHRoaXMsIGNvbnRlbnQsIGZpbGVuYW1lKTtcbiAgICAgIH07XG5cbiAgICAgIE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUuX19zb3VyY2VNYXBTdXBwb3J0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBDb25maWd1cmUgb3B0aW9uc1xuICBpZiAoIWVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucykge1xuICAgIGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA9ICdlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMnIGluIG9wdGlvbnMgP1xuICAgICAgb3B0aW9ucy5lbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMgOiBmYWxzZTtcbiAgfVxuXG4gIC8vIEluc3RhbGwgdGhlIGVycm9yIHJlZm9ybWF0dGVyXG4gIGlmICghZXJyb3JGb3JtYXR0ZXJJbnN0YWxsZWQpIHtcbiAgICBlcnJvckZvcm1hdHRlckluc3RhbGxlZCA9IHRydWU7XG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmVwYXJlU3RhY2tUcmFjZTtcbiAgfVxuXG4gIGlmICghdW5jYXVnaHRTaGltSW5zdGFsbGVkKSB7XG4gICAgdmFyIGluc3RhbGxIYW5kbGVyID0gJ2hhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucycgaW4gb3B0aW9ucyA/XG4gICAgICBvcHRpb25zLmhhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucyA6IHRydWU7XG5cbiAgICAvLyBEbyBub3Qgb3ZlcnJpZGUgJ3VuY2F1Z2h0RXhjZXB0aW9uJyB3aXRoIG91ciBvd24gaGFuZGxlciBpbiBOb2RlLmpzXG4gICAgLy8gV29ya2VyIHRocmVhZHMuIFdvcmtlcnMgcGFzcyB0aGUgZXJyb3IgdG8gdGhlIG1haW4gdGhyZWFkIGFzIGFuIGV2ZW50LFxuICAgIC8vIHJhdGhlciB0aGFuIHByaW50aW5nIHNvbWV0aGluZyB0byBzdGRlcnIgYW5kIGV4aXRpbmcuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBkeW5hbWljUmVxdWlyZWAgYmVjYXVzZSBgcmVxdWlyZWAgb24gaXQncyBvd24gd2lsbCBiZSBvcHRpbWl6ZWQgYnkgV2ViUGFjay9Ccm93c2VyaWZ5LlxuICAgICAgdmFyIHdvcmtlcl90aHJlYWRzID0gZHluYW1pY1JlcXVpcmUobW9kdWxlLCAnd29ya2VyX3RocmVhZHMnKTtcbiAgICAgIGlmICh3b3JrZXJfdGhyZWFkcy5pc01haW5UaHJlYWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGluc3RhbGxIYW5kbGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gICAgLy8gUHJvdmlkZSB0aGUgb3B0aW9uIHRvIG5vdCBpbnN0YWxsIHRoZSB1bmNhdWdodCBleGNlcHRpb24gaGFuZGxlci4gVGhpcyBpc1xuICAgIC8vIHRvIHN1cHBvcnQgb3RoZXIgdW5jYXVnaHQgZXhjZXB0aW9uIGhhbmRsZXJzIChpbiB0ZXN0IGZyYW1ld29ya3MsIGZvclxuICAgIC8vIGV4YW1wbGUpLiBJZiB0aGlzIGhhbmRsZXIgaXMgbm90IGluc3RhbGxlZCBhbmQgdGhlcmUgYXJlIG5vIG90aGVyIHVuY2F1Z2h0XG4gICAgLy8gZXhjZXB0aW9uIGhhbmRsZXJzLCB1bmNhdWdodCBleGNlcHRpb25zIHdpbGwgYmUgY2F1Z2h0IGJ5IG5vZGUncyBidWlsdC1pblxuICAgIC8vIGV4Y2VwdGlvbiBoYW5kbGVyIGFuZCB0aGUgcHJvY2VzcyB3aWxsIHN0aWxsIGJlIHRlcm1pbmF0ZWQuIEhvd2V2ZXIsIHRoZVxuICAgIC8vIGdlbmVyYXRlZCBKYXZhU2NyaXB0IGNvZGUgd2lsbCBiZSBzaG93biBhYm92ZSB0aGUgc3RhY2sgdHJhY2UgaW5zdGVhZCBvZlxuICAgIC8vIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29kZS5cbiAgICBpZiAoaW5zdGFsbEhhbmRsZXIgJiYgaGFzR2xvYmFsUHJvY2Vzc0V2ZW50RW1pdHRlcigpKSB7XG4gICAgICB1bmNhdWdodFNoaW1JbnN0YWxsZWQgPSB0cnVlO1xuICAgICAgc2hpbUVtaXRVbmNhdWdodEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5yZXNldFJldHJpZXZlSGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0cmlldmVGaWxlSGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgcmV0cmlldmVNYXBIYW5kbGVycy5sZW5ndGggPSAwO1xuXG4gIHJldHJpZXZlRmlsZUhhbmRsZXJzID0gb3JpZ2luYWxSZXRyaWV2ZUZpbGVIYW5kbGVycy5zbGljZSgwKTtcbiAgcmV0cmlldmVNYXBIYW5kbGVycyA9IG9yaWdpbmFsUmV0cmlldmVNYXBIYW5kbGVycy5zbGljZSgwKTtcblxuICByZXRyaWV2ZVNvdXJjZU1hcCA9IGhhbmRsZXJFeGVjKHJldHJpZXZlTWFwSGFuZGxlcnMpO1xuICByZXRyaWV2ZUZpbGUgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZUZpbGVIYW5kbGVycyk7XG59XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNOYXRpdmVNYXAgPSB0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIEEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggaXMgYSBjb21iaW5hdGlvbiBvZiBhbiBhcnJheSBhbmQgYSBzZXQuIEFkZGluZyBhIG5ld1xuICogbWVtYmVyIGlzIE8oMSksIHRlc3RpbmcgZm9yIG1lbWJlcnNoaXAgaXMgTygxKSwgYW5kIGZpbmRpbmcgdGhlIGluZGV4IG9mIGFuXG4gKiBlbGVtZW50IGlzIE8oMSkuIFJlbW92aW5nIGVsZW1lbnRzIGZyb20gdGhlIHNldCBpcyBub3Qgc3VwcG9ydGVkLiBPbmx5XG4gKiBzdHJpbmdzIGFyZSBzdXBwb3J0ZWQgZm9yIG1lbWJlcnNoaXAuXG4gKi9cbmZ1bmN0aW9uIEFycmF5U2V0KCkge1xuICB0aGlzLl9hcnJheSA9IFtdO1xuICB0aGlzLl9zZXQgPSBoYXNOYXRpdmVNYXAgPyBuZXcgTWFwKCkgOiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG4vKipcbiAqIFN0YXRpYyBtZXRob2QgZm9yIGNyZWF0aW5nIEFycmF5U2V0IGluc3RhbmNlcyBmcm9tIGFuIGV4aXN0aW5nIGFycmF5LlxuICovXG5BcnJheVNldC5mcm9tQXJyYXkgPSBmdW5jdGlvbiBBcnJheVNldF9mcm9tQXJyYXkoYUFycmF5LCBhQWxsb3dEdXBsaWNhdGVzKSB7XG4gIHZhciBzZXQgPSBuZXcgQXJyYXlTZXQoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNldC5hZGQoYUFycmF5W2ldLCBhQWxsb3dEdXBsaWNhdGVzKTtcbiAgfVxuICByZXR1cm4gc2V0O1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaG93IG1hbnkgdW5pcXVlIGl0ZW1zIGFyZSBpbiB0aGlzIEFycmF5U2V0LiBJZiBkdXBsaWNhdGVzIGhhdmUgYmVlblxuICogYWRkZWQsIHRoYW4gdGhvc2UgZG8gbm90IGNvdW50IHRvd2FyZHMgdGhlIHNpemUuXG4gKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gQXJyYXlTZXRfc2l6ZSgpIHtcbiAgcmV0dXJuIGhhc05hdGl2ZU1hcCA/IHRoaXMuX3NldC5zaXplIDogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fc2V0KS5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEFkZCB0aGUgZ2l2ZW4gc3RyaW5nIHRvIHRoaXMgc2V0LlxuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gQXJyYXlTZXRfYWRkKGFTdHIsIGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgdmFyIHNTdHIgPSBoYXNOYXRpdmVNYXAgPyBhU3RyIDogdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgdmFyIGlzRHVwbGljYXRlID0gaGFzTmF0aXZlTWFwID8gdGhpcy5oYXMoYVN0cikgOiBoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpO1xuICB2YXIgaWR4ID0gdGhpcy5fYXJyYXkubGVuZ3RoO1xuICBpZiAoIWlzRHVwbGljYXRlIHx8IGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgICB0aGlzLl9hcnJheS5wdXNoKGFTdHIpO1xuICB9XG4gIGlmICghaXNEdXBsaWNhdGUpIHtcbiAgICBpZiAoaGFzTmF0aXZlTWFwKSB7XG4gICAgICB0aGlzLl9zZXQuc2V0KGFTdHIsIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFtzU3RyXSA9IGlkeDtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSXMgdGhlIGdpdmVuIHN0cmluZyBhIG1lbWJlciBvZiB0aGlzIHNldD9cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIEFycmF5U2V0X2hhcyhhU3RyKSB7XG4gIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0LmhhcyhhU3RyKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc1N0ciA9IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gICAgcmV0dXJuIGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cik7XG4gIH1cbn07XG5cbi8qKlxuICogV2hhdCBpcyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIHN0cmluZyBpbiB0aGUgYXJyYXk/XG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gQXJyYXlTZXRfaW5kZXhPZihhU3RyKSB7XG4gIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fc2V0LmdldChhU3RyKTtcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNTdHIgPSB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0W3NTdHJdO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignXCInICsgYVN0ciArICdcIiBpcyBub3QgaW4gdGhlIHNldC4nKTtcbn07XG5cbi8qKlxuICogV2hhdCBpcyB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXg/XG4gKlxuICogQHBhcmFtIE51bWJlciBhSWR4XG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIEFycmF5U2V0X2F0KGFJZHgpIHtcbiAgaWYgKGFJZHggPj0gMCAmJiBhSWR4IDwgdGhpcy5fYXJyYXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FycmF5W2FJZHhdO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBpbmRleGVkIGJ5ICcgKyBhSWR4KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzZXQgKHdoaWNoIGhhcyB0aGUgcHJvcGVyIGluZGljZXNcbiAqIGluZGljYXRlZCBieSBpbmRleE9mKS4gTm90ZSB0aGF0IHRoaXMgaXMgYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBhcnJheSB1c2VkXG4gKiBmb3Igc3RvcmluZyB0aGUgbWVtYmVycyBzbyB0aGF0IG5vIG9uZSBjYW4gbWVzcyB3aXRoIGludGVybmFsIHN0YXRlLlxuICovXG5BcnJheVNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIEFycmF5U2V0X3RvQXJyYXkoKSB7XG4gIHJldHVybiB0aGlzLl9hcnJheS5zbGljZSgpO1xufTtcblxuZXhwb3J0cy5BcnJheVNldCA9IEFycmF5U2V0O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqXG4gKiBCYXNlZCBvbiB0aGUgQmFzZSA2NCBWTFEgaW1wbGVtZW50YXRpb24gaW4gQ2xvc3VyZSBDb21waWxlcjpcbiAqIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2xvc3VyZS1jb21waWxlci9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9jb20vZ29vZ2xlL2RlYnVnZ2luZy9zb3VyY2VtYXAvQmFzZTY0VkxRLmphdmFcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBUaGUgQ2xvc3VyZSBDb21waWxlciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4gKiBtZXQ6XG4gKlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAqICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4gKiAgICBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWRcbiAqICAgIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICAgIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZFxuICogICAgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICogQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbiAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbiAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAqIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnLi9iYXNlNjQnKTtcblxuLy8gQSBzaW5nbGUgYmFzZSA2NCBkaWdpdCBjYW4gY29udGFpbiA2IGJpdHMgb2YgZGF0YS4gRm9yIHRoZSBiYXNlIDY0IHZhcmlhYmxlXG4vLyBsZW5ndGggcXVhbnRpdGllcyB3ZSB1c2UgaW4gdGhlIHNvdXJjZSBtYXAgc3BlYywgdGhlIGZpcnN0IGJpdCBpcyB0aGUgc2lnbixcbi8vIHRoZSBuZXh0IGZvdXIgYml0cyBhcmUgdGhlIGFjdHVhbCB2YWx1ZSwgYW5kIHRoZSA2dGggYml0IGlzIHRoZVxuLy8gY29udGludWF0aW9uIGJpdC4gVGhlIGNvbnRpbnVhdGlvbiBiaXQgdGVsbHMgdXMgd2hldGhlciB0aGVyZSBhcmUgbW9yZVxuLy8gZGlnaXRzIGluIHRoaXMgdmFsdWUgZm9sbG93aW5nIHRoaXMgZGlnaXQuXG4vL1xuLy8gICBDb250aW51YXRpb25cbi8vICAgfCAgICBTaWduXG4vLyAgIHwgICAgfFxuLy8gICBWICAgIFZcbi8vICAgMTAxMDExXG5cbnZhciBWTFFfQkFTRV9TSElGVCA9IDU7XG5cbi8vIGJpbmFyeTogMTAwMDAwXG52YXIgVkxRX0JBU0UgPSAxIDw8IFZMUV9CQVNFX1NISUZUO1xuXG4vLyBiaW5hcnk6IDAxMTExMVxudmFyIFZMUV9CQVNFX01BU0sgPSBWTFFfQkFTRSAtIDE7XG5cbi8vIGJpbmFyeTogMTAwMDAwXG52YXIgVkxRX0NPTlRJTlVBVElPTl9CSVQgPSBWTFFfQkFTRTtcblxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgdG8gYSB2YWx1ZSB3aGVyZSB0aGUgc2lnbiBiaXQgaXNcbiAqIHBsYWNlZCBpbiB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgYml0LiAgRm9yIGV4YW1wbGUsIGFzIGRlY2ltYWxzOlxuICogICAxIGJlY29tZXMgMiAoMTAgYmluYXJ5KSwgLTEgYmVjb21lcyAzICgxMSBiaW5hcnkpXG4gKiAgIDIgYmVjb21lcyA0ICgxMDAgYmluYXJ5KSwgLTIgYmVjb21lcyA1ICgxMDEgYmluYXJ5KVxuICovXG5mdW5jdGlvbiB0b1ZMUVNpZ25lZChhVmFsdWUpIHtcbiAgcmV0dXJuIGFWYWx1ZSA8IDBcbiAgICA/ICgoLWFWYWx1ZSkgPDwgMSkgKyAxXG4gICAgOiAoYVZhbHVlIDw8IDEpICsgMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0byBhIHR3by1jb21wbGVtZW50IHZhbHVlIGZyb20gYSB2YWx1ZSB3aGVyZSB0aGUgc2lnbiBiaXQgaXNcbiAqIHBsYWNlZCBpbiB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgYml0LiAgRm9yIGV4YW1wbGUsIGFzIGRlY2ltYWxzOlxuICogICAyICgxMCBiaW5hcnkpIGJlY29tZXMgMSwgMyAoMTEgYmluYXJ5KSBiZWNvbWVzIC0xXG4gKiAgIDQgKDEwMCBiaW5hcnkpIGJlY29tZXMgMiwgNSAoMTAxIGJpbmFyeSkgYmVjb21lcyAtMlxuICovXG5mdW5jdGlvbiBmcm9tVkxRU2lnbmVkKGFWYWx1ZSkge1xuICB2YXIgaXNOZWdhdGl2ZSA9IChhVmFsdWUgJiAxKSA9PT0gMTtcbiAgdmFyIHNoaWZ0ZWQgPSBhVmFsdWUgPj4gMTtcbiAgcmV0dXJuIGlzTmVnYXRpdmVcbiAgICA/IC1zaGlmdGVkXG4gICAgOiBzaGlmdGVkO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJhc2UgNjQgVkxRIGVuY29kZWQgdmFsdWUuXG4gKi9cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2VuY29kZShhVmFsdWUpIHtcbiAgdmFyIGVuY29kZWQgPSBcIlwiO1xuICB2YXIgZGlnaXQ7XG5cbiAgdmFyIHZscSA9IHRvVkxRU2lnbmVkKGFWYWx1ZSk7XG5cbiAgZG8ge1xuICAgIGRpZ2l0ID0gdmxxICYgVkxRX0JBU0VfTUFTSztcbiAgICB2bHEgPj4+PSBWTFFfQkFTRV9TSElGVDtcbiAgICBpZiAodmxxID4gMCkge1xuICAgICAgLy8gVGhlcmUgYXJlIHN0aWxsIG1vcmUgZGlnaXRzIGluIHRoaXMgdmFsdWUsIHNvIHdlIG11c3QgbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gY29udGludWF0aW9uIGJpdCBpcyBtYXJrZWQuXG4gICAgICBkaWdpdCB8PSBWTFFfQ09OVElOVUFUSU9OX0JJVDtcbiAgICB9XG4gICAgZW5jb2RlZCArPSBiYXNlNjQuZW5jb2RlKGRpZ2l0KTtcbiAgfSB3aGlsZSAodmxxID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59O1xuXG4vKipcbiAqIERlY29kZXMgdGhlIG5leHQgYmFzZSA2NCBWTFEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIGFuZCByZXR1cm5zIHRoZVxuICogdmFsdWUgYW5kIHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdmlhIHRoZSBvdXQgcGFyYW1ldGVyLlxuICovXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIGJhc2U2NFZMUV9kZWNvZGUoYVN0ciwgYUluZGV4LCBhT3V0UGFyYW0pIHtcbiAgdmFyIHN0ckxlbiA9IGFTdHIubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgdmFyIHNoaWZ0ID0gMDtcbiAgdmFyIGNvbnRpbnVhdGlvbiwgZGlnaXQ7XG5cbiAgZG8ge1xuICAgIGlmIChhSW5kZXggPj0gc3RyTGVuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBtb3JlIGRpZ2l0cyBpbiBiYXNlIDY0IFZMUSB2YWx1ZS5cIik7XG4gICAgfVxuXG4gICAgZGlnaXQgPSBiYXNlNjQuZGVjb2RlKGFTdHIuY2hhckNvZGVBdChhSW5kZXgrKykpO1xuICAgIGlmIChkaWdpdCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGRpZ2l0OiBcIiArIGFTdHIuY2hhckF0KGFJbmRleCAtIDEpKTtcbiAgICB9XG5cbiAgICBjb250aW51YXRpb24gPSAhIShkaWdpdCAmIFZMUV9DT05USU5VQVRJT05fQklUKTtcbiAgICBkaWdpdCAmPSBWTFFfQkFTRV9NQVNLO1xuICAgIHJlc3VsdCA9IHJlc3VsdCArIChkaWdpdCA8PCBzaGlmdCk7XG4gICAgc2hpZnQgKz0gVkxRX0JBU0VfU0hJRlQ7XG4gIH0gd2hpbGUgKGNvbnRpbnVhdGlvbik7XG5cbiAgYU91dFBhcmFtLnZhbHVlID0gZnJvbVZMUVNpZ25lZChyZXN1bHQpO1xuICBhT3V0UGFyYW0ucmVzdCA9IGFJbmRleDtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBpbnRUb0NoYXJNYXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycuc3BsaXQoJycpO1xuXG4vKipcbiAqIEVuY29kZSBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBvZiAwIHRvIDYzIHRvIGEgc2luZ2xlIGJhc2UgNjQgZGlnaXQuXG4gKi9cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAoMCA8PSBudW1iZXIgJiYgbnVtYmVyIDwgaW50VG9DaGFyTWFwLmxlbmd0aCkge1xuICAgIHJldHVybiBpbnRUb0NoYXJNYXBbbnVtYmVyXTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYzOiBcIiArIG51bWJlcik7XG59O1xuXG4vKipcbiAqIERlY29kZSBhIHNpbmdsZSBiYXNlIDY0IGNoYXJhY3RlciBjb2RlIGRpZ2l0IHRvIGFuIGludGVnZXIuIFJldHVybnMgLTEgb25cbiAqIGZhaWx1cmUuXG4gKi9cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG4gIHZhciBiaWdBID0gNjU7ICAgICAvLyAnQSdcbiAgdmFyIGJpZ1ogPSA5MDsgICAgIC8vICdaJ1xuXG4gIHZhciBsaXR0bGVBID0gOTc7ICAvLyAnYSdcbiAgdmFyIGxpdHRsZVogPSAxMjI7IC8vICd6J1xuXG4gIHZhciB6ZXJvID0gNDg7ICAgICAvLyAnMCdcbiAgdmFyIG5pbmUgPSA1NzsgICAgIC8vICc5J1xuXG4gIHZhciBwbHVzID0gNDM7ICAgICAvLyAnKydcbiAgdmFyIHNsYXNoID0gNDc7ICAgIC8vICcvJ1xuXG4gIHZhciBsaXR0bGVPZmZzZXQgPSAyNjtcbiAgdmFyIG51bWJlck9mZnNldCA9IDUyO1xuXG4gIC8vIDAgLSAyNTogQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcbiAgaWYgKGJpZ0EgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gYmlnWikge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSBiaWdBKTtcbiAgfVxuXG4gIC8vIDI2IC0gNTE6IGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XG4gIGlmIChsaXR0bGVBIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxpdHRsZVopIHtcbiAgICByZXR1cm4gKGNoYXJDb2RlIC0gbGl0dGxlQSArIGxpdHRsZU9mZnNldCk7XG4gIH1cblxuICAvLyA1MiAtIDYxOiAwMTIzNDU2Nzg5XG4gIGlmICh6ZXJvIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IG5pbmUpIHtcbiAgICByZXR1cm4gKGNoYXJDb2RlIC0gemVybyArIG51bWJlck9mZnNldCk7XG4gIH1cblxuICAvLyA2MjogK1xuICBpZiAoY2hhckNvZGUgPT0gcGx1cykge1xuICAgIHJldHVybiA2MjtcbiAgfVxuXG4gIC8vIDYzOiAvXG4gIGlmIChjaGFyQ29kZSA9PSBzbGFzaCkge1xuICAgIHJldHVybiA2MztcbiAgfVxuXG4gIC8vIEludmFsaWQgYmFzZTY0IGRpZ2l0LlxuICByZXR1cm4gLTE7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG5leHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EID0gMTtcbmV4cG9ydHMuTEVBU1RfVVBQRVJfQk9VTkQgPSAyO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZSBpbXBsZW1lbnRhdGlvbiBvZiBiaW5hcnkgc2VhcmNoLlxuICpcbiAqIEBwYXJhbSBhTG93IEluZGljZXMgaGVyZSBhbmQgbG93ZXIgZG8gbm90IGNvbnRhaW4gdGhlIG5lZWRsZS5cbiAqIEBwYXJhbSBhSGlnaCBJbmRpY2VzIGhlcmUgYW5kIGhpZ2hlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgYmVpbmcgc2VhcmNoZWQgZm9yLlxuICogQHBhcmFtIGFIYXlzdGFjayBUaGUgbm9uLWVtcHR5IGFycmF5IGJlaW5nIHNlYXJjaGVkLlxuICogQHBhcmFtIGFDb21wYXJlIEZ1bmN0aW9uIHdoaWNoIHRha2VzIHR3byBlbGVtZW50cyBhbmQgcmV0dXJucyAtMSwgMCwgb3IgMS5cbiAqIEBwYXJhbSBhQmlhcyBFaXRoZXIgJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcmVjdXJzaXZlU2VhcmNoKGFMb3csIGFIaWdoLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcykge1xuICAvLyBUaGlzIGZ1bmN0aW9uIHRlcm1pbmF0ZXMgd2hlbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxuICAvL1xuICAvLyAgIDEuIFdlIGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQgd2UgYXJlIGxvb2tpbmcgZm9yLlxuICAvL1xuICAvLyAgIDIuIFdlIGRpZCBub3QgZmluZCB0aGUgZXhhY3QgZWxlbWVudCwgYnV0IHdlIGNhbiByZXR1cm4gdGhlIGluZGV4IG9mXG4gIC8vICAgICAgdGhlIG5leHQtY2xvc2VzdCBlbGVtZW50LlxuICAvL1xuICAvLyAgIDMuIFdlIGRpZCBub3QgZmluZCB0aGUgZXhhY3QgZWxlbWVudCwgYW5kIHRoZXJlIGlzIG5vIG5leHQtY2xvc2VzdFxuICAvLyAgICAgIGVsZW1lbnQgdGhhbiB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCBzbyB3ZSByZXR1cm4gLTEuXG4gIHZhciBtaWQgPSBNYXRoLmZsb29yKChhSGlnaCAtIGFMb3cpIC8gMikgKyBhTG93O1xuICB2YXIgY21wID0gYUNvbXBhcmUoYU5lZWRsZSwgYUhheXN0YWNrW21pZF0sIHRydWUpO1xuICBpZiAoY21wID09PSAwKSB7XG4gICAgLy8gRm91bmQgdGhlIGVsZW1lbnQgd2UgYXJlIGxvb2tpbmcgZm9yLlxuICAgIHJldHVybiBtaWQ7XG4gIH1cbiAgZWxzZSBpZiAoY21wID4gMCkge1xuICAgIC8vIE91ciBuZWVkbGUgaXMgZ3JlYXRlciB0aGFuIGFIYXlzdGFja1ttaWRdLlxuICAgIGlmIChhSGlnaCAtIG1pZCA+IDEpIHtcbiAgICAgIC8vIFRoZSBlbGVtZW50IGlzIGluIHRoZSB1cHBlciBoYWxmLlxuICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChtaWQsIGFIaWdoLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGV4YWN0IG5lZWRsZSBlbGVtZW50IHdhcyBub3QgZm91bmQgaW4gdGhpcyBoYXlzdGFjay4gRGV0ZXJtaW5lIGlmXG4gICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cbiAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuICAgICAgcmV0dXJuIGFIaWdoIDwgYUhheXN0YWNrLmxlbmd0aCA/IGFIaWdoIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIE91ciBuZWVkbGUgaXMgbGVzcyB0aGFuIGFIYXlzdGFja1ttaWRdLlxuICAgIGlmIChtaWQgLSBhTG93ID4gMSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxvd2VyIGhhbGYuXG4gICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKGFMb3csIG1pZCwgYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpO1xuICAgIH1cblxuICAgIC8vIHdlIGFyZSBpbiB0ZXJtaW5hdGlvbiBjYXNlICgzKSBvciAoMikgYW5kIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgdGhpbmcuXG4gICAgaWYgKGFCaWFzID09IGV4cG9ydHMuTEVBU1RfVVBQRVJfQk9VTkQpIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhTG93IDwgMCA/IC0xIDogYUxvdztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2ggd2hpY2ggd2lsbCBhbHdheXMgdHJ5IGFuZCByZXR1cm5cbiAqIHRoZSBpbmRleCBvZiB0aGUgY2xvc2VzdCBlbGVtZW50IGlmIHRoZXJlIGlzIG5vIGV4YWN0IGhpdC4gVGhpcyBpcyBiZWNhdXNlXG4gKiBtYXBwaW5ncyBiZXR3ZWVuIG9yaWdpbmFsIGFuZCBnZW5lcmF0ZWQgbGluZS9jb2wgcGFpcnMgYXJlIHNpbmdsZSBwb2ludHMsXG4gKiBhbmQgdGhlcmUgaXMgYW4gaW1wbGljaXQgcmVnaW9uIGJldHdlZW4gZWFjaCBvZiB0aGVtLCBzbyBhIG1pc3MganVzdCBtZWFuc1xuICogdGhhdCB5b3UgYXJlbid0IG9uIHRoZSB2ZXJ5IHN0YXJ0IG9mIGEgcmVnaW9uLlxuICpcbiAqIEBwYXJhbSBhTmVlZGxlIFRoZSBlbGVtZW50IHlvdSBhcmUgbG9va2luZyBmb3IuXG4gKiBAcGFyYW0gYUhheXN0YWNrIFRoZSBhcnJheSB0aGF0IGlzIGJlaW5nIHNlYXJjaGVkLlxuICogQHBhcmFtIGFDb21wYXJlIEEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIG5lZWRsZSBhbmQgYW4gZWxlbWVudCBpbiB0aGVcbiAqICAgICBhcnJheSBhbmQgcmV0dXJucyAtMSwgMCwgb3IgMSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbmVlZGxlIGlzIGxlc3NcbiAqICAgICB0aGFuLCBlcXVhbCB0bywgb3IgZ3JlYXRlciB0aGFuIHRoZSBlbGVtZW50LCByZXNwZWN0aXZlbHkuXG4gKiBAcGFyYW0gYUJpYXMgRWl0aGVyICdiaW5hcnlTZWFyY2guR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG4gKiAgICAgJ2JpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKi9cbmV4cG9ydHMuc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG4gIGlmIChhSGF5c3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgdmFyIGluZGV4ID0gcmVjdXJzaXZlU2VhcmNoKC0xLCBhSGF5c3RhY2subGVuZ3RoLCBhTmVlZGxlLCBhSGF5c3RhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhQ29tcGFyZSwgYUJpYXMgfHwgZXhwb3J0cy5HUkVBVEVTVF9MT1dFUl9CT1VORCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBXZSBoYXZlIGZvdW5kIGVpdGhlciB0aGUgZXhhY3QgZWxlbWVudCwgb3IgdGhlIG5leHQtY2xvc2VzdCBlbGVtZW50IHRoYW5cbiAgLy8gdGhlIG9uZSB3ZSBhcmUgc2VhcmNoaW5nIGZvci4gSG93ZXZlciwgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgc3VjaFxuICAvLyBlbGVtZW50LiBNYWtlIHN1cmUgd2UgYWx3YXlzIHJldHVybiB0aGUgc21hbGxlc3Qgb2YgdGhlc2UuXG4gIHdoaWxlIChpbmRleCAtIDEgPj0gMCkge1xuICAgIGlmIChhQ29tcGFyZShhSGF5c3RhY2tbaW5kZXhdLCBhSGF5c3RhY2tbaW5kZXggLSAxXSwgdHJ1ZSkgIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAtLWluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxNCBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBtYXBwaW5nQiBpcyBhZnRlciBtYXBwaW5nQSB3aXRoIHJlc3BlY3QgdG8gZ2VuZXJhdGVkXG4gKiBwb3NpdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVkUG9zaXRpb25BZnRlcihtYXBwaW5nQSwgbWFwcGluZ0IpIHtcbiAgLy8gT3B0aW1pemVkIGZvciBtb3N0IGNvbW1vbiBjYXNlXG4gIHZhciBsaW5lQSA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmU7XG4gIHZhciBsaW5lQiA9IG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIHZhciBjb2x1bW5BID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uO1xuICB2YXIgY29sdW1uQiA9IG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgcmV0dXJuIGxpbmVCID4gbGluZUEgfHwgbGluZUIgPT0gbGluZUEgJiYgY29sdW1uQiA+PSBjb2x1bW5BIHx8XG4gICAgICAgICB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQikgPD0gMDtcbn1cblxuLyoqXG4gKiBBIGRhdGEgc3RydWN0dXJlIHRvIHByb3ZpZGUgYSBzb3J0ZWQgdmlldyBvZiBhY2N1bXVsYXRlZCBtYXBwaW5ncyBpbiBhXG4gKiBwZXJmb3JtYW5jZSBjb25zY2lvdXMgbWFubmVyLiBJdCB0cmFkZXMgYSBuZWdsaWJhYmxlIG92ZXJoZWFkIGluIGdlbmVyYWxcbiAqIGNhc2UgZm9yIGEgbGFyZ2Ugc3BlZWR1cCBpbiBjYXNlIG9mIG1hcHBpbmdzIGJlaW5nIGFkZGVkIGluIG9yZGVyLlxuICovXG5mdW5jdGlvbiBNYXBwaW5nTGlzdCgpIHtcbiAgdGhpcy5fYXJyYXkgPSBbXTtcbiAgdGhpcy5fc29ydGVkID0gdHJ1ZTtcbiAgLy8gU2VydmVzIGFzIGluZmltdW1cbiAgdGhpcy5fbGFzdCA9IHtnZW5lcmF0ZWRMaW5lOiAtMSwgZ2VuZXJhdGVkQ29sdW1uOiAwfTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIHRocm91Z2ggaW50ZXJuYWwgaXRlbXMuIFRoaXMgbWV0aG9kIHRha2VzIHRoZSBzYW1lIGFyZ3VtZW50cyB0aGF0XG4gKiBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIHRha2VzLlxuICpcbiAqIE5PVEU6IFRoZSBvcmRlciBvZiB0aGUgbWFwcGluZ3MgaXMgTk9UIGd1YXJhbnRlZWQuXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS51bnNvcnRlZEZvckVhY2ggPVxuICBmdW5jdGlvbiBNYXBwaW5nTGlzdF9mb3JFYWNoKGFDYWxsYmFjaywgYVRoaXNBcmcpIHtcbiAgICB0aGlzLl9hcnJheS5mb3JFYWNoKGFDYWxsYmFjaywgYVRoaXNBcmcpO1xuICB9O1xuXG4vKipcbiAqIEFkZCB0aGUgZ2l2ZW4gc291cmNlIG1hcHBpbmcuXG4gKlxuICogQHBhcmFtIE9iamVjdCBhTWFwcGluZ1xuICovXG5NYXBwaW5nTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gTWFwcGluZ0xpc3RfYWRkKGFNYXBwaW5nKSB7XG4gIGlmIChnZW5lcmF0ZWRQb3NpdGlvbkFmdGVyKHRoaXMuX2xhc3QsIGFNYXBwaW5nKSkge1xuICAgIHRoaXMuX2xhc3QgPSBhTWFwcGluZztcbiAgICB0aGlzLl9hcnJheS5wdXNoKGFNYXBwaW5nKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9zb3J0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9hcnJheS5wdXNoKGFNYXBwaW5nKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmbGF0LCBzb3J0ZWQgYXJyYXkgb2YgbWFwcGluZ3MuIFRoZSBtYXBwaW5ncyBhcmUgc29ydGVkIGJ5XG4gKiBnZW5lcmF0ZWQgcG9zaXRpb24uXG4gKlxuICogV0FSTklORzogVGhpcyBtZXRob2QgcmV0dXJucyBpbnRlcm5hbCBkYXRhIHdpdGhvdXQgY29weWluZywgZm9yXG4gKiBwZXJmb3JtYW5jZS4gVGhlIHJldHVybiB2YWx1ZSBtdXN0IE5PVCBiZSBtdXRhdGVkLCBhbmQgc2hvdWxkIGJlIHRyZWF0ZWQgYXNcbiAqIGFuIGltbXV0YWJsZSBib3Jyb3cuIElmIHlvdSB3YW50IHRvIHRha2Ugb3duZXJzaGlwLCB5b3UgbXVzdCBtYWtlIHlvdXIgb3duXG4gKiBjb3B5LlxuICovXG5NYXBwaW5nTGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIE1hcHBpbmdMaXN0X3RvQXJyYXkoKSB7XG4gIGlmICghdGhpcy5fc29ydGVkKSB7XG4gICAgdGhpcy5fYXJyYXkuc29ydCh1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKTtcbiAgICB0aGlzLl9zb3J0ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiB0aGlzLl9hcnJheTtcbn07XG5cbmV4cG9ydHMuTWFwcGluZ0xpc3QgPSBNYXBwaW5nTGlzdDtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuLy8gSXQgdHVybnMgb3V0IHRoYXQgc29tZSAobW9zdD8pIEphdmFTY3JpcHQgZW5naW5lcyBkb24ndCBzZWxmLWhvc3Rcbi8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAuIFRoaXMgbWFrZXMgc2Vuc2UgYmVjYXVzZSBDKysgd2lsbCBsaWtlbHkgcmVtYWluXG4vLyBmYXN0ZXIgdGhhbiBKUyB3aGVuIGRvaW5nIHJhdyBDUFUtaW50ZW5zaXZlIHNvcnRpbmcuIEhvd2V2ZXIsIHdoZW4gdXNpbmcgYVxuLy8gY3VzdG9tIGNvbXBhcmF0b3IgZnVuY3Rpb24sIGNhbGxpbmcgYmFjayBhbmQgZm9ydGggYmV0d2VlbiB0aGUgVk0ncyBDKysgYW5kXG4vLyBKSVQnZCBKUyBpcyByYXRoZXIgc2xvdyAqYW5kKiBsb3NlcyBKSVQgdHlwZSBpbmZvcm1hdGlvbiwgcmVzdWx0aW5nIGluXG4vLyB3b3JzZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb24gdGhhbiB3b3VsZCBiZSBvcHRpbWFsLiBJblxuLy8gZmFjdCwgd2hlbiBzb3J0aW5nIHdpdGggYSBjb21wYXJhdG9yLCB0aGVzZSBjb3N0cyBvdXR3ZWlnaCB0aGUgYmVuZWZpdHMgb2Zcbi8vIHNvcnRpbmcgaW4gQysrLiBCeSB1c2luZyBvdXIgb3duIEpTLWltcGxlbWVudGVkIFF1aWNrIFNvcnQgKGJlbG93KSwgd2UgZ2V0XG4vLyBhIH4zNTAwbXMgbWVhbiBzcGVlZC11cCBpbiBgYmVuY2gvYmVuY2guaHRtbGAuXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudHMgaW5kZXhlZCBieSBgeGAgYW5kIGB5YCBpbiB0aGUgYXJyYXkgYGFyeWAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgVGhlIGFycmF5LlxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqICAgICAgICBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0uXG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogICAgICAgIFRoZSBpbmRleCBvZiB0aGUgc2Vjb25kIGl0ZW0uXG4gKi9cbmZ1bmN0aW9uIHN3YXAoYXJ5LCB4LCB5KSB7XG4gIHZhciB0ZW1wID0gYXJ5W3hdO1xuICBhcnlbeF0gPSBhcnlbeV07XG4gIGFyeVt5XSA9IHRlbXA7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UgYGxvdyAuLiBoaWdoYCBpbmNsdXNpdmUuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGxvd1xuICogICAgICAgIFRoZSBsb3dlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge051bWJlcn0gaGlnaFxuICogICAgICAgIFRoZSB1cHBlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludEluUmFuZ2UobG93LCBoaWdoKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGxvdyArIChNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpKSk7XG59XG5cbi8qKlxuICogVGhlIFF1aWNrIFNvcnQgYWxnb3JpdGhtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyeVxuICogICAgICAgIEFuIGFycmF5IHRvIHNvcnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJhdG9yXG4gKiAgICAgICAgRnVuY3Rpb24gdG8gdXNlIHRvIGNvbXBhcmUgdHdvIGl0ZW1zLlxuICogQHBhcmFtIHtOdW1iZXJ9IHBcbiAqICAgICAgICBTdGFydCBpbmRleCBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSByXG4gKiAgICAgICAgRW5kIGluZGV4IG9mIHRoZSBhcnJheVxuICovXG5mdW5jdGlvbiBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHIpIHtcbiAgLy8gSWYgb3VyIGxvd2VyIGJvdW5kIGlzIGxlc3MgdGhhbiBvdXIgdXBwZXIgYm91bmQsIHdlICgxKSBwYXJ0aXRpb24gdGhlXG4gIC8vIGFycmF5IGludG8gdHdvIHBpZWNlcyBhbmQgKDIpIHJlY3Vyc2Ugb24gZWFjaCBoYWxmLiBJZiBpdCBpcyBub3QsIHRoaXMgaXNcbiAgLy8gdGhlIGVtcHR5IGFycmF5IGFuZCBvdXIgYmFzZSBjYXNlLlxuXG4gIGlmIChwIDwgcikge1xuICAgIC8vICgxKSBQYXJ0aXRpb25pbmcuXG4gICAgLy9cbiAgICAvLyBUaGUgcGFydGl0aW9uaW5nIGNob29zZXMgYSBwaXZvdCBiZXR3ZWVuIGBwYCBhbmQgYHJgIGFuZCBtb3ZlcyBhbGxcbiAgICAvLyBlbGVtZW50cyB0aGF0IGFyZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90IHRvIHRoZSBiZWZvcmUgaXQsIGFuZFxuICAgIC8vIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBhcmUgZ3JlYXRlciB0aGFuIGl0IGFmdGVyIGl0LiBUaGUgZWZmZWN0IGlzIHRoYXRcbiAgICAvLyBvbmNlIHBhcnRpdGlvbiBpcyBkb25lLCB0aGUgcGl2b3QgaXMgaW4gdGhlIGV4YWN0IHBsYWNlIGl0IHdpbGwgYmUgd2hlblxuICAgIC8vIHRoZSBhcnJheSBpcyBwdXQgaW4gc29ydGVkIG9yZGVyLCBhbmQgaXQgd2lsbCBub3QgbmVlZCB0byBiZSBtb3ZlZFxuICAgIC8vIGFnYWluLiBUaGlzIHJ1bnMgaW4gTyhuKSB0aW1lLlxuXG4gICAgLy8gQWx3YXlzIGNob29zZSBhIHJhbmRvbSBwaXZvdCBzbyB0aGF0IGFuIGlucHV0IGFycmF5IHdoaWNoIGlzIHJldmVyc2VcbiAgICAvLyBzb3J0ZWQgZG9lcyBub3QgY2F1c2UgTyhuXjIpIHJ1bm5pbmcgdGltZS5cbiAgICB2YXIgcGl2b3RJbmRleCA9IHJhbmRvbUludEluUmFuZ2UocCwgcik7XG4gICAgdmFyIGkgPSBwIC0gMTtcblxuICAgIHN3YXAoYXJ5LCBwaXZvdEluZGV4LCByKTtcbiAgICB2YXIgcGl2b3QgPSBhcnlbcl07XG5cbiAgICAvLyBJbW1lZGlhdGVseSBhZnRlciBgamAgaXMgaW5jcmVtZW50ZWQgaW4gdGhpcyBsb29wLCB0aGUgZm9sbG93aW5nIGhvbGRcbiAgICAvLyB0cnVlOlxuICAgIC8vXG4gICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtwIC4uIGldYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90LlxuICAgIC8vXG4gICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtpKzEgLi4gai0xXWAgaXMgZ3JlYXRlciB0aGFuIHRoZSBwaXZvdC5cbiAgICBmb3IgKHZhciBqID0gcDsgaiA8IHI7IGorKykge1xuICAgICAgaWYgKGNvbXBhcmF0b3IoYXJ5W2pdLCBwaXZvdCkgPD0gMCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIHN3YXAoYXJ5LCBpLCBqKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwKGFyeSwgaSArIDEsIGopO1xuICAgIHZhciBxID0gaSArIDE7XG5cbiAgICAvLyAoMikgUmVjdXJzZSBvbiBlYWNoIGhhbGYuXG5cbiAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHEgLSAxKTtcbiAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHEgKyAxLCByKTtcbiAgfVxufVxuXG4vKipcbiAqIFNvcnQgdGhlIGdpdmVuIGFycmF5IGluLXBsYWNlIHdpdGggdGhlIGdpdmVuIGNvbXBhcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgQW4gYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3JcbiAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG4gKi9cbmV4cG9ydHMucXVpY2tTb3J0ID0gZnVuY3Rpb24gKGFyeSwgY29tcGFyYXRvcikge1xuICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIDAsIGFyeS5sZW5ndGggLSAxKTtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgYmluYXJ5U2VhcmNoID0gcmVxdWlyZSgnLi9iaW5hcnktc2VhcmNoJyk7XG52YXIgQXJyYXlTZXQgPSByZXF1aXJlKCcuL2FycmF5LXNldCcpLkFycmF5U2V0O1xudmFyIGJhc2U2NFZMUSA9IHJlcXVpcmUoJy4vYmFzZTY0LXZscScpO1xudmFyIHF1aWNrU29ydCA9IHJlcXVpcmUoJy4vcXVpY2stc29ydCcpLnF1aWNrU29ydDtcblxuZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcbiAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZU1hcCA9IHV0aWwucGFyc2VTb3VyY2VNYXBJbnB1dChhU291cmNlTWFwKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VNYXAuc2VjdGlvbnMgIT0gbnVsbFxuICAgID8gbmV3IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihzb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpXG4gICAgOiBuZXcgQmFzaWNTb3VyY2VNYXBDb25zdW1lcihzb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpO1xufVxuXG5Tb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID0gZnVuY3Rpb24oYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICByZXR1cm4gQmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpO1xufVxuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLy8gYF9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZCBgX19vcmlnaW5hbE1hcHBpbmdzYCBhcmUgYXJyYXlzIHRoYXQgaG9sZCB0aGVcbi8vIHBhcnNlZCBtYXBwaW5nIGNvb3JkaW5hdGVzIGZyb20gdGhlIHNvdXJjZSBtYXAncyBcIm1hcHBpbmdzXCIgYXR0cmlidXRlLiBUaGV5XG4vLyBhcmUgbGF6aWx5IGluc3RhbnRpYXRlZCwgYWNjZXNzZWQgdmlhIHRoZSBgX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbi8vIGBfb3JpZ2luYWxNYXBwaW5nc2AgZ2V0dGVycyByZXNwZWN0aXZlbHksIGFuZCB3ZSBvbmx5IHBhcnNlIHRoZSBtYXBwaW5nc1xuLy8gYW5kIGNyZWF0ZSB0aGVzZSBhcnJheXMgb25jZSBxdWVyaWVkIGZvciBhIHNvdXJjZSBsb2NhdGlvbi4gV2UganVtcCB0aHJvdWdoXG4vLyB0aGVzZSBob29wcyBiZWNhdXNlIHRoZXJlIGNhbiBiZSBtYW55IHRob3VzYW5kcyBvZiBtYXBwaW5ncywgYW5kIHBhcnNpbmdcbi8vIHRoZW0gaXMgZXhwZW5zaXZlLCBzbyB3ZSBvbmx5IHdhbnQgdG8gZG8gaXQgaWYgd2UgbXVzdC5cbi8vXG4vLyBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXlzIGlzIG9mIHRoZSBmb3JtOlxuLy9cbi8vICAgICB7XG4vLyAgICAgICBnZW5lcmF0ZWRMaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBzb3VyY2U6IFRoZSBwYXRoIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSB0aGF0IGdlbmVyYXRlZCB0aGlzXG4vLyAgICAgICAgICAgICAgIGNodW5rIG9mIGNvZGUsXG4vLyAgICAgICBvcmlnaW5hbExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhpcyBjaHVuayBvZiBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIG9yaWdpbmFsQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kcyB0byB0aGlzIGNodW5rIG9mIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgbmFtZTogVGhlIG5hbWUgb2YgdGhlIG9yaWdpbmFsIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBjaHVuayBvZlxuLy8gICAgICAgICAgICAgY29kZS5cbi8vICAgICB9XG4vL1xuLy8gQWxsIHByb3BlcnRpZXMgZXhjZXB0IGZvciBgZ2VuZXJhdGVkTGluZWAgYW5kIGBnZW5lcmF0ZWRDb2x1bW5gIGNhbiBiZVxuLy8gYG51bGxgLlxuLy9cbi8vIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMuXG4vL1xuLy8gYF9vcmlnaW5hbE1hcHBpbmdzYCBpcyBvcmRlcmVkIGJ5IHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMuXG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX2dlbmVyYXRlZE1hcHBpbmdzID0gbnVsbDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdfZ2VuZXJhdGVkTWFwcGluZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MpIHtcbiAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncztcbiAgfVxufSk7XG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX29yaWdpbmFsTWFwcGluZ3MgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19vcmlnaW5hbE1hcHBpbmdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MpIHtcbiAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzO1xuICB9XG59KTtcblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBpbmRleCkge1xuICAgIHZhciBjID0gYVN0ci5jaGFyQXQoaW5kZXgpO1xuICAgIHJldHVybiBjID09PSBcIjtcIiB8fCBjID09PSBcIixcIjtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWJjbGFzc2VzIG11c3QgaW1wbGVtZW50IF9wYXJzZU1hcHBpbmdzXCIpO1xuICB9O1xuXG5Tb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVIgPSAxO1xuU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVIgPSAyO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCA9IDE7XG5Tb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGVhY2ggbWFwcGluZyBiZXR3ZWVuIGFuIG9yaWdpbmFsIHNvdXJjZS9saW5lL2NvbHVtbiBhbmQgYVxuICogZ2VuZXJhdGVkIGxpbmUvY29sdW1uIGluIHRoaXMgc291cmNlIG1hcC5cbiAqXG4gKiBAcGFyYW0gRnVuY3Rpb24gYUNhbGxiYWNrXG4gKiAgICAgICAgVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggZWFjaCBtYXBwaW5nLlxuICogQHBhcmFtIE9iamVjdCBhQ29udGV4dFxuICogICAgICAgIE9wdGlvbmFsLiBJZiBzcGVjaWZpZWQsIHRoaXMgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIGB0aGlzYCBldmVyeVxuICogICAgICAgIHRpbWUgdGhhdCBgYUNhbGxiYWNrYCBpcyBjYWxsZWQuXG4gKiBAcGFyYW0gYU9yZGVyXG4gKiAgICAgICAgRWl0aGVyIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgIG9yXG4gKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSYC4gU3BlY2lmaWVzIHdoZXRoZXIgeW91IHdhbnQgdG9cbiAqICAgICAgICBpdGVyYXRlIG92ZXIgdGhlIG1hcHBpbmdzIHNvcnRlZCBieSB0aGUgZ2VuZXJhdGVkIGZpbGUncyBsaW5lL2NvbHVtblxuICogICAgICAgIG9yZGVyIG9yIHRoZSBvcmlnaW5hbCdzIHNvdXJjZS9saW5lL2NvbHVtbiBvcmRlciwgcmVzcGVjdGl2ZWx5LiBEZWZhdWx0cyB0b1xuICogICAgICAgIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZWFjaE1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9lYWNoTWFwcGluZyhhQ2FsbGJhY2ssIGFDb250ZXh0LCBhT3JkZXIpIHtcbiAgICB2YXIgY29udGV4dCA9IGFDb250ZXh0IHx8IG51bGw7XG4gICAgdmFyIG9yZGVyID0gYU9yZGVyIHx8IFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjtcblxuICAgIHZhciBtYXBwaW5ncztcbiAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVI6XG4gICAgICBtYXBwaW5ncyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUjpcbiAgICAgIG1hcHBpbmdzID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5ncztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG9yZGVyIG9mIGl0ZXJhdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZVJvb3QgPSB0aGlzLnNvdXJjZVJvb3Q7XG4gICAgbWFwcGluZ3MubWFwKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICB2YXIgc291cmNlID0gbWFwcGluZy5zb3VyY2UgPT09IG51bGwgPyBudWxsIDogdGhpcy5fc291cmNlcy5hdChtYXBwaW5nLnNvdXJjZSk7XG4gICAgICBzb3VyY2UgPSB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbixcbiAgICAgICAgb3JpZ2luYWxMaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgIG5hbWU6IG1hcHBpbmcubmFtZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9uYW1lcy5hdChtYXBwaW5nLm5hbWUpXG4gICAgICB9O1xuICAgIH0sIHRoaXMpLmZvckVhY2goYUNhbGxiYWNrLCBjb250ZXh0KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwcm92aWRlZC4gSWYgbm8gY29sdW1uIGlzIHByb3ZpZGVkLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuICogY29ycmVzcG9uZGluZyB0byBhIGVpdGhlciB0aGUgbGluZSB3ZSBhcmUgc2VhcmNoaW5nIGZvciBvciB0aGUgbmV4dFxuICogY2xvc2VzdCBsaW5lIHRoYXQgaGFzIGFueSBtYXBwaW5ncy4gT3RoZXJ3aXNlLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuICogY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gbGluZSBhbmQgZWl0aGVyIHRoZSBjb2x1bW4gd2UgYXJlIHNlYXJjaGluZyBmb3JcbiAqIG9yIHRoZSBuZXh0IGNsb3Nlc3QgY29sdW1uIHRoYXQgaGFzIGFueSBvZmZzZXRzLlxuICpcbiAqIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogT3B0aW9uYWwuIHRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICpcbiAqIGFuZCBhbiBhcnJheSBvZiBvYmplY3RzIGlzIHJldHVybmVkLCBlYWNoIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cbiAqICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IoYUFyZ3MpIHtcbiAgICB2YXIgbGluZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpO1xuXG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBleGFjdCBtYXRjaCwgQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGNsb3Nlc3QgbWFwcGluZyBsZXNzIHRoYW4gdGhlIG5lZWRsZS4gQnlcbiAgICAvLyBzZXR0aW5nIG5lZWRsZS5vcmlnaW5hbENvbHVtbiB0byAwLCB3ZSB0aHVzIGZpbmQgdGhlIGxhc3QgbWFwcGluZyBmb3JcbiAgICAvLyB0aGUgZ2l2ZW4gbGluZSwgcHJvdmlkZWQgc3VjaCBhIG1hcHBpbmcgZXhpc3RzLlxuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBzb3VyY2U6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJyksXG4gICAgICBvcmlnaW5hbExpbmU6IGxpbmUsXG4gICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nLCAwKVxuICAgIH07XG5cbiAgICBuZWVkbGUuc291cmNlID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KG5lZWRsZS5zb3VyY2UpO1xuICAgIGlmIChuZWVkbGUuc291cmNlIDwgMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBtYXBwaW5ncyA9IFtdO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcobmVlZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5hbExpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsQ29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAoYUFyZ3MuY29sdW1uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG4gICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2UgZm91bmQuIFNpbmNlXG4gICAgICAgIC8vIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3JcbiAgICAgICAgLy8gdGhlIGxpbmUgd2UgZm91bmQuXG4gICAgICAgIHdoaWxlIChtYXBwaW5nICYmIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSBvcmlnaW5hbExpbmUpIHtcbiAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG4gICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2Ugd2VyZSBzZWFyY2hpbmcgZm9yLlxuICAgICAgICAvLyBTaW5jZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB0aGlzIGlzIGd1YXJhbnRlZWQgdG8gZmluZCBhbGwgbWFwcGluZ3MgZm9yXG4gICAgICAgIC8vIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLlxuICAgICAgICB3aGlsZSAobWFwcGluZyAmJlxuICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IGxpbmUgJiZcbiAgICAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPT0gb3JpZ2luYWxDb2x1bW4pIHtcbiAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcHBpbmdzO1xuICB9O1xuXG5leHBvcnRzLlNvdXJjZU1hcENvbnN1bWVyID0gU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogQSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluc3RhbmNlIHJlcHJlc2VudHMgYSBwYXJzZWQgc291cmNlIG1hcCB3aGljaCB3ZSBjYW5cbiAqIHF1ZXJ5IGZvciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3JpZ2luYWwgZmlsZSBwb3NpdGlvbnMgYnkgZ2l2aW5nIGl0IGEgZmlsZVxuICogcG9zaXRpb24gaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG4gKlxuICogVGhlIGZpcnN0IHBhcmFtZXRlciBpcyB0aGUgcmF3IHNvdXJjZSBtYXAgKGVpdGhlciBhcyBhIEpTT04gc3RyaW5nLCBvclxuICogYWxyZWFkeSBwYXJzZWQgdG8gYW4gb2JqZWN0KS4gQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzb3VyY2UgbWFwcyBoYXZlIHRoZVxuICogZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKlxuICogICAtIHZlcnNpb246IFdoaWNoIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXAgc3BlYyB0aGlzIG1hcCBpcyBmb2xsb3dpbmcuXG4gKiAgIC0gc291cmNlczogQW4gYXJyYXkgb2YgVVJMcyB0byB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGVzLlxuICogICAtIG5hbWVzOiBBbiBhcnJheSBvZiBpZGVudGlmaWVycyB3aGljaCBjYW4gYmUgcmVmZXJyZW5jZWQgYnkgaW5kaXZpZHVhbCBtYXBwaW5ncy5cbiAqICAgLSBzb3VyY2VSb290OiBPcHRpb25hbC4gVGhlIFVSTCByb290IGZyb20gd2hpY2ggYWxsIHNvdXJjZXMgYXJlIHJlbGF0aXZlLlxuICogICAtIHNvdXJjZXNDb250ZW50OiBPcHRpb25hbC4gQW4gYXJyYXkgb2YgY29udGVudHMgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlcy5cbiAqICAgLSBtYXBwaW5nczogQSBzdHJpbmcgb2YgYmFzZTY0IFZMUXMgd2hpY2ggY29udGFpbiB0aGUgYWN0dWFsIG1hcHBpbmdzLlxuICogICAtIGZpbGU6IE9wdGlvbmFsLiBUaGUgZ2VuZXJhdGVkIGZpbGUgdGhpcyBzb3VyY2UgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAqXG4gKiBIZXJlIGlzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdOlxuICpcbiAqICAgICB7XG4gKiAgICAgICB2ZXJzaW9uIDogMyxcbiAqICAgICAgIGZpbGU6IFwib3V0LmpzXCIsXG4gKiAgICAgICBzb3VyY2VSb290IDogXCJcIixcbiAqICAgICAgIHNvdXJjZXM6IFtcImZvby5qc1wiLCBcImJhci5qc1wiXSxcbiAqICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuICogICAgICAgbWFwcGluZ3M6IFwiQUEsQUI7O0FCQ0RFO1wiXG4gKiAgICAgfVxuICpcbiAqIFRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpZiBnaXZlbiwgaXMgYSBzdHJpbmcgd2hvc2UgdmFsdWUgaXMgdGhlIFVSTFxuICogYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgd2FzIGZvdW5kLiAgVGhpcyBVUkwgaXMgdXNlZCB0byBjb21wdXRlIHRoZVxuICogc291cmNlcyBhcnJheS5cbiAqXG4gKiBbMF06IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdD9wbGk9MSNcbiAqL1xuZnVuY3Rpb24gQmFzaWNTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICd2ZXJzaW9uJyk7XG4gIHZhciBzb3VyY2VzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlcycpO1xuICAvLyBTYXNzIDMuMyBsZWF2ZXMgb3V0IHRoZSAnbmFtZXMnIGFycmF5LCBzbyB3ZSBkZXZpYXRlIGZyb20gdGhlIHNwZWMgKHdoaWNoXG4gIC8vIHJlcXVpcmVzIHRoZSBhcnJheSkgdG8gcGxheSBuaWNlIGhlcmUuXG4gIHZhciBuYW1lcyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ25hbWVzJywgW10pO1xuICB2YXIgc291cmNlUm9vdCA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZVJvb3QnLCBudWxsKTtcbiAgdmFyIHNvdXJjZXNDb250ZW50ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlc0NvbnRlbnQnLCBudWxsKTtcbiAgdmFyIG1hcHBpbmdzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbWFwcGluZ3MnKTtcbiAgdmFyIGZpbGUgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdmaWxlJywgbnVsbCk7XG5cbiAgLy8gT25jZSBhZ2FpbiwgU2FzcyBkZXZpYXRlcyBmcm9tIHRoZSBzcGVjIGFuZCBzdXBwbGllcyB0aGUgdmVyc2lvbiBhcyBhXG4gIC8vIHN0cmluZyByYXRoZXIgdGhhbiBhIG51bWJlciwgc28gd2UgdXNlIGxvb3NlIGVxdWFsaXR5IGNoZWNraW5nIGhlcmUuXG4gIGlmICh2ZXJzaW9uICE9IHRoaXMuX3ZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VSb290KSB7XG4gICAgc291cmNlUm9vdCA9IHV0aWwubm9ybWFsaXplKHNvdXJjZVJvb3QpO1xuICB9XG5cbiAgc291cmNlcyA9IHNvdXJjZXNcbiAgICAubWFwKFN0cmluZylcbiAgICAvLyBTb21lIHNvdXJjZSBtYXBzIHByb2R1Y2UgcmVsYXRpdmUgc291cmNlIHBhdGhzIGxpa2UgXCIuL2Zvby5qc1wiIGluc3RlYWQgb2ZcbiAgICAvLyBcImZvby5qc1wiLiAgTm9ybWFsaXplIHRoZXNlIGZpcnN0IHNvIHRoYXQgZnV0dXJlIGNvbXBhcmlzb25zIHdpbGwgc3VjY2VlZC5cbiAgICAvLyBTZWUgYnVnemlsLmxhLzEwOTA3NjguXG4gICAgLm1hcCh1dGlsLm5vcm1hbGl6ZSlcbiAgICAvLyBBbHdheXMgZW5zdXJlIHRoYXQgYWJzb2x1dGUgc291cmNlcyBhcmUgaW50ZXJuYWxseSBzdG9yZWQgcmVsYXRpdmUgdG9cbiAgICAvLyB0aGUgc291cmNlIHJvb3QsIGlmIHRoZSBzb3VyY2Ugcm9vdCBpcyBhYnNvbHV0ZS4gTm90IGRvaW5nIHRoaXMgd291bGRcbiAgICAvLyBiZSBwYXJ0aWN1bGFybHkgcHJvYmxlbWF0aWMgd2hlbiB0aGUgc291cmNlIHJvb3QgaXMgYSBwcmVmaXggb2YgdGhlXG4gICAgLy8gc291cmNlICh2YWxpZCwgYnV0IHdoeT8/KS4gU2VlIGdpdGh1YiBpc3N1ZSAjMTk5IGFuZCBidWd6aWwubGEvMTE4ODk4Mi5cbiAgICAubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBzb3VyY2VSb290ICYmIHV0aWwuaXNBYnNvbHV0ZShzb3VyY2VSb290KSAmJiB1dGlsLmlzQWJzb2x1dGUoc291cmNlKVxuICAgICAgICA/IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlKVxuICAgICAgICA6IHNvdXJjZTtcbiAgICB9KTtcblxuICAvLyBQYXNzIGB0cnVlYCBiZWxvdyB0byBhbGxvdyBkdXBsaWNhdGUgbmFtZXMgYW5kIHNvdXJjZXMuIFdoaWxlIHNvdXJjZSBtYXBzXG4gIC8vIGFyZSBpbnRlbmRlZCB0byBiZSBjb21wcmVzc2VkIGFuZCBkZWR1cGxpY2F0ZWQsIHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyXG4gIC8vIHNvbWV0aW1lcyBnZW5lcmF0ZXMgc291cmNlIG1hcHMgd2l0aCBkdXBsaWNhdGVzIGluIHRoZW0uIFNlZSBHaXRodWIgaXNzdWVcbiAgLy8gIzcyIGFuZCBidWd6aWwubGEvODg5NDkyLlxuICB0aGlzLl9uYW1lcyA9IEFycmF5U2V0LmZyb21BcnJheShuYW1lcy5tYXAoU3RyaW5nKSwgdHJ1ZSk7XG4gIHRoaXMuX3NvdXJjZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoc291cmNlcywgdHJ1ZSk7XG5cbiAgdGhpcy5fYWJzb2x1dGVTb3VyY2VzID0gdGhpcy5fc291cmNlcy50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzLCBhU291cmNlTWFwVVJMKTtcbiAgfSk7XG5cbiAgdGhpcy5zb3VyY2VSb290ID0gc291cmNlUm9vdDtcbiAgdGhpcy5zb3VyY2VzQ29udGVudCA9IHNvdXJjZXNDb250ZW50O1xuICB0aGlzLl9tYXBwaW5ncyA9IG1hcHBpbmdzO1xuICB0aGlzLl9zb3VyY2VNYXBVUkwgPSBhU291cmNlTWFwVVJMO1xuICB0aGlzLmZpbGUgPSBmaWxlO1xufVxuXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbnN1bWVyID0gU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBmaW5kIHRoZSBpbmRleCBvZiBhIHNvdXJjZS4gIFJldHVybnMgLTEgaWYgbm90XG4gKiBmb3VuZC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRTb3VyY2VJbmRleCA9IGZ1bmN0aW9uKGFTb3VyY2UpIHtcbiAgdmFyIHJlbGF0aXZlU291cmNlID0gYVNvdXJjZTtcbiAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgcmVsYXRpdmVTb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgcmVsYXRpdmVTb3VyY2UpO1xuICB9XG5cbiAgaWYgKHRoaXMuX3NvdXJjZXMuaGFzKHJlbGF0aXZlU291cmNlKSkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VzLmluZGV4T2YocmVsYXRpdmVTb3VyY2UpO1xuICB9XG5cbiAgLy8gTWF5YmUgYVNvdXJjZSBpcyBhbiBhYnNvbHV0ZSBVUkwgYXMgcmV0dXJuZWQgYnkgfHNvdXJjZXN8LiAgSW5cbiAgLy8gdGhpcyBjYXNlIHdlIGNhbid0IHNpbXBseSB1bmRvIHRoZSB0cmFuc2Zvcm0uXG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYWJzb2x1dGVTb3VyY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMuX2Fic29sdXRlU291cmNlc1tpXSA9PSBhU291cmNlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgZnJvbSBhIFNvdXJjZU1hcEdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gU291cmNlTWFwR2VuZXJhdG9yIGFTb3VyY2VNYXBcbiAqICAgICAgICBUaGUgc291cmNlIG1hcCB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG4gKiBAcGFyYW0gU3RyaW5nIGFTb3VyY2VNYXBVUkxcbiAqICAgICAgICBUaGUgVVJMIGF0IHdoaWNoIHRoZSBzb3VyY2UgbWFwIGNhbiBiZSBmb3VuZCAob3B0aW9uYWwpXG4gKiBAcmV0dXJucyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIuZnJvbVNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2Zyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICAgIHZhciBzbWMgPSBPYmplY3QuY3JlYXRlKEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcblxuICAgIHZhciBuYW1lcyA9IHNtYy5fbmFtZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoYVNvdXJjZU1hcC5fbmFtZXMudG9BcnJheSgpLCB0cnVlKTtcbiAgICB2YXIgc291cmNlcyA9IHNtYy5fc291cmNlcyA9IEFycmF5U2V0LmZyb21BcnJheShhU291cmNlTWFwLl9zb3VyY2VzLnRvQXJyYXkoKSwgdHJ1ZSk7XG4gICAgc21jLnNvdXJjZVJvb3QgPSBhU291cmNlTWFwLl9zb3VyY2VSb290O1xuICAgIHNtYy5zb3VyY2VzQ29udGVudCA9IGFTb3VyY2VNYXAuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQoc21jLl9zb3VyY2VzLnRvQXJyYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYy5zb3VyY2VSb290KTtcbiAgICBzbWMuZmlsZSA9IGFTb3VyY2VNYXAuX2ZpbGU7XG4gICAgc21jLl9zb3VyY2VNYXBVUkwgPSBhU291cmNlTWFwVVJMO1xuICAgIHNtYy5fYWJzb2x1dGVTb3VyY2VzID0gc21jLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc21jLnNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICAgIH0pO1xuXG4gICAgLy8gQmVjYXVzZSB3ZSBhcmUgbW9kaWZ5aW5nIHRoZSBlbnRyaWVzIChieSBjb252ZXJ0aW5nIHN0cmluZyBzb3VyY2VzIGFuZFxuICAgIC8vIG5hbWVzIHRvIGluZGljZXMgaW50byB0aGUgc291cmNlcyBhbmQgbmFtZXMgQXJyYXlTZXRzKSwgd2UgaGF2ZSB0byBtYWtlXG4gICAgLy8gYSBjb3B5IG9mIHRoZSBlbnRyeSBvciBlbHNlIGJhZCB0aGluZ3MgaGFwcGVuLiBTaGFyZWQgbXV0YWJsZSBzdGF0ZVxuICAgIC8vIHN0cmlrZXMgYWdhaW4hIFNlZSBnaXRodWIgaXNzdWUgIzE5MS5cblxuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IGFTb3VyY2VNYXAuX21hcHBpbmdzLnRvQXJyYXkoKS5zbGljZSgpO1xuICAgIHZhciBkZXN0R2VuZXJhdGVkTWFwcGluZ3MgPSBzbWMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBkZXN0T3JpZ2luYWxNYXBwaW5ncyA9IHNtYy5fX29yaWdpbmFsTWFwcGluZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNyY01hcHBpbmcgPSBnZW5lcmF0ZWRNYXBwaW5nc1tpXTtcbiAgICAgIHZhciBkZXN0TWFwcGluZyA9IG5ldyBNYXBwaW5nO1xuICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkTGluZTtcbiAgICAgIGRlc3RNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG4gICAgICBpZiAoc3JjTWFwcGluZy5zb3VyY2UpIHtcbiAgICAgICAgZGVzdE1hcHBpbmcuc291cmNlID0gc291cmNlcy5pbmRleE9mKHNyY01hcHBpbmcuc291cmNlKTtcbiAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxMaW5lID0gc3JjTWFwcGluZy5vcmlnaW5hbExpbmU7XG4gICAgICAgIGRlc3RNYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gc3JjTWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICBpZiAoc3JjTWFwcGluZy5uYW1lKSB7XG4gICAgICAgICAgZGVzdE1hcHBpbmcubmFtZSA9IG5hbWVzLmluZGV4T2Yoc3JjTWFwcGluZy5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc3RPcmlnaW5hbE1hcHBpbmdzLnB1c2goZGVzdE1hcHBpbmcpO1xuICAgICAgfVxuXG4gICAgICBkZXN0R2VuZXJhdGVkTWFwcGluZ3MucHVzaChkZXN0TWFwcGluZyk7XG4gICAgfVxuXG4gICAgcXVpY2tTb3J0KHNtYy5fX29yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuXG4gICAgcmV0dXJuIHNtYztcbiAgfTtcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBvcmlnaW5hbCBzb3VyY2VzLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdzb3VyY2VzJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWJzb2x1dGVTb3VyY2VzLnNsaWNlKCk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIFByb3ZpZGUgdGhlIEpJVCB3aXRoIGEgbmljZSBzaGFwZSAvIGhpZGRlbiBjbGFzcy5cbiAqL1xuZnVuY3Rpb24gTWFwcGluZygpIHtcbiAgdGhpcy5nZW5lcmF0ZWRMaW5lID0gMDtcbiAgdGhpcy5nZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gIHRoaXMub3JpZ2luYWxMaW5lID0gbnVsbDtcbiAgdGhpcy5vcmlnaW5hbENvbHVtbiA9IG51bGw7XG4gIHRoaXMubmFtZSA9IG51bGw7XG59XG5cbi8qKlxuICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG4gKiBgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3NgIHByb3BlcnRpZXMpLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB2YXIgZ2VuZXJhdGVkTGluZSA9IDE7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbExpbmUgPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNTb3VyY2UgPSAwO1xuICAgIHZhciBwcmV2aW91c05hbWUgPSAwO1xuICAgIHZhciBsZW5ndGggPSBhU3RyLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjYWNoZWRTZWdtZW50cyA9IHt9O1xuICAgIHZhciB0ZW1wID0ge307XG4gICAgdmFyIG9yaWdpbmFsTWFwcGluZ3MgPSBbXTtcbiAgICB2YXIgZ2VuZXJhdGVkTWFwcGluZ3MgPSBbXTtcbiAgICB2YXIgbWFwcGluZywgc3RyLCBzZWdtZW50LCBlbmQsIHZhbHVlO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoYVN0ci5jaGFyQXQoaW5kZXgpID09PSAnOycpIHtcbiAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICcsJykge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1hcHBpbmcgPSBuZXcgTWFwcGluZygpO1xuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZExpbmUgPSBnZW5lcmF0ZWRMaW5lO1xuXG4gICAgICAgIC8vIEJlY2F1c2UgZWFjaCBvZmZzZXQgaXMgZW5jb2RlZCByZWxhdGl2ZSB0byB0aGUgcHJldmlvdXMgb25lLFxuICAgICAgICAvLyBtYW55IHNlZ21lbnRzIG9mdGVuIGhhdmUgdGhlIHNhbWUgZW5jb2RpbmcuIFdlIGNhbiBleHBsb2l0IHRoaXNcbiAgICAgICAgLy8gZmFjdCBieSBjYWNoaW5nIHRoZSBwYXJzZWQgdmFyaWFibGUgbGVuZ3RoIGZpZWxkcyBvZiBlYWNoIHNlZ21lbnQsXG4gICAgICAgIC8vIGFsbG93aW5nIHVzIHRvIGF2b2lkIGEgc2Vjb25kIHBhcnNlIGlmIHdlIGVuY291bnRlciB0aGUgc2FtZVxuICAgICAgICAvLyBzZWdtZW50IGFnYWluLlxuICAgICAgICBmb3IgKGVuZCA9IGluZGV4OyBlbmQgPCBsZW5ndGg7IGVuZCsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IoYVN0ciwgZW5kKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0ciA9IGFTdHIuc2xpY2UoaW5kZXgsIGVuZCk7XG5cbiAgICAgICAgc2VnbWVudCA9IGNhY2hlZFNlZ21lbnRzW3N0cl07XG4gICAgICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgICAgaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWdtZW50ID0gW107XG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgZW5kKSB7XG4gICAgICAgICAgICBiYXNlNjRWTFEuZGVjb2RlKGFTdHIsIGluZGV4LCB0ZW1wKTtcbiAgICAgICAgICAgIHZhbHVlID0gdGVtcC52YWx1ZTtcbiAgICAgICAgICAgIGluZGV4ID0gdGVtcC5yZXN0O1xuICAgICAgICAgICAgc2VnbWVudC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VnbWVudC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzb3VyY2UsIGJ1dCBubyBsaW5lIGFuZCBjb2x1bW4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VnbWVudC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzb3VyY2UgYW5kIGxpbmUsIGJ1dCBubyBjb2x1bW4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZWRTZWdtZW50c1tzdHJdID0gc2VnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlZCBjb2x1bW4uXG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uID0gcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gKyBzZWdtZW50WzBdO1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG4gICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAvLyBPcmlnaW5hbCBzb3VyY2UuXG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBwcmV2aW91c1NvdXJjZSArIHNlZ21lbnRbMV07XG4gICAgICAgICAgcHJldmlvdXNTb3VyY2UgKz0gc2VnbWVudFsxXTtcblxuICAgICAgICAgIC8vIE9yaWdpbmFsIGxpbmUuXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPSBwcmV2aW91c09yaWdpbmFsTGluZSArIHNlZ21lbnRbMl07XG4gICAgICAgICAgcHJldmlvdXNPcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgICAvLyBMaW5lcyBhcmUgc3RvcmVkIDAtYmFzZWRcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSArPSAxO1xuXG4gICAgICAgICAgLy8gT3JpZ2luYWwgY29sdW1uLlxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBwcmV2aW91c09yaWdpbmFsQ29sdW1uICsgc2VnbWVudFszXTtcbiAgICAgICAgICBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIG5hbWUuXG4gICAgICAgICAgICBtYXBwaW5nLm5hbWUgPSBwcmV2aW91c05hbWUgKyBzZWdtZW50WzRdO1xuICAgICAgICAgICAgcHJldmlvdXNOYW1lICs9IHNlZ21lbnRbNF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2VuZXJhdGVkTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvcmlnaW5hbE1hcHBpbmdzLnB1c2gobWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWlja1NvcnQoZ2VuZXJhdGVkTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQpO1xuICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IGdlbmVyYXRlZE1hcHBpbmdzO1xuXG4gICAgcXVpY2tTb3J0KG9yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gb3JpZ2luYWxNYXBwaW5ncztcbiAgfTtcblxuLyoqXG4gKiBGaW5kIHRoZSBtYXBwaW5nIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBoeXBvdGhldGljYWwgXCJuZWVkbGVcIiBtYXBwaW5nIHRoYXRcbiAqIHdlIGFyZSBzZWFyY2hpbmcgZm9yIGluIHRoZSBnaXZlbiBcImhheXN0YWNrXCIgb2YgbWFwcGluZ3MuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2ZpbmRNYXBwaW5nKGFOZWVkbGUsIGFNYXBwaW5ncywgYUxpbmVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhQ29sdW1uTmFtZSwgYUNvbXBhcmF0b3IsIGFCaWFzKSB7XG4gICAgLy8gVG8gcmV0dXJuIHRoZSBwb3NpdGlvbiB3ZSBhcmUgc2VhcmNoaW5nIGZvciwgd2UgbXVzdCBmaXJzdCBmaW5kIHRoZVxuICAgIC8vIG1hcHBpbmcgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiBhbmQgdGhlbiByZXR1cm4gdGhlIG9wcG9zaXRlIHBvc2l0aW9uIGl0XG4gICAgLy8gcG9pbnRzIHRvLiBCZWNhdXNlIHRoZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB3ZSBjYW4gdXNlIGJpbmFyeSBzZWFyY2ggdG9cbiAgICAvLyBmaW5kIHRoZSBiZXN0IG1hcHBpbmcuXG5cbiAgICBpZiAoYU5lZWRsZVthTGluZU5hbWVdIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSwgZ290ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FMaW5lTmFtZV0pO1xuICAgIH1cbiAgICBpZiAoYU5lZWRsZVthQ29sdW1uTmFtZV0gPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMCwgZ290ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FDb2x1bW5OYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaC5zZWFyY2goYU5lZWRsZSwgYU1hcHBpbmdzLCBhQ29tcGFyYXRvciwgYUJpYXMpO1xuICB9O1xuXG4vKipcbiAqIENvbXB1dGUgdGhlIGxhc3QgY29sdW1uIGZvciBlYWNoIGdlbmVyYXRlZCBtYXBwaW5nLiBUaGUgbGFzdCBjb2x1bW4gaXNcbiAqIGluY2x1c2l2ZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29tcHV0ZUNvbHVtblNwYW5zID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY29tcHV0ZUNvbHVtblNwYW5zKCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICAvLyBNYXBwaW5ncyBkbyBub3QgY29udGFpbiBhIGZpZWxkIGZvciB0aGUgbGFzdCBnZW5lcmF0ZWQgY29sdW1udC4gV2VcbiAgICAgIC8vIGNhbiBjb21lIHVwIHdpdGggYW4gb3B0aW1pc3RpYyBlc3RpbWF0ZSwgaG93ZXZlciwgYnkgYXNzdW1pbmcgdGhhdFxuICAgICAgLy8gbWFwcGluZ3MgYXJlIGNvbnRpZ3VvdXMgKGkuZS4gZ2l2ZW4gdHdvIGNvbnNlY3V0aXZlIG1hcHBpbmdzLCB0aGVcbiAgICAgIC8vIGZpcnN0IG1hcHBpbmcgZW5kcyB3aGVyZSB0aGUgc2Vjb25kIG9uZSBzdGFydHMpLlxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbmV4dE1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleCArIDFdO1xuXG4gICAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5leHRNYXBwaW5nLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBuZXh0TWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBsYXN0IG1hcHBpbmcgZm9yIGVhY2ggbGluZSBzcGFucyB0aGUgZW50aXJlIGxpbmUuXG4gICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBJbmZpbml0eTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcoXG4gICAgICBuZWVkbGUsXG4gICAgICB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncyxcbiAgICAgIFwiZ2VuZXJhdGVkTGluZVwiLFxuICAgICAgXCJnZW5lcmF0ZWRDb2x1bW5cIixcbiAgICAgIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQsXG4gICAgICB1dGlsLmdldEFyZyhhQXJncywgJ2JpYXMnLCBTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORClcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ3NvdXJjZScsIG51bGwpO1xuICAgICAgICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5hdChzb3VyY2UpO1xuICAgICAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTCh0aGlzLnNvdXJjZVJvb3QsIHNvdXJjZSwgdGhpcy5fc291cmNlTWFwVVJMKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICduYW1lJywgbnVsbCk7XG4gICAgICAgIGlmIChuYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmF0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsTGluZScsIG51bGwpLFxuICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsQ29sdW1uJywgbnVsbCksXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2U6IG51bGwsXG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgbmFtZTogbnVsbFxuICAgIH07XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMgPVxuICBmdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyX2hhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCkge1xuICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudC5sZW5ndGggPj0gdGhpcy5fc291cmNlcy5zaXplKCkgJiZcbiAgICAgICF0aGlzLnNvdXJjZXNDb250ZW50LnNvbWUoZnVuY3Rpb24gKHNjKSB7IHJldHVybiBzYyA9PSBudWxsOyB9KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgdGhlIHVybCBvZiB0aGVcbiAqIG9yaWdpbmFsIHNvdXJjZSBmaWxlLiBSZXR1cm5zIG51bGwgaWYgbm8gb3JpZ2luYWwgc291cmNlIGNvbnRlbnQgaXNcbiAqIGF2YWlsYWJsZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgbnVsbE9uTWlzc2luZykge1xuICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KGFTb3VyY2UpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFtpbmRleF07XG4gICAgfVxuXG4gICAgdmFyIHJlbGF0aXZlU291cmNlID0gYVNvdXJjZTtcbiAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHJlbGF0aXZlU291cmNlID0gdXRpbC5yZWxhdGl2ZSh0aGlzLnNvdXJjZVJvb3QsIHJlbGF0aXZlU291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsO1xuICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbFxuICAgICAgICAmJiAodXJsID0gdXRpbC51cmxQYXJzZSh0aGlzLnNvdXJjZVJvb3QpKSkge1xuICAgICAgLy8gWFhYOiBmaWxlOi8vIFVSSXMgYW5kIGFic29sdXRlIHBhdGhzIGxlYWQgdG8gdW5leHBlY3RlZCBiZWhhdmlvciBmb3JcbiAgICAgIC8vIG1hbnkgdXNlcnMuIFdlIGNhbiBoZWxwIHRoZW0gb3V0IHdoZW4gdGhleSBleHBlY3QgZmlsZTovLyBVUklzIHRvXG4gICAgICAvLyBiZWhhdmUgbGlrZSBpdCB3b3VsZCBpZiB0aGV5IHdlcmUgcnVubmluZyBhIGxvY2FsIEhUVFAgc2VydmVyLiBTZWVcbiAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4NTU5Ny5cbiAgICAgIHZhciBmaWxlVXJpQWJzUGF0aCA9IHJlbGF0aXZlU291cmNlLnJlcGxhY2UoL15maWxlOlxcL1xcLy8sIFwiXCIpO1xuICAgICAgaWYgKHVybC5zY2hlbWUgPT0gXCJmaWxlXCJcbiAgICAgICAgICAmJiB0aGlzLl9zb3VyY2VzLmhhcyhmaWxlVXJpQWJzUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKGZpbGVVcmlBYnNQYXRoKV1cbiAgICAgIH1cblxuICAgICAgaWYgKCghdXJsLnBhdGggfHwgdXJsLnBhdGggPT0gXCIvXCIpXG4gICAgICAgICAgJiYgdGhpcy5fc291cmNlcy5oYXMoXCIvXCIgKyByZWxhdGl2ZVNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKFwiL1wiICsgcmVsYXRpdmVTb3VyY2UpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgcmVjdXJzaXZlbHkgZnJvbVxuICAgIC8vIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvci4gSW4gdGhhdCBjYXNlLCB3ZVxuICAgIC8vIGRvbid0IHdhbnQgdG8gdGhyb3cgaWYgd2UgY2FuJ3QgZmluZCB0aGUgc291cmNlIC0gd2UganVzdCB3YW50IHRvXG4gICAgLy8gcmV0dXJuIG51bGwsIHNvIHdlIHByb3ZpZGUgYSBmbGFnIHRvIGV4aXQgZ3JhY2VmdWxseS5cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyByZWxhdGl2ZVNvdXJjZSArICdcIiBpcyBub3QgaW4gdGhlIFNvdXJjZU1hcC4nKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcbiAqIGxpbmUsIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmdlbmVyYXRlZFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKTtcbiAgICBzb3VyY2UgPSB0aGlzLl9maW5kU291cmNlSW5kZXgoc291cmNlKTtcbiAgICBpZiAoc291cmNlIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBsYXN0Q29sdW1uOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhcbiAgICAgIG5lZWRsZSxcbiAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG4gICAgICBcIm9yaWdpbmFsTGluZVwiLFxuICAgICAgXCJvcmlnaW5hbENvbHVtblwiLFxuICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcbiAgICAgIHV0aWwuZ2V0QXJnKGFBcmdzLCAnYmlhcycsIFNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EKVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzW2luZGV4XTtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlID09PSBuZWVkbGUuc291cmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGwsXG4gICAgICBsYXN0Q29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxuZXhwb3J0cy5CYXNpY1NvdXJjZU1hcENvbnN1bWVyID0gQmFzaWNTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBBbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoXG4gKiB3ZSBjYW4gcXVlcnkgZm9yIGluZm9ybWF0aW9uLiBJdCBkaWZmZXJzIGZyb20gQmFzaWNTb3VyY2VNYXBDb25zdW1lciBpblxuICogdGhhdCBpdCB0YWtlcyBcImluZGV4ZWRcIiBzb3VyY2UgbWFwcyAoaS5lLiBvbmVzIHdpdGggYSBcInNlY3Rpb25zXCIgZmllbGQpIGFzXG4gKiBpbnB1dC5cbiAqXG4gKiBUaGUgZmlyc3QgcGFyYW1ldGVyIGlzIGEgcmF3IHNvdXJjZSBtYXAgKGVpdGhlciBhcyBhIEpTT04gc3RyaW5nLCBvciBhbHJlYWR5XG4gKiBwYXJzZWQgdG8gYW4gb2JqZWN0KS4gQWNjb3JkaW5nIHRvIHRoZSBzcGVjIGZvciBpbmRleGVkIHNvdXJjZSBtYXBzLCB0aGV5XG4gKiBoYXZlIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqXG4gKiAgIC0gdmVyc2lvbjogV2hpY2ggdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcCBzcGVjIHRoaXMgbWFwIGlzIGZvbGxvd2luZy5cbiAqICAgLSBmaWxlOiBPcHRpb25hbC4gVGhlIGdlbmVyYXRlZCBmaWxlIHRoaXMgc291cmNlIG1hcCBpcyBhc3NvY2lhdGVkIHdpdGguXG4gKiAgIC0gc2VjdGlvbnM6IEEgbGlzdCBvZiBzZWN0aW9uIGRlZmluaXRpb25zLlxuICpcbiAqIEVhY2ggdmFsdWUgdW5kZXIgdGhlIFwic2VjdGlvbnNcIiBmaWVsZCBoYXMgdHdvIGZpZWxkczpcbiAqICAgLSBvZmZzZXQ6IFRoZSBvZmZzZXQgaW50byB0aGUgb3JpZ2luYWwgc3BlY2lmaWVkIGF0IHdoaWNoIHRoaXMgc2VjdGlvblxuICogICAgICAgYmVnaW5zIHRvIGFwcGx5LCBkZWZpbmVkIGFzIGFuIG9iamVjdCB3aXRoIGEgXCJsaW5lXCIgYW5kIFwiY29sdW1uXCJcbiAqICAgICAgIGZpZWxkLlxuICogICAtIG1hcDogQSBzb3VyY2UgbWFwIGRlZmluaXRpb24uIFRoaXMgc291cmNlIG1hcCBjb3VsZCBhbHNvIGJlIGluZGV4ZWQsXG4gKiAgICAgICBidXQgZG9lc24ndCBoYXZlIHRvIGJlLlxuICpcbiAqIEluc3RlYWQgb2YgdGhlIFwibWFwXCIgZmllbGQsIGl0J3MgYWxzbyBwb3NzaWJsZSB0byBoYXZlIGEgXCJ1cmxcIiBmaWVsZFxuICogc3BlY2lmeWluZyBhIFVSTCB0byByZXRyaWV2ZSBhIHNvdXJjZSBtYXAgZnJvbSwgYnV0IHRoYXQncyBjdXJyZW50bHlcbiAqIHVuc3VwcG9ydGVkLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIHNvdXJjZSBtYXAsIHRha2VuIGZyb20gdGhlIHNvdXJjZSBtYXAgc3BlY1swXSwgYnV0XG4gKiBtb2RpZmllZCB0byBvbWl0IGEgc2VjdGlvbiB3aGljaCB1c2VzIHRoZSBcInVybFwiIGZpZWxkLlxuICpcbiAqICB7XG4gKiAgICB2ZXJzaW9uIDogMyxcbiAqICAgIGZpbGU6IFwiYXBwLmpzXCIsXG4gKiAgICBzZWN0aW9uczogW3tcbiAqICAgICAgb2Zmc2V0OiB7bGluZToxMDAsIGNvbHVtbjoxMH0sXG4gKiAgICAgIG1hcDoge1xuICogICAgICAgIHZlcnNpb24gOiAzLFxuICogICAgICAgIGZpbGU6IFwic2VjdGlvbi5qc1wiLFxuICogICAgICAgIHNvdXJjZXM6IFtcImZvby5qc1wiLCBcImJhci5qc1wiXSxcbiAqICAgICAgICBuYW1lczogW1wic3JjXCIsIFwibWFwc1wiLCBcImFyZVwiLCBcImZ1blwiXSxcbiAqICAgICAgICBtYXBwaW5nczogXCJBQUFBLEU7O0FCQ0RFO1wiXG4gKiAgICAgIH1cbiAqICAgIH1dLFxuICogIH1cbiAqXG4gKiBUaGUgc2Vjb25kIHBhcmFtZXRlciwgaWYgZ2l2ZW4sIGlzIGEgc3RyaW5nIHdob3NlIHZhbHVlIGlzIHRoZSBVUkxcbiAqIGF0IHdoaWNoIHRoZSBzb3VyY2UgbWFwIHdhcyBmb3VuZC4gIFRoaXMgVVJMIGlzIHVzZWQgdG8gY29tcHV0ZSB0aGVcbiAqIHNvdXJjZXMgYXJyYXkuXG4gKlxuICogWzBdOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXQjaGVhZGluZz1oLjUzNWVzM3hlcHJndFxuICovXG5mdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcbiAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZU1hcCA9IHV0aWwucGFyc2VTb3VyY2VNYXBJbnB1dChhU291cmNlTWFwKTtcbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAndmVyc2lvbicpO1xuICB2YXIgc2VjdGlvbnMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzZWN0aW9ucycpO1xuXG4gIGlmICh2ZXJzaW9uICE9IHRoaXMuX3ZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIHRoaXMuX3NvdXJjZXMgPSBuZXcgQXJyYXlTZXQoKTtcbiAgdGhpcy5fbmFtZXMgPSBuZXcgQXJyYXlTZXQoKTtcblxuICB2YXIgbGFzdE9mZnNldCA9IHtcbiAgICBsaW5lOiAtMSxcbiAgICBjb2x1bW46IDBcbiAgfTtcbiAgdGhpcy5fc2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICBpZiAocy51cmwpIHtcbiAgICAgIC8vIFRoZSB1cmwgZmllbGQgd2lsbCByZXF1aXJlIHN1cHBvcnQgZm9yIGFzeW5jaHJvbmljaXR5LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvaXNzdWVzLzE2XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1cHBvcnQgZm9yIHVybCBmaWVsZCBpbiBzZWN0aW9ucyBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHZhciBvZmZzZXQgPSB1dGlsLmdldEFyZyhzLCAnb2Zmc2V0Jyk7XG4gICAgdmFyIG9mZnNldExpbmUgPSB1dGlsLmdldEFyZyhvZmZzZXQsICdsaW5lJyk7XG4gICAgdmFyIG9mZnNldENvbHVtbiA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2NvbHVtbicpO1xuXG4gICAgaWYgKG9mZnNldExpbmUgPCBsYXN0T2Zmc2V0LmxpbmUgfHxcbiAgICAgICAgKG9mZnNldExpbmUgPT09IGxhc3RPZmZzZXQubGluZSAmJiBvZmZzZXRDb2x1bW4gPCBsYXN0T2Zmc2V0LmNvbHVtbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2VjdGlvbiBvZmZzZXRzIG11c3QgYmUgb3JkZXJlZCBhbmQgbm9uLW92ZXJsYXBwaW5nLicpO1xuICAgIH1cbiAgICBsYXN0T2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdlbmVyYXRlZE9mZnNldDoge1xuICAgICAgICAvLyBUaGUgb2Zmc2V0IGZpZWxkcyBhcmUgMC1iYXNlZCwgYnV0IHdlIHVzZSAxLWJhc2VkIGluZGljZXMgd2hlblxuICAgICAgICAvLyBlbmNvZGluZy9kZWNvZGluZyBmcm9tIFZMUS5cbiAgICAgICAgZ2VuZXJhdGVkTGluZTogb2Zmc2V0TGluZSArIDEsXG4gICAgICAgIGdlbmVyYXRlZENvbHVtbjogb2Zmc2V0Q29sdW1uICsgMVxuICAgICAgfSxcbiAgICAgIGNvbnN1bWVyOiBuZXcgU291cmNlTWFwQ29uc3VtZXIodXRpbC5nZXRBcmcocywgJ21hcCcpLCBhU291cmNlTWFwVVJMKVxuICAgIH1cbiAgfSk7XG59XG5cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBvcmlnaW5hbCBzb3VyY2VzLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLl9zZWN0aW9uc1tpXS5jb25zdW1lci5zb3VyY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHNvdXJjZXMucHVzaCh0aGlzLl9zZWN0aW9uc1tpXS5jb25zdW1lci5zb3VyY2VzW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSwgbGluZSwgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIGdlbmVyYXRlZFxuICogc291cmNlJ3MgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLiAgVGhlIGNvbHVtblxuICogICAgIG51bWJlciBpcyAwLWJhc2VkLlxuICpcbiAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlLCBvciBudWxsLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gbmFtZTogVGhlIG9yaWdpbmFsIGlkZW50aWZpZXIsIG9yIG51bGwuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9vcmlnaW5hbFBvc2l0aW9uRm9yKGFBcmdzKSB7XG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIGdlbmVyYXRlZExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuICAgICAgZ2VuZXJhdGVkQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicpXG4gICAgfTtcblxuICAgIC8vIEZpbmQgdGhlIHNlY3Rpb24gY29udGFpbmluZyB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uIHdlJ3JlIHRyeWluZyB0byBtYXBcbiAgICAvLyB0byBhbiBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICB2YXIgc2VjdGlvbkluZGV4ID0gYmluYXJ5U2VhcmNoLnNlYXJjaChuZWVkbGUsIHRoaXMuX3NlY3Rpb25zLFxuICAgICAgZnVuY3Rpb24obmVlZGxlLCBzZWN0aW9uKSB7XG4gICAgICAgIHZhciBjbXAgPSBuZWVkbGUuZ2VuZXJhdGVkTGluZSAtIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmU7XG4gICAgICAgIGlmIChjbXApIHtcbiAgICAgICAgICByZXR1cm4gY21wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgfSk7XG4gICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xuXG4gICAgaWYgKCFzZWN0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IG51bGwsXG4gICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgICAgbmFtZTogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbi5jb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHtcbiAgICAgIGxpbmU6IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC1cbiAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgLSAxKSxcbiAgICAgIGNvbHVtbjogbmVlZGxlLmdlbmVyYXRlZENvbHVtbiAtXG4gICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZVxuICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICA6IDApLFxuICAgICAgYmlhczogYUFyZ3MuYmlhc1xuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIHdlIGhhdmUgdGhlIHNvdXJjZSBjb250ZW50IGZvciBldmVyeSBzb3VyY2UgaW4gdGhlIHNvdXJjZVxuICogbWFwLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcy5jb25zdW1lci5oYXNDb250ZW50c09mQWxsU291cmNlcygpO1xuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuICogYXZhaWxhYmxlLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLnNvdXJjZUNvbnRlbnRGb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfc291cmNlQ29udGVudEZvcihhU291cmNlLCBudWxsT25NaXNzaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblxuICAgICAgdmFyIGNvbnRlbnQgPSBzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgdHJ1ZSk7XG4gICAgICBpZiAoY29udGVudCkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG51bGxPbk1pc3NpbmcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgYVNvdXJjZSArICdcIiBpcyBub3QgaW4gdGhlIFNvdXJjZU1hcC4nKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcbiAqIGxpbmUsIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC4gXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cbiAqICAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmdlbmVyYXRlZFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX2dlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblxuICAgICAgLy8gT25seSBjb25zaWRlciB0aGlzIHNlY3Rpb24gaWYgdGhlIHJlcXVlc3RlZCBzb3VyY2UgaXMgaW4gdGhlIGxpc3Qgb2ZcbiAgICAgIC8vIHNvdXJjZXMgb2YgdGhlIGNvbnN1bWVyLlxuICAgICAgaWYgKHNlY3Rpb24uY29uc3VtZXIuX2ZpbmRTb3VyY2VJbmRleCh1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpKSA9PT0gLTEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB2YXIgZ2VuZXJhdGVkUG9zaXRpb24gPSBzZWN0aW9uLmNvbnN1bWVyLmdlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKTtcbiAgICAgIGlmIChnZW5lcmF0ZWRQb3NpdGlvbikge1xuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZFBvc2l0aW9uLmxpbmUgK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgLSAxKSxcbiAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZFBvc2l0aW9uLmNvbHVtbiArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSA9PT0gZ2VuZXJhdGVkUG9zaXRpb24ubGluZVxuICAgICAgICAgICAgID8gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uIC0gMVxuICAgICAgICAgICAgIDogMClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGNvbHVtbjogbnVsbFxuICAgIH07XG4gIH07XG5cbi8qKlxuICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG4gKiBgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3NgIHByb3BlcnRpZXMpLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBbXTtcbiAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbaV07XG4gICAgICB2YXIgc2VjdGlvbk1hcHBpbmdzID0gc2VjdGlvbi5jb25zdW1lci5fZ2VuZXJhdGVkTWFwcGluZ3M7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlY3Rpb25NYXBwaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbWFwcGluZyA9IHNlY3Rpb25NYXBwaW5nc1tqXTtcblxuICAgICAgICB2YXIgc291cmNlID0gc2VjdGlvbi5jb25zdW1lci5fc291cmNlcy5hdChtYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZVJvb3QsIHNvdXJjZSwgdGhpcy5fc291cmNlTWFwVVJMKTtcbiAgICAgICAgdGhpcy5fc291cmNlcy5hZGQoc291cmNlKTtcbiAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5pbmRleE9mKHNvdXJjZSk7XG5cbiAgICAgICAgdmFyIG5hbWUgPSBudWxsO1xuICAgICAgICBpZiAobWFwcGluZy5uYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IHNlY3Rpb24uY29uc3VtZXIuX25hbWVzLmF0KG1hcHBpbmcubmFtZSk7XG4gICAgICAgICAgdGhpcy5fbmFtZXMuYWRkKG5hbWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG1hcHBpbmdzIGNvbWluZyBmcm9tIHRoZSBjb25zdW1lciBmb3IgdGhlIHNlY3Rpb24gaGF2ZVxuICAgICAgICAvLyBnZW5lcmF0ZWQgcG9zaXRpb25zIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgc2VjdGlvbiwgc28gd2VcbiAgICAgICAgLy8gbmVlZCB0byBvZmZzZXQgdGhlbSB0byBiZSByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbmNhdGVuYXRlZFxuICAgICAgICAvLyBnZW5lcmF0ZWQgZmlsZS5cbiAgICAgICAgdmFyIGFkanVzdGVkTWFwcGluZyA9IHtcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBnZW5lcmF0ZWRMaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUgK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgLSAxKSxcbiAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBtYXBwaW5nLmdlbmVyYXRlZExpbmVcbiAgICAgICAgICAgID8gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uIC0gMVxuICAgICAgICAgICAgOiAwKSxcbiAgICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIG9yaWdpbmFsQ29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MucHVzaChhZGp1c3RlZE1hcHBpbmcpO1xuICAgICAgICBpZiAodHlwZW9mIGFkanVzdGVkTWFwcGluZy5vcmlnaW5hbExpbmUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MucHVzaChhZGp1c3RlZE1hcHBpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVpY2tTb3J0KHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCk7XG4gICAgcXVpY2tTb3J0KHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcbiAgfTtcblxuZXhwb3J0cy5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIgPSBJbmRleGVkU291cmNlTWFwQ29uc3VtZXI7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBiYXNlNjRWTFEgPSByZXF1aXJlKCcuL2Jhc2U2NC12bHEnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgQXJyYXlTZXQgPSByZXF1aXJlKCcuL2FycmF5LXNldCcpLkFycmF5U2V0O1xudmFyIE1hcHBpbmdMaXN0ID0gcmVxdWlyZSgnLi9tYXBwaW5nLWxpc3QnKS5NYXBwaW5nTGlzdDtcblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGUgU291cmNlTWFwR2VuZXJhdG9yIHJlcHJlc2VudHMgYSBzb3VyY2UgbWFwIHdoaWNoIGlzXG4gKiBiZWluZyBidWlsdCBpbmNyZW1lbnRhbGx5LiBZb3UgbWF5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZ1xuICogcHJvcGVydGllczpcbiAqXG4gKiAgIC0gZmlsZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuICogICAtIHNvdXJjZVJvb3Q6IEEgcm9vdCBmb3IgYWxsIHJlbGF0aXZlIFVSTHMgaW4gdGhpcyBzb3VyY2UgbWFwLlxuICovXG5mdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3IoYUFyZ3MpIHtcbiAgaWYgKCFhQXJncykge1xuICAgIGFBcmdzID0ge307XG4gIH1cbiAgdGhpcy5fZmlsZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnZmlsZScsIG51bGwpO1xuICB0aGlzLl9zb3VyY2VSb290ID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2VSb290JywgbnVsbCk7XG4gIHRoaXMuX3NraXBWYWxpZGF0aW9uID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdza2lwVmFsaWRhdGlvbicsIGZhbHNlKTtcbiAgdGhpcy5fc291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9uYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9tYXBwaW5ncyA9IG5ldyBNYXBwaW5nTGlzdCgpO1xuICB0aGlzLl9zb3VyY2VzQ29udGVudHMgPSBudWxsO1xufVxuXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFNvdXJjZU1hcEdlbmVyYXRvciBiYXNlZCBvbiBhIFNvdXJjZU1hcENvbnN1bWVyXG4gKlxuICogQHBhcmFtIGFTb3VyY2VNYXBDb25zdW1lciBUaGUgU291cmNlTWFwLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IuZnJvbVNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9mcm9tU291cmNlTWFwKGFTb3VyY2VNYXBDb25zdW1lcikge1xuICAgIHZhciBzb3VyY2VSb290ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZVJvb3Q7XG4gICAgdmFyIGdlbmVyYXRvciA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgZmlsZTogYVNvdXJjZU1hcENvbnN1bWVyLmZpbGUsXG4gICAgICBzb3VyY2VSb290OiBzb3VyY2VSb290XG4gICAgfSk7XG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLmVhY2hNYXBwaW5nKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICB2YXIgbmV3TWFwcGluZyA9IHtcbiAgICAgICAgZ2VuZXJhdGVkOiB7XG4gICAgICAgICAgbGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgbmV3TWFwcGluZy5zb3VyY2UgPSBtYXBwaW5nLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgIG5ld01hcHBpbmcuc291cmNlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBuZXdNYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdNYXBwaW5nLm9yaWdpbmFsID0ge1xuICAgICAgICAgIGxpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgIG5ld01hcHBpbmcubmFtZSA9IG1hcHBpbmcubmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnZW5lcmF0b3IuYWRkTWFwcGluZyhuZXdNYXBwaW5nKTtcbiAgICB9KTtcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgc291cmNlUmVsYXRpdmUgPSBzb3VyY2VGaWxlO1xuICAgICAgaWYgKHNvdXJjZVJvb3QgIT09IG51bGwpIHtcbiAgICAgICAgc291cmNlUmVsYXRpdmUgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZUZpbGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWdlbmVyYXRvci5fc291cmNlcy5oYXMoc291cmNlUmVsYXRpdmUpKSB7XG4gICAgICAgIGdlbmVyYXRvci5fc291cmNlcy5hZGQoc291cmNlUmVsYXRpdmUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBnZW5lcmF0b3Iuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9O1xuXG4vKipcbiAqIEFkZCBhIHNpbmdsZSBtYXBwaW5nIGZyb20gb3JpZ2luYWwgc291cmNlIGxpbmUgYW5kIGNvbHVtbiB0byB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gZm9yIHRoaXMgc291cmNlIG1hcCBiZWluZyBjcmVhdGVkLiBUaGUgbWFwcGluZ1xuICogb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gZ2VuZXJhdGVkOiBBbiBvYmplY3Qgd2l0aCB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMuXG4gKiAgIC0gb3JpZ2luYWw6IEFuIG9iamVjdCB3aXRoIHRoZSBvcmlnaW5hbCBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zLlxuICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlIChyZWxhdGl2ZSB0byB0aGUgc291cmNlUm9vdCkuXG4gKiAgIC0gbmFtZTogQW4gb3B0aW9uYWwgb3JpZ2luYWwgdG9rZW4gbmFtZSBmb3IgdGhpcyBtYXBwaW5nLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFkZE1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfYWRkTWFwcGluZyhhQXJncykge1xuICAgIHZhciBnZW5lcmF0ZWQgPSB1dGlsLmdldEFyZyhhQXJncywgJ2dlbmVyYXRlZCcpO1xuICAgIHZhciBvcmlnaW5hbCA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnb3JpZ2luYWwnLCBudWxsKTtcbiAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnLCBudWxsKTtcbiAgICB2YXIgbmFtZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbmFtZScsIG51bGwpO1xuXG4gICAgaWYgKCF0aGlzLl9za2lwVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5fdmFsaWRhdGVNYXBwaW5nKGdlbmVyYXRlZCwgb3JpZ2luYWwsIHNvdXJjZSwgbmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICBzb3VyY2UgPSBTdHJpbmcoc291cmNlKTtcbiAgICAgIGlmICghdGhpcy5fc291cmNlcy5oYXMoc291cmNlKSkge1xuICAgICAgICB0aGlzLl9zb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICBpZiAoIXRoaXMuX25hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwcGluZ3MuYWRkKHtcbiAgICAgIGdlbmVyYXRlZExpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uLFxuICAgICAgb3JpZ2luYWxMaW5lOiBvcmlnaW5hbCAhPSBudWxsICYmIG9yaWdpbmFsLmxpbmUsXG4gICAgICBvcmlnaW5hbENvbHVtbjogb3JpZ2luYWwgIT0gbnVsbCAmJiBvcmlnaW5hbC5jb2x1bW4sXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBTZXQgdGhlIHNvdXJjZSBjb250ZW50IGZvciBhIHNvdXJjZSBmaWxlLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLnNldFNvdXJjZUNvbnRlbnQgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3Jfc2V0U291cmNlQ29udGVudChhU291cmNlRmlsZSwgYVNvdXJjZUNvbnRlbnQpIHtcbiAgICB2YXIgc291cmNlID0gYVNvdXJjZUZpbGU7XG4gICAgaWYgKHRoaXMuX3NvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgc291cmNlID0gdXRpbC5yZWxhdGl2ZSh0aGlzLl9zb3VyY2VSb290LCBzb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChhU291cmNlQ29udGVudCAhPSBudWxsKSB7XG4gICAgICAvLyBBZGQgdGhlIHNvdXJjZSBjb250ZW50IHRvIHRoZSBfc291cmNlc0NvbnRlbnRzIG1hcC5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBfc291cmNlc0NvbnRlbnRzIG1hcCBpZiB0aGUgcHJvcGVydHkgaXMgbnVsbC5cbiAgICAgIGlmICghdGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZXNDb250ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3VyY2VzQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhzb3VyY2UpXSA9IGFTb3VyY2VDb250ZW50O1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIHNvdXJjZSBmaWxlIGZyb20gdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwLlxuICAgICAgLy8gSWYgdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwIGlzIGVtcHR5LCBzZXQgdGhlIHByb3BlcnR5IHRvIG51bGwuXG4gICAgICBkZWxldGUgdGhpcy5fc291cmNlc0NvbnRlbnRzW3V0aWwudG9TZXRTdHJpbmcoc291cmNlKV07XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fc291cmNlc0NvbnRlbnRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fc291cmNlc0NvbnRlbnRzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgbWFwcGluZ3Mgb2YgYSBzdWItc291cmNlLW1hcCBmb3IgYSBzcGVjaWZpYyBzb3VyY2UgZmlsZSB0byB0aGVcbiAqIHNvdXJjZSBtYXAgYmVpbmcgZ2VuZXJhdGVkLiBFYWNoIG1hcHBpbmcgdG8gdGhlIHN1cHBsaWVkIHNvdXJjZSBmaWxlIGlzXG4gKiByZXdyaXR0ZW4gdXNpbmcgdGhlIHN1cHBsaWVkIHNvdXJjZSBtYXAuIE5vdGU6IFRoZSByZXNvbHV0aW9uIGZvciB0aGVcbiAqIHJlc3VsdGluZyBtYXBwaW5ncyBpcyB0aGUgbWluaW1pdW0gb2YgdGhpcyBtYXAgYW5kIHRoZSBzdXBwbGllZCBtYXAuXG4gKlxuICogQHBhcmFtIGFTb3VyY2VNYXBDb25zdW1lciBUaGUgc291cmNlIG1hcCB0byBiZSBhcHBsaWVkLlxuICogQHBhcmFtIGFTb3VyY2VGaWxlIE9wdGlvbmFsLiBUaGUgZmlsZW5hbWUgb2YgdGhlIHNvdXJjZSBmaWxlLlxuICogICAgICAgIElmIG9taXR0ZWQsIFNvdXJjZU1hcENvbnN1bWVyJ3MgZmlsZSBwcm9wZXJ0eSB3aWxsIGJlIHVzZWQuXG4gKiBAcGFyYW0gYVNvdXJjZU1hcFBhdGggT3B0aW9uYWwuIFRoZSBkaXJuYW1lIG9mIHRoZSBwYXRoIHRvIHRoZSBzb3VyY2UgbWFwXG4gKiAgICAgICAgdG8gYmUgYXBwbGllZC4gSWYgcmVsYXRpdmUsIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSBTb3VyY2VNYXBDb25zdW1lci5cbiAqICAgICAgICBUaGlzIHBhcmFtZXRlciBpcyBuZWVkZWQgd2hlbiB0aGUgdHdvIHNvdXJjZSBtYXBzIGFyZW4ndCBpbiB0aGUgc2FtZVxuICogICAgICAgIGRpcmVjdG9yeSwgYW5kIHRoZSBzb3VyY2UgbWFwIHRvIGJlIGFwcGxpZWQgY29udGFpbnMgcmVsYXRpdmUgc291cmNlXG4gKiAgICAgICAgcGF0aHMuIElmIHNvLCB0aG9zZSByZWxhdGl2ZSBzb3VyY2UgcGF0aHMgbmVlZCB0byBiZSByZXdyaXR0ZW5cbiAqICAgICAgICByZWxhdGl2ZSB0byB0aGUgU291cmNlTWFwR2VuZXJhdG9yLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFwcGx5U291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2FwcGx5U291cmNlTWFwKGFTb3VyY2VNYXBDb25zdW1lciwgYVNvdXJjZUZpbGUsIGFTb3VyY2VNYXBQYXRoKSB7XG4gICAgdmFyIHNvdXJjZUZpbGUgPSBhU291cmNlRmlsZTtcbiAgICAvLyBJZiBhU291cmNlRmlsZSBpcyBvbWl0dGVkLCB3ZSB3aWxsIHVzZSB0aGUgZmlsZSBwcm9wZXJ0eSBvZiB0aGUgU291cmNlTWFwXG4gICAgaWYgKGFTb3VyY2VGaWxlID09IG51bGwpIHtcbiAgICAgIGlmIChhU291cmNlTWFwQ29uc3VtZXIuZmlsZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5hcHBseVNvdXJjZU1hcCByZXF1aXJlcyBlaXRoZXIgYW4gZXhwbGljaXQgc291cmNlIGZpbGUsICcgK1xuICAgICAgICAgICdvciB0aGUgc291cmNlIG1hcFxcJ3MgXCJmaWxlXCIgcHJvcGVydHkuIEJvdGggd2VyZSBvbWl0dGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHNvdXJjZUZpbGUgPSBhU291cmNlTWFwQ29uc3VtZXIuZmlsZTtcbiAgICB9XG4gICAgdmFyIHNvdXJjZVJvb3QgPSB0aGlzLl9zb3VyY2VSb290O1xuICAgIC8vIE1ha2UgXCJzb3VyY2VGaWxlXCIgcmVsYXRpdmUgaWYgYW4gYWJzb2x1dGUgVXJsIGlzIHBhc3NlZC5cbiAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICBzb3VyY2VGaWxlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2VGaWxlKTtcbiAgICB9XG4gICAgLy8gQXBwbHlpbmcgdGhlIFNvdXJjZU1hcCBjYW4gYWRkIGFuZCByZW1vdmUgaXRlbXMgZnJvbSB0aGUgc291cmNlcyBhbmRcbiAgICAvLyB0aGUgbmFtZXMgYXJyYXkuXG4gICAgdmFyIG5ld1NvdXJjZXMgPSBuZXcgQXJyYXlTZXQoKTtcbiAgICB2YXIgbmV3TmFtZXMgPSBuZXcgQXJyYXlTZXQoKTtcblxuICAgIC8vIEZpbmQgbWFwcGluZ3MgZm9yIHRoZSBcInNvdXJjZUZpbGVcIlxuICAgIHRoaXMuX21hcHBpbmdzLnVuc29ydGVkRm9yRWFjaChmdW5jdGlvbiAobWFwcGluZykge1xuICAgICAgaWYgKG1hcHBpbmcuc291cmNlID09PSBzb3VyY2VGaWxlICYmIG1hcHBpbmcub3JpZ2luYWxMaW5lICE9IG51bGwpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgY2FuIGJlIG1hcHBlZCBieSB0aGUgc291cmNlIG1hcCwgdGhlbiB1cGRhdGUgdGhlIG1hcHBpbmcuXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGFTb3VyY2VNYXBDb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHtcbiAgICAgICAgICBsaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICBjb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcmlnaW5hbC5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIENvcHkgbWFwcGluZ1xuICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gb3JpZ2luYWwuc291cmNlO1xuICAgICAgICAgIGlmIChhU291cmNlTWFwUGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHV0aWwuam9pbihhU291cmNlTWFwUGF0aCwgbWFwcGluZy5zb3VyY2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBtYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lID0gb3JpZ2luYWwubGluZTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gb3JpZ2luYWwuY29sdW1uO1xuICAgICAgICAgIGlmIChvcmlnaW5hbC5uYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcubmFtZSA9IG9yaWdpbmFsLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2UgPSBtYXBwaW5nLnNvdXJjZTtcbiAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCAmJiAhbmV3U291cmNlcy5oYXMoc291cmNlKSkge1xuICAgICAgICBuZXdTb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IG1hcHBpbmcubmFtZTtcbiAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgIW5ld05hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgICBuZXdOYW1lcy5hZGQobmFtZSk7XG4gICAgICB9XG5cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2VzID0gbmV3U291cmNlcztcbiAgICB0aGlzLl9uYW1lcyA9IG5ld05hbWVzO1xuXG4gICAgLy8gQ29weSBzb3VyY2VzQ29udGVudHMgb2YgYXBwbGllZCBtYXAuXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlRmlsZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlQ29udGVudEZvcihzb3VyY2VGaWxlKTtcbiAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFTb3VyY2VNYXBQYXRoICE9IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2VGaWxlID0gdXRpbC5qb2luKGFTb3VyY2VNYXBQYXRoLCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgc291cmNlRmlsZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9O1xuXG4vKipcbiAqIEEgbWFwcGluZyBjYW4gaGF2ZSBvbmUgb2YgdGhlIHRocmVlIGxldmVscyBvZiBkYXRhOlxuICpcbiAqICAgMS4gSnVzdCB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uLlxuICogICAyLiBUaGUgR2VuZXJhdGVkIHBvc2l0aW9uLCBvcmlnaW5hbCBwb3NpdGlvbiwgYW5kIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgMy4gR2VuZXJhdGVkIGFuZCBvcmlnaW5hbCBwb3NpdGlvbiwgb3JpZ2luYWwgc291cmNlLCBhcyB3ZWxsIGFzIGEgbmFtZVxuICogICAgICB0b2tlbi5cbiAqXG4gKiBUbyBtYWludGFpbiBjb25zaXN0ZW5jeSwgd2UgdmFsaWRhdGUgdGhhdCBhbnkgbmV3IG1hcHBpbmcgYmVpbmcgYWRkZWQgZmFsbHNcbiAqIGluIHRvIG9uZSBvZiB0aGVzZSBjYXRlZ29yaWVzLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZU1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfdmFsaWRhdGVNYXBwaW5nKGFHZW5lcmF0ZWQsIGFPcmlnaW5hbCwgYVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTmFtZSkge1xuICAgIC8vIFdoZW4gYU9yaWdpbmFsIGlzIHRydXRoeSBidXQgaGFzIGVtcHR5IHZhbHVlcyBmb3IgLmxpbmUgYW5kIC5jb2x1bW4sXG4gICAgLy8gaXQgaXMgbW9zdCBsaWtlbHkgYSBwcm9ncmFtbWVyIGVycm9yLiBJbiB0aGlzIGNhc2Ugd2UgdGhyb3cgYSB2ZXJ5XG4gICAgLy8gc3BlY2lmaWMgZXJyb3IgbWVzc2FnZSB0byB0cnkgdG8gZ3VpZGUgdGhlbSB0aGUgcmlnaHQgd2F5LlxuICAgIC8vIEZvciBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyLWJ1bmRsZXIvcHVsbC81MTlcbiAgICBpZiAoYU9yaWdpbmFsICYmIHR5cGVvZiBhT3JpZ2luYWwubGluZSAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGFPcmlnaW5hbC5jb2x1bW4gIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdvcmlnaW5hbC5saW5lIGFuZCBvcmlnaW5hbC5jb2x1bW4gYXJlIG5vdCBudW1iZXJzIC0tIHlvdSBwcm9iYWJseSBtZWFudCB0byBvbWl0ICcgK1xuICAgICAgICAgICAgJ3RoZSBvcmlnaW5hbCBtYXBwaW5nIGVudGlyZWx5IGFuZCBvbmx5IG1hcCB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uLiBJZiBzbywgcGFzcyAnICtcbiAgICAgICAgICAgICdudWxsIGZvciB0aGUgb3JpZ2luYWwgbWFwcGluZyBpbnN0ZWFkIG9mIGFuIG9iamVjdCB3aXRoIGVtcHR5IG9yIG51bGwgdmFsdWVzLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYUdlbmVyYXRlZCAmJiAnbGluZScgaW4gYUdlbmVyYXRlZCAmJiAnY29sdW1uJyBpbiBhR2VuZXJhdGVkXG4gICAgICAgICYmIGFHZW5lcmF0ZWQubGluZSA+IDAgJiYgYUdlbmVyYXRlZC5jb2x1bW4gPj0gMFxuICAgICAgICAmJiAhYU9yaWdpbmFsICYmICFhU291cmNlICYmICFhTmFtZSkge1xuICAgICAgLy8gQ2FzZSAxLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChhR2VuZXJhdGVkICYmICdsaW5lJyBpbiBhR2VuZXJhdGVkICYmICdjb2x1bW4nIGluIGFHZW5lcmF0ZWRcbiAgICAgICAgICAgICAmJiBhT3JpZ2luYWwgJiYgJ2xpbmUnIGluIGFPcmlnaW5hbCAmJiAnY29sdW1uJyBpbiBhT3JpZ2luYWxcbiAgICAgICAgICAgICAmJiBhR2VuZXJhdGVkLmxpbmUgPiAwICYmIGFHZW5lcmF0ZWQuY29sdW1uID49IDBcbiAgICAgICAgICAgICAmJiBhT3JpZ2luYWwubGluZSA+IDAgJiYgYU9yaWdpbmFsLmNvbHVtbiA+PSAwXG4gICAgICAgICAgICAgJiYgYVNvdXJjZSkge1xuICAgICAgLy8gQ2FzZXMgMiBhbmQgMy5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbWFwcGluZzogJyArIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZ2VuZXJhdGVkOiBhR2VuZXJhdGVkLFxuICAgICAgICBzb3VyY2U6IGFTb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsOiBhT3JpZ2luYWwsXG4gICAgICAgIG5hbWU6IGFOYW1lXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgYWNjdW11bGF0ZWQgbWFwcGluZ3MgaW4gdG8gdGhlIHN0cmVhbSBvZiBiYXNlIDY0IFZMUXNcbiAqIHNwZWNpZmllZCBieSB0aGUgc291cmNlIG1hcCBmb3JtYXQuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3NlcmlhbGl6ZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3NlcmlhbGl6ZU1hcHBpbmdzKCkge1xuICAgIHZhciBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkTGluZSA9IDE7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzU291cmNlID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIG5leHQ7XG4gICAgdmFyIG1hcHBpbmc7XG4gICAgdmFyIG5hbWVJZHg7XG4gICAgdmFyIHNvdXJjZUlkeDtcblxuICAgIHZhciBtYXBwaW5ncyA9IHRoaXMuX21hcHBpbmdzLnRvQXJyYXkoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWFwcGluZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcbiAgICAgIG5leHQgPSAnJ1xuXG4gICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lICE9PSBwcmV2aW91c0dlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgICB3aGlsZSAobWFwcGluZy5nZW5lcmF0ZWRMaW5lICE9PSBwcmV2aW91c0dlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICBuZXh0ICs9ICc7JztcbiAgICAgICAgICBwcmV2aW91c0dlbmVyYXRlZExpbmUrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGlmICghdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nLCBtYXBwaW5nc1tpIC0gMV0pKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCArPSAnLCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgIGlmIChtYXBwaW5nLnNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZUlkeCA9IHRoaXMuX3NvdXJjZXMuaW5kZXhPZihtYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShzb3VyY2VJZHggLSBwcmV2aW91c1NvdXJjZSk7XG4gICAgICAgIHByZXZpb3VzU291cmNlID0gc291cmNlSWR4O1xuXG4gICAgICAgIC8vIGxpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZCBpbiBTb3VyY2VNYXAgc3BlYyB2ZXJzaW9uIDNcbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzT3JpZ2luYWxMaW5lKTtcbiAgICAgICAgcHJldmlvdXNPcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZSAtIDE7XG5cbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG1hcHBpbmcub3JpZ2luYWxDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBwcmV2aW91c09yaWdpbmFsQ29sdW1uKTtcbiAgICAgICAgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgaWYgKG1hcHBpbmcubmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmFtZUlkeCA9IHRoaXMuX25hbWVzLmluZGV4T2YobWFwcGluZy5uYW1lKTtcbiAgICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobmFtZUlkeCAtIHByZXZpb3VzTmFtZSk7XG4gICAgICAgICAgcHJldmlvdXNOYW1lID0gbmFtZUlkeDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50ID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2dlbmVyYXRlU291cmNlc0NvbnRlbnQoYVNvdXJjZXMsIGFTb3VyY2VSb290KSB7XG4gICAgcmV0dXJuIGFTb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICBpZiAoIXRoaXMuX3NvdXJjZXNDb250ZW50cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhU291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZSA9IHV0aWwucmVsYXRpdmUoYVNvdXJjZVJvb3QsIHNvdXJjZSk7XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gdXRpbC50b1NldFN0cmluZyhzb3VyY2UpO1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9zb3VyY2VzQ29udGVudHMsIGtleSlcbiAgICAgICAgPyB0aGlzLl9zb3VyY2VzQ29udGVudHNba2V5XVxuICAgICAgICA6IG51bGw7XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbi8qKlxuICogRXh0ZXJuYWxpemUgdGhlIHNvdXJjZSBtYXAuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUudG9KU09OID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3RvSlNPTigpIHtcbiAgICB2YXIgbWFwID0ge1xuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHNvdXJjZXM6IHRoaXMuX3NvdXJjZXMudG9BcnJheSgpLFxuICAgICAgbmFtZXM6IHRoaXMuX25hbWVzLnRvQXJyYXkoKSxcbiAgICAgIG1hcHBpbmdzOiB0aGlzLl9zZXJpYWxpemVNYXBwaW5ncygpXG4gICAgfTtcbiAgICBpZiAodGhpcy5fZmlsZSAhPSBudWxsKSB7XG4gICAgICBtYXAuZmlsZSA9IHRoaXMuX2ZpbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIG1hcC5zb3VyY2VSb290ID0gdGhpcy5fc291cmNlUm9vdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZXNDb250ZW50cykge1xuICAgICAgbWFwLnNvdXJjZXNDb250ZW50ID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudChtYXAuc291cmNlcywgbWFwLnNvdXJjZVJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBzb3VyY2UgbWFwIGJlaW5nIGdlbmVyYXRlZCB0byBhIHN0cmluZy5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl90b1N0cmluZygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSk7XG4gIH07XG5cbmV4cG9ydHMuU291cmNlTWFwR2VuZXJhdG9yID0gU291cmNlTWFwR2VuZXJhdG9yO1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgU291cmNlTWFwR2VuZXJhdG9yID0gcmVxdWlyZSgnLi9zb3VyY2UtbWFwLWdlbmVyYXRvcicpLlNvdXJjZU1hcEdlbmVyYXRvcjtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8vIE1hdGNoZXMgYSBXaW5kb3dzLXN0eWxlIGBcXHJcXG5gIG5ld2xpbmUgb3IgYSBgXFxuYCBuZXdsaW5lIHVzZWQgYnkgYWxsIG90aGVyXG4vLyBvcGVyYXRpbmcgc3lzdGVtcyB0aGVzZSBkYXlzIChjYXB0dXJpbmcgdGhlIHJlc3VsdCkuXG52YXIgUkVHRVhfTkVXTElORSA9IC8oXFxyP1xcbikvO1xuXG4vLyBOZXdsaW5lIGNoYXJhY3RlciBjb2RlIGZvciBjaGFyQ29kZUF0KCkgY29tcGFyaXNvbnNcbnZhciBORVdMSU5FX0NPREUgPSAxMDtcblxuLy8gUHJpdmF0ZSBzeW1ib2wgZm9yIGlkZW50aWZ5aW5nIGBTb3VyY2VOb2RlYHMgd2hlbiBtdWx0aXBsZSB2ZXJzaW9ucyBvZlxuLy8gdGhlIHNvdXJjZS1tYXAgbGlicmFyeSBhcmUgbG9hZGVkLiBUaGlzIE1VU1QgTk9UIENIQU5HRSBhY3Jvc3Ncbi8vIHZlcnNpb25zIVxudmFyIGlzU291cmNlTm9kZSA9IFwiJCQkaXNTb3VyY2VOb2RlJCQkXCI7XG5cbi8qKlxuICogU291cmNlTm9kZXMgcHJvdmlkZSBhIHdheSB0byBhYnN0cmFjdCBvdmVyIGludGVycG9sYXRpbmcvY29uY2F0ZW5hdGluZ1xuICogc25pcHBldHMgb2YgZ2VuZXJhdGVkIEphdmFTY3JpcHQgc291cmNlIGNvZGUgd2hpbGUgbWFpbnRhaW5pbmcgdGhlIGxpbmUgYW5kXG4gKiBjb2x1bW4gaW5mb3JtYXRpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcGFyYW0gYUxpbmUgVGhlIG9yaWdpbmFsIGxpbmUgbnVtYmVyLlxuICogQHBhcmFtIGFDb2x1bW4gVGhlIG9yaWdpbmFsIGNvbHVtbiBudW1iZXIuXG4gKiBAcGFyYW0gYVNvdXJjZSBUaGUgb3JpZ2luYWwgc291cmNlJ3MgZmlsZW5hbWUuXG4gKiBAcGFyYW0gYUNodW5rcyBPcHRpb25hbC4gQW4gYXJyYXkgb2Ygc3RyaW5ncyB3aGljaCBhcmUgc25pcHBldHMgb2ZcbiAqICAgICAgICBnZW5lcmF0ZWQgSlMsIG9yIG90aGVyIFNvdXJjZU5vZGVzLlxuICogQHBhcmFtIGFOYW1lIFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLlxuICovXG5mdW5jdGlvbiBTb3VyY2VOb2RlKGFMaW5lLCBhQ29sdW1uLCBhU291cmNlLCBhQ2h1bmtzLCBhTmFtZSkge1xuICB0aGlzLmNoaWxkcmVuID0gW107XG4gIHRoaXMuc291cmNlQ29udGVudHMgPSB7fTtcbiAgdGhpcy5saW5lID0gYUxpbmUgPT0gbnVsbCA/IG51bGwgOiBhTGluZTtcbiAgdGhpcy5jb2x1bW4gPSBhQ29sdW1uID09IG51bGwgPyBudWxsIDogYUNvbHVtbjtcbiAgdGhpcy5zb3VyY2UgPSBhU291cmNlID09IG51bGwgPyBudWxsIDogYVNvdXJjZTtcbiAgdGhpcy5uYW1lID0gYU5hbWUgPT0gbnVsbCA/IG51bGwgOiBhTmFtZTtcbiAgdGhpc1tpc1NvdXJjZU5vZGVdID0gdHJ1ZTtcbiAgaWYgKGFDaHVua3MgIT0gbnVsbCkgdGhpcy5hZGQoYUNodW5rcyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFNvdXJjZU5vZGUgZnJvbSBnZW5lcmF0ZWQgY29kZSBhbmQgYSBTb3VyY2VNYXBDb25zdW1lci5cbiAqXG4gKiBAcGFyYW0gYUdlbmVyYXRlZENvZGUgVGhlIGdlbmVyYXRlZCBjb2RlXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBTb3VyY2VNYXAgZm9yIHRoZSBnZW5lcmF0ZWQgY29kZVxuICogQHBhcmFtIGFSZWxhdGl2ZVBhdGggT3B0aW9uYWwuIFRoZSBwYXRoIHRoYXQgcmVsYXRpdmUgc291cmNlcyBpbiB0aGVcbiAqICAgICAgICBTb3VyY2VNYXBDb25zdW1lciBzaG91bGQgYmUgcmVsYXRpdmUgdG8uXG4gKi9cblNvdXJjZU5vZGUuZnJvbVN0cmluZ1dpdGhTb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VOb2RlX2Zyb21TdHJpbmdXaXRoU291cmNlTWFwKGFHZW5lcmF0ZWRDb2RlLCBhU291cmNlTWFwQ29uc3VtZXIsIGFSZWxhdGl2ZVBhdGgpIHtcbiAgICAvLyBUaGUgU291cmNlTm9kZSB3ZSB3YW50IHRvIGZpbGwgd2l0aCB0aGUgZ2VuZXJhdGVkIGNvZGVcbiAgICAvLyBhbmQgdGhlIFNvdXJjZU1hcFxuICAgIHZhciBub2RlID0gbmV3IFNvdXJjZU5vZGUoKTtcblxuICAgIC8vIEFsbCBldmVuIGluZGljZXMgb2YgdGhpcyBhcnJheSBhcmUgb25lIGxpbmUgb2YgdGhlIGdlbmVyYXRlZCBjb2RlLFxuICAgIC8vIHdoaWxlIGFsbCBvZGQgaW5kaWNlcyBhcmUgdGhlIG5ld2xpbmVzIGJldHdlZW4gdHdvIGFkamFjZW50IGxpbmVzXG4gICAgLy8gKHNpbmNlIGBSRUdFWF9ORVdMSU5FYCBjYXB0dXJlcyBpdHMgbWF0Y2gpLlxuICAgIC8vIFByb2Nlc3NlZCBmcmFnbWVudHMgYXJlIGFjY2Vzc2VkIGJ5IGNhbGxpbmcgYHNoaWZ0TmV4dExpbmVgLlxuICAgIHZhciByZW1haW5pbmdMaW5lcyA9IGFHZW5lcmF0ZWRDb2RlLnNwbGl0KFJFR0VYX05FV0xJTkUpO1xuICAgIHZhciByZW1haW5pbmdMaW5lc0luZGV4ID0gMDtcbiAgICB2YXIgc2hpZnROZXh0TGluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxpbmVDb250ZW50cyA9IGdldE5leHRMaW5lKCk7XG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIG9mIGEgZmlsZSBtaWdodCBub3QgaGF2ZSBhIG5ld2xpbmUuXG4gICAgICB2YXIgbmV3TGluZSA9IGdldE5leHRMaW5lKCkgfHwgXCJcIjtcbiAgICAgIHJldHVybiBsaW5lQ29udGVudHMgKyBuZXdMaW5lO1xuXG4gICAgICBmdW5jdGlvbiBnZXROZXh0TGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZ0xpbmVzSW5kZXggPCByZW1haW5pbmdMaW5lcy5sZW5ndGggP1xuICAgICAgICAgICAgcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gV2UgbmVlZCB0byByZW1lbWJlciB0aGUgcG9zaXRpb24gb2YgXCJyZW1haW5pbmdMaW5lc1wiXG4gICAgdmFyIGxhc3RHZW5lcmF0ZWRMaW5lID0gMSwgbGFzdEdlbmVyYXRlZENvbHVtbiA9IDA7XG5cbiAgICAvLyBUaGUgZ2VuZXJhdGUgU291cmNlTm9kZXMgd2UgbmVlZCBhIGNvZGUgcmFuZ2UuXG4gICAgLy8gVG8gZXh0cmFjdCBpdCBjdXJyZW50IGFuZCBsYXN0IG1hcHBpbmcgaXMgdXNlZC5cbiAgICAvLyBIZXJlIHdlIHN0b3JlIHRoZSBsYXN0IG1hcHBpbmcuXG4gICAgdmFyIGxhc3RNYXBwaW5nID0gbnVsbDtcblxuICAgIGFTb3VyY2VNYXBDb25zdW1lci5lYWNoTWFwcGluZyhmdW5jdGlvbiAobWFwcGluZykge1xuICAgICAgaWYgKGxhc3RNYXBwaW5nICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFdlIGFkZCB0aGUgY29kZSBmcm9tIFwibGFzdE1hcHBpbmdcIiB0byBcIm1hcHBpbmdcIjpcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgaXMgYSBuZXcgbGluZSBpbiBiZXR3ZWVuLlxuICAgICAgICBpZiAobGFzdEdlbmVyYXRlZExpbmUgPCBtYXBwaW5nLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICAvLyBBc3NvY2lhdGUgZmlyc3QgbGluZSB3aXRoIFwibGFzdE1hcHBpbmdcIlxuICAgICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgc2hpZnROZXh0TGluZSgpKTtcbiAgICAgICAgICBsYXN0R2VuZXJhdGVkTGluZSsrO1xuICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgICAgIC8vIFRoZSByZW1haW5pbmcgY29kZSBpcyBhZGRlZCB3aXRob3V0IG1hcHBpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGVyZSBpcyBubyBuZXcgbGluZSBpbiBiZXR3ZWVuLlxuICAgICAgICAgIC8vIEFzc29jaWF0ZSB0aGUgY29kZSBiZXR3ZWVuIFwibGFzdEdlbmVyYXRlZENvbHVtblwiIGFuZFxuICAgICAgICAgIC8vIFwibWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cIiB3aXRoIFwibGFzdE1hcHBpbmdcIlxuICAgICAgICAgIHZhciBuZXh0TGluZSA9IHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdIHx8ICcnO1xuICAgICAgICAgIHZhciBjb2RlID0gbmV4dExpbmUuc3Vic3RyKDAsIG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgICByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4XSA9IG5leHRMaW5lLnN1YnN0cihtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbik7XG4gICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuICAgICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgY29kZSk7XG4gICAgICAgICAgLy8gTm8gbW9yZSByZW1haW5pbmcgY29kZSwgY29udGludWVcbiAgICAgICAgICBsYXN0TWFwcGluZyA9IG1hcHBpbmc7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBXZSBhZGQgdGhlIGdlbmVyYXRlZCBjb2RlIHVudGlsIHRoZSBmaXJzdCBtYXBwaW5nXG4gICAgICAvLyB0byB0aGUgU291cmNlTm9kZSB3aXRob3V0IGFueSBtYXBwaW5nLlxuICAgICAgLy8gRWFjaCBsaW5lIGlzIGFkZGVkIGFzIHNlcGFyYXRlIHN0cmluZy5cbiAgICAgIHdoaWxlIChsYXN0R2VuZXJhdGVkTGluZSA8IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICBub2RlLmFkZChzaGlmdE5leHRMaW5lKCkpO1xuICAgICAgICBsYXN0R2VuZXJhdGVkTGluZSsrO1xuICAgICAgfVxuICAgICAgaWYgKGxhc3RHZW5lcmF0ZWRDb2x1bW4gPCBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbikge1xuICAgICAgICB2YXIgbmV4dExpbmUgPSByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4XSB8fCAnJztcbiAgICAgICAgbm9kZS5hZGQobmV4dExpbmUuc3Vic3RyKDAsIG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKSk7XG4gICAgICAgIHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdID0gbmV4dExpbmUuc3Vic3RyKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuICAgICAgfVxuICAgICAgbGFzdE1hcHBpbmcgPSBtYXBwaW5nO1xuICAgIH0sIHRoaXMpO1xuICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBtYXBwaW5ncy5cbiAgICBpZiAocmVtYWluaW5nTGluZXNJbmRleCA8IHJlbWFpbmluZ0xpbmVzLmxlbmd0aCkge1xuICAgICAgaWYgKGxhc3RNYXBwaW5nKSB7XG4gICAgICAgIC8vIEFzc29jaWF0ZSB0aGUgcmVtYWluaW5nIGNvZGUgaW4gdGhlIGN1cnJlbnQgbGluZSB3aXRoIFwibGFzdE1hcHBpbmdcIlxuICAgICAgICBhZGRNYXBwaW5nV2l0aENvZGUobGFzdE1hcHBpbmcsIHNoaWZ0TmV4dExpbmUoKSk7XG4gICAgICB9XG4gICAgICAvLyBhbmQgYWRkIHRoZSByZW1haW5pbmcgbGluZXMgd2l0aG91dCBhbnkgbWFwcGluZ1xuICAgICAgbm9kZS5hZGQocmVtYWluaW5nTGluZXMuc3BsaWNlKHJlbWFpbmluZ0xpbmVzSW5kZXgpLmpvaW4oXCJcIikpO1xuICAgIH1cblxuICAgIC8vIENvcHkgc291cmNlc0NvbnRlbnQgaW50byBTb3VyY2VOb2RlXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlRmlsZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlQ29udGVudEZvcihzb3VyY2VGaWxlKTtcbiAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFSZWxhdGl2ZVBhdGggIT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLmpvaW4oYVJlbGF0aXZlUGF0aCwgc291cmNlRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG5cbiAgICBmdW5jdGlvbiBhZGRNYXBwaW5nV2l0aENvZGUobWFwcGluZywgY29kZSkge1xuICAgICAgaWYgKG1hcHBpbmcgPT09IG51bGwgfHwgbWFwcGluZy5zb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLmFkZChjb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhUmVsYXRpdmVQYXRoXG4gICAgICAgICAgPyB1dGlsLmpvaW4oYVJlbGF0aXZlUGF0aCwgbWFwcGluZy5zb3VyY2UpXG4gICAgICAgICAgOiBtYXBwaW5nLnNvdXJjZTtcbiAgICAgICAgbm9kZS5hZGQobmV3IFNvdXJjZU5vZGUobWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy5uYW1lKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIEFkZCBhIGNodW5rIG9mIGdlbmVyYXRlZCBKUyB0byB0aGlzIHNvdXJjZSBub2RlLlxuICpcbiAqIEBwYXJhbSBhQ2h1bmsgQSBzdHJpbmcgc25pcHBldCBvZiBnZW5lcmF0ZWQgSlMgY29kZSwgYW5vdGhlciBpbnN0YW5jZSBvZlxuICogICAgICAgIFNvdXJjZU5vZGUsIG9yIGFuIGFycmF5IHdoZXJlIGVhY2ggbWVtYmVyIGlzIG9uZSBvZiB0aG9zZSB0aGluZ3MuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfYWRkKGFDaHVuaykge1xuICBpZiAoQXJyYXkuaXNBcnJheShhQ2h1bmspKSB7XG4gICAgYUNodW5rLmZvckVhY2goZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICB0aGlzLmFkZChjaHVuayk7XG4gICAgfSwgdGhpcyk7XG4gIH1cbiAgZWxzZSBpZiAoYUNodW5rW2lzU291cmNlTm9kZV0gfHwgdHlwZW9mIGFDaHVuayA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChhQ2h1bmspIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChhQ2h1bmspO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgXCJFeHBlY3RlZCBhIFNvdXJjZU5vZGUsIHN0cmluZywgb3IgYW4gYXJyYXkgb2YgU291cmNlTm9kZXMgYW5kIHN0cmluZ3MuIEdvdCBcIiArIGFDaHVua1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhIGNodW5rIG9mIGdlbmVyYXRlZCBKUyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoaXMgc291cmNlIG5vZGUuXG4gKlxuICogQHBhcmFtIGFDaHVuayBBIHN0cmluZyBzbmlwcGV0IG9mIGdlbmVyYXRlZCBKUyBjb2RlLCBhbm90aGVyIGluc3RhbmNlIG9mXG4gKiAgICAgICAgU291cmNlTm9kZSwgb3IgYW4gYXJyYXkgd2hlcmUgZWFjaCBtZW1iZXIgaXMgb25lIG9mIHRob3NlIHRoaW5ncy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfcHJlcGVuZChhQ2h1bmspIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYUNodW5rKSkge1xuICAgIGZvciAodmFyIGkgPSBhQ2h1bmsubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLnByZXBlbmQoYUNodW5rW2ldKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoYUNodW5rW2lzU291cmNlTm9kZV0gfHwgdHlwZW9mIGFDaHVuayA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRoaXMuY2hpbGRyZW4udW5zaGlmdChhQ2h1bmspO1xuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBcIkV4cGVjdGVkIGEgU291cmNlTm9kZSwgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBTb3VyY2VOb2RlcyBhbmQgc3RyaW5ncy4gR290IFwiICsgYUNodW5rXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV2FsayBvdmVyIHRoZSB0cmVlIG9mIEpTIHNuaXBwZXRzIGluIHRoaXMgbm9kZSBhbmQgaXRzIGNoaWxkcmVuLiBUaGVcbiAqIHdhbGtpbmcgZnVuY3Rpb24gaXMgY2FsbGVkIG9uY2UgZm9yIGVhY2ggc25pcHBldCBvZiBKUyBhbmQgaXMgcGFzc2VkIHRoYXRcbiAqIHNuaXBwZXQgYW5kIHRoZSBpdHMgb3JpZ2luYWwgYXNzb2NpYXRlZCBzb3VyY2UncyBsaW5lL2NvbHVtbiBsb2NhdGlvbi5cbiAqXG4gKiBAcGFyYW0gYUZuIFRoZSB0cmF2ZXJzYWwgZnVuY3Rpb24uXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3dhbGsoYUZuKSB7XG4gIHZhciBjaHVuaztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjaHVuayA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgaWYgKGNodW5rW2lzU291cmNlTm9kZV0pIHtcbiAgICAgIGNodW5rLndhbGsoYUZuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgIGFGbihjaHVuaywgeyBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgbGluZTogdGhpcy5saW5lLFxuICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5qb2luYCBleGNlcHQgZm9yIFNvdXJjZU5vZGVzLiBJbnNlcnRzIGBhU3RyYCBiZXR3ZWVuXG4gKiBlYWNoIG9mIGB0aGlzLmNoaWxkcmVuYC5cbiAqXG4gKiBAcGFyYW0gYVNlcCBUaGUgc2VwYXJhdG9yLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gU291cmNlTm9kZV9qb2luKGFTZXApIHtcbiAgdmFyIG5ld0NoaWxkcmVuO1xuICB2YXIgaTtcbiAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICBpZiAobGVuID4gMCkge1xuICAgIG5ld0NoaWxkcmVuID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbi0xOyBpKyspIHtcbiAgICAgIG5ld0NoaWxkcmVuLnB1c2godGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICBuZXdDaGlsZHJlbi5wdXNoKGFTZXApO1xuICAgIH1cbiAgICBuZXdDaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXdDaGlsZHJlbjtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsbCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Ugb24gdGhlIHZlcnkgcmlnaHQtbW9zdCBzb3VyY2Ugc25pcHBldC4gVXNlZnVsXG4gKiBmb3IgdHJpbW1pbmcgd2hpdGVzcGFjZSBmcm9tIHRoZSBlbmQgb2YgYSBzb3VyY2Ugbm9kZSwgZXRjLlxuICpcbiAqIEBwYXJhbSBhUGF0dGVybiBUaGUgcGF0dGVybiB0byByZXBsYWNlLlxuICogQHBhcmFtIGFSZXBsYWNlbWVudCBUaGUgdGhpbmcgdG8gcmVwbGFjZSB0aGUgcGF0dGVybiB3aXRoLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5yZXBsYWNlUmlnaHQgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3JlcGxhY2VSaWdodChhUGF0dGVybiwgYVJlcGxhY2VtZW50KSB7XG4gIHZhciBsYXN0Q2hpbGQgPSB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gIGlmIChsYXN0Q2hpbGRbaXNTb3VyY2VOb2RlXSkge1xuICAgIGxhc3RDaGlsZC5yZXBsYWNlUmlnaHQoYVBhdHRlcm4sIGFSZXBsYWNlbWVudCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGxhc3RDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gPSBsYXN0Q2hpbGQucmVwbGFjZShhUGF0dGVybiwgYVJlcGxhY2VtZW50KTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goJycucmVwbGFjZShhUGF0dGVybiwgYVJlcGxhY2VtZW50KSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGEgc291cmNlIGZpbGUuIFRoaXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgU291cmNlTWFwR2VuZXJhdG9yXG4gKiBpbiB0aGUgc291cmNlc0NvbnRlbnQgZmllbGQuXG4gKlxuICogQHBhcmFtIGFTb3VyY2VGaWxlIFRoZSBmaWxlbmFtZSBvZiB0aGUgc291cmNlIGZpbGVcbiAqIEBwYXJhbSBhU291cmNlQ29udGVudCBUaGUgY29udGVudCBvZiB0aGUgc291cmNlIGZpbGVcbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUuc2V0U291cmNlQ29udGVudCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfc2V0U291cmNlQ29udGVudChhU291cmNlRmlsZSwgYVNvdXJjZUNvbnRlbnQpIHtcbiAgICB0aGlzLnNvdXJjZUNvbnRlbnRzW3V0aWwudG9TZXRTdHJpbmcoYVNvdXJjZUZpbGUpXSA9IGFTb3VyY2VDb250ZW50O1xuICB9O1xuXG4vKipcbiAqIFdhbGsgb3ZlciB0aGUgdHJlZSBvZiBTb3VyY2VOb2Rlcy4gVGhlIHdhbGtpbmcgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciBlYWNoXG4gKiBzb3VyY2UgZmlsZSBjb250ZW50IGFuZCBpcyBwYXNzZWQgdGhlIGZpbGVuYW1lIGFuZCBzb3VyY2UgY29udGVudC5cbiAqXG4gKiBAcGFyYW0gYUZuIFRoZSB0cmF2ZXJzYWwgZnVuY3Rpb24uXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLndhbGtTb3VyY2VDb250ZW50cyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfd2Fsa1NvdXJjZUNvbnRlbnRzKGFGbikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbltpXVtpc1NvdXJjZU5vZGVdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5baV0ud2Fsa1NvdXJjZUNvbnRlbnRzKGFGbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZXMgPSBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUNvbnRlbnRzKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYUZuKHV0aWwuZnJvbVNldFN0cmluZyhzb3VyY2VzW2ldKSwgdGhpcy5zb3VyY2VDb250ZW50c1tzb3VyY2VzW2ldXSk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFJldHVybiB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgc291cmNlIG5vZGUuIFdhbGtzIG92ZXIgdGhlIHRyZWVcbiAqIGFuZCBjb25jYXRlbmF0ZXMgYWxsIHRoZSB2YXJpb3VzIHNuaXBwZXRzIHRvZ2V0aGVyIHRvIG9uZSBzdHJpbmcuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gU291cmNlTm9kZV90b1N0cmluZygpIHtcbiAgdmFyIHN0ciA9IFwiXCI7XG4gIHRoaXMud2FsayhmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBzdHIgKz0gY2h1bms7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzb3VyY2Ugbm9kZSBhbG9uZyB3aXRoIGEgc291cmNlXG4gKiBtYXAuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnRvU3RyaW5nV2l0aFNvdXJjZU1hcCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfdG9TdHJpbmdXaXRoU291cmNlTWFwKGFBcmdzKSB7XG4gIHZhciBnZW5lcmF0ZWQgPSB7XG4gICAgY29kZTogXCJcIixcbiAgICBsaW5lOiAxLFxuICAgIGNvbHVtbjogMFxuICB9O1xuICB2YXIgbWFwID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcihhQXJncyk7XG4gIHZhciBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gIHZhciBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICB2YXIgbGFzdE9yaWdpbmFsTGluZSA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxDb2x1bW4gPSBudWxsO1xuICB2YXIgbGFzdE9yaWdpbmFsTmFtZSA9IG51bGw7XG4gIHRoaXMud2FsayhmdW5jdGlvbiAoY2h1bmssIG9yaWdpbmFsKSB7XG4gICAgZ2VuZXJhdGVkLmNvZGUgKz0gY2h1bms7XG4gICAgaWYgKG9yaWdpbmFsLnNvdXJjZSAhPT0gbnVsbFxuICAgICAgICAmJiBvcmlnaW5hbC5saW5lICE9PSBudWxsXG4gICAgICAgICYmIG9yaWdpbmFsLmNvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgaWYobGFzdE9yaWdpbmFsU291cmNlICE9PSBvcmlnaW5hbC5zb3VyY2VcbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbExpbmUgIT09IG9yaWdpbmFsLmxpbmVcbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbENvbHVtbiAhPT0gb3JpZ2luYWwuY29sdW1uXG4gICAgICAgICB8fCBsYXN0T3JpZ2luYWxOYW1lICE9PSBvcmlnaW5hbC5uYW1lKSB7XG4gICAgICAgIG1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgICBzb3VyY2U6IG9yaWdpbmFsLnNvdXJjZSxcbiAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgbGluZTogb3JpZ2luYWwubGluZSxcbiAgICAgICAgICAgIGNvbHVtbjogb3JpZ2luYWwuY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBvcmlnaW5hbC5uYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGFzdE9yaWdpbmFsU291cmNlID0gb3JpZ2luYWwuc291cmNlO1xuICAgICAgbGFzdE9yaWdpbmFsTGluZSA9IG9yaWdpbmFsLmxpbmU7XG4gICAgICBsYXN0T3JpZ2luYWxDb2x1bW4gPSBvcmlnaW5hbC5jb2x1bW47XG4gICAgICBsYXN0T3JpZ2luYWxOYW1lID0gb3JpZ2luYWwubmFtZTtcbiAgICAgIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc291cmNlTWFwcGluZ0FjdGl2ZSkge1xuICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZC5jb2x1bW5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICAgICAgc291cmNlTWFwcGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpZHggPSAwLCBsZW5ndGggPSBjaHVuay5sZW5ndGg7IGlkeCA8IGxlbmd0aDsgaWR4KyspIHtcbiAgICAgIGlmIChjaHVuay5jaGFyQ29kZUF0KGlkeCkgPT09IE5FV0xJTkVfQ09ERSkge1xuICAgICAgICBnZW5lcmF0ZWQubGluZSsrO1xuICAgICAgICBnZW5lcmF0ZWQuY29sdW1uID0gMDtcbiAgICAgICAgLy8gTWFwcGluZ3MgZW5kIGF0IGVvbFxuICAgICAgICBpZiAoaWR4ICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgbGFzdE9yaWdpbmFsU291cmNlID0gbnVsbDtcbiAgICAgICAgICBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlTWFwcGluZ0FjdGl2ZSkge1xuICAgICAgICAgIG1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgICAgIHNvdXJjZTogb3JpZ2luYWwuc291cmNlLFxuICAgICAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICAgICAgbGluZTogb3JpZ2luYWwubGluZSxcbiAgICAgICAgICAgICAgY29sdW1uOiBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICAgICAgbGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkLmNvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IG9yaWdpbmFsLm5hbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VuZXJhdGVkLmNvbHVtbisrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHRoaXMud2Fsa1NvdXJjZUNvbnRlbnRzKGZ1bmN0aW9uIChzb3VyY2VGaWxlLCBzb3VyY2VDb250ZW50KSB7XG4gICAgbWFwLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgc291cmNlQ29udGVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB7IGNvZGU6IGdlbmVyYXRlZC5jb2RlLCBtYXA6IG1hcCB9O1xufTtcblxuZXhwb3J0cy5Tb3VyY2VOb2RlID0gU291cmNlTm9kZTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHZhbHVlcyBmcm9tIHBhcmFtZXRlci9vcHRpb25zXG4gKiBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSBhcmdzIFRoZSBvYmplY3Qgd2UgYXJlIGV4dHJhY3RpbmcgdmFsdWVzIGZyb21cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhcmUgZ2V0dGluZy5cbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgQW4gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSBwcm9wZXJ0eSBpcyBtaXNzaW5nXG4gKiBmcm9tIHRoZSBvYmplY3QuIElmIHRoaXMgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmcsIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqL1xuZnVuY3Rpb24gZ2V0QXJnKGFBcmdzLCBhTmFtZSwgYURlZmF1bHRWYWx1ZSkge1xuICBpZiAoYU5hbWUgaW4gYUFyZ3MpIHtcbiAgICByZXR1cm4gYUFyZ3NbYU5hbWVdO1xuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gYURlZmF1bHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFOYW1lICsgJ1wiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQuJyk7XG4gIH1cbn1cbmV4cG9ydHMuZ2V0QXJnID0gZ2V0QXJnO1xuXG52YXIgdXJsUmVnZXhwID0gL14oPzooW1xcdytcXC0uXSspOik/XFwvXFwvKD86KFxcdys6XFx3KylAKT8oW1xcdy4tXSopKD86OihcXGQrKSk/KC4qKSQvO1xudmFyIGRhdGFVcmxSZWdleHAgPSAvXmRhdGE6LitcXCwuKyQvO1xuXG5mdW5jdGlvbiB1cmxQYXJzZShhVXJsKSB7XG4gIHZhciBtYXRjaCA9IGFVcmwubWF0Y2godXJsUmVnZXhwKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2NoZW1lOiBtYXRjaFsxXSxcbiAgICBhdXRoOiBtYXRjaFsyXSxcbiAgICBob3N0OiBtYXRjaFszXSxcbiAgICBwb3J0OiBtYXRjaFs0XSxcbiAgICBwYXRoOiBtYXRjaFs1XVxuICB9O1xufVxuZXhwb3J0cy51cmxQYXJzZSA9IHVybFBhcnNlO1xuXG5mdW5jdGlvbiB1cmxHZW5lcmF0ZShhUGFyc2VkVXJsKSB7XG4gIHZhciB1cmwgPSAnJztcbiAgaWYgKGFQYXJzZWRVcmwuc2NoZW1lKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuc2NoZW1lICsgJzonO1xuICB9XG4gIHVybCArPSAnLy8nO1xuICBpZiAoYVBhcnNlZFVybC5hdXRoKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuYXV0aCArICdAJztcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5ob3N0KSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuaG9zdDtcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5wb3J0KSB7XG4gICAgdXJsICs9IFwiOlwiICsgYVBhcnNlZFVybC5wb3J0XG4gIH1cbiAgaWYgKGFQYXJzZWRVcmwucGF0aCkge1xuICAgIHVybCArPSBhUGFyc2VkVXJsLnBhdGg7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cbmV4cG9ydHMudXJsR2VuZXJhdGUgPSB1cmxHZW5lcmF0ZTtcblxuLyoqXG4gKiBOb3JtYWxpemVzIGEgcGF0aCwgb3IgdGhlIHBhdGggcG9ydGlvbiBvZiBhIFVSTDpcbiAqXG4gKiAtIFJlcGxhY2VzIGNvbnNlY3V0aXZlIHNsYXNoZXMgd2l0aCBvbmUgc2xhc2guXG4gKiAtIFJlbW92ZXMgdW5uZWNlc3NhcnkgJy4nIHBhcnRzLlxuICogLSBSZW1vdmVzIHVubmVjZXNzYXJ5ICc8ZGlyPi8uLicgcGFydHMuXG4gKlxuICogQmFzZWQgb24gY29kZSBpbiB0aGUgTm9kZS5qcyAncGF0aCcgY29yZSBtb2R1bGUuXG4gKlxuICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIHVybCB0byBub3JtYWxpemUuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhUGF0aCkge1xuICB2YXIgcGF0aCA9IGFQYXRoO1xuICB2YXIgdXJsID0gdXJsUGFyc2UoYVBhdGgpO1xuICBpZiAodXJsKSB7XG4gICAgaWYgKCF1cmwucGF0aCkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cbiAgICBwYXRoID0gdXJsLnBhdGg7XG4gIH1cbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCk7XG5cbiAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgvXFwvKy8pO1xuICBmb3IgKHZhciBwYXJ0LCB1cCA9IDAsIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXAgPiAwKSB7XG4gICAgICBpZiAocGFydCA9PT0gJycpIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHBhcnQgaXMgYmxhbmsgaWYgdGhlIHBhdGggaXMgYWJzb2x1dGUuIFRyeWluZyB0byBnb1xuICAgICAgICAvLyBhYm92ZSB0aGUgcm9vdCBpcyBhIG5vLW9wLiBUaGVyZWZvcmUgd2UgY2FuIHJlbW92ZSBhbGwgJy4uJyBwYXJ0c1xuICAgICAgICAvLyBkaXJlY3RseSBhZnRlciB0aGUgcm9vdC5cbiAgICAgICAgcGFydHMuc3BsaWNlKGkgKyAxLCB1cCk7XG4gICAgICAgIHVwID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRzLnNwbGljZShpLCAyKTtcbiAgICAgICAgdXAtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGF0aCA9IHBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICBwYXRoID0gaXNBYnNvbHV0ZSA/ICcvJyA6ICcuJztcbiAgfVxuXG4gIGlmICh1cmwpIHtcbiAgICB1cmwucGF0aCA9IHBhdGg7XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKHVybCk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcblxuLyoqXG4gKiBKb2lucyB0d28gcGF0aHMvVVJMcy5cbiAqXG4gKiBAcGFyYW0gYVJvb3QgVGhlIHJvb3QgcGF0aCBvciBVUkwuXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgVVJMIHRvIGJlIGpvaW5lZCB3aXRoIHRoZSByb290LlxuICpcbiAqIC0gSWYgYVBhdGggaXMgYSBVUkwgb3IgYSBkYXRhIFVSSSwgYVBhdGggaXMgcmV0dXJuZWQsIHVubGVzcyBhUGF0aCBpcyBhXG4gKiAgIHNjaGVtZS1yZWxhdGl2ZSBVUkw6IFRoZW4gdGhlIHNjaGVtZSBvZiBhUm9vdCwgaWYgYW55LCBpcyBwcmVwZW5kZWRcbiAqICAgZmlyc3QuXG4gKiAtIE90aGVyd2lzZSBhUGF0aCBpcyBhIHBhdGguIElmIGFSb290IGlzIGEgVVJMLCB0aGVuIGl0cyBwYXRoIHBvcnRpb25cbiAqICAgaXMgdXBkYXRlZCB3aXRoIHRoZSByZXN1bHQgYW5kIGFSb290IGlzIHJldHVybmVkLiBPdGhlcndpc2UgdGhlIHJlc3VsdFxuICogICBpcyByZXR1cm5lZC5cbiAqICAgLSBJZiBhUGF0aCBpcyBhYnNvbHV0ZSwgdGhlIHJlc3VsdCBpcyBhUGF0aC5cbiAqICAgLSBPdGhlcndpc2UgdGhlIHR3byBwYXRocyBhcmUgam9pbmVkIHdpdGggYSBzbGFzaC5cbiAqIC0gSm9pbmluZyBmb3IgZXhhbXBsZSAnaHR0cDovLycgYW5kICd3d3cuZXhhbXBsZS5jb20nIGlzIGFsc28gc3VwcG9ydGVkLlxuICovXG5mdW5jdGlvbiBqb2luKGFSb290LCBhUGF0aCkge1xuICBpZiAoYVJvb3QgPT09IFwiXCIpIHtcbiAgICBhUm9vdCA9IFwiLlwiO1xuICB9XG4gIGlmIChhUGF0aCA9PT0gXCJcIikge1xuICAgIGFQYXRoID0gXCIuXCI7XG4gIH1cbiAgdmFyIGFQYXRoVXJsID0gdXJsUGFyc2UoYVBhdGgpO1xuICB2YXIgYVJvb3RVcmwgPSB1cmxQYXJzZShhUm9vdCk7XG4gIGlmIChhUm9vdFVybCkge1xuICAgIGFSb290ID0gYVJvb3RVcmwucGF0aCB8fCAnLyc7XG4gIH1cblxuICAvLyBgam9pbihmb28sICcvL3d3dy5leGFtcGxlLm9yZycpYFxuICBpZiAoYVBhdGhVcmwgJiYgIWFQYXRoVXJsLnNjaGVtZSkge1xuICAgIGlmIChhUm9vdFVybCkge1xuICAgICAgYVBhdGhVcmwuc2NoZW1lID0gYVJvb3RVcmwuc2NoZW1lO1xuICAgIH1cbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVBhdGhVcmwpO1xuICB9XG5cbiAgaWYgKGFQYXRoVXJsIHx8IGFQYXRoLm1hdGNoKGRhdGFVcmxSZWdleHApKSB7XG4gICAgcmV0dXJuIGFQYXRoO1xuICB9XG5cbiAgLy8gYGpvaW4oJ2h0dHA6Ly8nLCAnd3d3LmV4YW1wbGUuY29tJylgXG4gIGlmIChhUm9vdFVybCAmJiAhYVJvb3RVcmwuaG9zdCAmJiAhYVJvb3RVcmwucGF0aCkge1xuICAgIGFSb290VXJsLmhvc3QgPSBhUGF0aDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuICB9XG5cbiAgdmFyIGpvaW5lZCA9IGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgPyBhUGF0aFxuICAgIDogbm9ybWFsaXplKGFSb290LnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgYVBhdGgpO1xuXG4gIGlmIChhUm9vdFVybCkge1xuICAgIGFSb290VXJsLnBhdGggPSBqb2luZWQ7XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKGFSb290VXJsKTtcbiAgfVxuICByZXR1cm4gam9pbmVkO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24gKGFQYXRoKSB7XG4gIHJldHVybiBhUGF0aC5jaGFyQXQoMCkgPT09ICcvJyB8fCB1cmxSZWdleHAudGVzdChhUGF0aCk7XG59O1xuXG4vKipcbiAqIE1ha2UgYSBwYXRoIHJlbGF0aXZlIHRvIGEgVVJMIG9yIGFub3RoZXIgcGF0aC5cbiAqXG4gKiBAcGFyYW0gYVJvb3QgVGhlIHJvb3QgcGF0aCBvciBVUkwuXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgVVJMIHRvIGJlIG1hZGUgcmVsYXRpdmUgdG8gYVJvb3QuXG4gKi9cbmZ1bmN0aW9uIHJlbGF0aXZlKGFSb290LCBhUGF0aCkge1xuICBpZiAoYVJvb3QgPT09IFwiXCIpIHtcbiAgICBhUm9vdCA9IFwiLlwiO1xuICB9XG5cbiAgYVJvb3QgPSBhUm9vdC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gIC8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgcGF0aCB0byBiZSBhYm92ZSB0aGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBzaW1wbHlcbiAgLy8gY2hlY2tpbmcgd2hldGhlciB0aGUgcm9vdCBpcyBhIHByZWZpeCBvZiB0aGUgcGF0aCB3b24ndCB3b3JrLiBJbnN0ZWFkLCB3ZVxuICAvLyBuZWVkIHRvIHJlbW92ZSBjb21wb25lbnRzIGZyb20gdGhlIHJvb3Qgb25lIGJ5IG9uZSwgdW50aWwgZWl0aGVyIHdlIGZpbmRcbiAgLy8gYSBwcmVmaXggdGhhdCBmaXRzLCBvciB3ZSBydW4gb3V0IG9mIGNvbXBvbmVudHMgdG8gcmVtb3ZlLlxuICB2YXIgbGV2ZWwgPSAwO1xuICB3aGlsZSAoYVBhdGguaW5kZXhPZihhUm9vdCArICcvJykgIT09IDApIHtcbiAgICB2YXIgaW5kZXggPSBhUm9vdC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBvbmx5IHBhcnQgb2YgdGhlIHJvb3QgdGhhdCBpcyBsZWZ0IGlzIHRoZSBzY2hlbWUgKGkuZS4gaHR0cDovLyxcbiAgICAvLyBmaWxlOi8vLywgZXRjLiksIG9uZSBvciBtb3JlIHNsYXNoZXMgKC8pLCBvciBzaW1wbHkgbm90aGluZyBhdCBhbGwsIHdlXG4gICAgLy8gaGF2ZSBleGhhdXN0ZWQgYWxsIGNvbXBvbmVudHMsIHNvIHRoZSBwYXRoIGlzIG5vdCByZWxhdGl2ZSB0byB0aGUgcm9vdC5cbiAgICBhUm9vdCA9IGFSb290LnNsaWNlKDAsIGluZGV4KTtcbiAgICBpZiAoYVJvb3QubWF0Y2goL14oW15cXC9dKzpcXC8pP1xcLyokLykpIHtcbiAgICAgIHJldHVybiBhUGF0aDtcbiAgICB9XG5cbiAgICArK2xldmVsO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHdlIGFkZCBhIFwiLi4vXCIgZm9yIGVhY2ggY29tcG9uZW50IHdlIHJlbW92ZWQgZnJvbSB0aGUgcm9vdC5cbiAgcmV0dXJuIEFycmF5KGxldmVsICsgMSkuam9pbihcIi4uL1wiKSArIGFQYXRoLnN1YnN0cihhUm9vdC5sZW5ndGggKyAxKTtcbn1cbmV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZTtcblxudmFyIHN1cHBvcnRzTnVsbFByb3RvID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAhKCdfX3Byb3RvX18nIGluIG9iaik7XG59KCkpO1xuXG5mdW5jdGlvbiBpZGVudGl0eSAocykge1xuICByZXR1cm4gcztcbn1cblxuLyoqXG4gKiBCZWNhdXNlIGJlaGF2aW9yIGdvZXMgd2Fja3kgd2hlbiB5b3Ugc2V0IGBfX3Byb3RvX19gIG9uIG9iamVjdHMsIHdlXG4gKiBoYXZlIHRvIHByZWZpeCBhbGwgdGhlIHN0cmluZ3MgaW4gb3VyIHNldCB3aXRoIGFuIGFyYml0cmFyeSBjaGFyYWN0ZXIuXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvcHVsbC8zMSBhbmRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvaXNzdWVzLzMwXG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbmZ1bmN0aW9uIHRvU2V0U3RyaW5nKGFTdHIpIHtcbiAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcbiAgICByZXR1cm4gJyQnICsgYVN0cjtcbiAgfVxuXG4gIHJldHVybiBhU3RyO1xufVxuZXhwb3J0cy50b1NldFN0cmluZyA9IHN1cHBvcnRzTnVsbFByb3RvID8gaWRlbnRpdHkgOiB0b1NldFN0cmluZztcblxuZnVuY3Rpb24gZnJvbVNldFN0cmluZyhhU3RyKSB7XG4gIGlmIChpc1Byb3RvU3RyaW5nKGFTdHIpKSB7XG4gICAgcmV0dXJuIGFTdHIuc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4gYVN0cjtcbn1cbmV4cG9ydHMuZnJvbVNldFN0cmluZyA9IHN1cHBvcnRzTnVsbFByb3RvID8gaWRlbnRpdHkgOiBmcm9tU2V0U3RyaW5nO1xuXG5mdW5jdGlvbiBpc1Byb3RvU3RyaW5nKHMpIHtcbiAgaWYgKCFzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IHMubGVuZ3RoO1xuXG4gIGlmIChsZW5ndGggPCA5IC8qIFwiX19wcm90b19fXCIubGVuZ3RoICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHMuY2hhckNvZGVBdChsZW5ndGggLSAxKSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDIpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMykgIT09IDExMSAvKiAnbycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA0KSAhPT0gMTE2IC8qICd0JyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDUpICE9PSAxMTEgLyogJ28nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNikgIT09IDExNCAvKiAncicgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA3KSAhPT0gMTEyIC8qICdwJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDgpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOSkgIT09IDk1ICAvKiAnXycgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gbGVuZ3RoIC0gMTA7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHMuY2hhckNvZGVBdChpKSAhPT0gMzYgLyogJyQnICovKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aGVyZSB0aGUgb3JpZ2luYWwgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYHRydWVgIGFzIGBvbmx5Q29tcGFyZUdlbmVyYXRlZGAgdG8gY29uc2lkZXIgdHdvXG4gKiBtYXBwaW5ncyB3aXRoIHRoZSBzYW1lIG9yaWdpbmFsIHNvdXJjZS9saW5lL2NvbHVtbiwgYnV0IGRpZmZlcmVudCBnZW5lcmF0ZWRcbiAqIGxpbmUgYW5kIGNvbHVtbiB0aGUgc2FtZS4gVXNlZnVsIHdoZW4gc2VhcmNoaW5nIGZvciBhIG1hcHBpbmcgd2l0aCBhXG4gKiBzdHViYmVkIG91dCBtYXBwaW5nLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyhtYXBwaW5nQSwgbWFwcGluZ0IsIG9ubHlDb21wYXJlT3JpZ2luYWwpIHtcbiAgdmFyIGNtcCA9IHN0cmNtcChtYXBwaW5nQS5zb3VyY2UsIG1hcHBpbmdCLnNvdXJjZSk7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG4gIGlmIChjbXAgIT09IDAgfHwgb25seUNvbXBhcmVPcmlnaW5hbCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgcmV0dXJuIHN0cmNtcChtYXBwaW5nQS5uYW1lLCBtYXBwaW5nQi5uYW1lKTtcbn1cbmV4cG9ydHMuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMgPSBjb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucztcblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdpdGggZGVmbGF0ZWQgc291cmNlIGFuZCBuYW1lIGluZGljZXMgd2hlcmVcbiAqIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYHRydWVgIGFzIGBvbmx5Q29tcGFyZUdlbmVyYXRlZGAgdG8gY29uc2lkZXIgdHdvXG4gKiBtYXBwaW5ncyB3aXRoIHRoZSBzYW1lIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4sIGJ1dCBkaWZmZXJlbnRcbiAqIHNvdXJjZS9uYW1lL29yaWdpbmFsIGxpbmUgYW5kIGNvbHVtbiB0aGUgc2FtZS4gVXNlZnVsIHdoZW4gc2VhcmNoaW5nIGZvciBhXG4gKiBtYXBwaW5nIHdpdGggYSBzdHViYmVkIG91dCBtYXBwaW5nLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IsIG9ubHlDb21wYXJlR2VuZXJhdGVkKSB7XG4gIHZhciBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIGlmIChjbXAgIT09IDAgfHwgb25seUNvbXBhcmVHZW5lcmF0ZWQpIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCA9IGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkO1xuXG5mdW5jdGlvbiBzdHJjbXAoYVN0cjEsIGFTdHIyKSB7XG4gIGlmIChhU3RyMSA9PT0gYVN0cjIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChhU3RyMSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAxOyAvLyBhU3RyMiAhPT0gbnVsbFxuICB9XG5cbiAgaWYgKGFTdHIyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIC0xOyAvLyBhU3RyMSAhPT0gbnVsbFxuICB9XG5cbiAgaWYgKGFTdHIxID4gYVN0cjIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdpdGggaW5mbGF0ZWQgc291cmNlIGFuZCBuYW1lIHN0cmluZ3Mgd2hlcmVcbiAqIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCKSB7XG4gIHZhciBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZCA9IGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkO1xuXG4vKipcbiAqIFN0cmlwIGFueSBKU09OIFhTU0kgYXZvaWRhbmNlIHByZWZpeCBmcm9tIHRoZSBzdHJpbmcgKGFzIGRvY3VtZW50ZWRcbiAqIGluIHRoZSBzb3VyY2UgbWFwcyBzcGVjaWZpY2F0aW9uKSwgYW5kIHRoZW4gcGFyc2UgdGhlIHN0cmluZyBhc1xuICogSlNPTi5cbiAqL1xuZnVuY3Rpb24gcGFyc2VTb3VyY2VNYXBJbnB1dChzdHIpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyLnJlcGxhY2UoL15cXCldfSdbXlxcbl0qXFxuLywgJycpKTtcbn1cbmV4cG9ydHMucGFyc2VTb3VyY2VNYXBJbnB1dCA9IHBhcnNlU291cmNlTWFwSW5wdXQ7XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgVVJMIG9mIGEgc291cmNlIGdpdmVuIHRoZSB0aGUgc291cmNlIHJvb3QsIHRoZSBzb3VyY2Unc1xuICogVVJMLCBhbmQgdGhlIHNvdXJjZSBtYXAncyBVUkwuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTb3VyY2VVUkwoc291cmNlUm9vdCwgc291cmNlVVJMLCBzb3VyY2VNYXBVUkwpIHtcbiAgc291cmNlVVJMID0gc291cmNlVVJMIHx8ICcnO1xuXG4gIGlmIChzb3VyY2VSb290KSB7XG4gICAgLy8gVGhpcyBmb2xsb3dzIHdoYXQgQ2hyb21lIGRvZXMuXG4gICAgaWYgKHNvdXJjZVJvb3Rbc291cmNlUm9vdC5sZW5ndGggLSAxXSAhPT0gJy8nICYmIHNvdXJjZVVSTFswXSAhPT0gJy8nKSB7XG4gICAgICBzb3VyY2VSb290ICs9ICcvJztcbiAgICB9XG4gICAgLy8gVGhlIHNwZWMgc2F5czpcbiAgICAvLyAgIExpbmUgNDogQW4gb3B0aW9uYWwgc291cmNlIHJvb3QsIHVzZWZ1bCBmb3IgcmVsb2NhdGluZyBzb3VyY2VcbiAgICAvLyAgIGZpbGVzIG9uIGEgc2VydmVyIG9yIHJlbW92aW5nIHJlcGVhdGVkIHZhbHVlcyBpbiB0aGVcbiAgICAvLyAgIOKAnHNvdXJjZXPigJ0gZW50cnkuICBUaGlzIHZhbHVlIGlzIHByZXBlbmRlZCB0byB0aGUgaW5kaXZpZHVhbFxuICAgIC8vICAgZW50cmllcyBpbiB0aGUg4oCcc291cmNl4oCdIGZpZWxkLlxuICAgIHNvdXJjZVVSTCA9IHNvdXJjZVJvb3QgKyBzb3VyY2VVUkw7XG4gIH1cblxuICAvLyBIaXN0b3JpY2FsbHksIFNvdXJjZU1hcENvbnN1bWVyIGRpZCBub3QgdGFrZSB0aGUgc291cmNlTWFwVVJMIGFzXG4gIC8vIGEgcGFyYW1ldGVyLiAgVGhpcyBtb2RlIGlzIHN0aWxsIHNvbWV3aGF0IHN1cHBvcnRlZCwgd2hpY2ggaXMgd2h5XG4gIC8vIHRoaXMgY29kZSBibG9jayBpcyBjb25kaXRpb25hbC4gIEhvd2V2ZXIsIGl0J3MgcHJlZmVyYWJsZSB0byBwYXNzXG4gIC8vIHRoZSBzb3VyY2UgbWFwIFVSTCB0byBTb3VyY2VNYXBDb25zdW1lciwgc28gdGhhdCB0aGlzIGZ1bmN0aW9uXG4gIC8vIGNhbiBpbXBsZW1lbnQgdGhlIHNvdXJjZSBVUkwgcmVzb2x1dGlvbiBhbGdvcml0aG0gYXMgb3V0bGluZWQgaW5cbiAgLy8gdGhlIHNwZWMuICBUaGlzIGJsb2NrIGlzIGJhc2ljYWxseSB0aGUgZXF1aXZhbGVudCBvZjpcbiAgLy8gICAgbmV3IFVSTChzb3VyY2VVUkwsIHNvdXJjZU1hcFVSTCkudG9TdHJpbmcoKVxuICAvLyAuLi4gZXhjZXB0IGl0IGF2b2lkcyB1c2luZyBVUkwsIHdoaWNoIHdhc24ndCBhdmFpbGFibGUgaW4gdGhlXG4gIC8vIG9sZGVyIHJlbGVhc2VzIG9mIG5vZGUgc3RpbGwgc3VwcG9ydGVkIGJ5IHRoaXMgbGlicmFyeS5cbiAgLy9cbiAgLy8gVGhlIHNwZWMgc2F5czpcbiAgLy8gICBJZiB0aGUgc291cmNlcyBhcmUgbm90IGFic29sdXRlIFVSTHMgYWZ0ZXIgcHJlcGVuZGluZyBvZiB0aGVcbiAgLy8gICDigJxzb3VyY2VSb2904oCdLCB0aGUgc291cmNlcyBhcmUgcmVzb2x2ZWQgcmVsYXRpdmUgdG8gdGhlXG4gIC8vICAgU291cmNlTWFwIChsaWtlIHJlc29sdmluZyBzY3JpcHQgc3JjIGluIGEgaHRtbCBkb2N1bWVudCkuXG4gIGlmIChzb3VyY2VNYXBVUkwpIHtcbiAgICB2YXIgcGFyc2VkID0gdXJsUGFyc2Uoc291cmNlTWFwVVJMKTtcbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic291cmNlTWFwVVJMIGNvdWxkIG5vdCBiZSBwYXJzZWRcIik7XG4gICAgfVxuICAgIGlmIChwYXJzZWQucGF0aCkge1xuICAgICAgLy8gU3RyaXAgdGhlIGxhc3QgcGF0aCBjb21wb25lbnQsIGJ1dCBrZWVwIHRoZSBcIi9cIi5cbiAgICAgIHZhciBpbmRleCA9IHBhcnNlZC5wYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBwYXJzZWQucGF0aCA9IHBhcnNlZC5wYXRoLnN1YnN0cmluZygwLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VVUkwgPSBqb2luKHVybEdlbmVyYXRlKHBhcnNlZCksIHNvdXJjZVVSTCk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplKHNvdXJjZVVSTCk7XG59XG5leHBvcnRzLmNvbXB1dGVTb3VyY2VVUkwgPSBjb21wdXRlU291cmNlVVJMO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA5LTIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFLnR4dCBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0cy5Tb3VyY2VNYXBHZW5lcmF0b3IgPSByZXF1aXJlKCcuL2xpYi9zb3VyY2UtbWFwLWdlbmVyYXRvcicpLlNvdXJjZU1hcEdlbmVyYXRvcjtcbmV4cG9ydHMuU291cmNlTWFwQ29uc3VtZXIgPSByZXF1aXJlKCcuL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyJykuU291cmNlTWFwQ29uc3VtZXI7XG5leHBvcnRzLlNvdXJjZU5vZGUgPSByZXF1aXJlKCcuL2xpYi9zb3VyY2Utbm9kZScpLlNvdXJjZU5vZGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb2Nlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzQ2N19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMzQ3Nl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjg4NF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fOTU4Ml9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNTMyN19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzgzNl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDg3NzcpO1xuIiwiIl0sIm5hbWVzIjpbIkV4dGVuc2lvbkNvbXBpbGVyIiwiY29uZmlnIiwicGx1Z2luT3B0aW9ucyIsImNvbXBpbGVyIiwid2VicGFjayIsIkV4dGVuc2lvblJlbG9hZGVyXzEiLCJhcHBseSIsIndhdGNoIiwiZXJyIiwic3RhdHMiLCJ0cmVhdEVycm9ycyIsImxvZ2dlcl8xIiwidG9TdHJpbmciLCJjb2xvcnMiLCJ1dGlsXzEiLCJzdGFjayIsImRldGFpbHMiLCJleHBvcnRzIiwiYXJncyIsImFyZ3NfY29uc3RhbnRfMSIsIm1hbnVhbF8xIiwidHlwZSIsImV2ZW50c19jb25zdGFudHNfMSIsInBheWxvYWQiLCJvcHRpb25zX2NvbnN0YW50c18xIiwicG9ydCIsIm1hbmlmZXN0IiwicmVsb2FkUGFnZSIsIm9wdFBhdGgiLCJwYXRoXzEiLCJwcm9jZXNzXzEiLCJ3ZWJwYWNrQ29uZmlnIiwiZXZhbCIsInNvdXJjZV9tYXBfc3VwcG9ydF8xIiwibWluaW1pc3QiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwiXyIsIl9hIiwiX19yZXN0IiwiYXJnc19wYXJzZXJfMSIsIkV4dGVuc2lvbkNvbXBpbGVyXzEiLCJleGl0IiwiY29kZSIsIkV4dGVuc2lvblJlbG9hZGVySW1wbCIsIm9wdGlvbnMiLCJfb3B0cyIsIl9jaHVua1ZlcnNpb25zIiwid2VicGFja18xIiwic3BsaXQiLCJtYWpvciIsInBhcnNlSW50IiwiY2h1bmtzIiwiYmFja2dyb3VuZCIsImNvbnRlbnRTY3JpcHQiLCJleHRlbnNpb25QYWdlIiwiY2hhbmdlZENodW5rcyIsImNodW5rIiwib2xkVmVyc2lvbiIsIm5hbWUiLCJoYXNoIiwicHVzaCIsImNvbnRlbnRPckJnQ2hhbmdlZCIsInNvbWUiLCJjb250ZW50Q2hhbmdlZCIsImJnQ2hhbmdlZCIsIkFycmF5IiwiaXNBcnJheSIsInNjcmlwdCIsIm9ubHlQYWdlQ2hhbmdlZCIsInBhZ2VDaGFuZ2VkIiwibG9kYXNoXzEiLCJkZWZhdWx0X29wdGlvbnNfMSIsImVudHJpZXMiLCJwYXJzZWRFbnRyaWVzIiwibWFuaWZlc3RfMSIsImVudHJ5Iiwib3V0cHV0IiwiX2V2ZW50QVBJIiwiQ29tcGlsZXJFdmVudHNGYWNhZGVfMSIsIl9pbmplY3RvciIsIm1pZGRsZXdhcmVfMSIsIl90cmlnZ2VyZXIiLCJob3RfcmVsb2FkXzEiLCJhZnRlck9wdGltaXplQ2h1bmtBc3NldHMiLCJjb21wIiwiYXNzZXRzIiwiT2JqZWN0IiwiYWZ0ZXJFbWl0IiwiX3doYXRDaGFuZ2VkIiwiX2lzV2VicGFja0dUb0VWNCIsIm1vZGUiLCJlbnYiLCJOT0RFX0VOViIsIl9yZWdpc3RlclBsdWdpbiIsIndhcm5pbmdzXzEiLCJnZXQiLCJBYnN0cmFjdEV4dGVuc2lvblJlbG9hZGVyXzEiLCJIb3RSZWxvYWRlclNlcnZlciIsIl9zZXJ2ZXIiLCJ3c18xIiwib24iLCJ3cyIsIm1zZyIsInVzZXJBZ2VudCIsInVzZXJhZ2VudF8xIiwiaGVhZGVycyIsIl9zaWduRW1pdHRlciIsIlNpZ25FbWl0dGVyXzEiLCJkYXRhIiwiZmFtaWx5IiwiSlNPTiIsInBhcnNlIiwic2FmZVNpZ25DaGFuZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlNpZ25FbWl0dGVyIiwic2VydmVyIiwibWlub3IiLCJwYXRjaCIsIl9zYXRpc2ZpZXMiLCJmYXN0X3JlbG9hZGluZ19jb25zdGFudHNfMSIsInJlbG9hZENhbGxzIiwicmVsb2FkRGVib3VjaW5nRnJhbWUiLCJkZWJvdW5jZXIiLCJibG9ja19wcm90ZWN0aW9uXzEiLCJibG9ja2VyIiwiX3NhZmVTaWduQ2hhbmdlIiwiX3NldHVwU2FmZVNpZ25DaGFuZ2UiLCJyZXMiLCJyZWoiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiX3NlbmRNc2ciLCJzaWduYWxzXzEiLCJjbGllbnRzIiwiZm9yRWFjaCIsImNsaWVudCIsInJlYWR5U3RhdGUiLCJzZW5kIiwic3RyaW5naWZ5IiwiYnJvd3NlclZlcnNpb24iLCJ0YXJnZXRWZXJzaW9uIiwidmVyc2lvblBhaXJzIiwidmVyc2lvbiIsInRhcmdldCIsImNoYW5nZXNUcmlnZ2VyZXIiLCJIb3RSZWxvYWRlclNlcnZlcl8xIiwibGlzdGVuIiwic2lnbkNoYW5nZSIsImNoYW5nZXNfdHJpZ2dlcmVyXzEiLCJNZXNzYWdlIiwicmVmZXJlbmNlTnVtYmVyIiwibWVzc2FnZSIsImFkZGl0aW9uYWxEYXRhIiwiZ2V0UHJlZml4IiwicmVmTGluayIsInNhZmVfMSIsInJlZmVyZW5jZV9kb2NzX2NvbnN0YW50c18xIiwibG9nX2NvbnN0YW50c18xIiwiTWVzc2FnZV8xIiwibWlkZGxld2FyZV9pbmplY3Rvcl8xIiwibWlkZGxld2FyZUluamVjdG9yIiwic291cmNlIiwibWlkZGxld2FyZV9zb3VyY2VfYnVpbGRlcl8xIiwic291cmNlRmFjdG9yeSIsInNvdXJjZXMiLCJ3ZWJwYWNrX3NvdXJjZXNfMSIsIm1hdGNoQmdPckNvbnRlbnRPclBhZ2UiLCJpbmNsdWRlcyIsImZyb20iLCJyZWR1Y2UiLCJwcmV2IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZW50cnlQb2ludCIsInRlc3QiLCJmaW5hbFNyYyIsIm1pZGRsZVdhcmVTb3VyY2VCdWlsZGVyIiwidG1wbCIsIndlcl9taWRkbGV3YXJlX3Jhd18xIiwiV1NIb3N0IiwiUkVDT05ORUNUX0lOVEVSVkFMIiwibWlkZGxld2FyZV9jb25maWdfY29uc3RhbnRzXzEiLCJTT0NLRVRfRVJSX0NPREVfUkVGIiwicG9seWZpbGxTb3VyY2UiLCJyYXdfbG9hZGVyX3dlYmV4dGVuc2lvbl9wb2x5ZmlsbF8xIiwic2lnbmFscyIsImRlYm91Y2luZ0ZyYW1lIiwiY29udGV4dCIsImZ1bmMiLCJtYXhDYWxscyIsIndhaXQiLCJjYWxscyIsImluV2FpdCIsImludGVydmFsIiwibG9nSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwibG9nTGV2ZWwiLCJsZXZlbCIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJkZWJ1ZyIsImV4dHJhY3RFbnRyaWVzIiwid2VicGFja0VudHJ5Iiwid2VicGFja091dHB1dCIsIm1hbmlmZXN0UGF0aCIsIm1hbmlmZXN0SnNvbiIsImZzXzEiLCJjb250ZW50X3NjcmlwdHMiLCJmaWxlbmFtZSIsIkVycm9yIiwic2NyaXB0cyIsIlR5cGVFcnJvciIsImVycm9yc18xIiwiYmdTY3JpcHRGaWxlTmFtZXMiLCJ0b1JlbW92ZSIsInJlcGxhY2UiLCJiZ1dlYnBhY2tFbnRyeSIsImtleXMiLCJmaW5kIiwiYmdNYW5pZmVzdCIsImVudHJ5TmFtZSIsImNvbnRlbnRFbnRyaWVzIiwibWFwIiwianMiLCJjb250ZW50SXRlbSIsImZpbHRlciIsIkFic3RyYWN0RXh0ZW5zaW9uUmVsb2FkZXIiLCJDb21waWxlckV2ZW50c0ZhY2FkZSIsIl9jb21waWxlciIsIl9sZWdhY3lUYXBhYmxlIiwiaG9va3MiLCJjYWxsIiwicGx1Z2luIiwiY29tcGlsYXRpb24iLCJ0YXAiLCJleHRlbnNpb25OYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==