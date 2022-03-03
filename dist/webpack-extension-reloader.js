/// <reference path="../typings/webpack-extension-reloader.d.ts" />
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("webpack"), require("useragent"), require("ws"), require("webpack-sources"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "webpack", "useragent", "ws", "webpack-sources"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("webpack"), require("useragent"), require("ws"), require("webpack-sources")) : factory(root["lodash"], root["webpack"], root["useragent"], root["ws"], root["webpack-sources"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__3804__, __WEBPACK_EXTERNAL_MODULE__4078__, __WEBPACK_EXTERNAL_MODULE__2549__, __WEBPACK_EXTERNAL_MODULE__2439__, __WEBPACK_EXTERNAL_MODULE__3745__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

var webpack_1 = __webpack_require__(4078);

var hot_reload_1 = __webpack_require__(3009);

var warnings_1 = __webpack_require__(2436);

var middleware_1 = __webpack_require__(6392);

var default_options_1 = __webpack_require__(6961);

var logger_1 = __webpack_require__(6373);

var manifest_1 = __webpack_require__(6005);

var AbstractExtensionReloader_1 = __webpack_require__(4257);

var CompilerEventsFacade_1 = __webpack_require__(8675);

var ExtensionReloaderImpl =
/*#__PURE__*/
function (_AbstractExtensionRel) {
  _inherits(ExtensionReloaderImpl, _AbstractExtensionRel);

  function ExtensionReloaderImpl(options) {
    var _this;

    _classCallCheck(this, ExtensionReloaderImpl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExtensionReloaderImpl).call(this));
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var chunk = _step.value;
          var oldVersion = this._chunkVersions[chunk.name];
          this._chunkVersions[chunk.name] = chunk.hash;
          if (chunk.hash !== oldVersion) changedChunks.push(chunk);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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

exports.default = ExtensionReloaderImpl;

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
exports.RECONNECT_INTERVAL = 2000;
exports.SOCKET_ERR_CODE_REF = "https://tools.ietf.org/html/rfc6455#section-7.4.1";

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
exports.REF_URL = "https://github.com/rubenspgcavalcante/webpack-extension-reloader/wiki/General-Information";

/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var useragent_1 = __webpack_require__(2549);

var ws_1 = __webpack_require__(2439);

var logger_1 = __webpack_require__(6373);

var SignEmitter_1 = __webpack_require__(7574);

var HotReloaderServer =
/*#__PURE__*/
function () {
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

exports.default = HotReloaderServer;

/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

var ws_1 = __webpack_require__(2439);

var fast_reloading_constants_1 = __webpack_require__(9871);

var block_protection_1 = __webpack_require__(9832);

var signals_1 = __webpack_require__(1873);

var SignEmitter =
/*#__PURE__*/
function () {
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = versionPairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }]);

  return SignEmitter;
}();

exports.default = SignEmitter;

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

exports.default = changesTriggerer;

/***/ }),

/***/ 3009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var changes_triggerer_1 = __webpack_require__(3362);

exports.changesTriggerer = changes_triggerer_1["default"];

/***/ }),

/***/ 9820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var source_map_support_1 = __webpack_require__(6252);

var log_constants_1 = __webpack_require__(1918);

var ExtensionReloader_1 = __webpack_require__(6048);

var logger_1 = __webpack_require__(6373);

source_map_support_1.install();
var logLevel = process.env.NODE_ENV ? {
  development: log_constants_1.DEBUG,
  production: log_constants_1.ERROR,
  test: log_constants_1.NONE
}[process.env.NODE_ENV] : log_constants_1.ERROR;
logger_1.setLogLevel(logLevel);
module.exports = ExtensionReloader_1["default"];

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var safe_1 = __webpack_require__(4431);

var lodash_1 = __webpack_require__(3804);

var log_constants_1 = __webpack_require__(1918);

var reference_docs_constants_1 = __webpack_require__(6578);

var Message =
/*#__PURE__*/
function () {
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

exports.default = Message;

/***/ }),

/***/ 1049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

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

var middleware_injector_1 = __webpack_require__(91);

exports.middlewareInjector = middleware_injector_1["default"];

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_sources_1 = __webpack_require__(3745);

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

exports.default = middlewareInjector;

/***/ }),

/***/ 6271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

var wer_middleware_raw_1 = __webpack_require__(3653);

var raw_loader_webextension_polyfill_1 = __webpack_require__(2634);

var webpack_sources_1 = __webpack_require__(3745);

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

exports.default = middleWareSourceBuilder;

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

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

exports.default = {
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
})); // tslint:disable: no-console

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

var fs_1 = __webpack_require__(5747);

var lodash_1 = __webpack_require__(3804);

var errors_1 = __webpack_require__(1049);

function extractEntries(webpackEntry) {
  var webpackOutput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var manifestPath = arguments.length > 2 ? arguments[2] : undefined;

  var _a;

  var manifestJson = JSON.parse(fs_1.readFileSync(manifestPath).toString());
  var background = manifestJson.background,
      content_scripts = manifestJson.content_scripts;
  var filename = webpackOutput.filename;

  if (!filename) {
    throw new Error();
  }

  if (!((_a = background) === null || _a === void 0 ? void 0 : _a.scripts)) {
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var AbstractExtensionReloader = function AbstractExtensionReloader() {
  _classCallCheck(this, AbstractExtensionReloader);
};

exports.default = AbstractExtensionReloader;

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var CompilerEventsFacade =
/*#__PURE__*/
function () {
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

exports.default = CompilerEventsFacade;
CompilerEventsFacade.extensionName = "webpack-extension-reloader";

/***/ }),

/***/ 5420:
/***/ ((module) => {

var toString = Object.prototype.toString

var isModern = (
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

var util = __webpack_require__(1669);
var ansiStyles = colors.styles = __webpack_require__(5784);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = __webpack_require__(6561).supportsColor;

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



var os = __webpack_require__(2087);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* tslint:disable */\n\n/* -------------------------------------------------- */\n\n/*      Start of Webpack Hot Extension Middleware     */\n\n/* ================================================== */\n\n/*  This will be converted into a lodash templ., any  */\n\n/*  external argument must be provided using it       */\n\n/* -------------------------------------------------- */\n(function () {\n  try {\n    window;\n  } catch (_a) {\n    var window;\n  }\n\n  var injectionContext = window || this || {\n    browser: null\n  };\n  (function () {\n    \"<%= polyfillSource %>\";\n  }).bind(injectionContext)();\n\n  var _ref = injectionContext || {},\n      browser = _ref.browser;\n\n  var signals = JSON.parse('<%= signals %>');\n  var config = JSON.parse('<%= config %>');\n  var reloadPage = \"<%= reloadPage %>\" === \"true\";\n  var wsHost = \"<%= WSHost %>\";\n  var SIGN_CHANGE = signals.SIGN_CHANGE,\n      SIGN_RELOAD = signals.SIGN_RELOAD,\n      SIGN_RELOADED = signals.SIGN_RELOADED,\n      SIGN_LOG = signals.SIGN_LOG,\n      SIGN_CONNECT = signals.SIGN_CONNECT;\n  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,\n      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;\n\n  var _ref2 = browser || {},\n      extension = _ref2.extension,\n      runtime = _ref2.runtime,\n      tabs = _ref2.tabs;\n\n  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //\n\n  var formatter = function formatter(msg) {\n    return \"[ WER: \".concat(msg, \" ]\");\n  };\n\n  var logger = function logger(msg) {\n    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n    return console[level](formatter(msg));\n  };\n\n  var timeFormatter = function timeFormatter(date) {\n    return date.toTimeString().replace(/.*(\\d{2}:\\d{2}:\\d{2}).*/, \"$1\");\n  }; // ========================== Called only on content scripts ============================== //\n\n\n  function contentScriptWorker() {\n    console.log('contentScriptWorker');\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref3) {\n      var type = _ref3.type,\n          payload = _ref3.payload;\n\n      var _a;\n\n      switch (type) {\n        case SIGN_RELOAD:\n          logger(\"Detected Changes. Reloading ...\");\n          reloadPage && ((_a = window) === null || _a === void 0 ? void 0 : _a.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n      }\n    });\n  } // ======================== Called only on background scripts ============================= //\n\n\n  function backgroundWorker(socket) {\n    runtime.onMessage.addListener(function (action, sender) {\n      if (action.type === SIGN_CONNECT) {\n        return Promise.resolve(formatter(\"Connected to Extension Hot Reloader\"));\n      }\n\n      return true;\n    });\n    socket.addEventListener(\"message\", function (_ref4) {\n      var data = _ref4.data;\n\n      var _JSON$parse = JSON.parse(data),\n          type = _JSON$parse.type,\n          payload = _JSON$parse.payload;\n\n      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {\n        tabs.query({\n          status: \"complete\"\n        }).then(function (loadedTabs) {\n          loadedTabs.forEach(function (tab) {\n            return tab.id && tabs.sendMessage(tab.id, {\n              type: SIGN_RELOAD\n            });\n          });\n          socket.send(JSON.stringify({\n            type: SIGN_RELOADED,\n            payload: formatter(\"\".concat(timeFormatter(new Date()), \" - \").concat(manifest.name, \" successfully reloaded\"))\n          }));\n          runtime.reload();\n        });\n      } else {\n        runtime.sendMessage({\n          type: type,\n          payload: payload\n        });\n      }\n    });\n    socket.addEventListener(\"close\", function (_ref5) {\n      var code = _ref5.code;\n      logger(\"Socket connection closed. Code \".concat(code, \". See more in \").concat(SOCKET_ERR_CODE_REF), \"warn\");\n      var intId = setInterval(function () {\n        logger(\"Attempting to reconnect (tip: Check if Webpack is running)\");\n        var ws = new WebSocket(wsHost);\n\n        ws.onerror = function () {\n          return logger(\"Error trying to re-connect. Reattempting in \".concat(RECONNECT_INTERVAL / 1000, \"s\"), \"warn\");\n        };\n\n        ws.addEventListener(\"open\", function () {\n          clearInterval(intId);\n          logger(\"Reconnected. Reloading plugin\");\n          runtime.reload();\n        });\n      }, RECONNECT_INTERVAL);\n    });\n  } // ======================== Called only on extension pages that are not the background ============================= //\n\n\n  function extensionPageWorker() {\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref6) {\n      var type = _ref6.type,\n          payload = _ref6.payload;\n\n      var _a;\n\n      switch (type) {\n        case SIGN_CHANGE:\n          logger(\"Detected Changes. Reloading ...\");\n          reloadPage && ((_a = window) === null || _a === void 0 ? void 0 : _a.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n      }\n    });\n  } // ======================= Bootstraps the middleware =========================== //\n\n\n  runtime.reload ? !window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();\n})();\n/* ----------------------------------------------- */\n\n/* End of Webpack Hot Extension Middleware  */\n\n/* ----------------------------------------------- */");

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var SourceMapConsumer = __webpack_require__(9125).SourceMapConsumer;
var path = __webpack_require__(5622);

var fs;
try {
  fs = __webpack_require__(5747);
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(5420);

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
    var headerLength = noHeader.test(process.version) ? 0 : 62;
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
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
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
    var Module;
    try {
      Module = __webpack_require__(2282);
    } catch (err) {
      // NOP: Loading in catch block to convert webpack error to warning.
    }
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
var ArraySet = __webpack_require__(8213)/* .ArraySet */ .I;
var base64VLQ = __webpack_require__(6400);
var quickSort = __webpack_require__(2826)/* .quickSort */ .U;

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
var ArraySet = __webpack_require__(8213)/* .ArraySet */ .I;
var MappingList = __webpack_require__(1188)/* .MappingList */ .H;

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

var SourceMapGenerator = __webpack_require__(4433)/* .SourceMapGenerator */ .h;
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

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 3804:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3804__;

/***/ }),

/***/ 2282:
/***/ ((module) => {

"use strict";
module.exports = require("module");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 2549:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2549__;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 4078:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4078__;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3745__;

/***/ }),

/***/ 2439:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2439__;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(9820);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvRXh0ZW5zaW9uUmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvY29uc3RhbnRzL2Zhc3QtcmVsb2FkaW5nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbG9nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbWlkZGxld2FyZS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvcmVmZXJlbmNlLWRvY3MuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvSG90UmVsb2FkZXJTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvaG90LXJlbG9hZC9TaWduRW1pdHRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL2NoYW5nZXMtdHJpZ2dlcmVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvTWVzc2FnZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9tZXNzYWdlcy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvd2FybmluZ3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9taWRkbGV3YXJlL21pZGRsZXdhcmUtaW5qZWN0b3IudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9taWRkbGV3YXJlLXNvdXJjZS1idWlsZGVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvdXRpbHMvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy91dGlscy9tYW5pZmVzdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy91dGlscy9zaWduYWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy93ZWJwYWNrL0NvbXBpbGVyRXZlbnRzRmFjYWRlLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci1mcm9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY3VzdG9tL3RyYXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vemFsZ28uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL2FtZXJpY2EuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhaW5ib3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvemVicmEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vaGFzLWZsYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9zYWZlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL21pZGRsZXdhcmUvd2VyLW1pZGRsZXdhcmUucmF3LnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L3NvdXJjZS1tYXAtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9hcnJheS1zZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmFzZTY0LXZscS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmluYXJ5LXNlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9tYXBwaW5nLWxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvcXVpY2stc29ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1ub2RlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9zb3VyY2UtbWFwLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwibW9kdWxlXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwidXNlcmFnZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgXCJ3ZWJwYWNrXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgXCJ3ZWJwYWNrLXNvdXJjZXNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci9leHRlcm5hbCBcIndzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFPcUIscUI7Ozs7O0FBSW5CLGlDQUFZLE9BQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFDbEM7QUFDQSxVQUFLLEtBQUwsR0FBYSxPQUFiO0FBQ0EsVUFBSyxjQUFMLEdBQXNCLEVBQXRCO0FBSGtDO0FBSW5DOzs7O3VDQUVzQjtBQUNyQixVQUFJLGlCQUFKLEVBQWE7QUFBQSxvQ0FDSyxrQkFBUSxLQUFSLENBQWMsR0FBZCxDQURMO0FBQUE7QUFBQSxZQUNKLEtBREk7O0FBRVgsWUFBSSxRQUFRLENBQUMsS0FBRCxFQUFRLEVBQVIsQ0FBUixJQUF1QixDQUEzQixFQUE4QjtBQUM1QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEtBQVA7QUFDRDs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7QUM5RkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsSUFBSTtBQUN2Qjs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsWUFBWSxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0QsWUFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbUJBQW1CLEVBQUU7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QixtQkFBTyxDQUFDLElBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLElBQVE7QUFDM0IsZUFBZSwyQ0FBK0I7QUFDOUMsa0JBQWtCLDhDQUFxQzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUEwQjs7Ozs7Ozs7O0FDeGExQixnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHFEQUFvRDtBQUM3RSxXQUFXLG1CQUFPLENBQUMsSUFBUTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUgsVUFBVTtBQUNWOztBQUVBLHlCQUFrQjs7Ozs7Ozs7QUM1WmxCLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIiwgXCJ3ZWJwYWNrXCIsIFwidXNlcmFnZW50XCIsIFwid3NcIiwgXCJ3ZWJwYWNrLXNvdXJjZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1widXNlcmFnZW50XCJdLCByb290W1wid3NcIl0sIHJvb3RbXCJ3ZWJwYWNrLXNvdXJjZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zODA0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzQwNzhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjU0OV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yNDM5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM3NDVfXykge1xucmV0dXJuICIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQ29tcGlsZXIsIENvbXBpbGF0aW9uLCBDaHVuaywgRW50cnksIHZlcnNpb24gfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IHsgY2hhbmdlc1RyaWdnZXJlciB9IGZyb20gXCIuL2hvdC1yZWxvYWRcIjtcbmltcG9ydCB7IG9ubHlPbkRldmVsb3BtZW50TXNnIH0gZnJvbSBcIi4vbWVzc2FnZXMvd2FybmluZ3NcIjtcbmltcG9ydCB7IG1pZGRsZXdhcmVJbmplY3RvciB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjtcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi91dGlscy9kZWZhdWx0LW9wdGlvbnNcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IGV4dHJhY3RFbnRyaWVzIH0gZnJvbSBcIi4vdXRpbHMvbWFuaWZlc3RcIjtcbmltcG9ydCBBYnN0cmFjdFBsdWdpblJlbG9hZGVyIGZyb20gXCIuL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlclwiO1xuaW1wb3J0IENvbXBpbGVyRXZlbnRzRmFjYWRlIGZyb20gXCIuL3dlYnBhY2svQ29tcGlsZXJFdmVudHNGYWNhZGVcIjtcblxuaW1wb3J0IHtcbiAgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2UsXG4gIElQbHVnaW5PcHRpb25zLFxufSBmcm9tIFwiLi4vdHlwaW5ncy93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnNpb25SZWxvYWRlckltcGwgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblJlbG9hZGVyXG4gIGltcGxlbWVudHMgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2Uge1xuICBwcml2YXRlIF9vcHRzPzogSVBsdWdpbk9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IElQbHVnaW5PcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9vcHRzID0gb3B0aW9ucztcbiAgICB0aGlzLl9jaHVua1ZlcnNpb25zID0ge307XG4gIH1cblxuICBwdWJsaWMgX2lzV2VicGFja0dUb0VWNCgpIHtcbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgY29uc3QgW21ham9yXSA9IHZlcnNpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgaWYgKHBhcnNlSW50KG1ham9yLCAxMCkgPj0gNCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIF93aGF0Q2hhbmdlZChcbiAgICBjaHVua3M6IENvbXBpbGF0aW9uW1wiY2h1bmtzXCJdLFxuICAgIHsgYmFja2dyb3VuZCwgY29udGVudFNjcmlwdCwgZXh0ZW5zaW9uUGFnZSB9OiBJRW50cmllc09wdGlvbixcbiAgKSB7XG4gICAgY29uc3QgY2hhbmdlZENodW5rcyA9IFtdIGFzIENodW5rW107XG5cbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgY29uc3Qgb2xkVmVyc2lvbiA9IHRoaXMuX2NodW5rVmVyc2lvbnNbY2h1bmsubmFtZV07XG4gICAgICB0aGlzLl9jaHVua1ZlcnNpb25zW2NodW5rLm5hbWVdID0gY2h1bmsuaGFzaDtcbiAgICAgIGlmIChjaHVuay5oYXNoICE9PSBvbGRWZXJzaW9uKSBjaGFuZ2VkQ2h1bmtzLnB1c2goY2h1bmspO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRPckJnQ2hhbmdlZCA9IGNoYW5nZWRDaHVua3Muc29tZSgoeyBuYW1lIH0pID0+IHtcbiAgICAgIGxldCBjb250ZW50Q2hhbmdlZCA9IGZhbHNlO1xuICAgICAgY29uc3QgYmdDaGFuZ2VkID0gbmFtZSA9PT0gYmFja2dyb3VuZDtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudFNjcmlwdCkpIHtcbiAgICAgICAgY29udGVudENoYW5nZWQgPSBjb250ZW50U2NyaXB0LnNvbWUoc2NyaXB0ID0+IHNjcmlwdCA9PT0gbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50Q2hhbmdlZCA9IG5hbWUgPT09IGNvbnRlbnRTY3JpcHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50Q2hhbmdlZCB8fCBiZ0NoYW5nZWQ7XG4gICAgfSk7XG5cbiAgICAvL1xuICAgIGNvbnN0IG9ubHlQYWdlQ2hhbmdlZCA9XG4gICAgICAhY29udGVudE9yQmdDaGFuZ2VkICYmXG4gICAgICBjaGFuZ2VkQ2h1bmtzLnNvbWUoKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGxldCBwYWdlQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVuc2lvblBhZ2UpKSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBleHRlbnNpb25QYWdlLnNvbWUoc2NyaXB0ID0+IHNjcmlwdCA9PT0gbmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBuYW1lID09PSBleHRlbnNpb25QYWdlO1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VDaGFuZ2VkO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4geyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9O1xuICB9XG5cbiAgcHVibGljIF9yZWdpc3RlclBsdWdpbihjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBjb25zdCB7IHJlbG9hZFBhZ2UsIHBvcnQsIGVudHJpZXMsIG1hbmlmZXN0IH0gPSBtZXJnZShcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgdGhpcy5fb3B0cyxcbiAgICApO1xuXG4gICAgY29uc3QgcGFyc2VkRW50cmllczogSUVudHJpZXNPcHRpb24gPSBtYW5pZmVzdFxuICAgICAgPyBleHRyYWN0RW50cmllcyhcbiAgICAgICAgICBjb21waWxlci5vcHRpb25zLmVudHJ5IGFzIEVudHJ5LFxuICAgICAgICAgIGNvbXBpbGVyLm9wdGlvbnMub3V0cHV0IGFzIENvbXBpbGVyW1wib3B0aW9uc1wiXVtcIm91dHB1dFwiXSxcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgKVxuICAgICAgOiBlbnRyaWVzO1xuXG4gICAgdGhpcy5fZXZlbnRBUEkgPSBuZXcgQ29tcGlsZXJFdmVudHNGYWNhZGUoY29tcGlsZXIpO1xuICAgIHRoaXMuX2luamVjdG9yID0gbWlkZGxld2FyZUluamVjdG9yKHBhcnNlZEVudHJpZXMsIHsgcG9ydCwgcmVsb2FkUGFnZSB9KTtcbiAgICB0aGlzLl90cmlnZ2VyZXIgPSBjaGFuZ2VzVHJpZ2dlcmVyKHBvcnQsIHJlbG9hZFBhZ2UpO1xuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cygoY29tcCwgY2h1bmtzKSA9PiB7XG4gICAgICBjb21wLmFzc2V0cyA9IHtcbiAgICAgICAgLi4uY29tcC5hc3NldHMsXG4gICAgICAgIC4uLnRoaXMuX2luamVjdG9yKGNvbXAuYXNzZXRzLCBjaHVua3MpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyRW1pdChjb21wID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGVudE9yQmdDaGFuZ2VkLCBvbmx5UGFnZUNoYW5nZWQgfSA9IHRoaXMuX3doYXRDaGFuZ2VkKFxuICAgICAgICBjb21wLmNodW5rcyxcbiAgICAgICAgcGFyc2VkRW50cmllcyxcbiAgICAgICk7XG5cbiAgICAgIGlmIChjb250ZW50T3JCZ0NoYW5nZWQgfHwgb25seVBhZ2VDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJlcihvbmx5UGFnZUNoYW5nZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFwcGx5KGNvbXBpbGVyOiBDb21waWxlcikge1xuICAgIGlmIChcbiAgICAgICh0aGlzLl9pc1dlYnBhY2tHVG9FVjQoKVxuICAgICAgICA/IGNvbXBpbGVyLm9wdGlvbnMubW9kZVxuICAgICAgICA6IHByb2Nlc3MuZW52Lk5PREVfRU5WKSA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclBsdWdpbihjb21waWxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4ob25seU9uRGV2ZWxvcG1lbnRNc2cuZ2V0KCkpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBDaHJvbWUgbGV0cyBvbmx5IGEgbWF4IG51bWJlciBvZiBjYWxscyBpbiBhIHRpbWUgZnJhbWVcbiAqIGJlZm9yZSBibG9jayB0aGUgcGx1Z2luIGZvciBiZSByZWxvYWRpbmcgaXRzZWxmIHRvIG11Y2hcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3J1YmVuc3BnY2F2YWxjYW50ZS93ZWJwYWNrLWNocm9tZS1leHRlbnNpb24tcmVsb2FkZXIvaXNzdWVzLzJcbiAqL1xuZXhwb3J0IGNvbnN0IEZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUgPSAyMDAwO1xuXG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfQ0FMTFMgPSA2O1xuZXhwb3J0IGNvbnN0IEZBU1RfUkVMT0FEX1dBSVQgPSAxMCAqIDEwMDA7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbi8qKlxuICogQSBuZXcgcmVsb2FkaW5nIHJhdGUgd2FzIGNyZWF0ZWQgYWZ0ZXIgb3BlbmluZyBhIGJ1ZyB0aWNrZXQgb25cbiAqIENocm9taXVtLCBhbmQgdGhlIHJldmlzaW9uIHdhcyBtZXJnZWQgdG8gbWFzdGVyXG4gKiBAc2VlIGh0dHBzOi8vY2hyb21pdW0tcmV2aWV3Lmdvb2dsZXNvdXJjZS5jb20vYy9jaHJvbWl1bS9zcmMvKy8xMzQwMjcyXG4gKi9cblxuLyoqXG4gKiBUaGUgQ2hyb21lL0Nocm9taXVtIHZlcnNpb24gbnVtYmVyIHRoYXQgaW5jbHVkZXMgdGhlIG5ldyByYXRlc1xuICogQHNlZSBodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY2hyb21pdW0tZmluZC1yZWxlYXNlcy1zdGF0aWMvZDNiLmh0bWwjZDNiMjVlMTM4MDk4NGIyZjFmMjNkMGU4ZGMxYTMzNzc0M2M2Y2FhZlxuICovXG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0NIUk9NRV9WRVJTSU9OOiBCcm93c2VyVmVyc2lvbiA9IFs3MywgMCwgMzYzN107XG5cbmV4cG9ydCBjb25zdCBORVdfRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSA9IDEwMDA7XG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0NBTExTID0gMzA7XG4iLCJleHBvcnQgY29uc3QgTk9ORTogTE9HX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IExPRzogTE9HX0xPRyA9IDE7XG5leHBvcnQgY29uc3QgSU5GTzogTE9HX0lORk8gPSAyO1xuZXhwb3J0IGNvbnN0IFdBUk46IExPR19XQVJOID0gMztcbmV4cG9ydCBjb25zdCBFUlJPUjogTE9HX0VSUk9SID0gNDtcbmV4cG9ydCBjb25zdCBERUJVRzogTE9HX0RFQlVHID0gNTtcbiIsImV4cG9ydCBjb25zdCBSRUNPTk5FQ1RfSU5URVJWQUwgPSAyMDAwO1xuZXhwb3J0IGNvbnN0IFNPQ0tFVF9FUlJfQ09ERV9SRUYgPVxuICBcImh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NDU1I3NlY3Rpb24tNy40LjFcIjtcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX1BPUlQgPSA5MDkwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORklHID0gXCJ3ZWJwYWNrLmNvbmZpZy5qc1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVMT0FEX1BBR0UgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlkgPSBcImNvbnRlbnQtc2NyaXB0XCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZID0gXCJiYWNrZ3JvdW5kXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSA9IFwicG9wdXBcIjtcbiIsImV4cG9ydCBjb25zdCBSRUZfVVJMID1cbiAgXCJodHRwczovL2dpdGh1Yi5jb20vcnViZW5zcGdjYXZhbGNhbnRlL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dpa2kvR2VuZXJhbC1JbmZvcm1hdGlvblwiO1xuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwidXNlcmFnZW50XCI7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tIFwid3NcIjtcbmltcG9ydCB7IGluZm8gfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgU2lnbkVtaXR0ZXIgZnJvbSBcIi4vU2lnbkVtaXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90UmVsb2FkZXJTZXJ2ZXIge1xuICBwcml2YXRlIF9zZXJ2ZXI6IFNlcnZlcjtcbiAgcHJpdmF0ZSBfc2lnbkVtaXR0ZXI6IFNpZ25FbWl0dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHBvcnQ6IG51bWJlcikge1xuICAgIHRoaXMuX3NlcnZlciA9IG5ldyBTZXJ2ZXIoeyBwb3J0IH0pO1xuICB9XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLl9zZXJ2ZXIub24oXCJjb25uZWN0aW9uXCIsICh3cywgbXNnKSA9PiB7XG4gICAgICBjb25zdCB1c2VyQWdlbnQgPSBwYXJzZShtc2cuaGVhZGVyc1tcInVzZXItYWdlbnRcIl0pO1xuICAgICAgdGhpcy5fc2lnbkVtaXR0ZXIgPSBuZXcgU2lnbkVtaXR0ZXIodGhpcy5fc2VydmVyLCB1c2VyQWdlbnQpO1xuXG4gICAgICB3cy5vbihcIm1lc3NhZ2VcIiwgKGRhdGE6IHN0cmluZykgPT5cbiAgICAgICAgaW5mbyhgTWVzc2FnZSBmcm9tICR7dXNlckFnZW50LmZhbWlseX06ICR7SlNPTi5wYXJzZShkYXRhKS5wYXlsb2FkfWApLFxuICAgICAgKTtcbiAgICAgIHdzLm9uKFwiZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgICAvLyBOT09QIC0gc3dhbGxvdyBzb2NrZXQgZXJyb3JzIGR1ZSB0byBodHRwOi8vZ2l0LmlvL3ZiaFNOXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzaWduQ2hhbmdlKFxuICAgIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4gICAgb25seVBhZ2VDaGFuZ2VkOiBib29sZWFuLFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLl9zaWduRW1pdHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25FbWl0dGVyLnNhZmVTaWduQ2hhbmdlKHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB6aXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBBZ2VudCB9IGZyb20gXCJ1c2VyYWdlbnRcIjtcbmltcG9ydCB7IE9QRU4sIFNlcnZlciB9IGZyb20gXCJ3c1wiO1xuXG5pbXBvcnQge1xuICBGQVNUX1JFTE9BRF9DQUxMUyxcbiAgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSxcbiAgRkFTVF9SRUxPQURfV0FJVCxcbiAgTkVXX0ZBU1RfUkVMT0FEX0NBTExTLFxuICBORVdfRkFTVF9SRUxPQURfQ0hST01FX1ZFUlNJT04sXG4gIE5FV19GQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2Zhc3QtcmVsb2FkaW5nLmNvbnN0YW50c1wiO1xuaW1wb3J0IHsgZGVib3VuY2VTaWduYWwsIGZhc3RSZWxvYWRCbG9ja2VyIH0gZnJvbSBcIi4uL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb25cIjtcbmltcG9ydCB7IHNpZ25DaGFuZ2UgfSBmcm9tIFwiLi4vdXRpbHMvc2lnbmFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduRW1pdHRlciB7XG4gIHByaXZhdGUgX3NhZmVTaWduQ2hhbmdlOiAoXG4gICAgcmVsb2FkUGFnZTogYm9vbGVhbixcbiAgICBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sXG4gICAgb25TdWNjZXNzOiAodmFsPzogYW55KSA9PiB2b2lkLFxuICAgIG9uRXJyb3I6IChlcnI6IEVycm9yKSA9PiB2b2lkLFxuICApID0+IHZvaWQ7XG4gIHByaXZhdGUgX3NlcnZlcjogU2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlcjogU2VydmVyLCB7IGZhbWlseSwgbWFqb3IsIG1pbm9yLCBwYXRjaCB9OiBBZ2VudCkge1xuICAgIHRoaXMuX3NlcnZlciA9IHNlcnZlcjtcbiAgICBpZiAoZmFtaWx5ID09PSBcIkNocm9tZVwiKSB7XG4gICAgICBjb25zdCBbcmVsb2FkQ2FsbHMsIHJlbG9hZERlYm91Y2luZ0ZyYW1lXSA9IHRoaXMuX3NhdGlzZmllcyhcbiAgICAgICAgW3BhcnNlSW50KG1ham9yLCAxMCksIHBhcnNlSW50KG1pbm9yLCAxMCksIHBhcnNlSW50KHBhdGNoLCAxMCldLFxuICAgICAgICBORVdfRkFTVF9SRUxPQURfQ0hST01FX1ZFUlNJT04sXG4gICAgICApXG4gICAgICAgID8gW05FV19GQVNUX1JFTE9BRF9DQUxMUywgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUVdXG4gICAgICAgIDogW0ZBU1RfUkVMT0FEX0NBTExTLCBGQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FXTtcblxuICAgICAgY29uc3QgZGVib3VuY2VyID0gZGVib3VuY2VTaWduYWwocmVsb2FkRGVib3VjaW5nRnJhbWUsIHRoaXMpO1xuICAgICAgY29uc3QgYmxvY2tlciA9IGZhc3RSZWxvYWRCbG9ja2VyKHJlbG9hZENhbGxzLCBGQVNUX1JFTE9BRF9XQUlULCB0aGlzKTtcbiAgICAgIHRoaXMuX3NhZmVTaWduQ2hhbmdlID0gZGVib3VuY2VyKGJsb2NrZXIodGhpcy5fc2V0dXBTYWZlU2lnbkNoYW5nZSgpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NhZmVTaWduQ2hhbmdlID0gdGhpcy5fc2V0dXBTYWZlU2lnbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYWZlU2lnbkNoYW5nZShcbiAgICByZWxvYWRQYWdlOiBib29sZWFuLFxuICAgIG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbixcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZShyZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQsIHJlcywgcmVqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4gICAgICBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sXG4gICAgICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQsXG4gICAgICBvbkVycm9yOiAoZXJyOiBFcnJvcikgPT4gdm9pZCxcbiAgICApID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NlbmRNc2coc2lnbkNoYW5nZSh7IHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCB9KSk7XG4gICAgICAgIG9uU3VjY2VzcygpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VuZE1zZyhtc2c6IGFueSkge1xuICAgIHRoaXMuX3NlcnZlci5jbGllbnRzLmZvckVhY2goY2xpZW50ID0+IHtcbiAgICAgIGlmIChjbGllbnQucmVhZHlTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgICBjbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NhdGlzZmllcyhcbiAgICBicm93c2VyVmVyc2lvbjogQnJvd3NlclZlcnNpb24sXG4gICAgdGFyZ2V0VmVyc2lvbjogQnJvd3NlclZlcnNpb24sXG4gICkge1xuICAgIGNvbnN0IHZlcnNpb25QYWlyczogVmVyc2lvblBhaXJbXSA9IHppcChicm93c2VyVmVyc2lvbiwgdGFyZ2V0VmVyc2lvbik7XG5cbiAgICBmb3IgKGNvbnN0IFt2ZXJzaW9uID0gMCwgdGFyZ2V0ID0gMF0gb2YgdmVyc2lvblBhaXJzKSB7XG4gICAgICBpZiAodmVyc2lvbiAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uID4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCBIb3RSZWxvYWRlclNlcnZlciBmcm9tIFwiLi9Ib3RSZWxvYWRlclNlcnZlclwiO1xuXG5jb25zdCBjaGFuZ2VzVHJpZ2dlcmVyOiBUcmlnZ2VyZXJGYWN0b3J5ID0gKFxuICBwb3J0OiBudW1iZXIsXG4gIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4pID0+IHtcbiAgY29uc3Qgc2VydmVyID0gbmV3IEhvdFJlbG9hZGVyU2VydmVyKHBvcnQpO1xuXG4gIGluZm8oXCJbIFN0YXJ0aW5nIHRoZSBIb3QgRXh0ZW5zaW9uIFJlbG9hZCBTZXJ2ZXIuLi4gXVwiKTtcbiAgc2VydmVyLmxpc3RlbigpO1xuXG4gIHJldHVybiAob25seVBhZ2VDaGFuZ2VkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICByZXR1cm4gc2VydmVyLnNpZ25DaGFuZ2UocmVsb2FkUGFnZSwgb25seVBhZ2VDaGFuZ2VkKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZXNUcmlnZ2VyZXI7XG4iLCJpbXBvcnQgX2NoYW5nZXNUcmlnZ2VyZXIgZnJvbSBcIi4vY2hhbmdlcy10cmlnZ2VyZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZXNUcmlnZ2VyZXIgPSBfY2hhbmdlc1RyaWdnZXJlcjtcbiIsImltcG9ydCB7IGluc3RhbGwgfSBmcm9tIFwic291cmNlLW1hcC1zdXBwb3J0XCI7XG5pbXBvcnQgeyBERUJVRywgRVJST1IsIE5PTkUgfSBmcm9tIFwiLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IEV4dGVuc2lvblJlbG9hZGVySW1wbCBmcm9tIFwiLi9FeHRlbnNpb25SZWxvYWRlclwiO1xuaW1wb3J0IHsgc2V0TG9nTGV2ZWwgfSBmcm9tIFwiLi91dGlscy9sb2dnZXJcIjtcblxuaW5zdGFsbCgpO1xuXG5jb25zdCBsb2dMZXZlbCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WXG4gID8ge1xuICAgICAgZGV2ZWxvcG1lbnQ6IERFQlVHLFxuICAgICAgcHJvZHVjdGlvbjogRVJST1IsXG4gICAgICB0ZXN0OiBOT05FLFxuICAgIH1bcHJvY2Vzcy5lbnYuTk9ERV9FTlZdXG4gIDogRVJST1I7XG5cbnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbmV4cG9ydCA9IEV4dGVuc2lvblJlbG9hZGVySW1wbDtcbiIsImltcG9ydCB7IGJvbGQsIHdoaXRlIH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XG5pbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEVSUk9SLCBJTkZPLCBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRUZfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9yZWZlcmVuY2UtZG9jcy5jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG4gIHByaXZhdGUgcmVmZXJlbmNlTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgdHlwZTogTE9HX0lORk8gfCBMT0dfV0FSTiB8IExPR19FUlJPUjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgcmVmZXJlbmNlTnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZmVyZW5jZU51bWJlciA9IHJlZmVyZW5jZU51bWJlcjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIGdldChhZGRpdGlvbmFsRGF0YTogb2JqZWN0ID0ge30pIHtcbiAgICBjb25zdCBjb2RlID0gYFdFUi0ke3RoaXMuZ2V0UHJlZml4KCl9JHt0aGlzLnJlZmVyZW5jZU51bWJlcn1gO1xuICAgIGNvbnN0IHJlZkxpbmsgPSBib2xkKHdoaXRlKGAke1JFRl9VUkx9IyR7Y29kZX1gKSk7XG4gICAgcmV0dXJuIGBbJHtjb2RlfV0gJHt0ZW1wbGF0ZShcbiAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgIGFkZGl0aW9uYWxEYXRhLFxuICAgICl9LlxcblZpc2l0ICR7cmVmTGlua30gZm9yIGNvbXBsZXRlIGRldGFpbHNcXG5gO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmVmaXgoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgSU5GTzpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgICAgY2FzZSBXQVJOOlxuICAgICAgICByZXR1cm4gXCJXXCI7XG4gICAgICBjYXNlIEVSUk9SOlxuICAgICAgICByZXR1cm4gXCJFXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBFUlJPUiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgYmdTY3JpcHRFbnRyeUVycm9yTXNnID0gbmV3IE1lc3NhZ2UoXG4gIEVSUk9SLFxuICAxLFxuICBcIkJhY2tncm91bmQgc2NyaXB0IHdlYnBhY2sgZW50cnkgbm90IGZvdW5kL21hdGNoIFxcXG50aGUgcHJvdmlkZWQgb24gJ21hbmlmZXN0Lmpzb24nIG9yICdlbnRyeS5iYWNrZ3JvdW5kJyBcXFxub3B0aW9uIG9mIHRoZSBwbHVnaW5cIixcbik7XG5cbmV4cG9ydCBjb25zdCBiZ1NjcmlwdE1hbmlmZXN0UmVxdWlyZWRNc2cgPSBuZXcgTWVzc2FnZShcbiAgRVJST1IsXG4gIDIsXG4gIFwiQmFja2dyb3VuZCBzY3JpcHQgb24gbWFuaWZlc3QgaXMgcmVxdWlyZWRcIixcbik7XG4iLCJpbXBvcnQgeyBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBvbmx5T25EZXZlbG9wbWVudE1zZyA9IG5ldyBNZXNzYWdlKFxuICBXQVJOLFxuICAxLFxuICBcIldhcm5pbmcsIEV4dGVuc2lvbiBSZWxvYWRlciBQbHVnaW4gd2FzIG5vdCBlbmFibGVkISBcXFxuSXQgcnVucyBvbmx5IG9uIHdlYnBhY2sgLS1tb2RlPWRldmVsb3BtZW50ICh2NCBvciBtb3JlKSBcXFxub3Igd2l0aCBOT0RFX0VOVj1kZXZlbG9wbWVudCAobG93ZXIgdmVyc2lvbnMpXCIsXG4pO1xuIiwiaW1wb3J0IF9taWRkbGV3YXJlSW5qZWN0b3IgZnJvbSBcIi4vbWlkZGxld2FyZS1pbmplY3RvclwiO1xuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZUluamVjdG9yID0gX21pZGRsZXdhcmVJbmplY3RvcjtcbiIsImltcG9ydCB7IENvbXBpbGF0aW9uIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB7IENvbmNhdFNvdXJjZSwgU291cmNlIH0gZnJvbSBcIndlYnBhY2stc291cmNlc1wiO1xuaW1wb3J0IHsgU291cmNlRmFjdG9yeSB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XG5pbXBvcnQgbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIgZnJvbSBcIi4vbWlkZGxld2FyZS1zb3VyY2UtYnVpbGRlclwiO1xuXG5jb25zdCBtaWRkbGV3YXJlSW5qZWN0b3I6IE1pZGRsZXdhcmVJbmplY3RvciA9IChcbiAgeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH0sXG4gIHsgcG9ydCwgcmVsb2FkUGFnZSB9LFxuKSA9PiB7XG4gIGNvbnN0IHNvdXJjZTogU291cmNlID0gbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIoeyBwb3J0LCByZWxvYWRQYWdlIH0pO1xuICBjb25zdCBzb3VyY2VGYWN0b3J5OiBTb3VyY2VGYWN0b3J5ID0gKC4uLnNvdXJjZXMpOiBTb3VyY2UgPT5cbiAgICBuZXcgQ29uY2F0U291cmNlKC4uLnNvdXJjZXMpO1xuXG4gIGNvbnN0IG1hdGNoQmdPckNvbnRlbnRPclBhZ2UgPSAobmFtZTogc3RyaW5nKSA9PlxuICAgIG5hbWUgPT09IGJhY2tncm91bmQgfHxcbiAgICBuYW1lID09PSBjb250ZW50U2NyaXB0IHx8XG4gICAgKGNvbnRlbnRTY3JpcHQgJiYgY29udGVudFNjcmlwdC5pbmNsdWRlcyhuYW1lKSkgfHxcbiAgICBuYW1lID09PSBleHRlbnNpb25QYWdlIHx8XG4gICAgKGV4dGVuc2lvblBhZ2UgJiYgZXh0ZW5zaW9uUGFnZS5pbmNsdWRlcyhuYW1lKSk7XG5cbiAgcmV0dXJuIChhc3NldHMsIGNodW5rczogQ29tcGlsYXRpb25bXCJjaHVua3NcIl0pID0+XG4gICAgQXJyYXkuZnJvbShjaHVua3MpLnJlZHVjZSgocHJldiwgeyBuYW1lLCBmaWxlcyB9KSA9PiB7XG4gICAgICBpZiAobWF0Y2hCZ09yQ29udGVudE9yUGFnZShuYW1lKSkge1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGVudHJ5UG9pbnQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFbnRyeSBwb2ludDogJHtlbnRyeVBvaW50fWApO1xuICAgICAgICAgIGlmICgvXFwuanMkLy50ZXN0KGVudHJ5UG9pbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFNyYyA9IHNvdXJjZUZhY3Rvcnkoc291cmNlLCBhc3NldHNbZW50cnlQb2ludF0pO1xuICAgICAgICAgICAgcHJldltlbnRyeVBvaW50XSA9IGZpbmFsU3JjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlSW5qZWN0b3I7XG4iLCJpbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCByYXdTb3VyY2UgZnJvbSBcInJhdy1sb2FkZXIhLi93ZXItbWlkZGxld2FyZS5yYXdcIjtcbmltcG9ydCBwb2x5ZmlsbFNvdXJjZSBmcm9tIFwicmF3LWxvYWRlciF3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcbmltcG9ydCB7IFJhd1NvdXJjZSwgU291cmNlIH0gZnJvbSBcIndlYnBhY2stc291cmNlc1wiO1xuXG5pbXBvcnQge1xuICBSRUNPTk5FQ1RfSU5URVJWQUwsXG4gIFNPQ0tFVF9FUlJfQ09ERV9SRUYsXG59IGZyb20gXCIuLi9jb25zdGFudHMvbWlkZGxld2FyZS1jb25maWcuY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBzaWduYWxzIGZyb20gXCIuLi91dGlscy9zaWduYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZVdhcmVTb3VyY2VCdWlsZGVyKHtcbiAgcG9ydCxcbiAgcmVsb2FkUGFnZSxcbn06IElNaWRkbGV3YXJlVGVtcGxhdGVQYXJhbXMpOiBTb3VyY2Uge1xuICBjb25zdCB0bXBsID0gdGVtcGxhdGUocmF3U291cmNlKTtcblxuICByZXR1cm4gbmV3IFJhd1NvdXJjZShcbiAgICB0bXBsKHtcbiAgICAgIFdTSG9zdDogYHdzOi8vbG9jYWxob3N0OiR7cG9ydH1gLFxuICAgICAgY29uZmlnOiBKU09OLnN0cmluZ2lmeSh7IFJFQ09OTkVDVF9JTlRFUlZBTCwgU09DS0VUX0VSUl9DT0RFX1JFRiB9KSxcbiAgICAgIHBvbHlmaWxsU291cmNlOiBgXCJ8fCR7cG9seWZpbGxTb3VyY2V9XCJgLFxuICAgICAgcmVsb2FkUGFnZTogYCR7cmVsb2FkUGFnZX1gLFxuICAgICAgc2lnbmFsczogSlNPTi5zdHJpbmdpZnkoc2lnbmFscyksXG4gICAgfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSwgcnVuSW5Db250ZXh0IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgaW5mbywgd2FybiB9IGZyb20gXCIuL2xvZ2dlclwiO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2VTaWduYWwgPSAoZGVib3VjaW5nRnJhbWU6IG51bWJlciwgY29udGV4dD86IG9iamVjdCkgPT4gKFxuICBmdW5jOiAoLi4uYXJnczogYW55W10pID0+IGFueSxcbikgPT4ge1xuICBpZiAoY29udGV4dCkge1xuICAgIHJ1bkluQ29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSgoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9LCBkZWJvdWNpbmdGcmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmFzdFJlbG9hZEJsb2NrZXIgPSAobWF4Q2FsbHM6IG51bWJlciwgd2FpdDogbnVtYmVyLCBjb250ZXh0KSA9PiAoXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LFxuKSA9PiB7XG4gIGxldCBjYWxscyA9IDA7XG4gIGxldCBpbldhaXQgPSBmYWxzZTtcblxuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoaW5XYWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjYWxscyA9PT0gbWF4Q2FsbHMpIHtcbiAgICAgIGNhbGxzID0gMDtcbiAgICAgIGluV2FpdCA9IHRydWU7XG5cbiAgICAgIGxldCBpbnRlcnZhbCA9IHdhaXQgLyAxMDAwO1xuICAgICAgd2FybihcbiAgICAgICAgYFBsZWFzZSB3YWl0ICR7aW50ZXJ2YWx9IHNlY3MuIGZvciBuZXh0IHJlbG9hZCB0byBwcmV2ZW50IHlvdXIgZXh0ZW5zaW9uIGJlaW5nIGJsb2NrZWRgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGxvZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gd2FybihgJHstLWludGVydmFsfSAuLi5gKSwgMTAwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGxvZ0ludGVydmFsKTtcbiAgICAgICAgaW5mbyhcIlNpZ25pbmcgZm9yIHJlbG9hZCBub3dcIik7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGluV2FpdCA9IGZhbHNlO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxzKys7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IHtcbiAgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxuICBERUZBVUxUX0NPTlRFTlRfU0NSSVBUX0VOVFJZLFxuICBERUZBVUxUX0VYVEVOU0lPTl9QQUdFX0VOVFJZLFxuICBERUZBVUxUX1BPUlQsXG4gIERFRkFVTFRfUkVMT0FEX1BBR0UsXG59IGZyb20gXCIuLi9jb25zdGFudHMvb3B0aW9ucy5jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbnRyaWVzOiB7XG4gICAgYmFja2dyb3VuZDogREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxuICAgIGNvbnRlbnRTY3JpcHQ6IERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlksXG4gICAgZXh0ZW5zaW9uUGFnZTogREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcbiAgfSxcbiAgcG9ydDogREVGQVVMVF9QT1JULFxuICByZWxvYWRQYWdlOiBERUZBVUxUX1JFTE9BRF9QQUdFLFxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOiBuby1jb25zb2xlXG5pbXBvcnQgeyBncmVlbiwgcmVkLCB3aGl0ZSwgeWVsbG93IH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XG5pbXBvcnQgeyBERUJVRywgRVJST1IsIElORk8sIExPRywgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuXG5sZXQgbG9nTGV2ZWw7XG5leHBvcnQgY29uc3Qgc2V0TG9nTGV2ZWwgPSAobGV2ZWw6IExPR19MRVZFTCkgPT4gKGxvZ0xldmVsID0gbGV2ZWwpO1xuXG5leHBvcnQgY29uc3QgbG9nID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gTE9HICYmIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuZXhwb3J0IGNvbnN0IGluZm8gPSAobWVzc2FnZTogc3RyaW5nKSA9PlxuICBsb2dMZXZlbCA+PSBJTkZPICYmIGNvbnNvbGUuaW5mbyhncmVlbihtZXNzYWdlKSk7XG5leHBvcnQgY29uc3Qgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gIGxvZ0xldmVsID49IFdBUk4gJiYgY29uc29sZS53YXJuKHllbGxvdyhtZXNzYWdlKSk7XG5leHBvcnQgY29uc3QgZXJyb3IgPSAobWVzc2FnZTogc3RyaW5nKSA9PlxuICBsb2dMZXZlbCA+PSBFUlJPUiAmJiBjb25zb2xlLmVycm9yKHJlZChtZXNzYWdlKSk7XG5leHBvcnQgY29uc3QgZGVidWcgPSAobWVzc2FnZTogc3RyaW5nKSA9PlxuICBsb2dMZXZlbCA+PSBERUJVRyAmJiBjb25zb2xlLmRlYnVnKHdoaXRlKGRlYnVnKG1lc3NhZ2UpKSk7XG4iLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGZsYXRNYXBEZWVwIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQ29tcGlsZXIsIEVudHJ5IH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB7XG4gIGJnU2NyaXB0RW50cnlFcnJvck1zZyxcbiAgYmdTY3JpcHRNYW5pZmVzdFJlcXVpcmVkTXNnLFxufSBmcm9tIFwiLi4vbWVzc2FnZXMvZXJyb3JzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RW50cmllcyhcbiAgd2VicGFja0VudHJ5OiBFbnRyeSxcbiAgd2VicGFja091dHB1dDogQ29tcGlsZXJbXCJvcHRpb25zXCJdW1wib3V0cHV0XCJdID0ge30sXG4gIG1hbmlmZXN0UGF0aDogc3RyaW5nLFxuKTogSUVudHJpZXNPcHRpb24ge1xuICBjb25zdCBtYW5pZmVzdEpzb24gPSBKU09OLnBhcnNlKFxuICAgIHJlYWRGaWxlU3luYyhtYW5pZmVzdFBhdGgpLnRvU3RyaW5nKCksXG4gICkgYXMgSUV4dGVuc2lvbk1hbmlmZXN0O1xuICBjb25zdCB7IGJhY2tncm91bmQsIGNvbnRlbnRfc2NyaXB0cyB9ID0gbWFuaWZlc3RKc29uO1xuICBjb25zdCB7IGZpbGVuYW1lIH0gPSB3ZWJwYWNrT3V0cHV0O1xuXG4gIGlmICghZmlsZW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgfVxuXG4gIGlmICghYmFja2dyb3VuZD8uc2NyaXB0cykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYmdTY3JpcHRNYW5pZmVzdFJlcXVpcmVkTXNnLmdldCgpKTtcbiAgfVxuXG4gIGNvbnN0IGJnU2NyaXB0RmlsZU5hbWVzID0gYmFja2dyb3VuZC5zY3JpcHRzO1xuICBjb25zdCB0b1JlbW92ZSA9IChmaWxlbmFtZSBhcyBzdHJpbmcpLnJlcGxhY2UoXCJbbmFtZV1cIiwgXCJcIik7XG5cbiAgY29uc3QgYmdXZWJwYWNrRW50cnkgPSBPYmplY3Qua2V5cyh3ZWJwYWNrRW50cnkpLmZpbmQoZW50cnlOYW1lID0+XG4gICAgYmdTY3JpcHRGaWxlTmFtZXMuc29tZShcbiAgICAgIGJnTWFuaWZlc3QgPT4gYmdNYW5pZmVzdC5yZXBsYWNlKHRvUmVtb3ZlLCBcIlwiKSA9PT0gZW50cnlOYW1lLFxuICAgICksXG4gICk7XG5cbiAgaWYgKCFiZ1dlYnBhY2tFbnRyeSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYmdTY3JpcHRFbnRyeUVycm9yTXNnLmdldCgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnRFbnRyaWVzOiB1bmtub3duID0gY29udGVudF9zY3JpcHRzXG4gICAgPyBmbGF0TWFwRGVlcChPYmplY3Qua2V5cyh3ZWJwYWNrRW50cnkpLCBlbnRyeU5hbWUgPT5cbiAgICAgICAgY29udGVudF9zY3JpcHRzLm1hcCgoeyBqcyB9KSA9PlxuICAgICAgICAgIGpzXG4gICAgICAgICAgICAubWFwKGNvbnRlbnRJdGVtID0+IGNvbnRlbnRJdGVtLnJlcGxhY2UodG9SZW1vdmUsIFwiXCIpKVxuICAgICAgICAgICAgLmZpbHRlcihjb250ZW50SXRlbSA9PiBjb250ZW50SXRlbSA9PT0gZW50cnlOYW1lKSxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZDogYmdXZWJwYWNrRW50cnksXG4gICAgY29udGVudFNjcmlwdDogY29udGVudEVudHJpZXMgYXMgc3RyaW5nW10sXG4gICAgZXh0ZW5zaW9uUGFnZTogbnVsbCxcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBTSUdOX0NIQU5HRTogQWN0aW9uVHlwZSA9IFwiU0lHTl9DSEFOR0VcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1JFTE9BRDogQWN0aW9uVHlwZSA9IFwiU0lHTl9SRUxPQURcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1JFTE9BREVEOiBBY3Rpb25UeXBlID0gXCJTSUdOX1JFTE9BREVEXCI7XG5leHBvcnQgY29uc3QgU0lHTl9MT0c6IEFjdGlvblR5cGUgPSBcIlNJR05fTE9HXCI7XG5leHBvcnQgY29uc3QgU0lHTl9DT05ORUNUOiBBY3Rpb25UeXBlID0gXCJTSUdOX0NPTk5FQ1RcIjtcblxuZXhwb3J0IGNvbnN0IHNpZ25DaGFuZ2U6IEFjdGlvbkZhY3RvcnkgPSAoe1xuICByZWxvYWRQYWdlID0gdHJ1ZSxcbiAgb25seVBhZ2VDaGFuZ2VkID0gZmFsc2UsXG59KSA9PiAoe1xuICBwYXlsb2FkOiB7IHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCB9LFxuICB0eXBlOiBTSUdOX0NIQU5HRSxcbn0pO1xuZXhwb3J0IGNvbnN0IHNpZ25SZWxvYWQ6IEFjdGlvbkZhY3RvcnkgPSAoKSA9PiAoeyB0eXBlOiBTSUdOX1JFTE9BRCB9KTtcbmV4cG9ydCBjb25zdCBzaWduUmVsb2FkZWQ6IEFjdGlvbkZhY3RvcnkgPSAobXNnOiBzdHJpbmcpID0+ICh7XG4gIHBheWxvYWQ6IG1zZyxcbiAgdHlwZTogU0lHTl9SRUxPQURFRCxcbn0pO1xuZXhwb3J0IGNvbnN0IHNpZ25Mb2c6IEFjdGlvbkZhY3RvcnkgPSAobXNnOiBzdHJpbmcpID0+ICh7XG4gIHBheWxvYWQ6IG1zZyxcbiAgdHlwZTogU0lHTl9MT0csXG59KTtcbiIsImltcG9ydCB7IENvbXBpbGVyIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCBDb21waWxlckV2ZW50c0ZhY2FkZSBmcm9tIFwiLi9Db21waWxlckV2ZW50c0ZhY2FkZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEV4dGVuc2lvblJlbG9hZGVyIHtcbiAgcHVibGljIGNvbnRleHQ6IGFueTtcbiAgcHJvdGVjdGVkIF9pbmplY3RvcjogSW5qZWN0TWlkZGxld2FyZTtcbiAgcHJvdGVjdGVkIF90cmlnZ2VyZXI6IFRyaWdnZXJlcjtcbiAgcHJvdGVjdGVkIF9ldmVudEFQSTogQ29tcGlsZXJFdmVudHNGYWNhZGU7XG4gIHByb3RlY3RlZCBfY2h1bmtWZXJzaW9uczogUmVjb3JkPHN0cmluZywgYW55PjtcblxuICBwdWJsaWMgYWJzdHJhY3QgYXBwbHkoY29tcGlsZXI6IENvbXBpbGVyKTtcbn1cbiIsImltcG9ydCB7IENvbXBpbGVyLCBDb21waWxhdGlvbiB9IGZyb20gXCJ3ZWJwYWNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGVyRXZlbnRzRmFjYWRlIHtcbiAgcHVibGljIHN0YXRpYyBleHRlbnNpb25OYW1lID0gXCJ3ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlclwiO1xuICBwcml2YXRlIF9jb21waWxlcjogQ29tcGlsZXI7XG4gIHByaXZhdGUgX2xlZ2FjeVRhcGFibGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29tcGlsZXI6IENvbXBpbGVyKSB7XG4gICAgdGhpcy5fY29tcGlsZXIgPSBjb21waWxlcjtcbiAgICB0aGlzLl9sZWdhY3lUYXBhYmxlID0gIWNvbXBpbGVyLmhvb2tzO1xuICB9XG5cbiAgcHVibGljIGFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cyhcbiAgICBjYWxsOiAoY29tcGlsYXRpb246IENvbXBpbGF0aW9uLCBjaHVua3M6IENvbXBpbGF0aW9uW1wiY2h1bmtzXCJdKSA9PiB2b2lkLFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fbGVnYWN5VGFwYWJsZVxuICAgICAgPyAodGhpcy5fY29tcGlsZXIgYXMgYW55KS5wbHVnaW4oXCJjb21waWxhdGlvblwiLCBjb21wID0+XG4gICAgICAgICAgY29tcC5wbHVnaW4oXCJhZnRlci1vcHRpbWl6ZS1jaHVuay1hc3NldHNcIiwgY2h1bmtzID0+XG4gICAgICAgICAgICBjYWxsKGNvbXAsIGNodW5rcyksXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLl9jb21waWxlci5ob29rcy5jb21waWxhdGlvbi50YXAoXG4gICAgICAgICAgQ29tcGlsZXJFdmVudHNGYWNhZGUuZXh0ZW5zaW9uTmFtZSxcbiAgICAgICAgICBjb21wID0+XG4gICAgICAgICAgICBjb21wLmhvb2tzLmFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cy50YXAoXG4gICAgICAgICAgICAgIENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgICAgIGNodW5rcyA9PiBjYWxsKGNvbXAsIGNodW5rcyksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICB9XG5cbiAgcHVibGljIGFmdGVyRW1pdChjYWxsOiAoY29tcGlsYXRpb246IENvbXBpbGF0aW9uKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZ2FjeVRhcGFibGVcbiAgICAgID8gKHRoaXMuX2NvbXBpbGVyIGFzIGFueSkucGx1Z2luKFwiYWZ0ZXItZW1pdFwiLCBjYWxsKVxuICAgICAgOiB0aGlzLl9jb21waWxlci5ob29rcy5hZnRlckVtaXQudGFwKFxuICAgICAgICAgIENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgY2FsbCxcbiAgICAgICAgKTtcbiAgfVxufVxuIiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG52YXIgaXNNb2Rlcm4gPSAoXG4gIHR5cGVvZiBCdWZmZXIuYWxsb2MgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIEJ1ZmZlci5hbGxvY1Vuc2FmZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgQnVmZmVyLmZyb20gPT09ICdmdW5jdGlvbidcbilcblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlciAoaW5wdXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaW5wdXQpLnNsaWNlKDgsIC0xKSA9PT0gJ0FycmF5QnVmZmVyJ1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKG9iaiwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGJ5dGVPZmZzZXQgPj4+PSAwXG5cbiAgdmFyIG1heExlbmd0aCA9IG9iai5ieXRlTGVuZ3RoIC0gYnl0ZU9mZnNldFxuXG4gIGlmIChtYXhMZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInb2Zmc2V0JyBpcyBvdXQgb2YgYm91bmRzXCIpXG4gIH1cblxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSBtYXhMZW5ndGhcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPj4+PSAwXG5cbiAgICBpZiAobGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidsZW5ndGgnIGlzIG91dCBvZiBib3VuZHNcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKG9iai5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgbGVuZ3RoKSlcbiAgICA6IG5ldyBCdWZmZXIobmV3IFVpbnQ4QXJyYXkob2JqLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBsZW5ndGgpKSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKHN0cmluZywgZW5jb2RpbmcpXG4gICAgOiBuZXcgQnVmZmVyKHN0cmluZywgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKGlzQXJyYXlCdWZmZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20odmFsdWUpXG4gICAgOiBuZXcgQnVmZmVyKHZhbHVlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlckZyb21cbiIsIi8qXG5cblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5PcmlnaW5hbCBMaWJyYXJ5XG4gIC0gQ29weXJpZ2h0IChjKSBNYXJhayBTcXVpcmVzXG5cbkFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eVxuIC0gQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgY29sb3JzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGNvbG9ycztcblxuY29sb3JzLnRoZW1lcyA9IHt9O1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBhbnNpU3R5bGVzID0gY29sb3JzLnN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzJyk7XG52YXIgZGVmaW5lUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBuZXdMaW5lUmVnZXggPSBuZXcgUmVnRXhwKC9bXFxyXFxuXSsvZyk7XG5cbmNvbG9ycy5zdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnLi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzJykuc3VwcG9ydHNDb2xvcjtcblxuaWYgKHR5cGVvZiBjb2xvcnMuZW5hYmxlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSBjb2xvcnMuc3VwcG9ydHNDb2xvcigpICE9PSBmYWxzZTtcbn1cblxuY29sb3JzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBjb2xvcnMuZW5hYmxlZCA9IHRydWU7XG59O1xuXG5jb2xvcnMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBjb2xvcnMuZW5hYmxlZCA9IGZhbHNlO1xufTtcblxuY29sb3JzLnN0cmlwQ29sb3JzID0gY29sb3JzLnN0cmlwID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiAoJycgKyBzdHIpLnJlcGxhY2UoL1xceDFCXFxbXFxkK20vZywgJycpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG52YXIgc3R5bGl6ZSA9IGNvbG9ycy5zdHlsaXplID0gZnVuY3Rpb24gc3R5bGl6ZShzdHIsIHN0eWxlKSB7XG4gIGlmICghY29sb3JzLmVuYWJsZWQpIHtcbiAgICByZXR1cm4gc3RyKycnO1xuICB9XG5cbiAgdmFyIHN0eWxlTWFwID0gYW5zaVN0eWxlc1tzdHlsZV07XG5cbiAgLy8gU3R5bGl6ZSBzaG91bGQgd29yayBmb3Igbm9uLUFOU0kgc3R5bGVzLCB0b29cbiAgaWYoIXN0eWxlTWFwICYmIHN0eWxlIGluIGNvbG9ycyl7XG4gICAgLy8gU3R5bGUgbWFwcyBsaWtlIHRyYXAgb3BlcmF0ZSBhcyBmdW5jdGlvbnMgb24gc3RyaW5ncztcbiAgICAvLyB0aGV5IGRvbid0IGhhdmUgcHJvcGVydGllcyBsaWtlIG9wZW4gb3IgY2xvc2UuXG4gICAgcmV0dXJuIGNvbG9yc1tzdHlsZV0oc3RyKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZU1hcC5vcGVuICsgc3RyICsgc3R5bGVNYXAuY2xvc2U7XG59O1xuXG52YXIgbWF0Y2hPcGVyYXRvcnNSZSA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcbnZhciBlc2NhcGVTdHJpbmdSZWdleHAgPSBmdW5jdGlvbihzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuICByZXR1cm4gc3RyLnJlcGxhY2UobWF0Y2hPcGVyYXRvcnNSZSwgJ1xcXFwkJicpO1xufTtcblxuZnVuY3Rpb24gYnVpbGQoX3N0eWxlcykge1xuICB2YXIgYnVpbGRlciA9IGZ1bmN0aW9uIGJ1aWxkZXIoKSB7XG4gICAgcmV0dXJuIGFwcGx5U3R5bGUuYXBwbHkoYnVpbGRlciwgYXJndW1lbnRzKTtcbiAgfTtcbiAgYnVpbGRlci5fc3R5bGVzID0gX3N0eWxlcztcbiAgLy8gX19wcm90b19fIGlzIHVzZWQgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcbiAgLy8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlLlxuICBidWlsZGVyLl9fcHJvdG9fXyA9IHByb3RvO1xuICByZXR1cm4gYnVpbGRlcjtcbn1cblxudmFyIHN0eWxlcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBhbnNpU3R5bGVzLmdyZXkgPSBhbnNpU3R5bGVzLmdyYXk7XG4gIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgYW5zaVN0eWxlc1trZXldLmNsb3NlUmUgPVxuICAgICAgbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlc1trZXldLmNsb3NlKSwgJ2cnKTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBidWlsZCh0aGlzLl9zdHlsZXMuY29uY2F0KGtleSkpO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn0pKCk7XG5cbnZhciBwcm90byA9IGRlZmluZVByb3BzKGZ1bmN0aW9uIGNvbG9ycygpIHt9LCBzdHlsZXMpO1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlKCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgdmFyIHN0ciA9IGFyZ3MubWFwKGZ1bmN0aW9uKGFyZykge1xuICAgIC8vIFVzZSB3ZWFrIGVxdWFsaXR5IGNoZWNrIHNvIHdlIGNhbiBjb2xvcml6ZSBudWxsL3VuZGVmaW5lZCBpbiBzYWZlIG1vZGVcbiAgICBpZiAoYXJnICE9IG51bGwgJiYgYXJnLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1dGlsLmluc3BlY3QoYXJnKTtcbiAgICB9XG4gIH0pLmpvaW4oJyAnKTtcblxuICBpZiAoIWNvbG9ycy5lbmFibGVkIHx8ICFzdHIpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIG5ld0xpbmVzUHJlc2VudCA9IHN0ci5pbmRleE9mKCdcXG4nKSAhPSAtMTtcblxuICB2YXIgbmVzdGVkU3R5bGVzID0gdGhpcy5fc3R5bGVzO1xuXG4gIHZhciBpID0gbmVzdGVkU3R5bGVzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBjb2RlID0gYW5zaVN0eWxlc1tuZXN0ZWRTdHlsZXNbaV1dO1xuICAgIHN0ciA9IGNvZGUub3BlbiArIHN0ci5yZXBsYWNlKGNvZGUuY2xvc2VSZSwgY29kZS5vcGVuKSArIGNvZGUuY2xvc2U7XG4gICAgaWYgKG5ld0xpbmVzUHJlc2VudCkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3TGluZVJlZ2V4LCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gY29kZS5jbG9zZSArIG1hdGNoICsgY29kZS5vcGVuO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuY29sb3JzLnNldFRoZW1lID0gZnVuY3Rpb24odGhlbWUpIHtcbiAgaWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zb2xlLmxvZygnY29sb3JzLnNldFRoZW1lIG5vdyBvbmx5IGFjY2VwdHMgYW4gb2JqZWN0LCBub3QgYSBzdHJpbmcuICAnICtcbiAgICAgICdJZiB5b3UgYXJlIHRyeWluZyB0byBzZXQgYSB0aGVtZSBmcm9tIGEgZmlsZSwgaXQgaXMgbm93IHlvdXIgKHRoZSAnICtcbiAgICAgICdjYWxsZXJcXCdzKSByZXNwb25zaWJpbGl0eSB0byByZXF1aXJlIHRoZSBmaWxlLiAgVGhlIG9sZCBzeW50YXggJyArXG4gICAgICAnbG9va2VkIGxpa2UgY29sb3JzLnNldFRoZW1lKF9fZGlybmFtZSArICcgK1xuICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKTsgVGhlIG5ldyBzeW50YXggbG9va3MgbGlrZSAnK1xuICAgICAgJ2NvbG9ycy5zZXRUaGVtZShyZXF1aXJlKF9fZGlybmFtZSArICcgK1xuICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKSk7Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIHN0eWxlIGluIHRoZW1lKSB7XG4gICAgKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICBjb2xvcnNbc3R5bGVdID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhlbWVbc3R5bGVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBvdXQgPSBzdHI7XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGVtZVtzdHlsZV0pIHtcbiAgICAgICAgICAgIG91dCA9IGNvbG9yc1t0aGVtZVtzdHlsZV1baV1dKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yc1t0aGVtZVtzdHlsZV1dKHN0cik7XG4gICAgICB9O1xuICAgIH0pKHN0eWxlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIHJldFtuYW1lXSA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBidWlsZChbbmFtZV0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxudmFyIHNlcXVlbmNlciA9IGZ1bmN0aW9uIHNlcXVlbmNlcihtYXAsIHN0cikge1xuICB2YXIgZXhwbG9kZWQgPSBzdHIuc3BsaXQoJycpO1xuICBleHBsb2RlZCA9IGV4cGxvZGVkLm1hcChtYXApO1xuICByZXR1cm4gZXhwbG9kZWQuam9pbignJyk7XG59O1xuXG4vLyBjdXN0b20gZm9ybWF0dGVyIG1ldGhvZHNcbmNvbG9ycy50cmFwID0gcmVxdWlyZSgnLi9jdXN0b20vdHJhcCcpO1xuY29sb3JzLnphbGdvID0gcmVxdWlyZSgnLi9jdXN0b20vemFsZ28nKTtcblxuLy8gbWFwc1xuY29sb3JzLm1hcHMgPSB7fTtcbmNvbG9ycy5tYXBzLmFtZXJpY2EgPSByZXF1aXJlKCcuL21hcHMvYW1lcmljYScpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy56ZWJyYSA9IHJlcXVpcmUoJy4vbWFwcy96ZWJyYScpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy5yYWluYm93ID0gcmVxdWlyZSgnLi9tYXBzL3JhaW5ib3cnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMucmFuZG9tID0gcmVxdWlyZSgnLi9tYXBzL3JhbmRvbScpKGNvbG9ycyk7XG5cbmZvciAodmFyIG1hcCBpbiBjb2xvcnMubWFwcykge1xuICAoZnVuY3Rpb24obWFwKSB7XG4gICAgY29sb3JzW21hcF0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzZXF1ZW5jZXIoY29sb3JzLm1hcHNbbWFwXSwgc3RyKTtcbiAgICB9O1xuICB9KShtYXApO1xufVxuXG5kZWZpbmVQcm9wcyhjb2xvcnMsIGluaXQoKSk7XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uIHJ1blRoZVRyYXAodGV4dCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHRleHQgPSB0ZXh0IHx8ICdSdW4gdGhlIHRyYXAsIGRyb3AgdGhlIGJhc3MnO1xuICB0ZXh0ID0gdGV4dC5zcGxpdCgnJyk7XG4gIHZhciB0cmFwID0ge1xuICAgIGE6IFsnXFx1MDA0MCcsICdcXHUwMTA0JywgJ1xcdTAyM2EnLCAnXFx1MDI0NScsICdcXHUwMzk0JywgJ1xcdTAzOWInLCAnXFx1MDQxNCddLFxuICAgIGI6IFsnXFx1MDBkZicsICdcXHUwMTgxJywgJ1xcdTAyNDMnLCAnXFx1MDI2ZScsICdcXHUwM2IyJywgJ1xcdTBlM2YnXSxcbiAgICBjOiBbJ1xcdTAwYTknLCAnXFx1MDIzYicsICdcXHUwM2ZlJ10sXG4gICAgZDogWydcXHUwMGQwJywgJ1xcdTAxOGEnLCAnXFx1MDUwMCcsICdcXHUwNTAxJywgJ1xcdTA1MDInLCAnXFx1MDUwMyddLFxuICAgIGU6IFsnXFx1MDBjYicsICdcXHUwMTE1JywgJ1xcdTAxOGUnLCAnXFx1MDI1OCcsICdcXHUwM2EzJywgJ1xcdTAzYmUnLCAnXFx1MDRiYycsXG4gICAgICAnXFx1MGE2YyddLFxuICAgIGY6IFsnXFx1MDRmYSddLFxuICAgIGc6IFsnXFx1MDI2MiddLFxuICAgIGg6IFsnXFx1MDEyNicsICdcXHUwMTk1JywgJ1xcdTA0YTInLCAnXFx1MDRiYScsICdcXHUwNGM3JywgJ1xcdTA1MGEnXSxcbiAgICBpOiBbJ1xcdTBmMGYnXSxcbiAgICBqOiBbJ1xcdTAxMzQnXSxcbiAgICBrOiBbJ1xcdTAxMzgnLCAnXFx1MDRhMCcsICdcXHUwNGMzJywgJ1xcdTA1MWUnXSxcbiAgICBsOiBbJ1xcdTAxMzknXSxcbiAgICBtOiBbJ1xcdTAyOGQnLCAnXFx1MDRjZCcsICdcXHUwNGNlJywgJ1xcdTA1MjAnLCAnXFx1MDUyMScsICdcXHUwZDY5J10sXG4gICAgbjogWydcXHUwMGQxJywgJ1xcdTAxNGInLCAnXFx1MDE5ZCcsICdcXHUwMzc2JywgJ1xcdTAzYTAnLCAnXFx1MDQ4YSddLFxuICAgIG86IFsnXFx1MDBkOCcsICdcXHUwMGY1JywgJ1xcdTAwZjgnLCAnXFx1MDFmZScsICdcXHUwMjk4JywgJ1xcdTA0N2EnLCAnXFx1MDVkZCcsXG4gICAgICAnXFx1MDZkZCcsICdcXHUwZTRmJ10sXG4gICAgcDogWydcXHUwMWY3JywgJ1xcdTA0OGUnXSxcbiAgICBxOiBbJ1xcdTA5Y2QnXSxcbiAgICByOiBbJ1xcdTAwYWUnLCAnXFx1MDFhNicsICdcXHUwMjEwJywgJ1xcdTAyNGMnLCAnXFx1MDI4MCcsICdcXHUwNDJmJ10sXG4gICAgczogWydcXHUwMGE3JywgJ1xcdTAzZGUnLCAnXFx1MDNkZicsICdcXHUwM2U4J10sXG4gICAgdDogWydcXHUwMTQxJywgJ1xcdTAxNjYnLCAnXFx1MDM3MyddLFxuICAgIHU6IFsnXFx1MDFiMScsICdcXHUwNTRkJ10sXG4gICAgdjogWydcXHUwNWQ4J10sXG4gICAgdzogWydcXHUwNDI4JywgJ1xcdTA0NjAnLCAnXFx1MDQ3YycsICdcXHUwZDcwJ10sXG4gICAgeDogWydcXHUwNGIyJywgJ1xcdTA0ZmUnLCAnXFx1MDRmYycsICdcXHUwNGZkJ10sXG4gICAgeTogWydcXHUwMGE1JywgJ1xcdTA0YjAnLCAnXFx1MDRjYiddLFxuICAgIHo6IFsnXFx1MDFiNScsICdcXHUwMjQwJ10sXG4gIH07XG4gIHRleHQuZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgYyA9IGMudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgY2hhcnMgPSB0cmFwW2NdIHx8IFsnICddO1xuICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKTtcbiAgICBpZiAodHlwZW9mIHRyYXBbY10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgKz0gdHJhcFtjXVtyYW5kXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IGM7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBwbGVhc2Ugbm9cbm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24gemFsZ28odGV4dCwgb3B0aW9ucykge1xuICB0ZXh0ID0gdGV4dCB8fCAnICAgaGUgaXMgaGVyZSAgICc7XG4gIHZhciBzb3VsID0ge1xuICAgICd1cCc6IFtcbiAgICAgICfMjScsICfMjicsICfMhCcsICfMhScsXG4gICAgICAnzL8nLCAnzJEnLCAnzIYnLCAnzJAnLFxuICAgICAgJ82SJywgJ82XJywgJ82RJywgJ8yHJyxcbiAgICAgICfMiCcsICfMiicsICfNgicsICfMkycsXG4gICAgICAnzIgnLCAnzYonLCAnzYsnLCAnzYwnLFxuICAgICAgJ8yDJywgJ8yCJywgJ8yMJywgJ82QJyxcbiAgICAgICfMgCcsICfMgScsICfMiycsICfMjycsXG4gICAgICAnzJInLCAnzJMnLCAnzJQnLCAnzL0nLFxuICAgICAgJ8yJJywgJ82jJywgJ82kJywgJ82lJyxcbiAgICAgICfNpicsICfNpycsICfNqCcsICfNqScsXG4gICAgICAnzaonLCAnzasnLCAnzawnLCAnza0nLFxuICAgICAgJ82uJywgJ82vJywgJ8y+JywgJ82bJyxcbiAgICAgICfNhicsICfMmicsXG4gICAgXSxcbiAgICAnZG93bic6IFtcbiAgICAgICfMlicsICfMlycsICfMmCcsICfMmScsXG4gICAgICAnzJwnLCAnzJ0nLCAnzJ4nLCAnzJ8nLFxuICAgICAgJ8ygJywgJ8ykJywgJ8ylJywgJ8ymJyxcbiAgICAgICfMqScsICfMqicsICfMqycsICfMrCcsXG4gICAgICAnzK0nLCAnzK4nLCAnzK8nLCAnzLAnLFxuICAgICAgJ8yxJywgJ8yyJywgJ8yzJywgJ8y5JyxcbiAgICAgICfMuicsICfMuycsICfMvCcsICfNhScsXG4gICAgICAnzYcnLCAnzYgnLCAnzYknLCAnzY0nLFxuICAgICAgJ82OJywgJ82TJywgJ82UJywgJ82VJyxcbiAgICAgICfNlicsICfNmScsICfNmicsICfMoycsXG4gICAgXSxcbiAgICAnbWlkJzogW1xuICAgICAgJ8yVJywgJ8ybJywgJ8yAJywgJ8yBJyxcbiAgICAgICfNmCcsICfMoScsICfMoicsICfMpycsXG4gICAgICAnzKgnLCAnzLQnLCAnzLUnLCAnzLYnLFxuICAgICAgJ82cJywgJ82dJywgJ82eJyxcbiAgICAgICfNnycsICfNoCcsICfNoicsICfMuCcsXG4gICAgICAnzLcnLCAnzaEnLCAnINKJJyxcbiAgICBdLFxuICB9O1xuICB2YXIgYWxsID0gW10uY29uY2F0KHNvdWwudXAsIHNvdWwuZG93biwgc291bC5taWQpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbU51bWJlcihyYW5nZSkge1xuICAgIHZhciByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xuICAgIHJldHVybiByO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDaGFyKGNoYXJhY3Rlcikge1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgYWxsLmZpbHRlcihmdW5jdGlvbihpKSB7XG4gICAgICBib29sID0gKGkgPT09IGNoYXJhY3Rlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvb2w7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGhlQ29tZXModGV4dCwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgY291bnRzO1xuICAgIHZhciBsO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnNbJ3VwJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ3VwJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1sndXAnXSA6IHRydWU7XG4gICAgb3B0aW9uc1snbWlkJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ21pZCddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ21pZCddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydkb3duJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ2Rvd24nXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydkb3duJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ3NpemUnXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1snc2l6ZSddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3NpemUnXSA6ICdtYXhpJztcbiAgICB0ZXh0ID0gdGV4dC5zcGxpdCgnJyk7XG4gICAgZm9yIChsIGluIHRleHQpIHtcbiAgICAgIGlmIChpc0NoYXIobCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyB0ZXh0W2xdO1xuICAgICAgY291bnRzID0geyd1cCc6IDAsICdkb3duJzogMCwgJ21pZCc6IDB9O1xuICAgICAgc3dpdGNoIChvcHRpb25zLnNpemUpIHtcbiAgICAgICAgY2FzZSAnbWluaSc6XG4gICAgICAgICAgY291bnRzLnVwID0gcmFuZG9tTnVtYmVyKDgpO1xuICAgICAgICAgIGNvdW50cy5taWQgPSByYW5kb21OdW1iZXIoMik7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heGknOlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcigxNikgKyAzO1xuICAgICAgICAgIGNvdW50cy5taWQgPSByYW5kb21OdW1iZXIoNCkgKyAxO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDY0KSArIDM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY291bnRzLnVwID0gcmFuZG9tTnVtYmVyKDgpICsgMTtcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDYpIC8gMjtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig4KSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcnIgPSBbJ3VwJywgJ21pZCcsICdkb3duJ107XG4gICAgICBmb3IgKHZhciBkIGluIGFycikge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnJbZF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGNvdW50c1tpbmRleF07IGkrKykge1xuICAgICAgICAgIGlmIChvcHRpb25zW2luZGV4XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgc291bFtpbmRleF1bcmFuZG9tTnVtYmVyKHNvdWxbaW5kZXhdLmxlbmd0aCldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8vIGRvbid0IHN1bW1vbiBoaW1cbiAgcmV0dXJuIGhlQ29tZXModGV4dCwgb3B0aW9ucyk7XG59O1xuXG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICcgJykgcmV0dXJuIGxldHRlcjtcbiAgICBzd2l0Y2ggKGklMykge1xuICAgICAgY2FzZSAwOiByZXR1cm4gY29sb3JzLnJlZChsZXR0ZXIpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gY29sb3JzLndoaXRlKGxldHRlcik7XG4gICAgICBjYXNlIDI6IHJldHVybiBjb2xvcnMuYmx1ZShsZXR0ZXIpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAvLyBSb1kgRyBCaVZcbiAgdmFyIHJhaW5ib3dDb2xvcnMgPSBbJ3JlZCcsICd5ZWxsb3cnLCAnZ3JlZW4nLCAnYmx1ZScsICdtYWdlbnRhJ107XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJyAnKSB7XG4gICAgICByZXR1cm4gbGV0dGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sb3JzW3JhaW5ib3dDb2xvcnNbaSsrICUgcmFpbmJvd0NvbG9ycy5sZW5ndGhdXShsZXR0ZXIpO1xuICAgIH1cbiAgfTtcbn07XG5cbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHZhciBhdmFpbGFibGUgPSBbJ3VuZGVybGluZScsICdpbnZlcnNlJywgJ2dyZXknLCAneWVsbG93JywgJ3JlZCcsICdncmVlbicsXG4gICAgJ2JsdWUnLCAnd2hpdGUnLCAnY3lhbicsICdtYWdlbnRhJywgJ2JyaWdodFllbGxvdycsICdicmlnaHRSZWQnLFxuICAgICdicmlnaHRHcmVlbicsICdicmlnaHRCbHVlJywgJ2JyaWdodFdoaXRlJywgJ2JyaWdodEN5YW4nLCAnYnJpZ2h0TWFnZW50YSddO1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIHJldHVybiBsZXR0ZXIgPT09ICcgJyA/IGxldHRlciA6XG4gICAgICBjb2xvcnNbXG4gICAgICAgICAgYXZhaWxhYmxlW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhdmFpbGFibGUubGVuZ3RoIC0gMikpXVxuICAgICAgXShsZXR0ZXIpO1xuICB9O1xufTtcbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgcmV0dXJuIGkgJSAyID09PSAwID8gbGV0dGVyIDogY29sb3JzLmludmVyc2UobGV0dGVyKTtcbiAgfTtcbn07XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxudmFyIHN0eWxlcyA9IHt9O1xubW9kdWxlWydleHBvcnRzJ10gPSBzdHlsZXM7XG5cbnZhciBjb2RlcyA9IHtcbiAgcmVzZXQ6IFswLCAwXSxcblxuICBib2xkOiBbMSwgMjJdLFxuICBkaW06IFsyLCAyMl0sXG4gIGl0YWxpYzogWzMsIDIzXSxcbiAgdW5kZXJsaW5lOiBbNCwgMjRdLFxuICBpbnZlcnNlOiBbNywgMjddLFxuICBoaWRkZW46IFs4LCAyOF0sXG4gIHN0cmlrZXRocm91Z2g6IFs5LCAyOV0sXG5cbiAgYmxhY2s6IFszMCwgMzldLFxuICByZWQ6IFszMSwgMzldLFxuICBncmVlbjogWzMyLCAzOV0sXG4gIHllbGxvdzogWzMzLCAzOV0sXG4gIGJsdWU6IFszNCwgMzldLFxuICBtYWdlbnRhOiBbMzUsIDM5XSxcbiAgY3lhbjogWzM2LCAzOV0sXG4gIHdoaXRlOiBbMzcsIDM5XSxcbiAgZ3JheTogWzkwLCAzOV0sXG4gIGdyZXk6IFs5MCwgMzldLFxuXG4gIGJyaWdodFJlZDogWzkxLCAzOV0sXG4gIGJyaWdodEdyZWVuOiBbOTIsIDM5XSxcbiAgYnJpZ2h0WWVsbG93OiBbOTMsIDM5XSxcbiAgYnJpZ2h0Qmx1ZTogWzk0LCAzOV0sXG4gIGJyaWdodE1hZ2VudGE6IFs5NSwgMzldLFxuICBicmlnaHRDeWFuOiBbOTYsIDM5XSxcbiAgYnJpZ2h0V2hpdGU6IFs5NywgMzldLFxuXG4gIGJnQmxhY2s6IFs0MCwgNDldLFxuICBiZ1JlZDogWzQxLCA0OV0sXG4gIGJnR3JlZW46IFs0MiwgNDldLFxuICBiZ1llbGxvdzogWzQzLCA0OV0sXG4gIGJnQmx1ZTogWzQ0LCA0OV0sXG4gIGJnTWFnZW50YTogWzQ1LCA0OV0sXG4gIGJnQ3lhbjogWzQ2LCA0OV0sXG4gIGJnV2hpdGU6IFs0NywgNDldLFxuICBiZ0dyYXk6IFsxMDAsIDQ5XSxcbiAgYmdHcmV5OiBbMTAwLCA0OV0sXG5cbiAgYmdCcmlnaHRSZWQ6IFsxMDEsIDQ5XSxcbiAgYmdCcmlnaHRHcmVlbjogWzEwMiwgNDldLFxuICBiZ0JyaWdodFllbGxvdzogWzEwMywgNDldLFxuICBiZ0JyaWdodEJsdWU6IFsxMDQsIDQ5XSxcbiAgYmdCcmlnaHRNYWdlbnRhOiBbMTA1LCA0OV0sXG4gIGJnQnJpZ2h0Q3lhbjogWzEwNiwgNDldLFxuICBiZ0JyaWdodFdoaXRlOiBbMTA3LCA0OV0sXG5cbiAgLy8gbGVnYWN5IHN0eWxlcyBmb3IgY29sb3JzIHByZSB2MS4wLjBcbiAgYmxhY2tCRzogWzQwLCA0OV0sXG4gIHJlZEJHOiBbNDEsIDQ5XSxcbiAgZ3JlZW5CRzogWzQyLCA0OV0sXG4gIHllbGxvd0JHOiBbNDMsIDQ5XSxcbiAgYmx1ZUJHOiBbNDQsIDQ5XSxcbiAgbWFnZW50YUJHOiBbNDUsIDQ5XSxcbiAgY3lhbkJHOiBbNDYsIDQ5XSxcbiAgd2hpdGVCRzogWzQ3LCA0OV0sXG5cbn07XG5cbk9iamVjdC5rZXlzKGNvZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICB2YXIgdmFsID0gY29kZXNba2V5XTtcbiAgdmFyIHN0eWxlID0gc3R5bGVzW2tleV0gPSBbXTtcbiAgc3R5bGUub3BlbiA9ICdcXHUwMDFiWycgKyB2YWxbMF0gKyAnbSc7XG4gIHN0eWxlLmNsb3NlID0gJ1xcdTAwMWJbJyArIHZhbFsxXSArICdtJztcbn0pO1xuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXG5vZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG9cbnNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbGFnLCBhcmd2KSB7XG4gIGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblxuICB2YXIgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcbiAgdmFyIHByZWZpeCA9IC9eLXsxLDJ9Ly50ZXN0KGZsYWcpID8gJycgOiAnLS0nO1xuICB2YXIgcG9zID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXG4gIHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xudmFyIGhhc0ZsYWcgPSByZXF1aXJlKCcuL2hhcy1mbGFnLmpzJyk7XG5cbnZhciBlbnYgPSBwcm9jZXNzLmVudjtcblxudmFyIGZvcmNlQ29sb3IgPSB2b2lkIDA7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fCBoYXNGbGFnKCduby1jb2xvcnMnKSB8fCBoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG4gIGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fCBoYXNGbGFnKCdjb2xvcnMnKSB8fCBoYXNGbGFnKCdjb2xvcj10cnVlJylcbiAgICAgICAgICAgfHwgaGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcbiAgZm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcbiAgZm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDBcbiAgICB8fCBwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcbiAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZXZlbDogbGV2ZWwsXG4gICAgaGFzQmFzaWM6IHRydWUsXG4gICAgaGFzMjU2OiBsZXZlbCA+PSAyLFxuICAgIGhhczE2bTogbGV2ZWwgPj0gMyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihzdHJlYW0pIHtcbiAgaWYgKGZvcmNlQ29sb3IgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHwgaGFzRmxhZygnY29sb3I9ZnVsbCcpXG4gICAgICB8fCBoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgaWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBpZiAoc3RyZWFtICYmICFzdHJlYW0uaXNUVFkgJiYgZm9yY2VDb2xvciAhPT0gdHJ1ZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIG1pbiA9IGZvcmNlQ29sb3IgPyAxIDogMDtcblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIC8vIE5vZGUuanMgNy41LjAgaXMgdGhlIGZpcnN0IHZlcnNpb24gb2YgTm9kZS5qcyB0byBpbmNsdWRlIGEgcGF0Y2ggdG9cbiAgICAvLyBsaWJ1diB0aGF0IGVuYWJsZXMgMjU2IGNvbG9yIG91dHB1dCBvbiBXaW5kb3dzLiBBbnl0aGluZyBlYXJsaWVyIGFuZCBpdFxuICAgIC8vIHdvbid0IHdvcmsuIEhvd2V2ZXIsIGhlcmUgd2UgdGFyZ2V0IE5vZGUuanMgOCBhdCBtaW5pbXVtIGFzIGl0IGlzIGFuIExUU1xuICAgIC8vIHJlbGVhc2UsIGFuZCBOb2RlLmpzIDcgaXMgbm90LiBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdFxuICAgIC8vIFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlXG4gICAgLy8gZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG4gICAgdmFyIG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuICAgIGlmIChOdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pID49IDhcbiAgICAgICAgJiYgTnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiYgTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODYpIHtcbiAgICAgIHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCdDSScgaW4gZW52KSB7XG4gICAgaWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSSddLnNvbWUoZnVuY3Rpb24oc2lnbikge1xuICAgICAgcmV0dXJuIHNpZ24gaW4gZW52O1xuICAgIH0pIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgaWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcbiAgICByZXR1cm4gKC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwXG4gICAgKTtcbiAgfVxuXG4gIGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcbiAgICB2YXIgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuICAgIHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuICAgICAgY2FzZSAnaVRlcm0uYXBwJzpcbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuICAgICAgY2FzZSAnSHlwZXInOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICAvLyBObyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgaWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcbiAgdmFyIGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0pO1xuICByZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuICBzdGRvdXQ6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZG91dCksXG4gIHN0ZGVycjogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3RkZXJyKSxcbn07XG4iLCIvL1xuLy8gUmVtYXJrOiBSZXF1aXJpbmcgdGhpcyBmaWxlIHdpbGwgdXNlIHRoZSBcInNhZmVcIiBjb2xvcnMgQVBJLFxuLy8gd2hpY2ggd2lsbCBub3QgdG91Y2ggU3RyaW5nLnByb3RvdHlwZS5cbi8vXG4vLyAgIHZhciBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMvc2FmZScpO1xuLy8gICBjb2xvcnMucmVkKFwiZm9vXCIpXG4vL1xuLy9cbnZhciBjb2xvcnMgPSByZXF1aXJlKCcuL2xpYi9jb2xvcnMnKTtcbm1vZHVsZVsnZXhwb3J0cyddID0gY29sb3JzO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogICAgICBTdGFydCBvZiBXZWJwYWNrIEhvdCBFeHRlbnNpb24gTWlkZGxld2FyZSAgICAgKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qICBUaGlzIHdpbGwgYmUgY29udmVydGVkIGludG8gYSBsb2Rhc2ggdGVtcGwuLCBhbnkgICovXFxuXFxuLyogIGV4dGVybmFsIGFyZ3VtZW50IG11c3QgYmUgcHJvdmlkZWQgdXNpbmcgaXQgICAgICAgKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbihmdW5jdGlvbiAoKSB7XFxuICB0cnkge1xcbiAgICB3aW5kb3c7XFxuICB9IGNhdGNoIChfYSkge1xcbiAgICB2YXIgd2luZG93O1xcbiAgfVxcblxcbiAgdmFyIGluamVjdGlvbkNvbnRleHQgPSB3aW5kb3cgfHwgdGhpcyB8fCB7XFxuICAgIGJyb3dzZXI6IG51bGxcXG4gIH07XFxuICAoZnVuY3Rpb24gKCkge1xcbiAgICBcXFwiPCU9IHBvbHlmaWxsU291cmNlICU+XFxcIjtcXG4gIH0pLmJpbmQoaW5qZWN0aW9uQ29udGV4dCkoKTtcXG5cXG4gIHZhciBfcmVmID0gaW5qZWN0aW9uQ29udGV4dCB8fCB7fSxcXG4gICAgICBicm93c2VyID0gX3JlZi5icm93c2VyO1xcblxcbiAgdmFyIHNpZ25hbHMgPSBKU09OLnBhcnNlKCc8JT0gc2lnbmFscyAlPicpO1xcbiAgdmFyIGNvbmZpZyA9IEpTT04ucGFyc2UoJzwlPSBjb25maWcgJT4nKTtcXG4gIHZhciByZWxvYWRQYWdlID0gXFxcIjwlPSByZWxvYWRQYWdlICU+XFxcIiA9PT0gXFxcInRydWVcXFwiO1xcbiAgdmFyIHdzSG9zdCA9IFxcXCI8JT0gV1NIb3N0ICU+XFxcIjtcXG4gIHZhciBTSUdOX0NIQU5HRSA9IHNpZ25hbHMuU0lHTl9DSEFOR0UsXFxuICAgICAgU0lHTl9SRUxPQUQgPSBzaWduYWxzLlNJR05fUkVMT0FELFxcbiAgICAgIFNJR05fUkVMT0FERUQgPSBzaWduYWxzLlNJR05fUkVMT0FERUQsXFxuICAgICAgU0lHTl9MT0cgPSBzaWduYWxzLlNJR05fTE9HLFxcbiAgICAgIFNJR05fQ09OTkVDVCA9IHNpZ25hbHMuU0lHTl9DT05ORUNUO1xcbiAgdmFyIFJFQ09OTkVDVF9JTlRFUlZBTCA9IGNvbmZpZy5SRUNPTk5FQ1RfSU5URVJWQUwsXFxuICAgICAgU09DS0VUX0VSUl9DT0RFX1JFRiA9IGNvbmZpZy5TT0NLRVRfRVJSX0NPREVfUkVGO1xcblxcbiAgdmFyIF9yZWYyID0gYnJvd3NlciB8fCB7fSxcXG4gICAgICBleHRlbnNpb24gPSBfcmVmMi5leHRlbnNpb24sXFxuICAgICAgcnVudGltZSA9IF9yZWYyLnJ1bnRpbWUsXFxuICAgICAgdGFicyA9IF9yZWYyLnRhYnM7XFxuXFxuICB2YXIgbWFuaWZlc3QgPSBydW50aW1lLmdldE1hbmlmZXN0KCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVscGVyIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG4gIHZhciBmb3JtYXR0ZXIgPSBmdW5jdGlvbiBmb3JtYXR0ZXIobXNnKSB7XFxuICAgIHJldHVybiBcXFwiWyBXRVI6IFxcXCIuY29uY2F0KG1zZywgXFxcIiBdXFxcIik7XFxuICB9O1xcblxcbiAgdmFyIGxvZ2dlciA9IGZ1bmN0aW9uIGxvZ2dlcihtc2cpIHtcXG4gICAgdmFyIGxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcXFwiaW5mb1xcXCI7XFxuICAgIHJldHVybiBjb25zb2xlW2xldmVsXShmb3JtYXR0ZXIobXNnKSk7XFxuICB9O1xcblxcbiAgdmFyIHRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lRm9ybWF0dGVyKGRhdGUpIHtcXG4gICAgcmV0dXJuIGRhdGUudG9UaW1lU3RyaW5nKCkucmVwbGFjZSgvLiooXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn0pLiovLCBcXFwiJDFcXFwiKTtcXG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENhbGxlZCBvbmx5IG9uIGNvbnRlbnQgc2NyaXB0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGNvbnRlbnRTY3JpcHRXb3JrZXIoKSB7XFxuICAgIGNvbnNvbGUubG9nKCdjb250ZW50U2NyaXB0V29ya2VyJyk7XFxuICAgIHJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xcbiAgICAgIHR5cGU6IFNJR05fQ09OTkVDVFxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChtc2cpIHtcXG4gICAgICByZXR1cm4gY29uc29sZS5pbmZvKG1zZyk7XFxuICAgIH0pO1xcbiAgICBydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX3JlZjMpIHtcXG4gICAgICB2YXIgdHlwZSA9IF9yZWYzLnR5cGUsXFxuICAgICAgICAgIHBheWxvYWQgPSBfcmVmMy5wYXlsb2FkO1xcblxcbiAgICAgIHZhciBfYTtcXG5cXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcXG4gICAgICAgIGNhc2UgU0lHTl9SRUxPQUQ6XFxuICAgICAgICAgIGxvZ2dlcihcXFwiRGV0ZWN0ZWQgQ2hhbmdlcy4gUmVsb2FkaW5nIC4uLlxcXCIpO1xcbiAgICAgICAgICByZWxvYWRQYWdlICYmICgoX2EgPSB3aW5kb3cpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sb2NhdGlvbi5yZWxvYWQoKSk7XFxuICAgICAgICAgIGJyZWFrO1xcblxcbiAgICAgICAgY2FzZSBTSUdOX0xPRzpcXG4gICAgICAgICAgY29uc29sZS5pbmZvKHBheWxvYWQpO1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gQ2FsbGVkIG9ubHkgb24gYmFja2dyb3VuZCBzY3JpcHRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXFxuXFxuXFxuICBmdW5jdGlvbiBiYWNrZ3JvdW5kV29ya2VyKHNvY2tldCkge1xcbiAgICBydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoYWN0aW9uLCBzZW5kZXIpIHtcXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFNJR05fQ09OTkVDVCkge1xcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmb3JtYXR0ZXIoXFxcIkNvbm5lY3RlZCB0byBFeHRlbnNpb24gSG90IFJlbG9hZGVyXFxcIikpO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgfSk7XFxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFxcXCJtZXNzYWdlXFxcIiwgZnVuY3Rpb24gKF9yZWY0KSB7XFxuICAgICAgdmFyIGRhdGEgPSBfcmVmNC5kYXRhO1xcblxcbiAgICAgIHZhciBfSlNPTiRwYXJzZSA9IEpTT04ucGFyc2UoZGF0YSksXFxuICAgICAgICAgIHR5cGUgPSBfSlNPTiRwYXJzZS50eXBlLFxcbiAgICAgICAgICBwYXlsb2FkID0gX0pTT04kcGFyc2UucGF5bG9hZDtcXG5cXG4gICAgICBpZiAodHlwZSA9PT0gU0lHTl9DSEFOR0UgJiYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLm9ubHlQYWdlQ2hhbmdlZCkpIHtcXG4gICAgICAgIHRhYnMucXVlcnkoe1xcbiAgICAgICAgICBzdGF0dXM6IFxcXCJjb21wbGV0ZVxcXCJcXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGxvYWRlZFRhYnMpIHtcXG4gICAgICAgICAgbG9hZGVkVGFicy5mb3JFYWNoKGZ1bmN0aW9uICh0YWIpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGFiLmlkICYmIHRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XFxuICAgICAgICAgICAgICB0eXBlOiBTSUdOX1JFTE9BRFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xcbiAgICAgICAgICAgIHR5cGU6IFNJR05fUkVMT0FERUQsXFxuICAgICAgICAgICAgcGF5bG9hZDogZm9ybWF0dGVyKFxcXCJcXFwiLmNvbmNhdCh0aW1lRm9ybWF0dGVyKG5ldyBEYXRlKCkpLCBcXFwiIC0gXFxcIikuY29uY2F0KG1hbmlmZXN0Lm5hbWUsIFxcXCIgc3VjY2Vzc2Z1bGx5IHJlbG9hZGVkXFxcIikpXFxuICAgICAgICAgIH0pKTtcXG4gICAgICAgICAgcnVudGltZS5yZWxvYWQoKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBydW50aW1lLnNlbmRNZXNzYWdlKHtcXG4gICAgICAgICAgdHlwZTogdHlwZSxcXG4gICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXFxcImNsb3NlXFxcIiwgZnVuY3Rpb24gKF9yZWY1KSB7XFxuICAgICAgdmFyIGNvZGUgPSBfcmVmNS5jb2RlO1xcbiAgICAgIGxvZ2dlcihcXFwiU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkLiBDb2RlIFxcXCIuY29uY2F0KGNvZGUsIFxcXCIuIFNlZSBtb3JlIGluIFxcXCIpLmNvbmNhdChTT0NLRVRfRVJSX0NPREVfUkVGKSwgXFxcIndhcm5cXFwiKTtcXG4gICAgICB2YXIgaW50SWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XFxuICAgICAgICBsb2dnZXIoXFxcIkF0dGVtcHRpbmcgdG8gcmVjb25uZWN0ICh0aXA6IENoZWNrIGlmIFdlYnBhY2sgaXMgcnVubmluZylcXFwiKTtcXG4gICAgICAgIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQod3NIb3N0KTtcXG5cXG4gICAgICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgIHJldHVybiBsb2dnZXIoXFxcIkVycm9yIHRyeWluZyB0byByZS1jb25uZWN0LiBSZWF0dGVtcHRpbmcgaW4gXFxcIi5jb25jYXQoUkVDT05ORUNUX0lOVEVSVkFMIC8gMTAwMCwgXFxcInNcXFwiKSwgXFxcIndhcm5cXFwiKTtcXG4gICAgICAgIH07XFxuXFxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFxcXCJvcGVuXFxcIiwgZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBjbGVhckludGVydmFsKGludElkKTtcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJSZWNvbm5lY3RlZC4gUmVsb2FkaW5nIHBsdWdpblxcXCIpO1xcbiAgICAgICAgICBydW50aW1lLnJlbG9hZCgpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSwgUkVDT05ORUNUX0lOVEVSVkFMKTtcXG4gICAgfSk7XFxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBDYWxsZWQgb25seSBvbiBleHRlbnNpb24gcGFnZXMgdGhhdCBhcmUgbm90IHRoZSBiYWNrZ3JvdW5kID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXFxuXFxuXFxuICBmdW5jdGlvbiBleHRlbnNpb25QYWdlV29ya2VyKCkge1xcbiAgICBydW50aW1lLnNlbmRNZXNzYWdlKHtcXG4gICAgICB0eXBlOiBTSUdOX0NPTk5FQ1RcXG4gICAgfSkudGhlbihmdW5jdGlvbiAobXNnKSB7XFxuICAgICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhtc2cpO1xcbiAgICB9KTtcXG4gICAgcnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKF9yZWY2KSB7XFxuICAgICAgdmFyIHR5cGUgPSBfcmVmNi50eXBlLFxcbiAgICAgICAgICBwYXlsb2FkID0gX3JlZjYucGF5bG9hZDtcXG5cXG4gICAgICB2YXIgX2E7XFxuXFxuICAgICAgc3dpdGNoICh0eXBlKSB7XFxuICAgICAgICBjYXNlIFNJR05fQ0hBTkdFOlxcbiAgICAgICAgICBsb2dnZXIoXFxcIkRldGVjdGVkIENoYW5nZXMuIFJlbG9hZGluZyAuLi5cXFwiKTtcXG4gICAgICAgICAgcmVsb2FkUGFnZSAmJiAoKF9hID0gd2luZG93KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubG9jYXRpb24ucmVsb2FkKCkpO1xcbiAgICAgICAgICBicmVhaztcXG5cXG4gICAgICAgIGNhc2UgU0lHTl9MT0c6XFxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhwYXlsb2FkKTtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT0gQm9vdHN0cmFwcyB0aGUgbWlkZGxld2FyZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIHJ1bnRpbWUucmVsb2FkID8gIXdpbmRvdyA/IGJhY2tncm91bmRXb3JrZXIobmV3IFdlYlNvY2tldCh3c0hvc3QpKSA6IGV4dGVuc2lvblBhZ2VXb3JrZXIoKSA6IGNvbnRlbnRTY3JpcHRXb3JrZXIoKTtcXG59KSgpO1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogRW5kIG9mIFdlYnBhY2sgSG90IEV4dGVuc2lvbiBNaWRkbGV3YXJlICAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXCIiLCJleHBvcnQgZGVmYXVsdCBcIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XFxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXFxcImZ1bmN0aW9uXFxcIiAmJiBkZWZpbmUuYW1kKSB7XFxuICAgIGRlZmluZShcXFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXFxcIiwgW1xcXCJtb2R1bGVcXFwiXSwgZmFjdG9yeSk7XFxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcXFwidW5kZWZpbmVkXFxcIikge1xcbiAgICBmYWN0b3J5KG1vZHVsZSk7XFxuICB9IGVsc2Uge1xcbiAgICB2YXIgbW9kID0ge1xcbiAgICAgIGV4cG9ydHM6IHt9XFxuICAgIH07XFxuICAgIGZhY3RvcnkobW9kKTtcXG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcXG4gIH1cXG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XFxuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC41LjAgLSBUaHUgU2VwIDI2IDIwMTkgMjI6MjI6MjYgKi9cXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXFxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXFxuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXFxuICAgKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xcbiAgXFxcInVzZSBzdHJpY3RcXFwiO1xcblxcbiAgaWYgKHR5cGVvZiBicm93c2VyID09PSBcXFwidW5kZWZpbmVkXFxcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcXG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXFxcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cXFwiO1xcbiAgICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcXFwiUmV0dXJuaW5nIGEgUHJvbWlzZSBpcyB0aGUgcHJlZmVycmVkIHdheSB0byBzZW5kIGEgcmVwbHkgZnJvbSBhbiBvbk1lc3NhZ2Uvb25NZXNzYWdlRXh0ZXJuYWwgbGlzdGVuZXIsIGFzIHRoZSBzZW5kUmVzcG9uc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHNwZWNzIChTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvcnVudGltZS9vbk1lc3NhZ2UpXFxcIjtcXG5cXG4gICAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXFxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxcbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFxcXCJpbmNsdWRlXFxcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxcbiAgICAgIC8vIEpTT04gZmlsZS5cXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcXG4gICAgICAgIFxcXCJhbGFybXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJjbGVhckFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJib29rbWFya3NcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldENoaWxkcmVuXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFJlY2VudFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRTdWJUcmVlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFRyZWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwibW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlVHJlZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZWFyY2hcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJicm93c2VyQWN0aW9uXFxcIjoge1xcbiAgICAgICAgICBcXFwiZGlzYWJsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImVuYWJsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEJhZGdlVGV4dFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJvcGVuUG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRCYWRnZVRleHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRJY29uXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0VGl0bGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiYnJvd3NpbmdEYXRhXFxcIjoge1xcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUNhY2hlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUNvb2tpZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlRG93bmxvYWRzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUZvcm1EYXRhXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUhpc3RvcnlcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlTG9jYWxTdG9yYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVBhc3N3b3Jkc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVQbHVnaW5EYXRhXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldHRpbmdzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJjb21tYW5kc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiY29udGV4dE1lbnVzXFxcIjoge1xcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImNvb2tpZXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbENvb2tpZVN0b3Jlc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJkZXZ0b29sc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImluc3BlY3RlZFdpbmRvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwiZXZhbFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMixcXG4gICAgICAgICAgICAgIFxcXCJzaW5nbGVDYWxsYmFja0FyZ1xcXCI6IGZhbHNlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicGFuZWxzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDMsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDMsXFxuICAgICAgICAgICAgICBcXFwic2luZ2xlQ2FsbGJhY2tBcmdcXFwiOiB0cnVlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImRvd25sb2Fkc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNhbmNlbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkb3dubG9hZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJlcmFzZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRGaWxlSWNvblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJvcGVuXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicGF1c2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlRmlsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXN1bWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VhcmNoXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNob3dcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiZXh0ZW5zaW9uXFxcIjoge1xcbiAgICAgICAgICBcXFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImhpc3RvcnlcXFwiOiB7XFxuICAgICAgICAgIFxcXCJhZGRVcmxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGVsZXRlQWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRlbGV0ZVJhbmdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRlbGV0ZVVybFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRWaXNpdHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VhcmNoXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJpMThuXFxcIjoge1xcbiAgICAgICAgICBcXFwiZGV0ZWN0TGFuZ3VhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJpZGVudGl0eVxcXCI6IHtcXG4gICAgICAgICAgXFxcImxhdW5jaFdlYkF1dGhGbG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJpZGxlXFxcIjoge1xcbiAgICAgICAgICBcXFwicXVlcnlTdGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwibWFuYWdlbWVudFxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0U2VsZlxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRFbmFibGVkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVuaW5zdGFsbFNlbGZcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIm5vdGlmaWNhdGlvbnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFBlcm1pc3Npb25MZXZlbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInBhZ2VBY3Rpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJoaWRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0SWNvblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2hvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJwZXJtaXNzaW9uc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNvbnRhaW5zXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVxdWVzdFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwicnVudGltZVxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldEJhY2tncm91bmRQYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFBsYXRmb3JtSW5mb1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJvcGVuT3B0aW9uc1BhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVxdWVzdFVwZGF0ZUNoZWNrXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlbmRNZXNzYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDNcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlbmROYXRpdmVNZXNzYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFVuaW5zdGFsbFVSTFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwic2Vzc2lvbnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXREZXZpY2VzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFJlY2VudGx5Q2xvc2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlc3RvcmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInN0b3JhZ2VcXFwiOiB7XFxuICAgICAgICAgIFxcXCJsb2NhbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiY2xlYXJcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRCeXRlc0luVXNlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwic2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwibWFuYWdlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0Qnl0ZXNJblVzZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInN5bmNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0Qnl0ZXNJblVzZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcInNldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ0YWJzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY2FwdHVyZVZpc2libGVUYWJcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRldGVjdExhbmd1YWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRpc2NhcmRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZHVwbGljYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImV4ZWN1dGVTY3JpcHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEN1cnJlbnRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Wm9vbVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRab29tU2V0dGluZ3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaGlnaGxpZ2h0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImluc2VydENTU1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInF1ZXJ5XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbG9hZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQ1NTXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlbmRNZXNzYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDNcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFpvb21cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0Wm9vbVNldHRpbmdzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwidG9wU2l0ZXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIndlYk5hdmlnYXRpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRBbGxGcmFtZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0RnJhbWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIndlYlJlcXVlc3RcXFwiOiB7XFxuICAgICAgICAgIFxcXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ3aW5kb3dzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Q3VycmVudFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRMYXN0Rm9jdXNlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuXFxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcXFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcXFwiKTtcXG4gICAgICB9XFxuXFxuICAgICAgLyoqXFxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXFxuICAgICAgICogb3RoZXJ3aXNlLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxcbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXFxuICAgICAgICovXFxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcXG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcXG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGdldChrZXkpIHtcXG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XFxuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAvKipcXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXFxuICAgICAgICovXFxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcXG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFxcXCJvYmplY3RcXFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcXFwiZnVuY3Rpb25cXFwiO1xcbiAgICAgIH07XFxuXFxuICAgICAgLyoqXFxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XFxuICAgICAgICpcXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXFxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXFxuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxcbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3Rpb25cXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXFxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXFxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhSZXNvbHZlZEFyZ3NcXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBjcmVhdGVkIGJ5IHRoZSB3cmFwcGVkIGFzeW5jIGZ1bmN0aW9uLlxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxcbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxcbiAgICAgICAqL1xcbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcXG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKTtcXG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XFxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFxcXCJhcmd1bWVudFxcXCIgOiBcXFwiYXJndW1lbnRzXFxcIjtcXG5cXG4gICAgICAvKipcXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXFxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXFxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXFxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhSZXNvbHZlZEFyZ3NcXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBjcmVhdGVkIGJ5IHRoZSB3cmFwcGVkIGFzeW5jIGZ1bmN0aW9uLlxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XFxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxcbiAgICAgICAqL1xcbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XFxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcXG4gICAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXFxuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXFxuICAgICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHsgcmVzb2x2ZSwgcmVqZWN0IH0sIG1ldGFkYXRhKSk7XFxuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcXFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcXFwiLCBjYkVycm9yKTtcXG5cXG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xcblxcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xcblxcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XFxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XFxuICAgICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soeyByZXNvbHZlLCByZWplY3QgfSwgbWV0YWRhdGEpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgfTtcXG4gICAgICB9O1xcblxcbiAgICAgIC8qKlxcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXFxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcXG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcXG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cXG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cXG4gICAgICAgKi9cXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XFxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcXG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xcblxcbiAgICAgIC8qKlxcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXFxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxcbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcXG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXFxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxcbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxcbiAgICAgICAqL1xcbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XFxuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcXG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XFxuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xcblxcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXFxuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXFxuXFxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcXFwiZnVuY3Rpb25cXFwiKSB7XFxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXFxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XFxuICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXFxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXFxcIm9iamVjdFxcXCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XFxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXFxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXFxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XFxuICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XFxuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcXG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XFxuICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcXFwiZ2V0XFxcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcXG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXFxuICAgICAgICAvL1xcbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcXG4gICAgICB9O1xcblxcbiAgICAgIC8qKlxcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXFxuICAgICAgICpcXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXFxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXFxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XFxuICAgICAgICovXFxuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XFxuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XFxuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xcbiAgICAgICAgfVxcbiAgICAgIH0pO1xcblxcbiAgICAgIC8vIEtlZXAgdHJhY2sgaWYgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgaGFzIGJlZW4gbG9nZ2VkIGF0IGxlYXN0IG9uY2UuXFxuICAgICAgbGV0IGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IGZhbHNlO1xcblxcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcXG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyoqXFxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxcbiAgICAgICAgICpcXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXFxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXFxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cXG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cXG4gICAgICAgICAqL1xcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xcblxcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcXG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcXG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgICBpZiAoIWxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZykge1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XFxuICAgICAgICAgICAgICAgIGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xcbiAgICAgICAgICAgIH07XFxuICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICBsZXQgcmVzdWx0O1xcbiAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XFxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XFxuXFxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxcbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXFxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcXG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXFxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcXG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXFxcInN0cmluZ1xcXCIpKSB7XFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xcbiAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFxcXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXFxcIjtcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XFxuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxcbiAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcXG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXFxcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVxcXCIsIGVycik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH07XFxuXFxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXFxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcXG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH07XFxuICAgICAgfSk7XFxuXFxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoeyByZWplY3QsIHJlc29sdmUgfSwgcmVwbHkpID0+IHtcXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XFxuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXFxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxcbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XFxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xcbiAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIHJlamVjdChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcXG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXFxuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xcbiAgICAgICAgfVxcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcXG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XFxuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XFxuICAgICAgICBydW50aW1lOiB7XFxuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcXFwic2VuZE1lc3NhZ2VcXFwiLCB7IG1pbkFyZ3M6IDEsIG1heEFyZ3M6IDMgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICB0YWJzOiB7XFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcXFwic2VuZE1lc3NhZ2VcXFwiLCB7IG1pbkFyZ3M6IDIsIG1heEFyZ3M6IDMgfSlcXG4gICAgICAgIH1cXG4gICAgICB9O1xcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcXG4gICAgICAgIGNsZWFyOiB7IG1pbkFyZ3M6IDEsIG1heEFyZ3M6IDEgfSxcXG4gICAgICAgIGdldDogeyBtaW5BcmdzOiAxLCBtYXhBcmdzOiAxIH0sXFxuICAgICAgICBzZXQ6IHsgbWluQXJnczogMSwgbWF4QXJnczogMSB9XFxuICAgICAgfTtcXG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xcbiAgICAgICAgbmV0d29yazoge1xcbiAgICAgICAgICBuZXR3b3JrUHJlZGljdGlvbkVuYWJsZWQ6IHNldHRpbmdNZXRhZGF0YSxcXG4gICAgICAgICAgd2ViUlRDSVBIYW5kbGluZ1BvbGljeTogc2V0dGluZ01ldGFkYXRhXFxuICAgICAgICB9LFxcbiAgICAgICAgc2VydmljZXM6IHtcXG4gICAgICAgICAgcGFzc3dvcmRTYXZpbmdFbmFibGVkOiBzZXR0aW5nTWV0YWRhdGFcXG4gICAgICAgIH0sXFxuICAgICAgICB3ZWJzaXRlczoge1xcbiAgICAgICAgICBoeXBlcmxpbmtBdWRpdGluZ0VuYWJsZWQ6IHNldHRpbmdNZXRhZGF0YSxcXG4gICAgICAgICAgcmVmZXJyZXJzRW5hYmxlZDogc2V0dGluZ01ldGFkYXRhXFxuICAgICAgICB9XFxuICAgICAgfTtcXG5cXG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xcbiAgICB9O1xcblxcbiAgICBpZiAodHlwZW9mIGNocm9tZSAhPSBcXFwib2JqZWN0XFxcIiB8fCAhY2hyb21lIHx8ICFjaHJvbWUucnVudGltZSB8fCAhY2hyb21lLnJ1bnRpbWUuaWQpIHtcXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXFxcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlxcXCIpO1xcbiAgICB9XFxuXFxuICAgIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XFxuICB9IGVsc2Uge1xcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7XFxuICB9XFxufSk7XFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcXG5cIiIsInZhciBTb3VyY2VNYXBDb25zdW1lciA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKS5Tb3VyY2VNYXBDb25zdW1lcjtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG52YXIgZnM7XG50cnkge1xuICBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gIGlmICghZnMuZXhpc3RzU3luYyB8fCAhZnMucmVhZEZpbGVTeW5jKSB7XG4gICAgLy8gZnMgZG9lc24ndCBoYXZlIGFsbCBtZXRob2RzIHdlIG5lZWRcbiAgICBmcyA9IG51bGw7XG4gIH1cbn0gY2F0Y2ggKGVycikge1xuICAvKiBub3AgKi9cbn1cblxudmFyIGJ1ZmZlckZyb20gPSByZXF1aXJlKCdidWZmZXItZnJvbScpO1xuXG4vLyBPbmx5IGluc3RhbGwgb25jZSBpZiBjYWxsZWQgbXVsdGlwbGUgdGltZXNcbnZhciBlcnJvckZvcm1hdHRlckluc3RhbGxlZCA9IGZhbHNlO1xudmFyIHVuY2F1Z2h0U2hpbUluc3RhbGxlZCA9IGZhbHNlO1xuXG4vLyBJZiB0cnVlLCB0aGUgY2FjaGVzIGFyZSByZXNldCBiZWZvcmUgYSBzdGFjayB0cmFjZSBmb3JtYXR0aW5nIG9wZXJhdGlvblxudmFyIGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA9IGZhbHNlO1xuXG4vLyBTdXBwb3J0cyB7YnJvd3Nlciwgbm9kZSwgYXV0b31cbnZhciBlbnZpcm9ubWVudCA9IFwiYXV0b1wiO1xuXG4vLyBNYXBzIGEgZmlsZSBwYXRoIHRvIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGZpbGUgY29udGVudHNcbnZhciBmaWxlQ29udGVudHNDYWNoZSA9IHt9O1xuXG4vLyBNYXBzIGEgZmlsZSBwYXRoIHRvIGEgc291cmNlIG1hcCBmb3IgdGhhdCBmaWxlXG52YXIgc291cmNlTWFwQ2FjaGUgPSB7fTtcblxuLy8gUmVnZXggZm9yIGRldGVjdGluZyBzb3VyY2UgbWFwc1xudmFyIHJlU291cmNlTWFwID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvblteLF0rYmFzZTY0LC87XG5cbi8vIFByaW9yaXR5IGxpc3Qgb2YgcmV0cmlldmUgaGFuZGxlcnNcbnZhciByZXRyaWV2ZUZpbGVIYW5kbGVycyA9IFtdO1xudmFyIHJldHJpZXZlTWFwSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gaXNJbkJyb3dzZXIoKSB7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJicm93c2VyXCIpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJub2RlXCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJykgJiYgISh3aW5kb3cucmVxdWlyZSAmJiB3aW5kb3cubW9kdWxlICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09IFwicmVuZGVyZXJcIikpO1xufVxuXG5mdW5jdGlvbiBoYXNHbG9iYWxQcm9jZXNzRXZlbnRFbWl0dGVyKCkge1xuICByZXR1cm4gKCh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpICYmIChwcm9jZXNzICE9PSBudWxsKSAmJiAodHlwZW9mIHByb2Nlc3Mub24gPT09ICdmdW5jdGlvbicpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlckV4ZWMobGlzdCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmV0ID0gbGlzdFtpXShhcmcpO1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIHJldHJpZXZlRmlsZSA9IGhhbmRsZXJFeGVjKHJldHJpZXZlRmlsZUhhbmRsZXJzKTtcblxucmV0cmlldmVGaWxlSGFuZGxlcnMucHVzaChmdW5jdGlvbihwYXRoKSB7XG4gIC8vIFRyaW0gdGhlIHBhdGggdG8gbWFrZSBzdXJlIHRoZXJlIGlzIG5vIGV4dHJhIHdoaXRlc3BhY2UuXG4gIHBhdGggPSBwYXRoLnRyaW0oKTtcbiAgaWYgKC9eZmlsZTovLnRlc3QocGF0aCkpIHtcbiAgICAvLyBleGlzdHNTeW5jL3JlYWRGaWxlU3luYyBjYW4ndCBoYW5kbGUgZmlsZSBwcm90b2NvbCwgYnV0IG9uY2Ugc3RyaXBwZWQsIGl0IHdvcmtzXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvZmlsZTpcXC9cXC9cXC8oXFx3Oik/LywgZnVuY3Rpb24ocHJvdG9jb2wsIGRyaXZlKSB7XG4gICAgICByZXR1cm4gZHJpdmUgP1xuICAgICAgICAnJyA6IC8vIGZpbGU6Ly8vQzovZGlyL2ZpbGUgLT4gQzovZGlyL2ZpbGVcbiAgICAgICAgJy8nOyAvLyBmaWxlOi8vL3Jvb3QtZGlyL2ZpbGUgLT4gL3Jvb3QtZGlyL2ZpbGVcbiAgICB9KTtcbiAgfVxuICBpZiAocGF0aCBpbiBmaWxlQ29udGVudHNDYWNoZSkge1xuICAgIHJldHVybiBmaWxlQ29udGVudHNDYWNoZVtwYXRoXTtcbiAgfVxuXG4gIHZhciBjb250ZW50cyA9ICcnO1xuICB0cnkge1xuICAgIGlmICghZnMpIHtcbiAgICAgIC8vIFVzZSBTSkFYIGlmIHdlIGFyZSBpbiB0aGUgYnJvd3NlclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBhdGgsIC8qKiBhc3luYyAqLyBmYWxzZSk7XG4gICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29udGVudHMgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgdGhlIGZpbGVzeXN0ZW1cbiAgICAgIGNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGY4Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlcikge1xuICAgIC8qIGlnbm9yZSBhbnkgZXJyb3JzICovXG4gIH1cblxuICByZXR1cm4gZmlsZUNvbnRlbnRzQ2FjaGVbcGF0aF0gPSBjb250ZW50cztcbn0pO1xuXG4vLyBTdXBwb3J0IFVSTHMgcmVsYXRpdmUgdG8gYSBkaXJlY3RvcnksIGJ1dCBiZSBjYXJlZnVsIGFib3V0IGEgcHJvdG9jb2wgcHJlZml4XG4vLyBpbiBjYXNlIHdlIGFyZSBpbiB0aGUgYnJvd3NlciAoaS5lLiBkaXJlY3RvcmllcyBtYXkgc3RhcnQgd2l0aCBcImh0dHA6Ly9cIiBvciBcImZpbGU6Ly8vXCIpXG5mdW5jdGlvbiBzdXBwb3J0UmVsYXRpdmVVUkwoZmlsZSwgdXJsKSB7XG4gIGlmICghZmlsZSkgcmV0dXJuIHVybDtcbiAgdmFyIGRpciA9IHBhdGguZGlybmFtZShmaWxlKTtcbiAgdmFyIG1hdGNoID0gL15cXHcrOlxcL1xcL1teXFwvXSovLmV4ZWMoZGlyKTtcbiAgdmFyIHByb3RvY29sID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xuICB2YXIgc3RhcnRQYXRoID0gZGlyLnNsaWNlKHByb3RvY29sLmxlbmd0aCk7XG4gIGlmIChwcm90b2NvbCAmJiAvXlxcL1xcd1xcOi8udGVzdChzdGFydFBhdGgpKSB7XG4gICAgLy8gaGFuZGxlIGZpbGU6Ly8vQzovIHBhdGhzXG4gICAgcHJvdG9jb2wgKz0gJy8nO1xuICAgIHJldHVybiBwcm90b2NvbCArIHBhdGgucmVzb2x2ZShkaXIuc2xpY2UocHJvdG9jb2wubGVuZ3RoKSwgdXJsKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gIH1cbiAgcmV0dXJuIHByb3RvY29sICsgcGF0aC5yZXNvbHZlKGRpci5zbGljZShwcm90b2NvbC5sZW5ndGgpLCB1cmwpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVNvdXJjZU1hcFVSTChzb3VyY2UpIHtcbiAgdmFyIGZpbGVEYXRhO1xuXG4gIGlmIChpc0luQnJvd3NlcigpKSB7XG4gICAgIHRyeSB7XG4gICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgIHhoci5vcGVuKCdHRVQnLCBzb3VyY2UsIGZhbHNlKTtcbiAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICBmaWxlRGF0YSA9IHhoci5yZWFkeVN0YXRlID09PSA0ID8geGhyLnJlc3BvbnNlVGV4dCA6IG51bGw7XG5cbiAgICAgICAvLyBTdXBwb3J0IHByb3ZpZGluZyBhIHNvdXJjZU1hcHBpbmdVUkwgdmlhIHRoZSBTb3VyY2VNYXAgaGVhZGVyXG4gICAgICAgdmFyIHNvdXJjZU1hcEhlYWRlciA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIlNvdXJjZU1hcFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVNvdXJjZU1hcFwiKTtcbiAgICAgICBpZiAoc291cmNlTWFwSGVhZGVyKSB7XG4gICAgICAgICByZXR1cm4gc291cmNlTWFwSGVhZGVyO1xuICAgICAgIH1cbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIFVSTCBvZiB0aGUgc291cmNlIG1hcFxuICBmaWxlRGF0YSA9IHJldHJpZXZlRmlsZShzb3VyY2UpO1xuICB2YXIgcmUgPSAvKD86XFwvXFwvW0AjXVtcXHNdKnNvdXJjZU1hcHBpbmdVUkw9KFteXFxzJ1wiXSspW1xcc10qJCl8KD86XFwvXFwqW0AjXVtcXHNdKnNvdXJjZU1hcHBpbmdVUkw9KFteXFxzKidcIl0rKVtcXHNdKig/OlxcKlxcLylbXFxzXSokKS9tZztcbiAgLy8gS2VlcCBleGVjdXRpbmcgdGhlIHNlYXJjaCB0byBmaW5kIHRoZSAqbGFzdCogc291cmNlTWFwcGluZ1VSTCB0byBhdm9pZFxuICAvLyBwaWNraW5nIHVwIHNvdXJjZU1hcHBpbmdVUkxzIGZyb20gY29tbWVudHMsIHN0cmluZ3MsIGV0Yy5cbiAgdmFyIGxhc3RNYXRjaCwgbWF0Y2g7XG4gIHdoaWxlIChtYXRjaCA9IHJlLmV4ZWMoZmlsZURhdGEpKSBsYXN0TWF0Y2ggPSBtYXRjaDtcbiAgaWYgKCFsYXN0TWF0Y2gpIHJldHVybiBudWxsO1xuICByZXR1cm4gbGFzdE1hdGNoWzFdO1xufTtcblxuLy8gQ2FuIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHJldHJpZXZlU291cmNlTWFwIG9wdGlvbiB0byBpbnN0YWxsLiBUYWtlcyBhXG4vLyBnZW5lcmF0ZWQgc291cmNlIGZpbGVuYW1lOyByZXR1cm5zIGEge21hcCwgb3B0aW9uYWwgdXJsfSBvYmplY3QsIG9yIG51bGwgaWZcbi8vIHRoZXJlIGlzIG5vIHNvdXJjZSBtYXAuICBUaGUgbWFwIGZpZWxkIG1heSBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgdGhlIHBhcnNlZFxuLy8gSlNPTiBvYmplY3QgKGllLCBpdCBtdXN0IGJlIGEgdmFsaWQgYXJndW1lbnQgdG8gdGhlIFNvdXJjZU1hcENvbnN1bWVyXG4vLyBjb25zdHJ1Y3RvcikuXG52YXIgcmV0cmlldmVTb3VyY2VNYXAgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZU1hcEhhbmRsZXJzKTtcbnJldHJpZXZlTWFwSGFuZGxlcnMucHVzaChmdW5jdGlvbihzb3VyY2UpIHtcbiAgdmFyIHNvdXJjZU1hcHBpbmdVUkwgPSByZXRyaWV2ZVNvdXJjZU1hcFVSTChzb3VyY2UpO1xuICBpZiAoIXNvdXJjZU1hcHBpbmdVUkwpIHJldHVybiBudWxsO1xuXG4gIC8vIFJlYWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzb3VyY2UgbWFwXG4gIHZhciBzb3VyY2VNYXBEYXRhO1xuICBpZiAocmVTb3VyY2VNYXAudGVzdChzb3VyY2VNYXBwaW5nVVJMKSkge1xuICAgIC8vIFN1cHBvcnQgc291cmNlIG1hcCBVUkwgYXMgYSBkYXRhIHVybFxuICAgIHZhciByYXdEYXRhID0gc291cmNlTWFwcGluZ1VSTC5zbGljZShzb3VyY2VNYXBwaW5nVVJMLmluZGV4T2YoJywnKSArIDEpO1xuICAgIHNvdXJjZU1hcERhdGEgPSBidWZmZXJGcm9tKHJhd0RhdGEsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gICAgc291cmNlTWFwcGluZ1VSTCA9IHNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdXBwb3J0IHNvdXJjZSBtYXAgVVJMcyByZWxhdGl2ZSB0byB0aGUgc291cmNlIFVSTFxuICAgIHNvdXJjZU1hcHBpbmdVUkwgPSBzdXBwb3J0UmVsYXRpdmVVUkwoc291cmNlLCBzb3VyY2VNYXBwaW5nVVJMKTtcbiAgICBzb3VyY2VNYXBEYXRhID0gcmV0cmlldmVGaWxlKHNvdXJjZU1hcHBpbmdVUkwpO1xuICB9XG5cbiAgaWYgKCFzb3VyY2VNYXBEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVybDogc291cmNlTWFwcGluZ1VSTCxcbiAgICBtYXA6IHNvdXJjZU1hcERhdGFcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtYXBTb3VyY2VQb3NpdGlvbihwb3NpdGlvbikge1xuICB2YXIgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXTtcbiAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAvLyBDYWxsIHRoZSAob3ZlcnJpZGVhYmxlKSByZXRyaWV2ZVNvdXJjZU1hcCBmdW5jdGlvbiB0byBnZXQgdGhlIHNvdXJjZSBtYXAuXG4gICAgdmFyIHVybEFuZE1hcCA9IHJldHJpZXZlU291cmNlTWFwKHBvc2l0aW9uLnNvdXJjZSk7XG4gICAgaWYgKHVybEFuZE1hcCkge1xuICAgICAgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXSA9IHtcbiAgICAgICAgdXJsOiB1cmxBbmRNYXAudXJsLFxuICAgICAgICBtYXA6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1cmxBbmRNYXAubWFwKVxuICAgICAgfTtcblxuICAgICAgLy8gTG9hZCBhbGwgc291cmNlcyBzdG9yZWQgaW5saW5lIHdpdGggdGhlIHNvdXJjZSBtYXAgaW50byB0aGUgZmlsZSBjYWNoZVxuICAgICAgLy8gdG8gcHJldGVuZCBsaWtlIHRoZXkgYXJlIGFscmVhZHkgbG9hZGVkLiBUaGV5IG1heSBub3QgZXhpc3Qgb24gZGlzay5cbiAgICAgIGlmIChzb3VyY2VNYXAubWFwLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICAgIHNvdXJjZU1hcC5tYXAuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSwgaSkge1xuICAgICAgICAgIHZhciBjb250ZW50cyA9IHNvdXJjZU1hcC5tYXAuc291cmNlc0NvbnRlbnRbaV07XG4gICAgICAgICAgaWYgKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gc3VwcG9ydFJlbGF0aXZlVVJMKHNvdXJjZU1hcC51cmwsIHNvdXJjZSk7XG4gICAgICAgICAgICBmaWxlQ29udGVudHNDYWNoZVt1cmxdID0gY29udGVudHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXSA9IHtcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBtYXA6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzb2x2ZSB0aGUgc291cmNlIFVSTCByZWxhdGl2ZSB0byB0aGUgVVJMIG9mIHRoZSBzb3VyY2UgbWFwXG4gIGlmIChzb3VyY2VNYXAgJiYgc291cmNlTWFwLm1hcCAmJiB0eXBlb2Ygc291cmNlTWFwLm1hcC5vcmlnaW5hbFBvc2l0aW9uRm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG9yaWdpbmFsUG9zaXRpb24gPSBzb3VyY2VNYXAubWFwLm9yaWdpbmFsUG9zaXRpb25Gb3IocG9zaXRpb24pO1xuXG4gICAgLy8gT25seSByZXR1cm4gdGhlIG9yaWdpbmFsIHBvc2l0aW9uIGlmIGEgbWF0Y2hpbmcgbGluZSB3YXMgZm91bmQuIElmIG5vXG4gICAgLy8gbWF0Y2hpbmcgbGluZSBpcyBmb3VuZCB0aGVuIHdlIHJldHVybiBwb3NpdGlvbiBpbnN0ZWFkLCB3aGljaCB3aWxsIGNhdXNlXG4gICAgLy8gdGhlIHN0YWNrIHRyYWNlIHRvIHByaW50IHRoZSBwYXRoIGFuZCBsaW5lIGZvciB0aGUgY29tcGlsZWQgZmlsZS4gSXQgaXNcbiAgICAvLyBiZXR0ZXIgdG8gZ2l2ZSBhIHByZWNpc2UgbG9jYXRpb24gaW4gdGhlIGNvbXBpbGVkIGZpbGUgdGhhbiBhIHZhZ3VlXG4gICAgLy8gbG9jYXRpb24gaW4gdGhlIG9yaWdpbmFsIGZpbGUuXG4gICAgaWYgKG9yaWdpbmFsUG9zaXRpb24uc291cmNlICE9PSBudWxsKSB7XG4gICAgICBvcmlnaW5hbFBvc2l0aW9uLnNvdXJjZSA9IHN1cHBvcnRSZWxhdGl2ZVVSTChcbiAgICAgICAgc291cmNlTWFwLnVybCwgb3JpZ2luYWxQb3NpdGlvbi5zb3VyY2UpO1xuICAgICAgcmV0dXJuIG9yaWdpbmFsUG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG4vLyBQYXJzZXMgY29kZSBnZW5lcmF0ZWQgYnkgRm9ybWF0RXZhbE9yaWdpbigpLCBhIGZ1bmN0aW9uIGluc2lkZSBWODpcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvc291cmNlL2Jyb3dzZS90cnVuay9zcmMvbWVzc2FnZXMuanNcbmZ1bmN0aW9uIG1hcEV2YWxPcmlnaW4ob3JpZ2luKSB7XG4gIC8vIE1vc3QgZXZhbCgpIGNhbGxzIGFyZSBpbiB0aGlzIGZvcm1hdFxuICB2YXIgbWF0Y2ggPSAvXmV2YWwgYXQgKFteKF0rKSBcXCgoLispOihcXGQrKTooXFxkKylcXCkkLy5leGVjKG9yaWdpbik7XG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBwb3NpdGlvbiA9IG1hcFNvdXJjZVBvc2l0aW9uKHtcbiAgICAgIHNvdXJjZTogbWF0Y2hbMl0sXG4gICAgICBsaW5lOiArbWF0Y2hbM10sXG4gICAgICBjb2x1bW46IG1hdGNoWzRdIC0gMVxuICAgIH0pO1xuICAgIHJldHVybiAnZXZhbCBhdCAnICsgbWF0Y2hbMV0gKyAnICgnICsgcG9zaXRpb24uc291cmNlICsgJzonICtcbiAgICAgIHBvc2l0aW9uLmxpbmUgKyAnOicgKyAocG9zaXRpb24uY29sdW1uICsgMSkgKyAnKSc7XG4gIH1cblxuICAvLyBQYXJzZSBuZXN0ZWQgZXZhbCgpIGNhbGxzIHVzaW5nIHJlY3Vyc2lvblxuICBtYXRjaCA9IC9eZXZhbCBhdCAoW14oXSspIFxcKCguKylcXCkkLy5leGVjKG9yaWdpbik7XG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiAnZXZhbCBhdCAnICsgbWF0Y2hbMV0gKyAnICgnICsgbWFwRXZhbE9yaWdpbihtYXRjaFsyXSkgKyAnKSc7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2Ugc3RpbGwgcmV0dXJuIHVzZWZ1bCBpbmZvcm1hdGlvbiBpZiB3ZSBkaWRuJ3QgZmluZCBhbnl0aGluZ1xuICByZXR1cm4gb3JpZ2luO1xufVxuXG4vLyBUaGlzIGlzIGNvcGllZCBhbG1vc3QgdmVyYmF0aW0gZnJvbSB0aGUgVjggc291cmNlIGNvZGUgYXRcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avdjgvc291cmNlL2Jyb3dzZS90cnVuay9zcmMvbWVzc2FnZXMuanMuIFRoZVxuLy8gaW1wbGVtZW50YXRpb24gb2Ygd3JhcENhbGxTaXRlKCkgdXNlZCB0byBqdXN0IGZvcndhcmQgdG8gdGhlIGFjdHVhbCBzb3VyY2Vcbi8vIGNvZGUgb2YgQ2FsbFNpdGUucHJvdG90eXBlLnRvU3RyaW5nIGJ1dCB1bmZvcnR1bmF0ZWx5IGEgbmV3IHJlbGVhc2Ugb2YgVjhcbi8vIGRpZCBzb21ldGhpbmcgdG8gdGhlIHByb3RvdHlwZSBjaGFpbiBhbmQgYnJva2UgdGhlIHNoaW0uIFRoZSBvbmx5IGZpeCBJXG4vLyBjb3VsZCBmaW5kIHdhcyBjb3B5L3Bhc3RlLlxuZnVuY3Rpb24gQ2FsbFNpdGVUb1N0cmluZygpIHtcbiAgdmFyIGZpbGVOYW1lO1xuICB2YXIgZmlsZUxvY2F0aW9uID0gXCJcIjtcbiAgaWYgKHRoaXMuaXNOYXRpdmUoKSkge1xuICAgIGZpbGVMb2NhdGlvbiA9IFwibmF0aXZlXCI7XG4gIH0gZWxzZSB7XG4gICAgZmlsZU5hbWUgPSB0aGlzLmdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCgpO1xuICAgIGlmICghZmlsZU5hbWUgJiYgdGhpcy5pc0V2YWwoKSkge1xuICAgICAgZmlsZUxvY2F0aW9uID0gdGhpcy5nZXRFdmFsT3JpZ2luKCk7XG4gICAgICBmaWxlTG9jYXRpb24gKz0gXCIsIFwiOyAgLy8gRXhwZWN0aW5nIHNvdXJjZSBwb3NpdGlvbiB0byBmb2xsb3cuXG4gICAgfVxuXG4gICAgaWYgKGZpbGVOYW1lKSB7XG4gICAgICBmaWxlTG9jYXRpb24gKz0gZmlsZU5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvdXJjZSBjb2RlIGRvZXMgbm90IG9yaWdpbmF0ZSBmcm9tIGEgZmlsZSBhbmQgaXMgbm90IG5hdGl2ZSwgYnV0IHdlXG4gICAgICAvLyBjYW4gc3RpbGwgZ2V0IHRoZSBzb3VyY2UgcG9zaXRpb24gaW5zaWRlIHRoZSBzb3VyY2Ugc3RyaW5nLCBlLmcuIGluXG4gICAgICAvLyBhbiBldmFsIHN0cmluZy5cbiAgICAgIGZpbGVMb2NhdGlvbiArPSBcIjxhbm9ueW1vdXM+XCI7XG4gICAgfVxuICAgIHZhciBsaW5lTnVtYmVyID0gdGhpcy5nZXRMaW5lTnVtYmVyKCk7XG4gICAgaWYgKGxpbmVOdW1iZXIgIT0gbnVsbCkge1xuICAgICAgZmlsZUxvY2F0aW9uICs9IFwiOlwiICsgbGluZU51bWJlcjtcbiAgICAgIHZhciBjb2x1bW5OdW1iZXIgPSB0aGlzLmdldENvbHVtbk51bWJlcigpO1xuICAgICAgaWYgKGNvbHVtbk51bWJlcikge1xuICAgICAgICBmaWxlTG9jYXRpb24gKz0gXCI6XCIgKyBjb2x1bW5OdW1iZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGxpbmUgPSBcIlwiO1xuICB2YXIgZnVuY3Rpb25OYW1lID0gdGhpcy5nZXRGdW5jdGlvbk5hbWUoKTtcbiAgdmFyIGFkZFN1ZmZpeCA9IHRydWU7XG4gIHZhciBpc0NvbnN0cnVjdG9yID0gdGhpcy5pc0NvbnN0cnVjdG9yKCk7XG4gIHZhciBpc01ldGhvZENhbGwgPSAhKHRoaXMuaXNUb3BsZXZlbCgpIHx8IGlzQ29uc3RydWN0b3IpO1xuICBpZiAoaXNNZXRob2RDYWxsKSB7XG4gICAgdmFyIHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSgpO1xuICAgIC8vIEZpeGVzIHNoaW0gdG8gYmUgYmFja3dhcmQgY29tcGF0YWJsZSB3aXRoIE5vZGUgdjAgdG8gdjRcbiAgICBpZiAodHlwZU5hbWUgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgIHR5cGVOYW1lID0gXCJudWxsXCI7XG4gICAgfVxuICAgIHZhciBtZXRob2ROYW1lID0gdGhpcy5nZXRNZXRob2ROYW1lKCk7XG4gICAgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgICAgaWYgKHR5cGVOYW1lICYmIGZ1bmN0aW9uTmFtZS5pbmRleE9mKHR5cGVOYW1lKSAhPSAwKSB7XG4gICAgICAgIGxpbmUgKz0gdHlwZU5hbWUgKyBcIi5cIjtcbiAgICAgIH1cbiAgICAgIGxpbmUgKz0gZnVuY3Rpb25OYW1lO1xuICAgICAgaWYgKG1ldGhvZE5hbWUgJiYgZnVuY3Rpb25OYW1lLmluZGV4T2YoXCIuXCIgKyBtZXRob2ROYW1lKSAhPSBmdW5jdGlvbk5hbWUubGVuZ3RoIC0gbWV0aG9kTmFtZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGxpbmUgKz0gXCIgW2FzIFwiICsgbWV0aG9kTmFtZSArIFwiXVwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lICs9IHR5cGVOYW1lICsgXCIuXCIgKyAobWV0aG9kTmFtZSB8fCBcIjxhbm9ueW1vdXM+XCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0NvbnN0cnVjdG9yKSB7XG4gICAgbGluZSArPSBcIm5ldyBcIiArIChmdW5jdGlvbk5hbWUgfHwgXCI8YW5vbnltb3VzPlwiKTtcbiAgfSBlbHNlIGlmIChmdW5jdGlvbk5hbWUpIHtcbiAgICBsaW5lICs9IGZ1bmN0aW9uTmFtZTtcbiAgfSBlbHNlIHtcbiAgICBsaW5lICs9IGZpbGVMb2NhdGlvbjtcbiAgICBhZGRTdWZmaXggPSBmYWxzZTtcbiAgfVxuICBpZiAoYWRkU3VmZml4KSB7XG4gICAgbGluZSArPSBcIiAoXCIgKyBmaWxlTG9jYXRpb24gKyBcIilcIjtcbiAgfVxuICByZXR1cm4gbGluZTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDYWxsU2l0ZShmcmFtZSkge1xuICB2YXIgb2JqZWN0ID0ge307XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihmcmFtZSkpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIG9iamVjdFtuYW1lXSA9IC9eKD86aXN8Z2V0KS8udGVzdChuYW1lKSA/IGZ1bmN0aW9uKCkgeyByZXR1cm4gZnJhbWVbbmFtZV0uY2FsbChmcmFtZSk7IH0gOiBmcmFtZVtuYW1lXTtcbiAgfSk7XG4gIG9iamVjdC50b1N0cmluZyA9IENhbGxTaXRlVG9TdHJpbmc7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHdyYXBDYWxsU2l0ZShmcmFtZSwgc3RhdGUpIHtcbiAgLy8gcHJvdmlkZXMgaW50ZXJmYWNlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGF0ZSA9IHsgbmV4dFBvc2l0aW9uOiBudWxsLCBjdXJQb3NpdGlvbjogbnVsbCB9XG4gIH1cbiAgaWYoZnJhbWUuaXNOYXRpdmUoKSkge1xuICAgIHN0YXRlLmN1clBvc2l0aW9uID0gbnVsbDtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBNb3N0IGNhbGwgc2l0ZXMgd2lsbCByZXR1cm4gdGhlIHNvdXJjZSBmaWxlIGZyb20gZ2V0RmlsZU5hbWUoKSwgYnV0IGNvZGVcbiAgLy8gcGFzc2VkIHRvIGV2YWwoKSBlbmRpbmcgaW4gXCIvLyMgc291cmNlVVJMPS4uLlwiIHdpbGwgcmV0dXJuIHRoZSBzb3VyY2UgZmlsZVxuICAvLyBmcm9tIGdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCgpIGluc3RlYWRcbiAgdmFyIHNvdXJjZSA9IGZyYW1lLmdldEZpbGVOYW1lKCkgfHwgZnJhbWUuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCk7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgbGluZSA9IGZyYW1lLmdldExpbmVOdW1iZXIoKTtcbiAgICB2YXIgY29sdW1uID0gZnJhbWUuZ2V0Q29sdW1uTnVtYmVyKCkgLSAxO1xuXG4gICAgLy8gRml4IHBvc2l0aW9uIGluIE5vZGUgd2hlcmUgc29tZSAoaW50ZXJuYWwpIGNvZGUgaXMgcHJlcGVuZGVkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXZhbncvbm9kZS1zb3VyY2UtbWFwLXN1cHBvcnQvaXNzdWVzLzM2XG4gICAgLy8gSGVhZGVyIHJlbW92ZWQgaW4gbm9kZSBhdCBeMTAuMTYgfHwgPj0xMS4xMS4wXG4gICAgLy8gdjExIGlzIG5vdCBhbiBMVFMgY2FuZGlkYXRlLCB3ZSBjYW4ganVzdCB0ZXN0IHRoZSBvbmUgdmVyc2lvbiB3aXRoIGl0LlxuICAgIC8vIFRlc3Qgbm9kZSB2ZXJzaW9ucyBmb3I6IDEwLjE2LTE5LCAxMC4yMCssIDEyLTE5LCAyMC05OSwgMTAwKywgb3IgMTEuMTFcbiAgICB2YXIgbm9IZWFkZXIgPSAvXnYoMTBcXC4xWzYtOV18MTBcXC5bMi05XVswLTldfDEwXFwuWzAtOV17Myx9fDFbMi05XVxcZCp8WzItOV1cXGR8XFxkezMsfXwxMVxcLjExKS87XG4gICAgdmFyIGhlYWRlckxlbmd0aCA9IG5vSGVhZGVyLnRlc3QocHJvY2Vzcy52ZXJzaW9uKSA/IDAgOiA2MjtcbiAgICBpZiAobGluZSA9PT0gMSAmJiBjb2x1bW4gPiBoZWFkZXJMZW5ndGggJiYgIWlzSW5Ccm93c2VyKCkgJiYgIWZyYW1lLmlzRXZhbCgpKSB7XG4gICAgICBjb2x1bW4gLT0gaGVhZGVyTGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbiA9IG1hcFNvdXJjZVBvc2l0aW9uKHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgbGluZTogbGluZSxcbiAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgfSk7XG4gICAgc3RhdGUuY3VyUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICBmcmFtZSA9IGNsb25lQ2FsbFNpdGUoZnJhbWUpO1xuICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uTmFtZSA9IGZyYW1lLmdldEZ1bmN0aW9uTmFtZTtcbiAgICBmcmFtZS5nZXRGdW5jdGlvbk5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzdGF0ZS5uZXh0UG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbk5hbWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZS5uZXh0UG9zaXRpb24ubmFtZSB8fCBvcmlnaW5hbEZ1bmN0aW9uTmFtZSgpO1xuICAgIH07XG4gICAgZnJhbWUuZ2V0RmlsZU5hbWUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLnNvdXJjZTsgfTtcbiAgICBmcmFtZS5nZXRMaW5lTnVtYmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5saW5lOyB9O1xuICAgIGZyYW1lLmdldENvbHVtbk51bWJlciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24uY29sdW1uICsgMTsgfTtcbiAgICBmcmFtZS5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLnNvdXJjZTsgfTtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBDb2RlIGNhbGxlZCB1c2luZyBldmFsKCkgbmVlZHMgc3BlY2lhbCBoYW5kbGluZ1xuICB2YXIgb3JpZ2luID0gZnJhbWUuaXNFdmFsKCkgJiYgZnJhbWUuZ2V0RXZhbE9yaWdpbigpO1xuICBpZiAob3JpZ2luKSB7XG4gICAgb3JpZ2luID0gbWFwRXZhbE9yaWdpbihvcmlnaW4pO1xuICAgIGZyYW1lID0gY2xvbmVDYWxsU2l0ZShmcmFtZSk7XG4gICAgZnJhbWUuZ2V0RXZhbE9yaWdpbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gb3JpZ2luOyB9O1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIElmIHdlIGdldCBoZXJlIHRoZW4gd2Ugd2VyZSB1bmFibGUgdG8gY2hhbmdlIHRoZSBzb3VyY2UgcG9zaXRpb25cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhcnQgb2YgdGhlIFY4IHN0YWNrIHRyYWNlIEFQSSwgZm9yIG1vcmUgaW5mbyBzZWU6XG4vLyBodHRwczovL3Y4LmRldi9kb2NzL3N0YWNrLXRyYWNlLWFwaVxuZnVuY3Rpb24gcHJlcGFyZVN0YWNrVHJhY2UoZXJyb3IsIHN0YWNrKSB7XG4gIGlmIChlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMpIHtcbiAgICBmaWxlQ29udGVudHNDYWNoZSA9IHt9O1xuICAgIHNvdXJjZU1hcENhY2hlID0ge307XG4gIH1cblxuICB2YXIgbmFtZSA9IGVycm9yLm5hbWUgfHwgJ0Vycm9yJztcbiAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8ICcnO1xuICB2YXIgZXJyb3JTdHJpbmcgPSBuYW1lICsgXCI6IFwiICsgbWVzc2FnZTtcblxuICB2YXIgc3RhdGUgPSB7IG5leHRQb3NpdGlvbjogbnVsbCwgY3VyUG9zaXRpb246IG51bGwgfTtcbiAgdmFyIHByb2Nlc3NlZFN0YWNrID0gW107XG4gIGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHByb2Nlc3NlZFN0YWNrLnB1c2goJ1xcbiAgICBhdCAnICsgd3JhcENhbGxTaXRlKHN0YWNrW2ldLCBzdGF0ZSkpO1xuICAgIHN0YXRlLm5leHRQb3NpdGlvbiA9IHN0YXRlLmN1clBvc2l0aW9uO1xuICB9XG4gIHN0YXRlLmN1clBvc2l0aW9uID0gc3RhdGUubmV4dFBvc2l0aW9uID0gbnVsbDtcbiAgcmV0dXJuIGVycm9yU3RyaW5nICsgcHJvY2Vzc2VkU3RhY2sucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG4vLyBHZW5lcmF0ZSBwb3NpdGlvbiBhbmQgc25pcHBldCBvZiBvcmlnaW5hbCBzb3VyY2Ugd2l0aCBwb2ludGVyXG5mdW5jdGlvbiBnZXRFcnJvclNvdXJjZShlcnJvcikge1xuICB2YXIgbWF0Y2ggPSAvXFxuICAgIGF0IFteKF0rIFxcKCguKik6KFxcZCspOihcXGQrKVxcKS8uZXhlYyhlcnJvci5zdGFjayk7XG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBzb3VyY2UgPSBtYXRjaFsxXTtcbiAgICB2YXIgbGluZSA9ICttYXRjaFsyXTtcbiAgICB2YXIgY29sdW1uID0gK21hdGNoWzNdO1xuXG4gICAgLy8gU3VwcG9ydCB0aGUgaW5saW5lIHNvdXJjZUNvbnRlbnRzIGluc2lkZSB0aGUgc291cmNlIG1hcFxuICAgIHZhciBjb250ZW50cyA9IGZpbGVDb250ZW50c0NhY2hlW3NvdXJjZV07XG5cbiAgICAvLyBTdXBwb3J0IGZpbGVzIG9uIGRpc2tcbiAgICBpZiAoIWNvbnRlbnRzICYmIGZzICYmIGZzLmV4aXN0c1N5bmMoc291cmNlKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoc291cmNlLCAndXRmOCcpO1xuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgY29udGVudHMgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxpbmUgZnJvbSB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUgbGlrZSBub2RlIGRvZXNcbiAgICBpZiAoY29udGVudHMpIHtcbiAgICAgIHZhciBjb2RlID0gY29udGVudHMuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS8pW2xpbmUgLSAxXTtcbiAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UgKyAnOicgKyBsaW5lICsgJ1xcbicgKyBjb2RlICsgJ1xcbicgK1xuICAgICAgICAgIG5ldyBBcnJheShjb2x1bW4pLmpvaW4oJyAnKSArICdeJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHByaW50RXJyb3JBbmRFeGl0IChlcnJvcikge1xuICB2YXIgc291cmNlID0gZ2V0RXJyb3JTb3VyY2UoZXJyb3IpO1xuXG4gIC8vIEVuc3VyZSBlcnJvciBpcyBwcmludGVkIHN5bmNocm9ub3VzbHkgYW5kIG5vdCB0cnVuY2F0ZWRcbiAgaWYgKHByb2Nlc3Muc3RkZXJyLl9oYW5kbGUgJiYgcHJvY2Vzcy5zdGRlcnIuX2hhbmRsZS5zZXRCbG9ja2luZykge1xuICAgIHByb2Nlc3Muc3RkZXJyLl9oYW5kbGUuc2V0QmxvY2tpbmcodHJ1ZSk7XG4gIH1cblxuICBpZiAoc291cmNlKSB7XG4gICAgY29uc29sZS5lcnJvcigpO1xuICAgIGNvbnNvbGUuZXJyb3Ioc291cmNlKTtcbiAgfVxuXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59XG5cbmZ1bmN0aW9uIHNoaW1FbWl0VW5jYXVnaHRFeGNlcHRpb24gKCkge1xuICB2YXIgb3JpZ0VtaXQgPSBwcm9jZXNzLmVtaXQ7XG5cbiAgcHJvY2Vzcy5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3VuY2F1Z2h0RXhjZXB0aW9uJykge1xuICAgICAgdmFyIGhhc1N0YWNrID0gKGFyZ3VtZW50c1sxXSAmJiBhcmd1bWVudHNbMV0uc3RhY2spO1xuICAgICAgdmFyIGhhc0xpc3RlbmVycyA9ICh0aGlzLmxpc3RlbmVycyh0eXBlKS5sZW5ndGggPiAwKTtcblxuICAgICAgaWYgKGhhc1N0YWNrICYmICFoYXNMaXN0ZW5lcnMpIHtcbiAgICAgICAgcmV0dXJuIHByaW50RXJyb3JBbmRFeGl0KGFyZ3VtZW50c1sxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbnZhciBvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzID0gcmV0cmlldmVGaWxlSGFuZGxlcnMuc2xpY2UoMCk7XG52YXIgb3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzID0gcmV0cmlldmVNYXBIYW5kbGVycy5zbGljZSgwKTtcblxuZXhwb3J0cy53cmFwQ2FsbFNpdGUgPSB3cmFwQ2FsbFNpdGU7XG5leHBvcnRzLmdldEVycm9yU291cmNlID0gZ2V0RXJyb3JTb3VyY2U7XG5leHBvcnRzLm1hcFNvdXJjZVBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb247XG5leHBvcnRzLnJldHJpZXZlU291cmNlTWFwID0gcmV0cmlldmVTb3VyY2VNYXA7XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKG9wdGlvbnMuZW52aXJvbm1lbnQpIHtcbiAgICBlbnZpcm9ubWVudCA9IG9wdGlvbnMuZW52aXJvbm1lbnQ7XG4gICAgaWYgKFtcIm5vZGVcIiwgXCJicm93c2VyXCIsIFwiYXV0b1wiXS5pbmRleE9mKGVudmlyb25tZW50KSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVudmlyb25tZW50IFwiICsgZW52aXJvbm1lbnQgKyBcIiB3YXMgdW5rbm93bi4gQXZhaWxhYmxlIG9wdGlvbnMgYXJlIHthdXRvLCBicm93c2VyLCBub2RlfVwiKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IHNvdXJjZXMgdG8gYmUgZm91bmQgYnkgbWV0aG9kcyBvdGhlciB0aGFuIHJlYWRpbmcgdGhlIGZpbGVzXG4gIC8vIGRpcmVjdGx5IGZyb20gZGlzay5cbiAgaWYgKG9wdGlvbnMucmV0cmlldmVGaWxlKSB7XG4gICAgaWYgKG9wdGlvbnMub3ZlcnJpZGVSZXRyaWV2ZUZpbGUpIHtcbiAgICAgIHJldHJpZXZlRmlsZUhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0cmlldmVGaWxlSGFuZGxlcnMudW5zaGlmdChvcHRpb25zLnJldHJpZXZlRmlsZSk7XG4gIH1cblxuICAvLyBBbGxvdyBzb3VyY2UgbWFwcyB0byBiZSBmb3VuZCBieSBtZXRob2RzIG90aGVyIHRoYW4gcmVhZGluZyB0aGUgZmlsZXNcbiAgLy8gZGlyZWN0bHkgZnJvbSBkaXNrLlxuICBpZiAob3B0aW9ucy5yZXRyaWV2ZVNvdXJjZU1hcCkge1xuICAgIGlmIChvcHRpb25zLm92ZXJyaWRlUmV0cmlldmVTb3VyY2VNYXApIHtcbiAgICAgIHJldHJpZXZlTWFwSGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXRyaWV2ZU1hcEhhbmRsZXJzLnVuc2hpZnQob3B0aW9ucy5yZXRyaWV2ZVNvdXJjZU1hcCk7XG4gIH1cblxuICAvLyBTdXBwb3J0IHJ1bnRpbWUgdHJhbnNwaWxlcnMgdGhhdCBpbmNsdWRlIGlubGluZSBzb3VyY2UgbWFwc1xuICBpZiAob3B0aW9ucy5ob29rUmVxdWlyZSAmJiAhaXNJbkJyb3dzZXIoKSkge1xuICAgIHZhciBNb2R1bGU7XG4gICAgdHJ5IHtcbiAgICAgIE1vZHVsZSA9IHJlcXVpcmUoJ21vZHVsZScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gTk9QOiBMb2FkaW5nIGluIGNhdGNoIGJsb2NrIHRvIGNvbnZlcnQgd2VicGFjayBlcnJvciB0byB3YXJuaW5nLlxuICAgIH1cbiAgICB2YXIgJGNvbXBpbGUgPSBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlO1xuXG4gICAgaWYgKCEkY29tcGlsZS5fX3NvdXJjZU1hcFN1cHBvcnQpIHtcbiAgICAgIE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUgPSBmdW5jdGlvbihjb250ZW50LCBmaWxlbmFtZSkge1xuICAgICAgICBmaWxlQ29udGVudHNDYWNoZVtmaWxlbmFtZV0gPSBjb250ZW50O1xuICAgICAgICBzb3VyY2VNYXBDYWNoZVtmaWxlbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAkY29tcGlsZS5jYWxsKHRoaXMsIGNvbnRlbnQsIGZpbGVuYW1lKTtcbiAgICAgIH07XG5cbiAgICAgIE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUuX19zb3VyY2VNYXBTdXBwb3J0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBDb25maWd1cmUgb3B0aW9uc1xuICBpZiAoIWVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucykge1xuICAgIGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA9ICdlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMnIGluIG9wdGlvbnMgP1xuICAgICAgb3B0aW9ucy5lbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMgOiBmYWxzZTtcbiAgfVxuXG4gIC8vIEluc3RhbGwgdGhlIGVycm9yIHJlZm9ybWF0dGVyXG4gIGlmICghZXJyb3JGb3JtYXR0ZXJJbnN0YWxsZWQpIHtcbiAgICBlcnJvckZvcm1hdHRlckluc3RhbGxlZCA9IHRydWU7XG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmVwYXJlU3RhY2tUcmFjZTtcbiAgfVxuXG4gIGlmICghdW5jYXVnaHRTaGltSW5zdGFsbGVkKSB7XG4gICAgdmFyIGluc3RhbGxIYW5kbGVyID0gJ2hhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucycgaW4gb3B0aW9ucyA/XG4gICAgICBvcHRpb25zLmhhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucyA6IHRydWU7XG5cbiAgICAvLyBQcm92aWRlIHRoZSBvcHRpb24gdG8gbm90IGluc3RhbGwgdGhlIHVuY2F1Z2h0IGV4Y2VwdGlvbiBoYW5kbGVyLiBUaGlzIGlzXG4gICAgLy8gdG8gc3VwcG9ydCBvdGhlciB1bmNhdWdodCBleGNlcHRpb24gaGFuZGxlcnMgKGluIHRlc3QgZnJhbWV3b3JrcywgZm9yXG4gICAgLy8gZXhhbXBsZSkuIElmIHRoaXMgaGFuZGxlciBpcyBub3QgaW5zdGFsbGVkIGFuZCB0aGVyZSBhcmUgbm8gb3RoZXIgdW5jYXVnaHRcbiAgICAvLyBleGNlcHRpb24gaGFuZGxlcnMsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgd2lsbCBiZSBjYXVnaHQgYnkgbm9kZSdzIGJ1aWx0LWluXG4gICAgLy8gZXhjZXB0aW9uIGhhbmRsZXIgYW5kIHRoZSBwcm9jZXNzIHdpbGwgc3RpbGwgYmUgdGVybWluYXRlZC4gSG93ZXZlciwgdGhlXG4gICAgLy8gZ2VuZXJhdGVkIEphdmFTY3JpcHQgY29kZSB3aWxsIGJlIHNob3duIGFib3ZlIHRoZSBzdGFjayB0cmFjZSBpbnN0ZWFkIG9mXG4gICAgLy8gdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlLlxuICAgIGlmIChpbnN0YWxsSGFuZGxlciAmJiBoYXNHbG9iYWxQcm9jZXNzRXZlbnRFbWl0dGVyKCkpIHtcbiAgICAgIHVuY2F1Z2h0U2hpbUluc3RhbGxlZCA9IHRydWU7XG4gICAgICBzaGltRW1pdFVuY2F1Z2h0RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLnJlc2V0UmV0cmlldmVIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuICByZXRyaWV2ZUZpbGVIYW5kbGVycy5sZW5ndGggPSAwO1xuICByZXRyaWV2ZU1hcEhhbmRsZXJzLmxlbmd0aCA9IDA7XG5cbiAgcmV0cmlldmVGaWxlSGFuZGxlcnMgPSBvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzLnNsaWNlKDApO1xuICByZXRyaWV2ZU1hcEhhbmRsZXJzID0gb3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzLnNsaWNlKDApO1xuXG4gIHJldHJpZXZlU291cmNlTWFwID0gaGFuZGxlckV4ZWMocmV0cmlldmVNYXBIYW5kbGVycyk7XG4gIHJldHJpZXZlRmlsZSA9IGhhbmRsZXJFeGVjKHJldHJpZXZlRmlsZUhhbmRsZXJzKTtcbn1cbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc05hdGl2ZU1hcCA9IHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBkYXRhIHN0cnVjdHVyZSB3aGljaCBpcyBhIGNvbWJpbmF0aW9uIG9mIGFuIGFycmF5IGFuZCBhIHNldC4gQWRkaW5nIGEgbmV3XG4gKiBtZW1iZXIgaXMgTygxKSwgdGVzdGluZyBmb3IgbWVtYmVyc2hpcCBpcyBPKDEpLCBhbmQgZmluZGluZyB0aGUgaW5kZXggb2YgYW5cbiAqIGVsZW1lbnQgaXMgTygxKS4gUmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgc2V0IGlzIG5vdCBzdXBwb3J0ZWQuIE9ubHlcbiAqIHN0cmluZ3MgYXJlIHN1cHBvcnRlZCBmb3IgbWVtYmVyc2hpcC5cbiAqL1xuZnVuY3Rpb24gQXJyYXlTZXQoKSB7XG4gIHRoaXMuX2FycmF5ID0gW107XG4gIHRoaXMuX3NldCA9IGhhc05hdGl2ZU1hcCA/IG5ldyBNYXAoKSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogU3RhdGljIG1ldGhvZCBmb3IgY3JlYXRpbmcgQXJyYXlTZXQgaW5zdGFuY2VzIGZyb20gYW4gZXhpc3RpbmcgYXJyYXkuXG4gKi9cbkFycmF5U2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIEFycmF5U2V0X2Zyb21BcnJheShhQXJyYXksIGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgdmFyIHNldCA9IG5ldyBBcnJheVNldCgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYUFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2V0LmFkZChhQXJyYXlbaV0sIGFBbGxvd0R1cGxpY2F0ZXMpO1xuICB9XG4gIHJldHVybiBzZXQ7XG59O1xuXG4vKipcbiAqIFJldHVybiBob3cgbWFueSB1bmlxdWUgaXRlbXMgYXJlIGluIHRoaXMgQXJyYXlTZXQuIElmIGR1cGxpY2F0ZXMgaGF2ZSBiZWVuXG4gKiBhZGRlZCwgdGhhbiB0aG9zZSBkbyBub3QgY291bnQgdG93YXJkcyB0aGUgc2l6ZS5cbiAqXG4gKiBAcmV0dXJucyBOdW1iZXJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiBBcnJheVNldF9zaXplKCkge1xuICByZXR1cm4gaGFzTmF0aXZlTWFwID8gdGhpcy5fc2V0LnNpemUgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9zZXQpLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQWRkIHRoZSBnaXZlbiBzdHJpbmcgdG8gdGhpcyBzZXQuXG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBBcnJheVNldF9hZGQoYVN0ciwgYUFsbG93RHVwbGljYXRlcykge1xuICB2YXIgc1N0ciA9IGhhc05hdGl2ZU1hcCA/IGFTdHIgOiB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICB2YXIgaXNEdXBsaWNhdGUgPSBoYXNOYXRpdmVNYXAgPyB0aGlzLmhhcyhhU3RyKSA6IGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cik7XG4gIHZhciBpZHggPSB0aGlzLl9hcnJheS5sZW5ndGg7XG4gIGlmICghaXNEdXBsaWNhdGUgfHwgYUFsbG93RHVwbGljYXRlcykge1xuICAgIHRoaXMuX2FycmF5LnB1c2goYVN0cik7XG4gIH1cbiAgaWYgKCFpc0R1cGxpY2F0ZSkge1xuICAgIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICAgIHRoaXMuX3NldC5zZXQoYVN0ciwgaWR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0W3NTdHJdID0gaWR4O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBJcyB0aGUgZ2l2ZW4gc3RyaW5nIGEgbWVtYmVyIG9mIHRoaXMgc2V0P1xuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gQXJyYXlTZXRfaGFzKGFTdHIpIHtcbiAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgIHJldHVybiB0aGlzLl9zZXQuaGFzKGFTdHIpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgICByZXR1cm4gaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXaGF0IGlzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gc3RyaW5nIGluIHRoZSBhcnJheT9cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBBcnJheVNldF9pbmRleE9mKGFTdHIpIHtcbiAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgIHZhciBpZHggPSB0aGlzLl9zZXQuZ2V0KGFTdHIpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc1N0ciA9IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cikpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXRbc1N0cl07XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU3RyICsgJ1wiIGlzIG5vdCBpbiB0aGUgc2V0LicpO1xufTtcblxuLyoqXG4gKiBXaGF0IGlzIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleD9cbiAqXG4gKiBAcGFyYW0gTnVtYmVyIGFJZHhcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gQXJyYXlTZXRfYXQoYUlkeCkge1xuICBpZiAoYUlkeCA+PSAwICYmIGFJZHggPCB0aGlzLl9hcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXlbYUlkeF07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IGluZGV4ZWQgYnkgJyArIGFJZHgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNldCAod2hpY2ggaGFzIHRoZSBwcm9wZXIgaW5kaWNlc1xuICogaW5kaWNhdGVkIGJ5IGluZGV4T2YpLiBOb3RlIHRoYXQgdGhpcyBpcyBhIGNvcHkgb2YgdGhlIGludGVybmFsIGFycmF5IHVzZWRcbiAqIGZvciBzdG9yaW5nIHRoZSBtZW1iZXJzIHNvIHRoYXQgbm8gb25lIGNhbiBtZXNzIHdpdGggaW50ZXJuYWwgc3RhdGUuXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfdG9BcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKCk7XG59O1xuXG5leHBvcnRzLkFycmF5U2V0ID0gQXJyYXlTZXQ7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICpcbiAqIEJhc2VkIG9uIHRoZSBCYXNlIDY0IFZMUSBpbXBsZW1lbnRhdGlvbiBpbiBDbG9zdXJlIENvbXBpbGVyOlxuICogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jbG9zdXJlLWNvbXBpbGVyL3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL2NvbS9nb29nbGUvZGVidWdnaW5nL3NvdXJjZW1hcC9CYXNlNjRWTFEuamF2YVxuICpcbiAqIENvcHlyaWdodCAyMDExIFRoZSBDbG9zdXJlIENvbXBpbGVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogICAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqICAgIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZFxuICogICAgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogICAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXG4gKiAgICBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCcuL2Jhc2U2NCcpO1xuXG4vLyBBIHNpbmdsZSBiYXNlIDY0IGRpZ2l0IGNhbiBjb250YWluIDYgYml0cyBvZiBkYXRhLiBGb3IgdGhlIGJhc2UgNjQgdmFyaWFibGVcbi8vIGxlbmd0aCBxdWFudGl0aWVzIHdlIHVzZSBpbiB0aGUgc291cmNlIG1hcCBzcGVjLCB0aGUgZmlyc3QgYml0IGlzIHRoZSBzaWduLFxuLy8gdGhlIG5leHQgZm91ciBiaXRzIGFyZSB0aGUgYWN0dWFsIHZhbHVlLCBhbmQgdGhlIDZ0aCBiaXQgaXMgdGhlXG4vLyBjb250aW51YXRpb24gYml0LiBUaGUgY29udGludWF0aW9uIGJpdCB0ZWxscyB1cyB3aGV0aGVyIHRoZXJlIGFyZSBtb3JlXG4vLyBkaWdpdHMgaW4gdGhpcyB2YWx1ZSBmb2xsb3dpbmcgdGhpcyBkaWdpdC5cbi8vXG4vLyAgIENvbnRpbnVhdGlvblxuLy8gICB8ICAgIFNpZ25cbi8vICAgfCAgICB8XG4vLyAgIFYgICAgVlxuLy8gICAxMDEwMTFcblxudmFyIFZMUV9CQVNFX1NISUZUID0gNTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQkFTRSA9IDEgPDwgVkxRX0JBU0VfU0hJRlQ7XG5cbi8vIGJpbmFyeTogMDExMTExXG52YXIgVkxRX0JBU0VfTUFTSyA9IFZMUV9CQVNFIC0gMTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQ09OVElOVUFUSU9OX0JJVCA9IFZMUV9CQVNFO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gYSB0d28tY29tcGxlbWVudCB2YWx1ZSB0byBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDEgYmVjb21lcyAyICgxMCBiaW5hcnkpLCAtMSBiZWNvbWVzIDMgKDExIGJpbmFyeSlcbiAqICAgMiBiZWNvbWVzIDQgKDEwMCBiaW5hcnkpLCAtMiBiZWNvbWVzIDUgKDEwMSBiaW5hcnkpXG4gKi9cbmZ1bmN0aW9uIHRvVkxRU2lnbmVkKGFWYWx1ZSkge1xuICByZXR1cm4gYVZhbHVlIDwgMFxuICAgID8gKCgtYVZhbHVlKSA8PCAxKSArIDFcbiAgICA6IChhVmFsdWUgPDwgMSkgKyAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRvIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgZnJvbSBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDIgKDEwIGJpbmFyeSkgYmVjb21lcyAxLCAzICgxMSBiaW5hcnkpIGJlY29tZXMgLTFcbiAqICAgNCAoMTAwIGJpbmFyeSkgYmVjb21lcyAyLCA1ICgxMDEgYmluYXJ5KSBiZWNvbWVzIC0yXG4gKi9cbmZ1bmN0aW9uIGZyb21WTFFTaWduZWQoYVZhbHVlKSB7XG4gIHZhciBpc05lZ2F0aXZlID0gKGFWYWx1ZSAmIDEpID09PSAxO1xuICB2YXIgc2hpZnRlZCA9IGFWYWx1ZSA+PiAxO1xuICByZXR1cm4gaXNOZWdhdGl2ZVxuICAgID8gLXNoaWZ0ZWRcbiAgICA6IHNoaWZ0ZWQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmFzZSA2NCBWTFEgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiBiYXNlNjRWTFFfZW5jb2RlKGFWYWx1ZSkge1xuICB2YXIgZW5jb2RlZCA9IFwiXCI7XG4gIHZhciBkaWdpdDtcblxuICB2YXIgdmxxID0gdG9WTFFTaWduZWQoYVZhbHVlKTtcblxuICBkbyB7XG4gICAgZGlnaXQgPSB2bHEgJiBWTFFfQkFTRV9NQVNLO1xuICAgIHZscSA+Pj49IFZMUV9CQVNFX1NISUZUO1xuICAgIGlmICh2bHEgPiAwKSB7XG4gICAgICAvLyBUaGVyZSBhcmUgc3RpbGwgbW9yZSBkaWdpdHMgaW4gdGhpcyB2YWx1ZSwgc28gd2UgbXVzdCBtYWtlIHN1cmUgdGhlXG4gICAgICAvLyBjb250aW51YXRpb24gYml0IGlzIG1hcmtlZC5cbiAgICAgIGRpZ2l0IHw9IFZMUV9DT05USU5VQVRJT05fQklUO1xuICAgIH1cbiAgICBlbmNvZGVkICs9IGJhc2U2NC5lbmNvZGUoZGlnaXQpO1xuICB9IHdoaWxlICh2bHEgPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn07XG5cbi8qKlxuICogRGVjb2RlcyB0aGUgbmV4dCBiYXNlIDY0IFZMUSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgYW5kIHJldHVybnMgdGhlXG4gKiB2YWx1ZSBhbmQgdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB2aWEgdGhlIG91dCBwYXJhbWV0ZXIuXG4gKi9cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2RlY29kZShhU3RyLCBhSW5kZXgsIGFPdXRQYXJhbSkge1xuICB2YXIgc3RyTGVuID0gYVN0ci5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSAwO1xuICB2YXIgc2hpZnQgPSAwO1xuICB2YXIgY29udGludWF0aW9uLCBkaWdpdDtcblxuICBkbyB7XG4gICAgaWYgKGFJbmRleCA+PSBzdHJMZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG1vcmUgZGlnaXRzIGluIGJhc2UgNjQgVkxRIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICBkaWdpdCA9IGJhc2U2NC5kZWNvZGUoYVN0ci5jaGFyQ29kZUF0KGFJbmRleCsrKSk7XG4gICAgaWYgKGRpZ2l0ID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgZGlnaXQ6IFwiICsgYVN0ci5jaGFyQXQoYUluZGV4IC0gMSkpO1xuICAgIH1cblxuICAgIGNvbnRpbnVhdGlvbiA9ICEhKGRpZ2l0ICYgVkxRX0NPTlRJTlVBVElPTl9CSVQpO1xuICAgIGRpZ2l0ICY9IFZMUV9CQVNFX01BU0s7XG4gICAgcmVzdWx0ID0gcmVzdWx0ICsgKGRpZ2l0IDw8IHNoaWZ0KTtcbiAgICBzaGlmdCArPSBWTFFfQkFTRV9TSElGVDtcbiAgfSB3aGlsZSAoY29udGludWF0aW9uKTtcblxuICBhT3V0UGFyYW0udmFsdWUgPSBmcm9tVkxRU2lnbmVkKHJlc3VsdCk7XG4gIGFPdXRQYXJhbS5yZXN0ID0gYUluZGV4O1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGludFRvQ2hhck1hcCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XG5cbi8qKlxuICogRW5jb2RlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDAgdG8gNjMgdG8gYSBzaW5nbGUgYmFzZSA2NCBkaWdpdC5cbiAqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIGlmICgwIDw9IG51bWJlciAmJiBudW1iZXIgPCBpbnRUb0NoYXJNYXAubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGludFRvQ2hhck1hcFtudW1iZXJdO1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNdXN0IGJlIGJldHdlZW4gMCBhbmQgNjM6IFwiICsgbnVtYmVyKTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGEgc2luZ2xlIGJhc2UgNjQgY2hhcmFjdGVyIGNvZGUgZGlnaXQgdG8gYW4gaW50ZWdlci4gUmV0dXJucyAtMSBvblxuICogZmFpbHVyZS5cbiAqL1xuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgdmFyIGJpZ0EgPSA2NTsgICAgIC8vICdBJ1xuICB2YXIgYmlnWiA9IDkwOyAgICAgLy8gJ1onXG5cbiAgdmFyIGxpdHRsZUEgPSA5NzsgIC8vICdhJ1xuICB2YXIgbGl0dGxlWiA9IDEyMjsgLy8gJ3onXG5cbiAgdmFyIHplcm8gPSA0ODsgICAgIC8vICcwJ1xuICB2YXIgbmluZSA9IDU3OyAgICAgLy8gJzknXG5cbiAgdmFyIHBsdXMgPSA0MzsgICAgIC8vICcrJ1xuICB2YXIgc2xhc2ggPSA0NzsgICAgLy8gJy8nXG5cbiAgdmFyIGxpdHRsZU9mZnNldCA9IDI2O1xuICB2YXIgbnVtYmVyT2Zmc2V0ID0gNTI7XG5cbiAgLy8gMCAtIDI1OiBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlxuICBpZiAoYmlnQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBiaWdaKSB7XG4gICAgcmV0dXJuIChjaGFyQ29kZSAtIGJpZ0EpO1xuICB9XG5cbiAgLy8gMjYgLSA1MTogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcbiAgaWYgKGxpdHRsZUEgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGl0dGxlWikge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSBsaXR0bGVBICsgbGl0dGxlT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDUyIC0gNjE6IDAxMjM0NTY3ODlcbiAgaWYgKHplcm8gPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbmluZSkge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSB6ZXJvICsgbnVtYmVyT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDYyOiArXG4gIGlmIChjaGFyQ29kZSA9PSBwbHVzKSB7XG4gICAgcmV0dXJuIDYyO1xuICB9XG5cbiAgLy8gNjM6IC9cbiAgaWYgKGNoYXJDb2RlID09IHNsYXNoKSB7XG4gICAgcmV0dXJuIDYzO1xuICB9XG5cbiAgLy8gSW52YWxpZCBiYXNlNjQgZGlnaXQuXG4gIHJldHVybiAtMTtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbmV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogUmVjdXJzaXZlIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2guXG4gKlxuICogQHBhcmFtIGFMb3cgSW5kaWNlcyBoZXJlIGFuZCBsb3dlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuICogQHBhcmFtIGFIaWdoIEluZGljZXMgaGVyZSBhbmQgaGlnaGVyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG4gKiBAcGFyYW0gYU5lZWRsZSBUaGUgZWxlbWVudCBiZWluZyBzZWFyY2hlZCBmb3IuXG4gKiBAcGFyYW0gYUhheXN0YWNrIFRoZSBub24tZW1wdHkgYXJyYXkgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgRnVuY3Rpb24gd2hpY2ggdGFrZXMgdHdvIGVsZW1lbnRzIGFuZCByZXR1cm5zIC0xLCAwLCBvciAxLlxuICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICovXG5mdW5jdGlvbiByZWN1cnNpdmVTZWFyY2goYUxvdywgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlcyB3aGVuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XG4gIC8vXG4gIC8vICAgMS4gV2UgZmluZCB0aGUgZXhhY3QgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gIC8vXG4gIC8vICAgMi4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBidXQgd2UgY2FuIHJldHVybiB0aGUgaW5kZXggb2ZcbiAgLy8gICAgICB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQuXG4gIC8vXG4gIC8vICAgMy4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBhbmQgdGhlcmUgaXMgbm8gbmV4dC1jbG9zZXN0XG4gIC8vICAgICAgZWxlbWVudCB0aGFuIHRoZSBvbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IsIHNvIHdlIHJldHVybiAtMS5cbiAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGFIaWdoIC0gYUxvdykgLyAyKSArIGFMb3c7XG4gIHZhciBjbXAgPSBhQ29tcGFyZShhTmVlZGxlLCBhSGF5c3RhY2tbbWlkXSwgdHJ1ZSk7XG4gIGlmIChjbXAgPT09IDApIHtcbiAgICAvLyBGb3VuZCB0aGUgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gICAgcmV0dXJuIG1pZDtcbiAgfVxuICBlbHNlIGlmIChjbXAgPiAwKSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBncmVhdGVyIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKGFIaWdoIC0gbWlkID4gMSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIHVwcGVyIGhhbGYuXG4gICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG1pZCwgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZXhhY3QgbmVlZGxlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCBpbiB0aGlzIGhheXN0YWNrLiBEZXRlcm1pbmUgaWZcbiAgICAvLyB3ZSBhcmUgaW4gdGVybWluYXRpb24gY2FzZSAoMykgb3IgKDIpIGFuZCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHRoaW5nLlxuICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG4gICAgICByZXR1cm4gYUhpZ2ggPCBhSGF5c3RhY2subGVuZ3RoID8gYUhpZ2ggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBsZXNzIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKG1pZCAtIGFMb3cgPiAxKSB7XG4gICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgbG93ZXIgaGFsZi5cbiAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goYUxvdywgbWlkLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cbiAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFMb3cgPCAwID8gLTEgOiBhTG93O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYmluYXJ5IHNlYXJjaCB3aGljaCB3aWxsIGFsd2F5cyB0cnkgYW5kIHJldHVyblxuICogdGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IGVsZW1lbnQgaWYgdGhlcmUgaXMgbm8gZXhhY3QgaGl0LiBUaGlzIGlzIGJlY2F1c2VcbiAqIG1hcHBpbmdzIGJldHdlZW4gb3JpZ2luYWwgYW5kIGdlbmVyYXRlZCBsaW5lL2NvbCBwYWlycyBhcmUgc2luZ2xlIHBvaW50cyxcbiAqIGFuZCB0aGVyZSBpcyBhbiBpbXBsaWNpdCByZWdpb24gYmV0d2VlbiBlYWNoIG9mIHRoZW0sIHNvIGEgbWlzcyBqdXN0IG1lYW5zXG4gKiB0aGF0IHlvdSBhcmVuJ3Qgb24gdGhlIHZlcnkgc3RhcnQgb2YgYSByZWdpb24uXG4gKlxuICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgeW91IGFyZSBsb29raW5nIGZvci5cbiAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIGFycmF5IHRoYXQgaXMgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgQSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgbmVlZGxlIGFuZCBhbiBlbGVtZW50IGluIHRoZVxuICogICAgIGFycmF5IGFuZCByZXR1cm5zIC0xLCAwLCBvciAxIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZWVkbGUgaXMgbGVzc1xuICogICAgIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIGVsZW1lbnQsIHJlc3BlY3RpdmVseS5cbiAqIEBwYXJhbSBhQmlhcyBFaXRoZXIgJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqICAgICBEZWZhdWx0cyB0byAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqL1xuZXhwb3J0cy5zZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpIHtcbiAgaWYgKGFIYXlzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICB2YXIgaW5kZXggPSByZWN1cnNpdmVTZWFyY2goLTEsIGFIYXlzdGFjay5sZW5ndGgsIGFOZWVkbGUsIGFIYXlzdGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb21wYXJlLCBhQmlhcyB8fCBleHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EKTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIFdlIGhhdmUgZm91bmQgZWl0aGVyIHRoZSBleGFjdCBlbGVtZW50LCBvciB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQgdGhhblxuICAvLyB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSBzdWNoXG4gIC8vIGVsZW1lbnQuIE1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIHRoZSBzbWFsbGVzdCBvZiB0aGVzZS5cbiAgd2hpbGUgKGluZGV4IC0gMSA+PSAwKSB7XG4gICAgaWYgKGFDb21wYXJlKGFIYXlzdGFja1tpbmRleF0sIGFIYXlzdGFja1tpbmRleCAtIDFdLCB0cnVlKSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC0taW5kZXg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDE0IE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG1hcHBpbmdCIGlzIGFmdGVyIG1hcHBpbmdBIHdpdGggcmVzcGVjdCB0byBnZW5lcmF0ZWRcbiAqIHBvc2l0aW9uLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZWRQb3NpdGlvbkFmdGVyKG1hcHBpbmdBLCBtYXBwaW5nQikge1xuICAvLyBPcHRpbWl6ZWQgZm9yIG1vc3QgY29tbW9uIGNhc2VcbiAgdmFyIGxpbmVBID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZTtcbiAgdmFyIGxpbmVCID0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgdmFyIGNvbHVtbkEgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW47XG4gIHZhciBjb2x1bW5CID0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICByZXR1cm4gbGluZUIgPiBsaW5lQSB8fCBsaW5lQiA9PSBsaW5lQSAmJiBjb2x1bW5CID49IGNvbHVtbkEgfHxcbiAgICAgICAgIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCKSA8PSAwO1xufVxuXG4vKipcbiAqIEEgZGF0YSBzdHJ1Y3R1cmUgdG8gcHJvdmlkZSBhIHNvcnRlZCB2aWV3IG9mIGFjY3VtdWxhdGVkIG1hcHBpbmdzIGluIGFcbiAqIHBlcmZvcm1hbmNlIGNvbnNjaW91cyBtYW5uZXIuIEl0IHRyYWRlcyBhIG5lZ2xpYmFibGUgb3ZlcmhlYWQgaW4gZ2VuZXJhbFxuICogY2FzZSBmb3IgYSBsYXJnZSBzcGVlZHVwIGluIGNhc2Ugb2YgbWFwcGluZ3MgYmVpbmcgYWRkZWQgaW4gb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIE1hcHBpbmdMaXN0KCkge1xuICB0aGlzLl9hcnJheSA9IFtdO1xuICB0aGlzLl9zb3J0ZWQgPSB0cnVlO1xuICAvLyBTZXJ2ZXMgYXMgaW5maW11bVxuICB0aGlzLl9sYXN0ID0ge2dlbmVyYXRlZExpbmU6IC0xLCBnZW5lcmF0ZWRDb2x1bW46IDB9O1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgdGhyb3VnaCBpbnRlcm5hbCBpdGVtcy4gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHNhbWUgYXJndW1lbnRzIHRoYXRcbiAqIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgdGFrZXMuXG4gKlxuICogTk9URTogVGhlIG9yZGVyIG9mIHRoZSBtYXBwaW5ncyBpcyBOT1QgZ3VhcmFudGVlZC5cbiAqL1xuTWFwcGluZ0xpc3QucHJvdG90eXBlLnVuc29ydGVkRm9yRWFjaCA9XG4gIGZ1bmN0aW9uIE1hcHBpbmdMaXN0X2ZvckVhY2goYUNhbGxiYWNrLCBhVGhpc0FyZykge1xuICAgIHRoaXMuX2FycmF5LmZvckVhY2goYUNhbGxiYWNrLCBhVGhpc0FyZyk7XG4gIH07XG5cbi8qKlxuICogQWRkIHRoZSBnaXZlbiBzb3VyY2UgbWFwcGluZy5cbiAqXG4gKiBAcGFyYW0gT2JqZWN0IGFNYXBwaW5nXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBNYXBwaW5nTGlzdF9hZGQoYU1hcHBpbmcpIHtcbiAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uQWZ0ZXIodGhpcy5fbGFzdCwgYU1hcHBpbmcpKSB7XG4gICAgdGhpcy5fbGFzdCA9IGFNYXBwaW5nO1xuICAgIHRoaXMuX2FycmF5LnB1c2goYU1hcHBpbmcpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3NvcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2FycmF5LnB1c2goYU1hcHBpbmcpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZsYXQsIHNvcnRlZCBhcnJheSBvZiBtYXBwaW5ncy4gVGhlIG1hcHBpbmdzIGFyZSBzb3J0ZWQgYnlcbiAqIGdlbmVyYXRlZCBwb3NpdGlvbi5cbiAqXG4gKiBXQVJOSU5HOiBUaGlzIG1ldGhvZCByZXR1cm5zIGludGVybmFsIGRhdGEgd2l0aG91dCBjb3B5aW5nLCBmb3JcbiAqIHBlcmZvcm1hbmNlLiBUaGUgcmV0dXJuIHZhbHVlIG11c3QgTk9UIGJlIG11dGF0ZWQsIGFuZCBzaG91bGQgYmUgdHJlYXRlZCBhc1xuICogYW4gaW1tdXRhYmxlIGJvcnJvdy4gSWYgeW91IHdhbnQgdG8gdGFrZSBvd25lcnNoaXAsIHlvdSBtdXN0IG1ha2UgeW91ciBvd25cbiAqIGNvcHkuXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gTWFwcGluZ0xpc3RfdG9BcnJheSgpIHtcbiAgaWYgKCF0aGlzLl9zb3J0ZWQpIHtcbiAgICB0aGlzLl9hcnJheS5zb3J0KHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQpO1xuICAgIHRoaXMuX3NvcnRlZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2FycmF5O1xufTtcblxuZXhwb3J0cy5NYXBwaW5nTGlzdCA9IE1hcHBpbmdMaXN0O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG4vLyBJdCB0dXJucyBvdXQgdGhhdCBzb21lIChtb3N0PykgSmF2YVNjcmlwdCBlbmdpbmVzIGRvbid0IHNlbGYtaG9zdFxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YC4gVGhpcyBtYWtlcyBzZW5zZSBiZWNhdXNlIEMrKyB3aWxsIGxpa2VseSByZW1haW5cbi8vIGZhc3RlciB0aGFuIEpTIHdoZW4gZG9pbmcgcmF3IENQVS1pbnRlbnNpdmUgc29ydGluZy4gSG93ZXZlciwgd2hlbiB1c2luZyBhXG4vLyBjdXN0b20gY29tcGFyYXRvciBmdW5jdGlvbiwgY2FsbGluZyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHRoZSBWTSdzIEMrKyBhbmRcbi8vIEpJVCdkIEpTIGlzIHJhdGhlciBzbG93ICphbmQqIGxvc2VzIEpJVCB0eXBlIGluZm9ybWF0aW9uLCByZXN1bHRpbmcgaW5cbi8vIHdvcnNlIGdlbmVyYXRlZCBjb2RlIGZvciB0aGUgY29tcGFyYXRvciBmdW5jdGlvbiB0aGFuIHdvdWxkIGJlIG9wdGltYWwuIEluXG4vLyBmYWN0LCB3aGVuIHNvcnRpbmcgd2l0aCBhIGNvbXBhcmF0b3IsIHRoZXNlIGNvc3RzIG91dHdlaWdoIHRoZSBiZW5lZml0cyBvZlxuLy8gc29ydGluZyBpbiBDKysuIEJ5IHVzaW5nIG91ciBvd24gSlMtaW1wbGVtZW50ZWQgUXVpY2sgU29ydCAoYmVsb3cpLCB3ZSBnZXRcbi8vIGEgfjM1MDBtcyBtZWFuIHNwZWVkLXVwIGluIGBiZW5jaC9iZW5jaC5odG1sYC5cblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50cyBpbmRleGVkIGJ5IGB4YCBhbmQgYHlgIGluIHRoZSBhcnJheSBgYXJ5YC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBUaGUgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogICAgICAgIFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiAgICAgICAgVGhlIGluZGV4IG9mIHRoZSBzZWNvbmQgaXRlbS5cbiAqL1xuZnVuY3Rpb24gc3dhcChhcnksIHgsIHkpIHtcbiAgdmFyIHRlbXAgPSBhcnlbeF07XG4gIGFyeVt4XSA9IGFyeVt5XTtcbiAgYXJ5W3ldID0gdGVtcDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZSBgbG93IC4uIGhpZ2hgIGluY2x1c2l2ZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbG93XG4gKiAgICAgICAgVGhlIGxvd2VyIGJvdW5kIG9uIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBoaWdoXG4gKiAgICAgICAgVGhlIHVwcGVyIGJvdW5kIG9uIHRoZSByYW5nZS5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50SW5SYW5nZShsb3csIGhpZ2gpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQobG93ICsgKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykpKTtcbn1cblxuLyoqXG4gKiBUaGUgUXVpY2sgU29ydCBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgQW4gYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3JcbiAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG4gKiBAcGFyYW0ge051bWJlcn0gcFxuICogICAgICAgIFN0YXJ0IGluZGV4IG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IHJcbiAqICAgICAgICBFbmQgaW5kZXggb2YgdGhlIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcikge1xuICAvLyBJZiBvdXIgbG93ZXIgYm91bmQgaXMgbGVzcyB0aGFuIG91ciB1cHBlciBib3VuZCwgd2UgKDEpIHBhcnRpdGlvbiB0aGVcbiAgLy8gYXJyYXkgaW50byB0d28gcGllY2VzIGFuZCAoMikgcmVjdXJzZSBvbiBlYWNoIGhhbGYuIElmIGl0IGlzIG5vdCwgdGhpcyBpc1xuICAvLyB0aGUgZW1wdHkgYXJyYXkgYW5kIG91ciBiYXNlIGNhc2UuXG5cbiAgaWYgKHAgPCByKSB7XG4gICAgLy8gKDEpIFBhcnRpdGlvbmluZy5cbiAgICAvL1xuICAgIC8vIFRoZSBwYXJ0aXRpb25pbmcgY2hvb3NlcyBhIHBpdm90IGJldHdlZW4gYHBgIGFuZCBgcmAgYW5kIG1vdmVzIGFsbFxuICAgIC8vIGVsZW1lbnRzIHRoYXQgYXJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QgdG8gdGhlIGJlZm9yZSBpdCwgYW5kXG4gICAgLy8gYWxsIHRoZSBlbGVtZW50cyB0aGF0IGFyZSBncmVhdGVyIHRoYW4gaXQgYWZ0ZXIgaXQuIFRoZSBlZmZlY3QgaXMgdGhhdFxuICAgIC8vIG9uY2UgcGFydGl0aW9uIGlzIGRvbmUsIHRoZSBwaXZvdCBpcyBpbiB0aGUgZXhhY3QgcGxhY2UgaXQgd2lsbCBiZSB3aGVuXG4gICAgLy8gdGhlIGFycmF5IGlzIHB1dCBpbiBzb3J0ZWQgb3JkZXIsIGFuZCBpdCB3aWxsIG5vdCBuZWVkIHRvIGJlIG1vdmVkXG4gICAgLy8gYWdhaW4uIFRoaXMgcnVucyBpbiBPKG4pIHRpbWUuXG5cbiAgICAvLyBBbHdheXMgY2hvb3NlIGEgcmFuZG9tIHBpdm90IHNvIHRoYXQgYW4gaW5wdXQgYXJyYXkgd2hpY2ggaXMgcmV2ZXJzZVxuICAgIC8vIHNvcnRlZCBkb2VzIG5vdCBjYXVzZSBPKG5eMikgcnVubmluZyB0aW1lLlxuICAgIHZhciBwaXZvdEluZGV4ID0gcmFuZG9tSW50SW5SYW5nZShwLCByKTtcbiAgICB2YXIgaSA9IHAgLSAxO1xuXG4gICAgc3dhcChhcnksIHBpdm90SW5kZXgsIHIpO1xuICAgIHZhciBwaXZvdCA9IGFyeVtyXTtcblxuICAgIC8vIEltbWVkaWF0ZWx5IGFmdGVyIGBqYCBpcyBpbmNyZW1lbnRlZCBpbiB0aGlzIGxvb3AsIHRoZSBmb2xsb3dpbmcgaG9sZFxuICAgIC8vIHRydWU6XG4gICAgLy9cbiAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W3AgLi4gaV1gIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QuXG4gICAgLy9cbiAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W2krMSAuLiBqLTFdYCBpcyBncmVhdGVyIHRoYW4gdGhlIHBpdm90LlxuICAgIGZvciAodmFyIGogPSBwOyBqIDwgcjsgaisrKSB7XG4gICAgICBpZiAoY29tcGFyYXRvcihhcnlbal0sIHBpdm90KSA8PSAwKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgc3dhcChhcnksIGksIGopO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3YXAoYXJ5LCBpICsgMSwgaik7XG4gICAgdmFyIHEgPSBpICsgMTtcblxuICAgIC8vICgyKSBSZWN1cnNlIG9uIGVhY2ggaGFsZi5cblxuICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcSAtIDEpO1xuICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcSArIDEsIHIpO1xuICB9XG59XG5cbi8qKlxuICogU29ydCB0aGUgZ2l2ZW4gYXJyYXkgaW4tcGxhY2Ugd2l0aCB0aGUgZ2l2ZW4gY29tcGFyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBBbiBhcnJheSB0byBzb3J0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyYXRvclxuICogICAgICAgIEZ1bmN0aW9uIHRvIHVzZSB0byBjb21wYXJlIHR3byBpdGVtcy5cbiAqL1xuZXhwb3J0cy5xdWlja1NvcnQgPSBmdW5jdGlvbiAoYXJ5LCBjb21wYXJhdG9yKSB7XG4gIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgMCwgYXJ5Lmxlbmd0aCAtIDEpO1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBiaW5hcnlTZWFyY2ggPSByZXF1aXJlKCcuL2JpbmFyeS1zZWFyY2gnKTtcbnZhciBBcnJheVNldCA9IHJlcXVpcmUoJy4vYXJyYXktc2V0JykuQXJyYXlTZXQ7XG52YXIgYmFzZTY0VkxRID0gcmVxdWlyZSgnLi9iYXNlNjQtdmxxJyk7XG52YXIgcXVpY2tTb3J0ID0gcmVxdWlyZSgnLi9xdWljay1zb3J0JykucXVpY2tTb3J0O1xuXG5mdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZU1hcC5zZWN0aW9ucyAhPSBudWxsXG4gICAgPyBuZXcgSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTClcbiAgICA6IG5ldyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cblNvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAgPSBmdW5jdGlvbihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHJldHVybiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cbi8qKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vLyBgX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kIGBfX29yaWdpbmFsTWFwcGluZ3NgIGFyZSBhcnJheXMgdGhhdCBob2xkIHRoZVxuLy8gcGFyc2VkIG1hcHBpbmcgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlIG1hcCdzIFwibWFwcGluZ3NcIiBhdHRyaWJ1dGUuIFRoZXlcbi8vIGFyZSBsYXppbHkgaW5zdGFudGlhdGVkLCBhY2Nlc3NlZCB2aWEgdGhlIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuLy8gYF9vcmlnaW5hbE1hcHBpbmdzYCBnZXR0ZXJzIHJlc3BlY3RpdmVseSwgYW5kIHdlIG9ubHkgcGFyc2UgdGhlIG1hcHBpbmdzXG4vLyBhbmQgY3JlYXRlIHRoZXNlIGFycmF5cyBvbmNlIHF1ZXJpZWQgZm9yIGEgc291cmNlIGxvY2F0aW9uLiBXZSBqdW1wIHRocm91Z2hcbi8vIHRoZXNlIGhvb3BzIGJlY2F1c2UgdGhlcmUgY2FuIGJlIG1hbnkgdGhvdXNhbmRzIG9mIG1hcHBpbmdzLCBhbmQgcGFyc2luZ1xuLy8gdGhlbSBpcyBleHBlbnNpdmUsIHNvIHdlIG9ubHkgd2FudCB0byBkbyBpdCBpZiB3ZSBtdXN0LlxuLy9cbi8vIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheXMgaXMgb2YgdGhlIGZvcm06XG4vL1xuLy8gICAgIHtcbi8vICAgICAgIGdlbmVyYXRlZExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBnZW5lcmF0ZWRDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIHNvdXJjZTogVGhlIHBhdGggdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlIHRoYXQgZ2VuZXJhdGVkIHRoaXNcbi8vICAgICAgICAgICAgICAgY2h1bmsgb2YgY29kZSxcbi8vICAgICAgIG9yaWdpbmFsTGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuLy8gICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kcyB0byB0aGlzIGNodW5rIG9mIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgb3JpZ2luYWxDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuLy8gICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRzIHRvIHRoaXMgY2h1bmsgb2YgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgb3JpZ2luYWwgc3ltYm9sIHdoaWNoIGdlbmVyYXRlZCB0aGlzIGNodW5rIG9mXG4vLyAgICAgICAgICAgICBjb2RlLlxuLy8gICAgIH1cbi8vXG4vLyBBbGwgcHJvcGVydGllcyBleGNlcHQgZm9yIGBnZW5lcmF0ZWRMaW5lYCBhbmQgYGdlbmVyYXRlZENvbHVtbmAgY2FuIGJlXG4vLyBgbnVsbGAuXG4vL1xuLy8gYF9nZW5lcmF0ZWRNYXBwaW5nc2AgaXMgb3JkZXJlZCBieSB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucy5cbi8vXG4vLyBgX29yaWdpbmFsTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIG9yaWdpbmFsIHBvc2l0aW9ucy5cblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19nZW5lcmF0ZWRNYXBwaW5ncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncykge1xuICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzO1xuICB9XG59KTtcblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fb3JpZ2luYWxNYXBwaW5ncyA9IG51bGw7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnX29yaWdpbmFsTWFwcGluZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncykge1xuICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX29yaWdpbmFsTWFwcGluZ3M7XG4gIH1cbn0pO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yKGFTdHIsIGluZGV4KSB7XG4gICAgdmFyIGMgPSBhU3RyLmNoYXJBdChpbmRleCk7XG4gICAgcmV0dXJuIGMgPT09IFwiO1wiIHx8IGMgPT09IFwiLFwiO1xuICB9O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcbiAqIHF1ZXJ5ICh0aGUgb3JkZXJlZCBhcnJheXMgaW4gdGhlIGB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN1YmNsYXNzZXMgbXVzdCBpbXBsZW1lbnQgX3BhcnNlTWFwcGluZ3NcIik7XG4gIH07XG5cblNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUiA9IDE7XG5Tb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUiA9IDI7XG5cblNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EID0gMTtcblNvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EID0gMjtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZWFjaCBtYXBwaW5nIGJldHdlZW4gYW4gb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uIGFuZCBhXG4gKiBnZW5lcmF0ZWQgbGluZS9jb2x1bW4gaW4gdGhpcyBzb3VyY2UgbWFwLlxuICpcbiAqIEBwYXJhbSBGdW5jdGlvbiBhQ2FsbGJhY2tcbiAqICAgICAgICBUaGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBlYWNoIG1hcHBpbmcuXG4gKiBAcGFyYW0gT2JqZWN0IGFDb250ZXh0XG4gKiAgICAgICAgT3B0aW9uYWwuIElmIHNwZWNpZmllZCwgdGhpcyBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgYHRoaXNgIGV2ZXJ5XG4gKiAgICAgICAgdGltZSB0aGF0IGBhQ2FsbGJhY2tgIGlzIGNhbGxlZC5cbiAqIEBwYXJhbSBhT3JkZXJcbiAqICAgICAgICBFaXRoZXIgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAgb3JcbiAqICAgICAgICBgU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVJgLiBTcGVjaWZpZXMgd2hldGhlciB5b3Ugd2FudCB0b1xuICogICAgICAgIGl0ZXJhdGUgb3ZlciB0aGUgbWFwcGluZ3Mgc29ydGVkIGJ5IHRoZSBnZW5lcmF0ZWQgZmlsZSdzIGxpbmUvY29sdW1uXG4gKiAgICAgICAgb3JkZXIgb3IgdGhlIG9yaWdpbmFsJ3Mgc291cmNlL2xpbmUvY29sdW1uIG9yZGVyLCByZXNwZWN0aXZlbHkuIERlZmF1bHRzIHRvXG4gKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5lYWNoTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2VhY2hNYXBwaW5nKGFDYWxsYmFjaywgYUNvbnRleHQsIGFPcmRlcikge1xuICAgIHZhciBjb250ZXh0ID0gYUNvbnRleHQgfHwgbnVsbDtcbiAgICB2YXIgb3JkZXIgPSBhT3JkZXIgfHwgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSO1xuXG4gICAgdmFyIG1hcHBpbmdzO1xuICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICBjYXNlIFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjpcbiAgICAgIG1hcHBpbmdzID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3M7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSOlxuICAgICAgbWFwcGluZ3MgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3JkZXIgb2YgaXRlcmF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlUm9vdCA9IHRoaXMuc291cmNlUm9vdDtcbiAgICBtYXBwaW5ncy5tYXAoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBtYXBwaW5nLnNvdXJjZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzb3VyY2UsIHRoaXMuX3NvdXJjZU1hcFVSTCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgZ2VuZXJhdGVkTGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lLFxuICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uLFxuICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICBvcmlnaW5hbENvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgbmFtZTogbWFwcGluZy5uYW1lID09PSBudWxsID8gbnVsbCA6IHRoaXMuX25hbWVzLmF0KG1hcHBpbmcubmFtZSlcbiAgICAgIH07XG4gICAgfSwgdGhpcykuZm9yRWFjaChhQ2FsbGJhY2ssIGNvbnRleHQpO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgYWxsIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG4gKiBsaW5lLCBhbmQgY29sdW1uIHByb3ZpZGVkLiBJZiBubyBjb2x1bW4gaXMgcHJvdmlkZWQsIHJldHVybnMgYWxsIG1hcHBpbmdzXG4gKiBjb3JyZXNwb25kaW5nIHRvIGEgZWl0aGVyIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yIG9yIHRoZSBuZXh0XG4gKiBjbG9zZXN0IGxpbmUgdGhhdCBoYXMgYW55IG1hcHBpbmdzLiBPdGhlcndpc2UsIHJldHVybnMgYWxsIG1hcHBpbmdzXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBsaW5lIGFuZCBlaXRoZXIgdGhlIGNvbHVtbiB3ZSBhcmUgc2VhcmNoaW5nIGZvclxuICogb3IgdGhlIG5leHQgY2xvc2VzdCBjb2x1bW4gdGhhdCBoYXMgYW55IG9mZnNldHMuXG4gKlxuICogVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBPcHRpb25hbC4gdGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIGFycmF5IG9mIG9iamVjdHMgaXMgcmV0dXJuZWQsIGVhY2ggd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmFsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2FsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvcihhQXJncykge1xuICAgIHZhciBsaW5lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyk7XG5cbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIGV4YWN0IG1hdGNoLCBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZE1hcHBpbmdcbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY2xvc2VzdCBtYXBwaW5nIGxlc3MgdGhhbiB0aGUgbmVlZGxlLiBCeVxuICAgIC8vIHNldHRpbmcgbmVlZGxlLm9yaWdpbmFsQ29sdW1uIHRvIDAsIHdlIHRodXMgZmluZCB0aGUgbGFzdCBtYXBwaW5nIGZvclxuICAgIC8vIHRoZSBnaXZlbiBsaW5lLCBwcm92aWRlZCBzdWNoIGEgbWFwcGluZyBleGlzdHMuXG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIHNvdXJjZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKSxcbiAgICAgIG9yaWdpbmFsTGluZTogbGluZSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicsIDApXG4gICAgfTtcblxuICAgIG5lZWRsZS5zb3VyY2UgPSB0aGlzLl9maW5kU291cmNlSW5kZXgobmVlZGxlLnNvdXJjZSk7XG4gICAgaWYgKG5lZWRsZS5zb3VyY2UgPCAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG1hcHBpbmdzID0gW107XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhuZWVkbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsTGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luYWxDb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChhQXJncy5jb2x1bW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmU7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cbiAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSBmb3VuZC4gU2luY2VcbiAgICAgICAgLy8gbWFwcGluZ3MgYXJlIHNvcnRlZCwgdGhpcyBpcyBndWFyYW50ZWVkIHRvIGZpbmQgYWxsIG1hcHBpbmdzIGZvclxuICAgICAgICAvLyB0aGUgbGluZSB3ZSBmb3VuZC5cbiAgICAgICAgd2hpbGUgKG1hcHBpbmcgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IG9yaWdpbmFsTGluZSkge1xuICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cbiAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSB3ZXJlIHNlYXJjaGluZyBmb3IuXG4gICAgICAgIC8vIFNpbmNlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3JcbiAgICAgICAgLy8gdGhlIGxpbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IuXG4gICAgICAgIHdoaWxlIChtYXBwaW5nICYmXG4gICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gbGluZSAmJlxuICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9PSBvcmlnaW5hbENvbHVtbikge1xuICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFwcGluZ3M7XG4gIH07XG5cbmV4cG9ydHMuU291cmNlTWFwQ29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBBIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoIHdlIGNhblxuICogcXVlcnkgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBvcmlnaW5hbCBmaWxlIHBvc2l0aW9ucyBieSBnaXZpbmcgaXQgYSBmaWxlXG4gKiBwb3NpdGlvbiBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS5cbiAqXG4gKiBUaGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yXG4gKiBhbHJlYWR5IHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNvdXJjZSBtYXBzIGhhdmUgdGhlXG4gKiBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqXG4gKiAgIC0gdmVyc2lvbjogV2hpY2ggdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcCBzcGVjIHRoaXMgbWFwIGlzIGZvbGxvd2luZy5cbiAqICAgLSBzb3VyY2VzOiBBbiBhcnJheSBvZiBVUkxzIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG4gKiAgIC0gbmFtZXM6IEFuIGFycmF5IG9mIGlkZW50aWZpZXJzIHdoaWNoIGNhbiBiZSByZWZlcnJlbmNlZCBieSBpbmRpdmlkdWFsIG1hcHBpbmdzLlxuICogICAtIHNvdXJjZVJvb3Q6IE9wdGlvbmFsLiBUaGUgVVJMIHJvb3QgZnJvbSB3aGljaCBhbGwgc291cmNlcyBhcmUgcmVsYXRpdmUuXG4gKiAgIC0gc291cmNlc0NvbnRlbnQ6IE9wdGlvbmFsLiBBbiBhcnJheSBvZiBjb250ZW50cyBvZiB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGVzLlxuICogICAtIG1hcHBpbmdzOiBBIHN0cmluZyBvZiBiYXNlNjQgVkxRcyB3aGljaCBjb250YWluIHRoZSBhY3R1YWwgbWFwcGluZ3MuXG4gKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICpcbiAqIEhlcmUgaXMgYW4gZXhhbXBsZSBzb3VyY2UgbWFwLCB0YWtlbiBmcm9tIHRoZSBzb3VyY2UgbWFwIHNwZWNbMF06XG4gKlxuICogICAgIHtcbiAqICAgICAgIHZlcnNpb24gOiAzLFxuICogICAgICAgZmlsZTogXCJvdXQuanNcIixcbiAqICAgICAgIHNvdXJjZVJvb3QgOiBcIlwiLFxuICogICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuICogICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG4gKiAgICAgICBtYXBwaW5nczogXCJBQSxBQjs7QUJDREU7XCJcbiAqICAgICB9XG4gKlxuICogVGhlIHNlY29uZCBwYXJhbWV0ZXIsIGlmIGdpdmVuLCBpcyBhIHN0cmluZyB3aG9zZSB2YWx1ZSBpcyB0aGUgVVJMXG4gKiBhdCB3aGljaCB0aGUgc291cmNlIG1hcCB3YXMgZm91bmQuICBUaGlzIFVSTCBpcyB1c2VkIHRvIGNvbXB1dGUgdGhlXG4gKiBzb3VyY2VzIGFycmF5LlxuICpcbiAqIFswXTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xVTFSR0FlaFF3UnlwVVRvdkYxS1JscGlPRnplMGItXzJnYzZmQUgwS1kway9lZGl0P3BsaT0xI1xuICovXG5mdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG4gIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICBzb3VyY2VNYXAgPSB1dGlsLnBhcnNlU291cmNlTWFwSW5wdXQoYVNvdXJjZU1hcCk7XG4gIH1cblxuICB2YXIgdmVyc2lvbiA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3ZlcnNpb24nKTtcbiAgdmFyIHNvdXJjZXMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzJyk7XG4gIC8vIFNhc3MgMy4zIGxlYXZlcyBvdXQgdGhlICduYW1lcycgYXJyYXksIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgc3BlYyAod2hpY2hcbiAgLy8gcmVxdWlyZXMgdGhlIGFycmF5KSB0byBwbGF5IG5pY2UgaGVyZS5cbiAgdmFyIG5hbWVzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbmFtZXMnLCBbXSk7XG4gIHZhciBzb3VyY2VSb290ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlUm9vdCcsIG51bGwpO1xuICB2YXIgc291cmNlc0NvbnRlbnQgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzQ29udGVudCcsIG51bGwpO1xuICB2YXIgbWFwcGluZ3MgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdtYXBwaW5ncycpO1xuICB2YXIgZmlsZSA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ2ZpbGUnLCBudWxsKTtcblxuICAvLyBPbmNlIGFnYWluLCBTYXNzIGRldmlhdGVzIGZyb20gdGhlIHNwZWMgYW5kIHN1cHBsaWVzIHRoZSB2ZXJzaW9uIGFzIGFcbiAgLy8gc3RyaW5nIHJhdGhlciB0aGFuIGEgbnVtYmVyLCBzbyB3ZSB1c2UgbG9vc2UgZXF1YWxpdHkgY2hlY2tpbmcgaGVyZS5cbiAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHNvdXJjZVJvb3QpIHtcbiAgICBzb3VyY2VSb290ID0gdXRpbC5ub3JtYWxpemUoc291cmNlUm9vdCk7XG4gIH1cblxuICBzb3VyY2VzID0gc291cmNlc1xuICAgIC5tYXAoU3RyaW5nKVxuICAgIC8vIFNvbWUgc291cmNlIG1hcHMgcHJvZHVjZSByZWxhdGl2ZSBzb3VyY2UgcGF0aHMgbGlrZSBcIi4vZm9vLmpzXCIgaW5zdGVhZCBvZlxuICAgIC8vIFwiZm9vLmpzXCIuICBOb3JtYWxpemUgdGhlc2UgZmlyc3Qgc28gdGhhdCBmdXR1cmUgY29tcGFyaXNvbnMgd2lsbCBzdWNjZWVkLlxuICAgIC8vIFNlZSBidWd6aWwubGEvMTA5MDc2OC5cbiAgICAubWFwKHV0aWwubm9ybWFsaXplKVxuICAgIC8vIEFsd2F5cyBlbnN1cmUgdGhhdCBhYnNvbHV0ZSBzb3VyY2VzIGFyZSBpbnRlcm5hbGx5IHN0b3JlZCByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSBzb3VyY2Ugcm9vdCwgaWYgdGhlIHNvdXJjZSByb290IGlzIGFic29sdXRlLiBOb3QgZG9pbmcgdGhpcyB3b3VsZFxuICAgIC8vIGJlIHBhcnRpY3VsYXJseSBwcm9ibGVtYXRpYyB3aGVuIHRoZSBzb3VyY2Ugcm9vdCBpcyBhIHByZWZpeCBvZiB0aGVcbiAgICAvLyBzb3VyY2UgKHZhbGlkLCBidXQgd2h5Pz8pLiBTZWUgZ2l0aHViIGlzc3VlICMxOTkgYW5kIGJ1Z3ppbC5sYS8xMTg4OTgyLlxuICAgIC5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHNvdXJjZVJvb3QgJiYgdXRpbC5pc0Fic29sdXRlKHNvdXJjZVJvb3QpICYmIHV0aWwuaXNBYnNvbHV0ZShzb3VyY2UpXG4gICAgICAgID8gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2UpXG4gICAgICAgIDogc291cmNlO1xuICAgIH0pO1xuXG4gIC8vIFBhc3MgYHRydWVgIGJlbG93IHRvIGFsbG93IGR1cGxpY2F0ZSBuYW1lcyBhbmQgc291cmNlcy4gV2hpbGUgc291cmNlIG1hcHNcbiAgLy8gYXJlIGludGVuZGVkIHRvIGJlIGNvbXByZXNzZWQgYW5kIGRlZHVwbGljYXRlZCwgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXJcbiAgLy8gc29tZXRpbWVzIGdlbmVyYXRlcyBzb3VyY2UgbWFwcyB3aXRoIGR1cGxpY2F0ZXMgaW4gdGhlbS4gU2VlIEdpdGh1YiBpc3N1ZVxuICAvLyAjNzIgYW5kIGJ1Z3ppbC5sYS84ODk0OTIuXG4gIHRoaXMuX25hbWVzID0gQXJyYXlTZXQuZnJvbUFycmF5KG5hbWVzLm1hcChTdHJpbmcpLCB0cnVlKTtcbiAgdGhpcy5fc291cmNlcyA9IEFycmF5U2V0LmZyb21BcnJheShzb3VyY2VzLCB0cnVlKTtcblxuICB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMgPSB0aGlzLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdXRpbC5jb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICB9KTtcblxuICB0aGlzLnNvdXJjZVJvb3QgPSBzb3VyY2VSb290O1xuICB0aGlzLnNvdXJjZXNDb250ZW50ID0gc291cmNlc0NvbnRlbnQ7XG4gIHRoaXMuX21hcHBpbmdzID0gbWFwcGluZ3M7XG4gIHRoaXMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gIHRoaXMuZmlsZSA9IGZpbGU7XG59XG5cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGZpbmQgdGhlIGluZGV4IG9mIGEgc291cmNlLiAgUmV0dXJucyAtMSBpZiBub3RcbiAqIGZvdW5kLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZFNvdXJjZUluZGV4ID0gZnVuY3Rpb24oYVNvdXJjZSkge1xuICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICByZWxhdGl2ZVNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCByZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICBpZiAodGhpcy5fc291cmNlcy5oYXMocmVsYXRpdmVTb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZXMuaW5kZXhPZihyZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICAvLyBNYXliZSBhU291cmNlIGlzIGFuIGFic29sdXRlIFVSTCBhcyByZXR1cm5lZCBieSB8c291cmNlc3wuICBJblxuICAvLyB0aGlzIGNhc2Ugd2UgY2FuJ3Qgc2ltcGx5IHVuZG8gdGhlIHRyYW5zZm9ybS5cbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcy5fYWJzb2x1dGVTb3VyY2VzW2ldID09IGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBmcm9tIGEgU291cmNlTWFwR2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSBTb3VyY2VNYXBHZW5lcmF0b3IgYVNvdXJjZU1hcFxuICogICAgICAgIFRoZSBzb3VyY2UgbWFwIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbiAqIEBwYXJhbSBTdHJpbmcgYVNvdXJjZU1hcFVSTFxuICogICAgICAgIFRoZSBVUkwgYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgY2FuIGJlIGZvdW5kIChvcHRpb25hbClcbiAqIEByZXR1cm5zIEJhc2ljU291cmNlTWFwQ29uc3VtZXJcbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZnJvbVNvdXJjZU1hcChhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gICAgdmFyIHNtYyA9IE9iamVjdC5jcmVhdGUoQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuXG4gICAgdmFyIG5hbWVzID0gc21jLl9uYW1lcyA9IEFycmF5U2V0LmZyb21BcnJheShhU291cmNlTWFwLl9uYW1lcy50b0FycmF5KCksIHRydWUpO1xuICAgIHZhciBzb3VyY2VzID0gc21jLl9zb3VyY2VzID0gQXJyYXlTZXQuZnJvbUFycmF5KGFTb3VyY2VNYXAuX3NvdXJjZXMudG9BcnJheSgpLCB0cnVlKTtcbiAgICBzbWMuc291cmNlUm9vdCA9IGFTb3VyY2VNYXAuX3NvdXJjZVJvb3Q7XG4gICAgc21jLnNvdXJjZXNDb250ZW50ID0gYVNvdXJjZU1hcC5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudChzbWMuX3NvdXJjZXMudG9BcnJheSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21jLnNvdXJjZVJvb3QpO1xuICAgIHNtYy5maWxlID0gYVNvdXJjZU1hcC5fZmlsZTtcbiAgICBzbWMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gICAgc21jLl9hYnNvbHV0ZVNvdXJjZXMgPSBzbWMuX3NvdXJjZXMudG9BcnJheSgpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzbWMuc291cmNlUm9vdCwgcywgYVNvdXJjZU1hcFVSTCk7XG4gICAgfSk7XG5cbiAgICAvLyBCZWNhdXNlIHdlIGFyZSBtb2RpZnlpbmcgdGhlIGVudHJpZXMgKGJ5IGNvbnZlcnRpbmcgc3RyaW5nIHNvdXJjZXMgYW5kXG4gICAgLy8gbmFtZXMgdG8gaW5kaWNlcyBpbnRvIHRoZSBzb3VyY2VzIGFuZCBuYW1lcyBBcnJheVNldHMpLCB3ZSBoYXZlIHRvIG1ha2VcbiAgICAvLyBhIGNvcHkgb2YgdGhlIGVudHJ5IG9yIGVsc2UgYmFkIHRoaW5ncyBoYXBwZW4uIFNoYXJlZCBtdXRhYmxlIHN0YXRlXG4gICAgLy8gc3RyaWtlcyBhZ2FpbiEgU2VlIGdpdGh1YiBpc3N1ZSAjMTkxLlxuXG4gICAgdmFyIGdlbmVyYXRlZE1hcHBpbmdzID0gYVNvdXJjZU1hcC5fbWFwcGluZ3MudG9BcnJheSgpLnNsaWNlKCk7XG4gICAgdmFyIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncyA9IHNtYy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gW107XG4gICAgdmFyIGRlc3RPcmlnaW5hbE1hcHBpbmdzID0gc21jLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3JjTWFwcGluZyA9IGdlbmVyYXRlZE1hcHBpbmdzW2ldO1xuICAgICAgdmFyIGRlc3RNYXBwaW5nID0gbmV3IE1hcHBpbmc7XG4gICAgICBkZXN0TWFwcGluZy5nZW5lcmF0ZWRMaW5lID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRMaW5lO1xuICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgIGlmIChzcmNNYXBwaW5nLnNvdXJjZSkge1xuICAgICAgICBkZXN0TWFwcGluZy5zb3VyY2UgPSBzb3VyY2VzLmluZGV4T2Yoc3JjTWFwcGluZy5zb3VyY2UpO1xuICAgICAgICBkZXN0TWFwcGluZy5vcmlnaW5hbExpbmUgPSBzcmNNYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBzcmNNYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIGlmIChzcmNNYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBkZXN0TWFwcGluZy5uYW1lID0gbmFtZXMuaW5kZXhPZihzcmNNYXBwaW5nLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdE9yaWdpbmFsTWFwcGluZ3MucHVzaChkZXN0TWFwcGluZyk7XG4gICAgICB9XG5cbiAgICAgIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGRlc3RNYXBwaW5nKTtcbiAgICB9XG5cbiAgICBxdWlja1NvcnQoc21jLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gc21jO1xuICB9O1xuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMuc2xpY2UoKTtcbiAgfVxufSk7XG5cbi8qKlxuICogUHJvdmlkZSB0aGUgSklUIHdpdGggYSBuaWNlIHNoYXBlIC8gaGlkZGVuIGNsYXNzLlxuICovXG5mdW5jdGlvbiBNYXBwaW5nKCkge1xuICB0aGlzLmdlbmVyYXRlZExpbmUgPSAwO1xuICB0aGlzLmdlbmVyYXRlZENvbHVtbiA9IDA7XG4gIHRoaXMuc291cmNlID0gbnVsbDtcbiAgdGhpcy5vcmlnaW5hbExpbmUgPSBudWxsO1xuICB0aGlzLm9yaWdpbmFsQ29sdW1uID0gbnVsbDtcbiAgdGhpcy5uYW1lID0gbnVsbDtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHZhciBnZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c1NvdXJjZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGFTdHIubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNhY2hlZFNlZ21lbnRzID0ge307XG4gICAgdmFyIHRlbXAgPSB7fTtcbiAgICB2YXIgb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBtYXBwaW5nLCBzdHIsIHNlZ21lbnQsIGVuZCwgdmFsdWU7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICc7Jykge1xuICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJywnKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbWFwcGluZyA9IG5ldyBNYXBwaW5nKCk7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IGdlbmVyYXRlZExpbmU7XG5cbiAgICAgICAgLy8gQmVjYXVzZSBlYWNoIG9mZnNldCBpcyBlbmNvZGVkIHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBvbmUsXG4gICAgICAgIC8vIG1hbnkgc2VnbWVudHMgb2Z0ZW4gaGF2ZSB0aGUgc2FtZSBlbmNvZGluZy4gV2UgY2FuIGV4cGxvaXQgdGhpc1xuICAgICAgICAvLyBmYWN0IGJ5IGNhY2hpbmcgdGhlIHBhcnNlZCB2YXJpYWJsZSBsZW5ndGggZmllbGRzIG9mIGVhY2ggc2VnbWVudCxcbiAgICAgICAgLy8gYWxsb3dpbmcgdXMgdG8gYXZvaWQgYSBzZWNvbmQgcGFyc2UgaWYgd2UgZW5jb3VudGVyIHRoZSBzYW1lXG4gICAgICAgIC8vIHNlZ21lbnQgYWdhaW4uXG4gICAgICAgIGZvciAoZW5kID0gaW5kZXg7IGVuZCA8IGxlbmd0aDsgZW5kKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBlbmQpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gYVN0ci5zbGljZShpbmRleCwgZW5kKTtcblxuICAgICAgICBzZWdtZW50ID0gY2FjaGVkU2VnbWVudHNbc3RyXTtcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAgICBpbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGJhc2U2NFZMUS5kZWNvZGUoYVN0ciwgaW5kZXgsIHRlbXApO1xuICAgICAgICAgICAgdmFsdWUgPSB0ZW1wLnZhbHVlO1xuICAgICAgICAgICAgaW5kZXggPSB0ZW1wLnJlc3Q7XG4gICAgICAgICAgICBzZWdtZW50LnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSwgYnV0IG5vIGxpbmUgYW5kIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSBhbmQgbGluZSwgYnV0IG5vIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlZFNlZ21lbnRzW3N0cl0gPSBzZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGVkIGNvbHVtbi5cbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gPSBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiArIHNlZ21lbnRbMF07XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIC8vIE9yaWdpbmFsIHNvdXJjZS5cbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHByZXZpb3VzU291cmNlICsgc2VnbWVudFsxXTtcbiAgICAgICAgICBwcmV2aW91c1NvdXJjZSArPSBzZWdtZW50WzFdO1xuXG4gICAgICAgICAgLy8gT3JpZ2luYWwgbGluZS5cbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9IHByZXZpb3VzT3JpZ2luYWxMaW5lICsgc2VnbWVudFsyXTtcbiAgICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICAgIC8vIExpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZFxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lICs9IDE7XG5cbiAgICAgICAgICAvLyBPcmlnaW5hbCBjb2x1bW4uXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gKyBzZWdtZW50WzNdO1xuICAgICAgICAgIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgLy8gT3JpZ2luYWwgbmFtZS5cbiAgICAgICAgICAgIG1hcHBpbmcubmFtZSA9IHByZXZpb3VzTmFtZSArIHNlZ21lbnRbNF07XG4gICAgICAgICAgICBwcmV2aW91c05hbWUgKz0gc2VnbWVudFs0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuICAgICAgICBpZiAodHlwZW9mIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG9yaWdpbmFsTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHF1aWNrU29ydChnZW5lcmF0ZWRNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCk7XG4gICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gZ2VuZXJhdGVkTWFwcGluZ3M7XG5cbiAgICBxdWlja1NvcnQob3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG4gICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MgPSBvcmlnaW5hbE1hcHBpbmdzO1xuICB9O1xuXG4vKipcbiAqIEZpbmQgdGhlIG1hcHBpbmcgdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGh5cG90aGV0aWNhbCBcIm5lZWRsZVwiIG1hcHBpbmcgdGhhdFxuICogd2UgYXJlIHNlYXJjaGluZyBmb3IgaW4gdGhlIGdpdmVuIFwiaGF5c3RhY2tcIiBvZiBtYXBwaW5ncy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZmluZE1hcHBpbmcoYU5lZWRsZSwgYU1hcHBpbmdzLCBhTGluZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb2x1bW5OYW1lLCBhQ29tcGFyYXRvciwgYUJpYXMpIHtcbiAgICAvLyBUbyByZXR1cm4gdGhlIHBvc2l0aW9uIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCB3ZSBtdXN0IGZpcnN0IGZpbmQgdGhlXG4gICAgLy8gbWFwcGluZyBmb3IgdGhlIGdpdmVuIHBvc2l0aW9uIGFuZCB0aGVuIHJldHVybiB0aGUgb3Bwb3NpdGUgcG9zaXRpb24gaXRcbiAgICAvLyBwb2ludHMgdG8uIEJlY2F1c2UgdGhlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHdlIGNhbiB1c2UgYmluYXJ5IHNlYXJjaCB0b1xuICAgIC8vIGZpbmQgdGhlIGJlc3QgbWFwcGluZy5cblxuICAgIGlmIChhTmVlZGxlW2FMaW5lTmFtZV0gPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTGluZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxLCBnb3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUxpbmVOYW1lXSk7XG4gICAgfVxuICAgIGlmIChhTmVlZGxlW2FDb2x1bW5OYW1lXSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbHVtbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLCBnb3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUNvbHVtbk5hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoLnNlYXJjaChhTmVlZGxlLCBhTWFwcGluZ3MsIGFDb21wYXJhdG9yLCBhQmlhcyk7XG4gIH07XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgbGFzdCBjb2x1bW4gZm9yIGVhY2ggZ2VuZXJhdGVkIG1hcHBpbmcuIFRoZSBsYXN0IGNvbHVtbiBpc1xuICogaW5jbHVzaXZlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5jb21wdXRlQ29sdW1uU3BhbnMgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jb21wdXRlQ29sdW1uU3BhbnMoKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIC8vIE1hcHBpbmdzIGRvIG5vdCBjb250YWluIGEgZmllbGQgZm9yIHRoZSBsYXN0IGdlbmVyYXRlZCBjb2x1bW50LiBXZVxuICAgICAgLy8gY2FuIGNvbWUgdXAgd2l0aCBhbiBvcHRpbWlzdGljIGVzdGltYXRlLCBob3dldmVyLCBieSBhc3N1bWluZyB0aGF0XG4gICAgICAvLyBtYXBwaW5ncyBhcmUgY29udGlndW91cyAoaS5lLiBnaXZlbiB0d28gY29uc2VjdXRpdmUgbWFwcGluZ3MsIHRoZVxuICAgICAgLy8gZmlyc3QgbWFwcGluZyBlbmRzIHdoZXJlIHRoZSBzZWNvbmQgb25lIHN0YXJ0cykuXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0TWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4ICsgMV07XG5cbiAgICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9PT0gbmV4dE1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IG5leHRNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGxhc3QgbWFwcGluZyBmb3IgZWFjaCBsaW5lIHNwYW5zIHRoZSBlbnRpcmUgbGluZS5cbiAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IEluZmluaXR5O1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UsIGxpbmUsIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdFxuICogd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlclxuICogICAgIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSwgb3IgbnVsbC5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICogICAtIG5hbWU6IFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLCBvciBudWxsLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfb3JpZ2luYWxQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBnZW5lcmF0ZWRMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIGdlbmVyYXRlZENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhcbiAgICAgIG5lZWRsZSxcbiAgICAgIHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLFxuICAgICAgXCJnZW5lcmF0ZWRMaW5lXCIsXG4gICAgICBcImdlbmVyYXRlZENvbHVtblwiLFxuICAgICAgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCxcbiAgICAgIHV0aWwuZ2V0QXJnKGFBcmdzLCAnYmlhcycsIFNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EKVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhtYXBwaW5nLCAnc291cmNlJywgbnVsbCk7XG4gICAgICAgIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmF0KHNvdXJjZSk7XG4gICAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHRoaXMuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ25hbWUnLCBudWxsKTtcbiAgICAgICAgaWYgKG5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBuYW1lID0gdGhpcy5fbmFtZXMuYXQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxMaW5lJywgbnVsbCksXG4gICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGwsXG4gICAgICBuYW1lOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB3ZSBoYXZlIHRoZSBzb3VyY2UgY29udGVudCBmb3IgZXZlcnkgc291cmNlIGluIHRoZSBzb3VyY2VcbiAqIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50Lmxlbmd0aCA+PSB0aGlzLl9zb3VyY2VzLnNpemUoKSAmJlxuICAgICAgIXRoaXMuc291cmNlc0NvbnRlbnQuc29tZShmdW5jdGlvbiAoc2MpIHsgcmV0dXJuIHNjID09IG51bGw7IH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuICogYXZhaWxhYmxlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfc291cmNlQ29udGVudEZvcihhU291cmNlLCBudWxsT25NaXNzaW5nKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kU291cmNlSW5kZXgoYVNvdXJjZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W2luZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgcmVsYXRpdmVTb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgcmVsYXRpdmVTb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciB1cmw7XG4gICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsXG4gICAgICAgICYmICh1cmwgPSB1dGlsLnVybFBhcnNlKHRoaXMuc291cmNlUm9vdCkpKSB7XG4gICAgICAvLyBYWFg6IGZpbGU6Ly8gVVJJcyBhbmQgYWJzb2x1dGUgcGF0aHMgbGVhZCB0byB1bmV4cGVjdGVkIGJlaGF2aW9yIGZvclxuICAgICAgLy8gbWFueSB1c2Vycy4gV2UgY2FuIGhlbHAgdGhlbSBvdXQgd2hlbiB0aGV5IGV4cGVjdCBmaWxlOi8vIFVSSXMgdG9cbiAgICAgIC8vIGJlaGF2ZSBsaWtlIGl0IHdvdWxkIGlmIHRoZXkgd2VyZSBydW5uaW5nIGEgbG9jYWwgSFRUUCBzZXJ2ZXIuIFNlZVxuICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg1NTk3LlxuICAgICAgdmFyIGZpbGVVcmlBYnNQYXRoID0gcmVsYXRpdmVTb3VyY2UucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgXCJcIik7XG4gICAgICBpZiAodXJsLnNjaGVtZSA9PSBcImZpbGVcIlxuICAgICAgICAgICYmIHRoaXMuX3NvdXJjZXMuaGFzKGZpbGVVcmlBYnNQYXRoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoZmlsZVVyaUFic1BhdGgpXVxuICAgICAgfVxuXG4gICAgICBpZiAoKCF1cmwucGF0aCB8fCB1cmwucGF0aCA9PSBcIi9cIilcbiAgICAgICAgICAmJiB0aGlzLl9zb3VyY2VzLmhhcyhcIi9cIiArIHJlbGF0aXZlU291cmNlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoXCIvXCIgKyByZWxhdGl2ZVNvdXJjZSldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCByZWN1cnNpdmVseSBmcm9tXG4gICAgLy8gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yLiBJbiB0aGF0IGNhc2UsIHdlXG4gICAgLy8gZG9uJ3Qgd2FudCB0byB0aHJvdyBpZiB3ZSBjYW4ndCBmaW5kIHRoZSBzb3VyY2UgLSB3ZSBqdXN0IHdhbnQgdG9cbiAgICAvLyByZXR1cm4gbnVsbCwgc28gd2UgcHJvdmlkZSBhIGZsYWcgdG8gZXhpdCBncmFjZWZ1bGx5LlxuICAgIGlmIChudWxsT25NaXNzaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIHJlbGF0aXZlU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG4gKiAgICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9nZW5lcmF0ZWRQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpO1xuICAgIHNvdXJjZSA9IHRoaXMuX2ZpbmRTb3VyY2VJbmRleChzb3VyY2UpO1xuICAgIGlmIChzb3VyY2UgPCAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lOiBudWxsLFxuICAgICAgICBjb2x1bW46IG51bGwsXG4gICAgICAgIGxhc3RDb2x1bW46IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgb3JpZ2luYWxMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicpXG4gICAgfTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKFxuICAgICAgbmVlZGxlLFxuICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcbiAgICAgIFwib3JpZ2luYWxMaW5lXCIsXG4gICAgICBcIm9yaWdpbmFsQ29sdW1uXCIsXG4gICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuICAgICAgdXRpbC5nZXRBcmcoYUFyZ3MsICdiaWFzJywgU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQpXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgPT09IG5lZWRsZS5zb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgIGxhc3RDb2x1bW46IG51bGxcbiAgICB9O1xuICB9O1xuXG5leHBvcnRzLkJhc2ljU291cmNlTWFwQ29uc3VtZXIgPSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIEFuIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciBpbnN0YW5jZSByZXByZXNlbnRzIGEgcGFyc2VkIHNvdXJjZSBtYXAgd2hpY2hcbiAqIHdlIGNhbiBxdWVyeSBmb3IgaW5mb3JtYXRpb24uIEl0IGRpZmZlcnMgZnJvbSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluXG4gKiB0aGF0IGl0IHRha2VzIFwiaW5kZXhlZFwiIHNvdXJjZSBtYXBzIChpLmUuIG9uZXMgd2l0aCBhIFwic2VjdGlvbnNcIiBmaWVsZCkgYXNcbiAqIGlucHV0LlxuICpcbiAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yIGFscmVhZHlcbiAqIHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMgZm9yIGluZGV4ZWQgc291cmNlIG1hcHMsIHRoZXlcbiAqIGhhdmUgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICpcbiAqICAgLSB2ZXJzaW9uOiBXaGljaCB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwIHNwZWMgdGhpcyBtYXAgaXMgZm9sbG93aW5nLlxuICogICAtIGZpbGU6IE9wdGlvbmFsLiBUaGUgZ2VuZXJhdGVkIGZpbGUgdGhpcyBzb3VyY2UgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAqICAgLSBzZWN0aW9uczogQSBsaXN0IG9mIHNlY3Rpb24gZGVmaW5pdGlvbnMuXG4gKlxuICogRWFjaCB2YWx1ZSB1bmRlciB0aGUgXCJzZWN0aW9uc1wiIGZpZWxkIGhhcyB0d28gZmllbGRzOlxuICogICAtIG9mZnNldDogVGhlIG9mZnNldCBpbnRvIHRoZSBvcmlnaW5hbCBzcGVjaWZpZWQgYXQgd2hpY2ggdGhpcyBzZWN0aW9uXG4gKiAgICAgICBiZWdpbnMgdG8gYXBwbHksIGRlZmluZWQgYXMgYW4gb2JqZWN0IHdpdGggYSBcImxpbmVcIiBhbmQgXCJjb2x1bW5cIlxuICogICAgICAgZmllbGQuXG4gKiAgIC0gbWFwOiBBIHNvdXJjZSBtYXAgZGVmaW5pdGlvbi4gVGhpcyBzb3VyY2UgbWFwIGNvdWxkIGFsc28gYmUgaW5kZXhlZCxcbiAqICAgICAgIGJ1dCBkb2Vzbid0IGhhdmUgdG8gYmUuXG4gKlxuICogSW5zdGVhZCBvZiB0aGUgXCJtYXBcIiBmaWVsZCwgaXQncyBhbHNvIHBvc3NpYmxlIHRvIGhhdmUgYSBcInVybFwiIGZpZWxkXG4gKiBzcGVjaWZ5aW5nIGEgVVJMIHRvIHJldHJpZXZlIGEgc291cmNlIG1hcCBmcm9tLCBidXQgdGhhdCdzIGN1cnJlbnRseVxuICogdW5zdXBwb3J0ZWQuXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdLCBidXRcbiAqIG1vZGlmaWVkIHRvIG9taXQgYSBzZWN0aW9uIHdoaWNoIHVzZXMgdGhlIFwidXJsXCIgZmllbGQuXG4gKlxuICogIHtcbiAqICAgIHZlcnNpb24gOiAzLFxuICogICAgZmlsZTogXCJhcHAuanNcIixcbiAqICAgIHNlY3Rpb25zOiBbe1xuICogICAgICBvZmZzZXQ6IHtsaW5lOjEwMCwgY29sdW1uOjEwfSxcbiAqICAgICAgbWFwOiB7XG4gKiAgICAgICAgdmVyc2lvbiA6IDMsXG4gKiAgICAgICAgZmlsZTogXCJzZWN0aW9uLmpzXCIsXG4gKiAgICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuICogICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuICogICAgICAgIG1hcHBpbmdzOiBcIkFBQUEsRTs7QUJDREU7XCJcbiAqICAgICAgfVxuICogICAgfV0sXG4gKiAgfVxuICpcbiAqIFRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpZiBnaXZlbiwgaXMgYSBzdHJpbmcgd2hvc2UgdmFsdWUgaXMgdGhlIFVSTFxuICogYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgd2FzIGZvdW5kLiAgVGhpcyBVUkwgaXMgdXNlZCB0byBjb21wdXRlIHRoZVxuICogc291cmNlcyBhcnJheS5cbiAqXG4gKiBbMF06IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdCNoZWFkaW5nPWguNTM1ZXMzeGVwcmd0XG4gKi9cbmZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICd2ZXJzaW9uJyk7XG4gIHZhciBzZWN0aW9ucyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NlY3Rpb25zJyk7XG5cbiAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgdGhpcy5fc291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9uYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuXG4gIHZhciBsYXN0T2Zmc2V0ID0ge1xuICAgIGxpbmU6IC0xLFxuICAgIGNvbHVtbjogMFxuICB9O1xuICB0aGlzLl9zZWN0aW9ucyA9IHNlY3Rpb25zLm1hcChmdW5jdGlvbiAocykge1xuICAgIGlmIChzLnVybCkge1xuICAgICAgLy8gVGhlIHVybCBmaWVsZCB3aWxsIHJlcXVpcmUgc3VwcG9ydCBmb3IgYXN5bmNocm9uaWNpdHkuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMTZcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3VwcG9ydCBmb3IgdXJsIGZpZWxkIGluIHNlY3Rpb25zIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IHV0aWwuZ2V0QXJnKHMsICdvZmZzZXQnKTtcbiAgICB2YXIgb2Zmc2V0TGluZSA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2xpbmUnKTtcbiAgICB2YXIgb2Zmc2V0Q29sdW1uID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnY29sdW1uJyk7XG5cbiAgICBpZiAob2Zmc2V0TGluZSA8IGxhc3RPZmZzZXQubGluZSB8fFxuICAgICAgICAob2Zmc2V0TGluZSA9PT0gbGFzdE9mZnNldC5saW5lICYmIG9mZnNldENvbHVtbiA8IGxhc3RPZmZzZXQuY29sdW1uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWN0aW9uIG9mZnNldHMgbXVzdCBiZSBvcmRlcmVkIGFuZCBub24tb3ZlcmxhcHBpbmcuJyk7XG4gICAgfVxuICAgIGxhc3RPZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2VuZXJhdGVkT2Zmc2V0OiB7XG4gICAgICAgIC8vIFRoZSBvZmZzZXQgZmllbGRzIGFyZSAwLWJhc2VkLCBidXQgd2UgdXNlIDEtYmFzZWQgaW5kaWNlcyB3aGVuXG4gICAgICAgIC8vIGVuY29kaW5nL2RlY29kaW5nIGZyb20gVkxRLlxuICAgICAgICBnZW5lcmF0ZWRMaW5lOiBvZmZzZXRMaW5lICsgMSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBvZmZzZXRDb2x1bW4gKyAxXG4gICAgICB9LFxuICAgICAgY29uc3VtZXI6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1dGlsLmdldEFyZyhzLCAnbWFwJyksIGFTb3VyY2VNYXBVUkwpXG4gICAgfVxuICB9KTtcbn1cblxuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnc291cmNlcycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgc291cmNlcy5wdXNoKHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgLy8gRmluZCB0aGUgc2VjdGlvbiBjb250YWluaW5nIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24gd2UncmUgdHJ5aW5nIHRvIG1hcFxuICAgIC8vIHRvIGFuIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIHZhciBzZWN0aW9uSW5kZXggPSBiaW5hcnlTZWFyY2guc2VhcmNoKG5lZWRsZSwgdGhpcy5fc2VjdGlvbnMsXG4gICAgICBmdW5jdGlvbihuZWVkbGUsIHNlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNtcCA9IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC0gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgaWYgKGNtcCkge1xuICAgICAgICAgIHJldHVybiBjbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5lZWRsZS5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbik7XG4gICAgICB9KTtcbiAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW3NlY3Rpb25JbmRleF07XG5cbiAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uLmNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgbGluZTogbmVlZGxlLmdlbmVyYXRlZExpbmUgLVxuICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgY29sdW1uOiBuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lXG4gICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcbiAgICAgICAgIDogMCksXG4gICAgICBiaWFzOiBhQXJncy5iaWFzXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzLmNvbnN1bWVyLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCk7XG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIHRoZSB1cmwgb2YgdGhlXG4gKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG4gKiBhdmFpbGFibGUuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICB2YXIgY29udGVudCA9IHNlY3Rpb24uY29uc3VtZXIuc291cmNlQ29udGVudEZvcihhU291cmNlLCB0cnVlKTtcbiAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLiBcbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICAvLyBPbmx5IGNvbnNpZGVyIHRoaXMgc2VjdGlvbiBpZiB0aGUgcmVxdWVzdGVkIHNvdXJjZSBpcyBpbiB0aGUgbGlzdCBvZlxuICAgICAgLy8gc291cmNlcyBvZiB0aGUgY29uc3VtZXIuXG4gICAgICBpZiAoc2VjdGlvbi5jb25zdW1lci5fZmluZFNvdXJjZUluZGV4KHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJykpID09PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBnZW5lcmF0ZWRQb3NpdGlvbiA9IHNlY3Rpb24uY29uc3VtZXIuZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpO1xuICAgICAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgbGluZTogZ2VuZXJhdGVkUG9zaXRpb24ubGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkUG9zaXRpb24uY29sdW1uICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBnZW5lcmF0ZWRQb3NpdGlvbi5saW5lXG4gICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICAgOiAwKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcbiAgICAgIHZhciBzZWN0aW9uTWFwcGluZ3MgPSBzZWN0aW9uLmNvbnN1bWVyLl9nZW5lcmF0ZWRNYXBwaW5ncztcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VjdGlvbk1hcHBpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBtYXBwaW5nID0gc2VjdGlvbk1hcHBpbmdzW2pdO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWN0aW9uLmNvbnN1bWVyLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHNlY3Rpb24uY29uc3VtZXIuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB0aGlzLl9zb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmluZGV4T2Yoc291cmNlKTtcblxuICAgICAgICB2YXIgbmFtZSA9IG51bGw7XG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBuYW1lID0gc2VjdGlvbi5jb25zdW1lci5fbmFtZXMuYXQobWFwcGluZy5uYW1lKTtcbiAgICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbWFwcGluZ3MgY29taW5nIGZyb20gdGhlIGNvbnN1bWVyIGZvciB0aGUgc2VjdGlvbiBoYXZlXG4gICAgICAgIC8vIGdlbmVyYXRlZCBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZWN0aW9uLCBzbyB3ZVxuICAgICAgICAvLyBuZWVkIHRvIG9mZnNldCB0aGVtIHRvIGJlIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgY29uY2F0ZW5hdGVkXG4gICAgICAgIC8vIGdlbmVyYXRlZCBmaWxlLlxuICAgICAgICB2YXIgYWRqdXN0ZWRNYXBwaW5nID0ge1xuICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGdlbmVyYXRlZENvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG1hcHBpbmcuZ2VuZXJhdGVkTGluZVxuICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICA6IDApLFxuICAgICAgICAgIG9yaWdpbmFsTGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIGlmICh0eXBlb2YgYWRqdXN0ZWRNYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWlja1NvcnQodGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKTtcbiAgICBxdWlja1NvcnQodGhpcy5fX29yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuICB9O1xuXG5leHBvcnRzLkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciA9IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcjtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGJhc2U2NFZMUSA9IHJlcXVpcmUoJy4vYmFzZTY0LXZscScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBBcnJheVNldCA9IHJlcXVpcmUoJy4vYXJyYXktc2V0JykuQXJyYXlTZXQ7XG52YXIgTWFwcGluZ0xpc3QgPSByZXF1aXJlKCcuL21hcHBpbmctbGlzdCcpLk1hcHBpbmdMaXN0O1xuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3IgcmVwcmVzZW50cyBhIHNvdXJjZSBtYXAgd2hpY2ggaXNcbiAqIGJlaW5nIGJ1aWx0IGluY3JlbWVudGFsbHkuIFlvdSBtYXkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nXG4gKiBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBmaWxlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG4gKiAgIC0gc291cmNlUm9vdDogQSByb290IGZvciBhbGwgcmVsYXRpdmUgVVJMcyBpbiB0aGlzIHNvdXJjZSBtYXAuXG4gKi9cbmZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcihhQXJncykge1xuICBpZiAoIWFBcmdzKSB7XG4gICAgYUFyZ3MgPSB7fTtcbiAgfVxuICB0aGlzLl9maWxlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdmaWxlJywgbnVsbCk7XG4gIHRoaXMuX3NvdXJjZVJvb3QgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZVJvb3QnLCBudWxsKTtcbiAgdGhpcy5fc2tpcFZhbGlkYXRpb24gPSB1dGlsLmdldEFyZyhhQXJncywgJ3NraXBWYWxpZGF0aW9uJywgZmFsc2UpO1xuICB0aGlzLl9zb3VyY2VzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX25hbWVzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX21hcHBpbmdzID0gbmV3IE1hcHBpbmdMaXN0KCk7XG4gIHRoaXMuX3NvdXJjZXNDb250ZW50cyA9IG51bGw7XG59XG5cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgU291cmNlTWFwR2VuZXJhdG9yIGJhc2VkIG9uIGEgU291cmNlTWFwQ29uc3VtZXJcbiAqXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBTb3VyY2VNYXAuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2Zyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcENvbnN1bWVyKSB7XG4gICAgdmFyIHNvdXJjZVJvb3QgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlUm9vdDtcbiAgICB2YXIgZ2VuZXJhdG9yID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICBmaWxlOiBhU291cmNlTWFwQ29uc3VtZXIuZmlsZSxcbiAgICAgIHNvdXJjZVJvb3Q6IHNvdXJjZVJvb3RcbiAgICB9KTtcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuZWFjaE1hcHBpbmcoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBuZXdNYXBwaW5nID0ge1xuICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICBsaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtblxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICBuZXdNYXBwaW5nLnNvdXJjZSA9IG1hcHBpbmcuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3TWFwcGluZy5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIG5ld01hcHBpbmcuc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld01hcHBpbmcub3JpZ2luYWwgPSB7XG4gICAgICAgICAgbGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1hcHBpbmcubmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3TWFwcGluZy5uYW1lID0gbWFwcGluZy5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdlbmVyYXRvci5hZGRNYXBwaW5nKG5ld01hcHBpbmcpO1xuICAgIH0pO1xuICAgIGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUZpbGUpIHtcbiAgICAgIHZhciBzb3VyY2VSZWxhdGl2ZSA9IHNvdXJjZUZpbGU7XG4gICAgICBpZiAoc291cmNlUm9vdCAhPT0gbnVsbCkge1xuICAgICAgICBzb3VyY2VSZWxhdGl2ZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlRmlsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2VuZXJhdG9yLl9zb3VyY2VzLmhhcyhzb3VyY2VSZWxhdGl2ZSkpIHtcbiAgICAgICAgZ2VuZXJhdG9yLl9zb3VyY2VzLmFkZChzb3VyY2VSZWxhdGl2ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZW50ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3Ioc291cmNlRmlsZSk7XG4gICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgIGdlbmVyYXRvci5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH07XG5cbi8qKlxuICogQWRkIGEgc2luZ2xlIG1hcHBpbmcgZnJvbSBvcmlnaW5hbCBzb3VyY2UgbGluZSBhbmQgY29sdW1uIHRvIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBmb3IgdGhpcyBzb3VyY2UgbWFwIGJlaW5nIGNyZWF0ZWQuIFRoZSBtYXBwaW5nXG4gKiBvYmplY3Qgc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBnZW5lcmF0ZWQ6IEFuIG9iamVjdCB3aXRoIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucy5cbiAqICAgLSBvcmlnaW5hbDogQW4gb2JqZWN0IHdpdGggdGhlIG9yaWdpbmFsIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMuXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUgKHJlbGF0aXZlIHRvIHRoZSBzb3VyY2VSb290KS5cbiAqICAgLSBuYW1lOiBBbiBvcHRpb25hbCBvcmlnaW5hbCB0b2tlbiBuYW1lIGZvciB0aGlzIG1hcHBpbmcuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYWRkTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9hZGRNYXBwaW5nKGFBcmdzKSB7XG4gICAgdmFyIGdlbmVyYXRlZCA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnZ2VuZXJhdGVkJyk7XG4gICAgdmFyIG9yaWdpbmFsID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdvcmlnaW5hbCcsIG51bGwpO1xuICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScsIG51bGwpO1xuICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICduYW1lJywgbnVsbCk7XG5cbiAgICBpZiAoIXRoaXMuX3NraXBWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLl92YWxpZGF0ZU1hcHBpbmcoZ2VuZXJhdGVkLCBvcmlnaW5hbCwgc291cmNlLCBuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZSA9IFN0cmluZyhzb3VyY2UpO1xuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICAgIGlmICghdGhpcy5fbmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuX25hbWVzLmFkZChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYXBwaW5ncy5hZGQoe1xuICAgICAgZ2VuZXJhdGVkTGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IGdlbmVyYXRlZC5jb2x1bW4sXG4gICAgICBvcmlnaW5hbExpbmU6IG9yaWdpbmFsICE9IG51bGwgJiYgb3JpZ2luYWwubGluZSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiBvcmlnaW5hbCAhPSBudWxsICYmIG9yaWdpbmFsLmNvbHVtbixcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgbmFtZTogbmFtZVxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFNldCB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGEgc291cmNlIGZpbGUuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuc2V0U291cmNlQ29udGVudCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9zZXRTb3VyY2VDb250ZW50KGFTb3VyY2VGaWxlLCBhU291cmNlQ29udGVudCkge1xuICAgIHZhciBzb3VyY2UgPSBhU291cmNlRmlsZTtcbiAgICBpZiAodGhpcy5fc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICBzb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuX3NvdXJjZVJvb3QsIHNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKGFTb3VyY2VDb250ZW50ICE9IG51bGwpIHtcbiAgICAgIC8vIEFkZCB0aGUgc291cmNlIGNvbnRlbnQgdG8gdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwLlxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IF9zb3VyY2VzQ29udGVudHMgbWFwIGlmIHRoZSBwcm9wZXJ0eSBpcyBudWxsLlxuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgICAgdGhpcy5fc291cmNlc0NvbnRlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NvdXJjZXNDb250ZW50c1t1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSldID0gYVNvdXJjZUNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlIGZpbGUgZnJvbSB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAuXG4gICAgICAvLyBJZiB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAgaXMgZW1wdHksIHNldCB0aGUgcHJvcGVydHkgdG8gbnVsbC5cbiAgICAgIGRlbGV0ZSB0aGlzLl9zb3VyY2VzQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhzb3VyY2UpXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9zb3VyY2VzQ29udGVudHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9zb3VyY2VzQ29udGVudHMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBtYXBwaW5ncyBvZiBhIHN1Yi1zb3VyY2UtbWFwIGZvciBhIHNwZWNpZmljIHNvdXJjZSBmaWxlIHRvIHRoZVxuICogc291cmNlIG1hcCBiZWluZyBnZW5lcmF0ZWQuIEVhY2ggbWFwcGluZyB0byB0aGUgc3VwcGxpZWQgc291cmNlIGZpbGUgaXNcbiAqIHJld3JpdHRlbiB1c2luZyB0aGUgc3VwcGxpZWQgc291cmNlIG1hcC4gTm90ZTogVGhlIHJlc29sdXRpb24gZm9yIHRoZVxuICogcmVzdWx0aW5nIG1hcHBpbmdzIGlzIHRoZSBtaW5pbWl1bSBvZiB0aGlzIG1hcCBhbmQgdGhlIHN1cHBsaWVkIG1hcC5cbiAqXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBzb3VyY2UgbWFwIHRvIGJlIGFwcGxpZWQuXG4gKiBAcGFyYW0gYVNvdXJjZUZpbGUgT3B0aW9uYWwuIFRoZSBmaWxlbmFtZSBvZiB0aGUgc291cmNlIGZpbGUuXG4gKiAgICAgICAgSWYgb21pdHRlZCwgU291cmNlTWFwQ29uc3VtZXIncyBmaWxlIHByb3BlcnR5IHdpbGwgYmUgdXNlZC5cbiAqIEBwYXJhbSBhU291cmNlTWFwUGF0aCBPcHRpb25hbC4gVGhlIGRpcm5hbWUgb2YgdGhlIHBhdGggdG8gdGhlIHNvdXJjZSBtYXBcbiAqICAgICAgICB0byBiZSBhcHBsaWVkLiBJZiByZWxhdGl2ZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIFNvdXJjZU1hcENvbnN1bWVyLlxuICogICAgICAgIFRoaXMgcGFyYW1ldGVyIGlzIG5lZWRlZCB3aGVuIHRoZSB0d28gc291cmNlIG1hcHMgYXJlbid0IGluIHRoZSBzYW1lXG4gKiAgICAgICAgZGlyZWN0b3J5LCBhbmQgdGhlIHNvdXJjZSBtYXAgdG8gYmUgYXBwbGllZCBjb250YWlucyByZWxhdGl2ZSBzb3VyY2VcbiAqICAgICAgICBwYXRocy4gSWYgc28sIHRob3NlIHJlbGF0aXZlIHNvdXJjZSBwYXRocyBuZWVkIHRvIGJlIHJld3JpdHRlblxuICogICAgICAgIHJlbGF0aXZlIHRvIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3IuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYXBwbHlTb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfYXBwbHlTb3VyY2VNYXAoYVNvdXJjZU1hcENvbnN1bWVyLCBhU291cmNlRmlsZSwgYVNvdXJjZU1hcFBhdGgpIHtcbiAgICB2YXIgc291cmNlRmlsZSA9IGFTb3VyY2VGaWxlO1xuICAgIC8vIElmIGFTb3VyY2VGaWxlIGlzIG9taXR0ZWQsIHdlIHdpbGwgdXNlIHRoZSBmaWxlIHByb3BlcnR5IG9mIHRoZSBTb3VyY2VNYXBcbiAgICBpZiAoYVNvdXJjZUZpbGUgPT0gbnVsbCkge1xuICAgICAgaWYgKGFTb3VyY2VNYXBDb25zdW1lci5maWxlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdTb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFwcGx5U291cmNlTWFwIHJlcXVpcmVzIGVpdGhlciBhbiBleHBsaWNpdCBzb3VyY2UgZmlsZSwgJyArXG4gICAgICAgICAgJ29yIHRoZSBzb3VyY2UgbWFwXFwncyBcImZpbGVcIiBwcm9wZXJ0eS4gQm90aCB3ZXJlIG9taXR0ZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc291cmNlRmlsZSA9IGFTb3VyY2VNYXBDb25zdW1lci5maWxlO1xuICAgIH1cbiAgICB2YXIgc291cmNlUm9vdCA9IHRoaXMuX3NvdXJjZVJvb3Q7XG4gICAgLy8gTWFrZSBcInNvdXJjZUZpbGVcIiByZWxhdGl2ZSBpZiBhbiBhYnNvbHV0ZSBVcmwgaXMgcGFzc2VkLlxuICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZUZpbGUpO1xuICAgIH1cbiAgICAvLyBBcHBseWluZyB0aGUgU291cmNlTWFwIGNhbiBhZGQgYW5kIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzb3VyY2VzIGFuZFxuICAgIC8vIHRoZSBuYW1lcyBhcnJheS5cbiAgICB2YXIgbmV3U291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICAgIHZhciBuZXdOYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuXG4gICAgLy8gRmluZCBtYXBwaW5ncyBmb3IgdGhlIFwic291cmNlRmlsZVwiXG4gICAgdGhpcy5fbWFwcGluZ3MudW5zb3J0ZWRGb3JFYWNoKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgPT09IHNvdXJjZUZpbGUgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgIT0gbnVsbCkge1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBjYW4gYmUgbWFwcGVkIGJ5IHRoZSBzb3VyY2UgbWFwLCB0aGVuIHVwZGF0ZSB0aGUgbWFwcGluZy5cbiAgICAgICAgdmFyIG9yaWdpbmFsID0gYVNvdXJjZU1hcENvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgICAgIGxpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9yaWdpbmFsLnNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gQ29weSBtYXBwaW5nXG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBvcmlnaW5hbC5zb3VyY2U7XG4gICAgICAgICAgaWYgKGFTb3VyY2VNYXBQYXRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdXRpbC5qb2luKGFTb3VyY2VNYXBQYXRoLCBtYXBwaW5nLnNvdXJjZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPSBvcmlnaW5hbC5saW5lO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBvcmlnaW5hbC5jb2x1bW47XG4gICAgICAgICAgaWYgKG9yaWdpbmFsLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5uYW1lID0gb3JpZ2luYWwubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZSA9IG1hcHBpbmcuc291cmNlO1xuICAgICAgaWYgKHNvdXJjZSAhPSBudWxsICYmICFuZXdTb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIG5ld1NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gbWFwcGluZy5uYW1lO1xuICAgICAgaWYgKG5hbWUgIT0gbnVsbCAmJiAhbmV3TmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIG5ld05hbWVzLmFkZChuYW1lKTtcbiAgICAgIH1cblxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBuZXdTb3VyY2VzO1xuICAgIHRoaXMuX25hbWVzID0gbmV3TmFtZXM7XG5cbiAgICAvLyBDb3B5IHNvdXJjZXNDb250ZW50cyBvZiBhcHBsaWVkIG1hcC5cbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYVNvdXJjZU1hcFBhdGggIT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLmpvaW4oYVNvdXJjZU1hcFBhdGgsIHNvdXJjZUZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2VGaWxlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbi8qKlxuICogQSBtYXBwaW5nIGNhbiBoYXZlIG9uZSBvZiB0aGUgdGhyZWUgbGV2ZWxzIG9mIGRhdGE6XG4gKlxuICogICAxLiBKdXN0IHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24uXG4gKiAgIDIuIFRoZSBHZW5lcmF0ZWQgcG9zaXRpb24sIG9yaWdpbmFsIHBvc2l0aW9uLCBhbmQgb3JpZ2luYWwgc291cmNlLlxuICogICAzLiBHZW5lcmF0ZWQgYW5kIG9yaWdpbmFsIHBvc2l0aW9uLCBvcmlnaW5hbCBzb3VyY2UsIGFzIHdlbGwgYXMgYSBuYW1lXG4gKiAgICAgIHRva2VuLlxuICpcbiAqIFRvIG1haW50YWluIGNvbnNpc3RlbmN5LCB3ZSB2YWxpZGF0ZSB0aGF0IGFueSBuZXcgbWFwcGluZyBiZWluZyBhZGRlZCBmYWxsc1xuICogaW4gdG8gb25lIG9mIHRoZXNlIGNhdGVnb3JpZXMuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl92YWxpZGF0ZU1hcHBpbmcoYUdlbmVyYXRlZCwgYU9yaWdpbmFsLCBhU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOYW1lKSB7XG4gICAgLy8gV2hlbiBhT3JpZ2luYWwgaXMgdHJ1dGh5IGJ1dCBoYXMgZW1wdHkgdmFsdWVzIGZvciAubGluZSBhbmQgLmNvbHVtbixcbiAgICAvLyBpdCBpcyBtb3N0IGxpa2VseSBhIHByb2dyYW1tZXIgZXJyb3IuIEluIHRoaXMgY2FzZSB3ZSB0aHJvdyBhIHZlcnlcbiAgICAvLyBzcGVjaWZpYyBlcnJvciBtZXNzYWdlIHRvIHRyeSB0byBndWlkZSB0aGVtIHRoZSByaWdodCB3YXkuXG4gICAgLy8gRm9yIGV4YW1wbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL3BvbHltZXItYnVuZGxlci9wdWxsLzUxOVxuICAgIGlmIChhT3JpZ2luYWwgJiYgdHlwZW9mIGFPcmlnaW5hbC5saW5lICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgYU9yaWdpbmFsLmNvbHVtbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ29yaWdpbmFsLmxpbmUgYW5kIG9yaWdpbmFsLmNvbHVtbiBhcmUgbm90IG51bWJlcnMgLS0geW91IHByb2JhYmx5IG1lYW50IHRvIG9taXQgJyArXG4gICAgICAgICAgICAndGhlIG9yaWdpbmFsIG1hcHBpbmcgZW50aXJlbHkgYW5kIG9ubHkgbWFwIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24uIElmIHNvLCBwYXNzICcgK1xuICAgICAgICAgICAgJ251bGwgZm9yIHRoZSBvcmlnaW5hbCBtYXBwaW5nIGluc3RlYWQgb2YgYW4gb2JqZWN0IHdpdGggZW1wdHkgb3IgbnVsbCB2YWx1ZXMuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChhR2VuZXJhdGVkICYmICdsaW5lJyBpbiBhR2VuZXJhdGVkICYmICdjb2x1bW4nIGluIGFHZW5lcmF0ZWRcbiAgICAgICAgJiYgYUdlbmVyYXRlZC5saW5lID4gMCAmJiBhR2VuZXJhdGVkLmNvbHVtbiA+PSAwXG4gICAgICAgICYmICFhT3JpZ2luYWwgJiYgIWFTb3VyY2UgJiYgIWFOYW1lKSB7XG4gICAgICAvLyBDYXNlIDEuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGFHZW5lcmF0ZWQgJiYgJ2xpbmUnIGluIGFHZW5lcmF0ZWQgJiYgJ2NvbHVtbicgaW4gYUdlbmVyYXRlZFxuICAgICAgICAgICAgICYmIGFPcmlnaW5hbCAmJiAnbGluZScgaW4gYU9yaWdpbmFsICYmICdjb2x1bW4nIGluIGFPcmlnaW5hbFxuICAgICAgICAgICAgICYmIGFHZW5lcmF0ZWQubGluZSA+IDAgJiYgYUdlbmVyYXRlZC5jb2x1bW4gPj0gMFxuICAgICAgICAgICAgICYmIGFPcmlnaW5hbC5saW5lID4gMCAmJiBhT3JpZ2luYWwuY29sdW1uID49IDBcbiAgICAgICAgICAgICAmJiBhU291cmNlKSB7XG4gICAgICAvLyBDYXNlcyAyIGFuZCAzLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXBwaW5nOiAnICsgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBnZW5lcmF0ZWQ6IGFHZW5lcmF0ZWQsXG4gICAgICAgIHNvdXJjZTogYVNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWw6IGFPcmlnaW5hbCxcbiAgICAgICAgbmFtZTogYU5hbWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBhY2N1bXVsYXRlZCBtYXBwaW5ncyBpbiB0byB0aGUgc3RyZWFtIG9mIGJhc2UgNjQgVkxRc1xuICogc3BlY2lmaWVkIGJ5IHRoZSBzb3VyY2UgbWFwIGZvcm1hdC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5fc2VyaWFsaXplTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3Jfc2VyaWFsaXplTWFwcGluZ3MoKSB7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gMDtcbiAgICB2YXIgcHJldmlvdXNOYW1lID0gMDtcbiAgICB2YXIgcHJldmlvdXNTb3VyY2UgPSAwO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgbmV4dDtcbiAgICB2YXIgbWFwcGluZztcbiAgICB2YXIgbmFtZUlkeDtcbiAgICB2YXIgc291cmNlSWR4O1xuXG4gICAgdmFyIG1hcHBpbmdzID0gdGhpcy5fbWFwcGluZ3MudG9BcnJheSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xuICAgICAgbmV4dCA9ICcnXG5cbiAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgIT09IHByZXZpb3VzR2VuZXJhdGVkTGluZSkge1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgIHdoaWxlIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgIT09IHByZXZpb3VzR2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIG5leHQgKz0gJzsnO1xuICAgICAgICAgIHByZXZpb3VzR2VuZXJhdGVkTGluZSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgaWYgKCF1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmcsIG1hcHBpbmdzW2kgLSAxXSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0ICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlSWR4ID0gdGhpcy5fc291cmNlcy5pbmRleE9mKG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKHNvdXJjZUlkeCAtIHByZXZpb3VzU291cmNlKTtcbiAgICAgICAgcHJldmlvdXNTb3VyY2UgPSBzb3VyY2VJZHg7XG5cbiAgICAgICAgLy8gbGluZXMgYXJlIHN0b3JlZCAwLWJhc2VkIGluIFNvdXJjZU1hcCBzcGVjIHZlcnNpb24gM1xuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5vcmlnaW5hbExpbmUgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNPcmlnaW5hbExpbmUpO1xuICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gMTtcblxuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4pO1xuICAgICAgICBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICBpZiAobWFwcGluZy5uYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBuYW1lSWR4ID0gdGhpcy5fbmFtZXMuaW5kZXhPZihtYXBwaW5nLm5hbWUpO1xuICAgICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShuYW1lSWR4IC0gcHJldmlvdXNOYW1lKTtcbiAgICAgICAgICBwcmV2aW91c05hbWUgPSBuYW1lSWR4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCArPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfZ2VuZXJhdGVTb3VyY2VzQ29udGVudChhU291cmNlcywgYVNvdXJjZVJvb3QpIHtcbiAgICByZXR1cm4gYVNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGlmICghdGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFTb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlID0gdXRpbC5yZWxhdGl2ZShhU291cmNlUm9vdCwgc291cmNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX3NvdXJjZXNDb250ZW50cywga2V5KVxuICAgICAgICA/IHRoaXMuX3NvdXJjZXNDb250ZW50c1trZXldXG4gICAgICAgIDogbnVsbDtcbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuLyoqXG4gKiBFeHRlcm5hbGl6ZSB0aGUgc291cmNlIG1hcC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS50b0pTT04gPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfdG9KU09OKCkge1xuICAgIHZhciBtYXAgPSB7XG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgc291cmNlczogdGhpcy5fc291cmNlcy50b0FycmF5KCksXG4gICAgICBuYW1lczogdGhpcy5fbmFtZXMudG9BcnJheSgpLFxuICAgICAgbWFwcGluZ3M6IHRoaXMuX3NlcmlhbGl6ZU1hcHBpbmdzKClcbiAgICB9O1xuICAgIGlmICh0aGlzLl9maWxlICE9IG51bGwpIHtcbiAgICAgIG1hcC5maWxlID0gdGhpcy5fZmlsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgbWFwLnNvdXJjZVJvb3QgPSB0aGlzLl9zb3VyY2VSb290O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICBtYXAuc291cmNlc0NvbnRlbnQgPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50KG1hcC5zb3VyY2VzLCBtYXAuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIHNvdXJjZSBtYXAgYmVpbmcgZ2VuZXJhdGVkIHRvIGEgc3RyaW5nLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3RvU3RyaW5nKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcbiAgfTtcblxuZXhwb3J0cy5Tb3VyY2VNYXBHZW5lcmF0b3IgPSBTb3VyY2VNYXBHZW5lcmF0b3I7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBTb3VyY2VNYXBHZW5lcmF0b3IgPSByZXF1aXJlKCcuL3NvdXJjZS1tYXAtZ2VuZXJhdG9yJykuU291cmNlTWFwR2VuZXJhdG9yO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLy8gTWF0Y2hlcyBhIFdpbmRvd3Mtc3R5bGUgYFxcclxcbmAgbmV3bGluZSBvciBhIGBcXG5gIG5ld2xpbmUgdXNlZCBieSBhbGwgb3RoZXJcbi8vIG9wZXJhdGluZyBzeXN0ZW1zIHRoZXNlIGRheXMgKGNhcHR1cmluZyB0aGUgcmVzdWx0KS5cbnZhciBSRUdFWF9ORVdMSU5FID0gLyhcXHI/XFxuKS87XG5cbi8vIE5ld2xpbmUgY2hhcmFjdGVyIGNvZGUgZm9yIGNoYXJDb2RlQXQoKSBjb21wYXJpc29uc1xudmFyIE5FV0xJTkVfQ09ERSA9IDEwO1xuXG4vLyBQcml2YXRlIHN5bWJvbCBmb3IgaWRlbnRpZnlpbmcgYFNvdXJjZU5vZGVgcyB3aGVuIG11bHRpcGxlIHZlcnNpb25zIG9mXG4vLyB0aGUgc291cmNlLW1hcCBsaWJyYXJ5IGFyZSBsb2FkZWQuIFRoaXMgTVVTVCBOT1QgQ0hBTkdFIGFjcm9zc1xuLy8gdmVyc2lvbnMhXG52YXIgaXNTb3VyY2VOb2RlID0gXCIkJCRpc1NvdXJjZU5vZGUkJCRcIjtcblxuLyoqXG4gKiBTb3VyY2VOb2RlcyBwcm92aWRlIGEgd2F5IHRvIGFic3RyYWN0IG92ZXIgaW50ZXJwb2xhdGluZy9jb25jYXRlbmF0aW5nXG4gKiBzbmlwcGV0cyBvZiBnZW5lcmF0ZWQgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSB3aGlsZSBtYWludGFpbmluZyB0aGUgbGluZSBhbmRcbiAqIGNvbHVtbiBpbmZvcm1hdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwYXJhbSBhTGluZSBUaGUgb3JpZ2luYWwgbGluZSBudW1iZXIuXG4gKiBAcGFyYW0gYUNvbHVtbiBUaGUgb3JpZ2luYWwgY29sdW1uIG51bWJlci5cbiAqIEBwYXJhbSBhU291cmNlIFRoZSBvcmlnaW5hbCBzb3VyY2UncyBmaWxlbmFtZS5cbiAqIEBwYXJhbSBhQ2h1bmtzIE9wdGlvbmFsLiBBbiBhcnJheSBvZiBzdHJpbmdzIHdoaWNoIGFyZSBzbmlwcGV0cyBvZlxuICogICAgICAgIGdlbmVyYXRlZCBKUywgb3Igb3RoZXIgU291cmNlTm9kZXMuXG4gKiBAcGFyYW0gYU5hbWUgVGhlIG9yaWdpbmFsIGlkZW50aWZpZXIuXG4gKi9cbmZ1bmN0aW9uIFNvdXJjZU5vZGUoYUxpbmUsIGFDb2x1bW4sIGFTb3VyY2UsIGFDaHVua3MsIGFOYW1lKSB7XG4gIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgdGhpcy5zb3VyY2VDb250ZW50cyA9IHt9O1xuICB0aGlzLmxpbmUgPSBhTGluZSA9PSBudWxsID8gbnVsbCA6IGFMaW5lO1xuICB0aGlzLmNvbHVtbiA9IGFDb2x1bW4gPT0gbnVsbCA/IG51bGwgOiBhQ29sdW1uO1xuICB0aGlzLnNvdXJjZSA9IGFTb3VyY2UgPT0gbnVsbCA/IG51bGwgOiBhU291cmNlO1xuICB0aGlzLm5hbWUgPSBhTmFtZSA9PSBudWxsID8gbnVsbCA6IGFOYW1lO1xuICB0aGlzW2lzU291cmNlTm9kZV0gPSB0cnVlO1xuICBpZiAoYUNodW5rcyAhPSBudWxsKSB0aGlzLmFkZChhQ2h1bmtzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgU291cmNlTm9kZSBmcm9tIGdlbmVyYXRlZCBjb2RlIGFuZCBhIFNvdXJjZU1hcENvbnN1bWVyLlxuICpcbiAqIEBwYXJhbSBhR2VuZXJhdGVkQ29kZSBUaGUgZ2VuZXJhdGVkIGNvZGVcbiAqIEBwYXJhbSBhU291cmNlTWFwQ29uc3VtZXIgVGhlIFNvdXJjZU1hcCBmb3IgdGhlIGdlbmVyYXRlZCBjb2RlXG4gKiBAcGFyYW0gYVJlbGF0aXZlUGF0aCBPcHRpb25hbC4gVGhlIHBhdGggdGhhdCByZWxhdGl2ZSBzb3VyY2VzIGluIHRoZVxuICogICAgICAgIFNvdXJjZU1hcENvbnN1bWVyIHNob3VsZCBiZSByZWxhdGl2ZSB0by5cbiAqL1xuU291cmNlTm9kZS5mcm9tU3RyaW5nV2l0aFNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfZnJvbVN0cmluZ1dpdGhTb3VyY2VNYXAoYUdlbmVyYXRlZENvZGUsIGFTb3VyY2VNYXBDb25zdW1lciwgYVJlbGF0aXZlUGF0aCkge1xuICAgIC8vIFRoZSBTb3VyY2VOb2RlIHdlIHdhbnQgdG8gZmlsbCB3aXRoIHRoZSBnZW5lcmF0ZWQgY29kZVxuICAgIC8vIGFuZCB0aGUgU291cmNlTWFwXG4gICAgdmFyIG5vZGUgPSBuZXcgU291cmNlTm9kZSgpO1xuXG4gICAgLy8gQWxsIGV2ZW4gaW5kaWNlcyBvZiB0aGlzIGFycmF5IGFyZSBvbmUgbGluZSBvZiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4gICAgLy8gd2hpbGUgYWxsIG9kZCBpbmRpY2VzIGFyZSB0aGUgbmV3bGluZXMgYmV0d2VlbiB0d28gYWRqYWNlbnQgbGluZXNcbiAgICAvLyAoc2luY2UgYFJFR0VYX05FV0xJTkVgIGNhcHR1cmVzIGl0cyBtYXRjaCkuXG4gICAgLy8gUHJvY2Vzc2VkIGZyYWdtZW50cyBhcmUgYWNjZXNzZWQgYnkgY2FsbGluZyBgc2hpZnROZXh0TGluZWAuXG4gICAgdmFyIHJlbWFpbmluZ0xpbmVzID0gYUdlbmVyYXRlZENvZGUuc3BsaXQoUkVHRVhfTkVXTElORSk7XG4gICAgdmFyIHJlbWFpbmluZ0xpbmVzSW5kZXggPSAwO1xuICAgIHZhciBzaGlmdE5leHRMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGluZUNvbnRlbnRzID0gZ2V0TmV4dExpbmUoKTtcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgb2YgYSBmaWxlIG1pZ2h0IG5vdCBoYXZlIGEgbmV3bGluZS5cbiAgICAgIHZhciBuZXdMaW5lID0gZ2V0TmV4dExpbmUoKSB8fCBcIlwiO1xuICAgICAgcmV0dXJuIGxpbmVDb250ZW50cyArIG5ld0xpbmU7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5leHRMaW5lKCkge1xuICAgICAgICByZXR1cm4gcmVtYWluaW5nTGluZXNJbmRleCA8IHJlbWFpbmluZ0xpbmVzLmxlbmd0aCA/XG4gICAgICAgICAgICByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlbWVtYmVyIHRoZSBwb3NpdGlvbiBvZiBcInJlbWFpbmluZ0xpbmVzXCJcbiAgICB2YXIgbGFzdEdlbmVyYXRlZExpbmUgPSAxLCBsYXN0R2VuZXJhdGVkQ29sdW1uID0gMDtcblxuICAgIC8vIFRoZSBnZW5lcmF0ZSBTb3VyY2VOb2RlcyB3ZSBuZWVkIGEgY29kZSByYW5nZS5cbiAgICAvLyBUbyBleHRyYWN0IGl0IGN1cnJlbnQgYW5kIGxhc3QgbWFwcGluZyBpcyB1c2VkLlxuICAgIC8vIEhlcmUgd2Ugc3RvcmUgdGhlIGxhc3QgbWFwcGluZy5cbiAgICB2YXIgbGFzdE1hcHBpbmcgPSBudWxsO1xuXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLmVhY2hNYXBwaW5nKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICBpZiAobGFzdE1hcHBpbmcgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UgYWRkIHRoZSBjb2RlIGZyb20gXCJsYXN0TWFwcGluZ1wiIHRvIFwibWFwcGluZ1wiOlxuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIG5ldyBsaW5lIGluIGJldHdlZW4uXG4gICAgICAgIGlmIChsYXN0R2VuZXJhdGVkTGluZSA8IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIC8vIEFzc29jaWF0ZSBmaXJzdCBsaW5lIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBzaGlmdE5leHRMaW5lKCkpO1xuICAgICAgICAgIGxhc3RHZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgICAgLy8gVGhlIHJlbWFpbmluZyBjb2RlIGlzIGFkZGVkIHdpdGhvdXQgbWFwcGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIG5ldyBsaW5lIGluIGJldHdlZW4uXG4gICAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSBjb2RlIGJldHdlZW4gXCJsYXN0R2VuZXJhdGVkQ29sdW1uXCIgYW5kXG4gICAgICAgICAgLy8gXCJtYXBwaW5nLmdlbmVyYXRlZENvbHVtblwiIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgICAgdmFyIG5leHRMaW5lID0gcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gfHwgJyc7XG4gICAgICAgICAgdmFyIGNvZGUgPSBuZXh0TGluZS5zdWJzdHIoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICAgIHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdID0gbmV4dExpbmUuc3Vic3RyKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBjb2RlKTtcbiAgICAgICAgICAvLyBObyBtb3JlIHJlbWFpbmluZyBjb2RlLCBjb250aW51ZVxuICAgICAgICAgIGxhc3RNYXBwaW5nID0gbWFwcGluZztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFdlIGFkZCB0aGUgZ2VuZXJhdGVkIGNvZGUgdW50aWwgdGhlIGZpcnN0IG1hcHBpbmdcbiAgICAgIC8vIHRvIHRoZSBTb3VyY2VOb2RlIHdpdGhvdXQgYW55IG1hcHBpbmcuXG4gICAgICAvLyBFYWNoIGxpbmUgaXMgYWRkZWQgYXMgc2VwYXJhdGUgc3RyaW5nLlxuICAgICAgd2hpbGUgKGxhc3RHZW5lcmF0ZWRMaW5lIDwgbWFwcGluZy5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIG5vZGUuYWRkKHNoaWZ0TmV4dExpbmUoKSk7XG4gICAgICAgIGxhc3RHZW5lcmF0ZWRMaW5lKys7XG4gICAgICB9XG4gICAgICBpZiAobGFzdEdlbmVyYXRlZENvbHVtbiA8IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKSB7XG4gICAgICAgIHZhciBuZXh0TGluZSA9IHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdIHx8ICcnO1xuICAgICAgICBub2RlLmFkZChuZXh0TGluZS5zdWJzdHIoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pKTtcbiAgICAgICAgcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gPSBuZXh0TGluZS5zdWJzdHIobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICB9XG4gICAgICBsYXN0TWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfSwgdGhpcyk7XG4gICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG1hcHBpbmdzLlxuICAgIGlmIChyZW1haW5pbmdMaW5lc0luZGV4IDwgcmVtYWluaW5nTGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAobGFzdE1hcHBpbmcpIHtcbiAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSByZW1haW5pbmcgY29kZSBpbiB0aGUgY3VycmVudCBsaW5lIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgc2hpZnROZXh0TGluZSgpKTtcbiAgICAgIH1cbiAgICAgIC8vIGFuZCBhZGQgdGhlIHJlbWFpbmluZyBsaW5lcyB3aXRob3V0IGFueSBtYXBwaW5nXG4gICAgICBub2RlLmFkZChyZW1haW5pbmdMaW5lcy5zcGxpY2UocmVtYWluaW5nTGluZXNJbmRleCkuam9pbihcIlwiKSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzb3VyY2VzQ29udGVudCBpbnRvIFNvdXJjZU5vZGVcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYVJlbGF0aXZlUGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgc291cmNlRmlsZSA9IHV0aWwuam9pbihhUmVsYXRpdmVQYXRoLCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcblxuICAgIGZ1bmN0aW9uIGFkZE1hcHBpbmdXaXRoQ29kZShtYXBwaW5nLCBjb2RlKSB7XG4gICAgICBpZiAobWFwcGluZyA9PT0gbnVsbCB8fCBtYXBwaW5nLnNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUuYWRkKGNvZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFSZWxhdGl2ZVBhdGhcbiAgICAgICAgICA/IHV0aWwuam9pbihhUmVsYXRpdmVQYXRoLCBtYXBwaW5nLnNvdXJjZSlcbiAgICAgICAgICA6IG1hcHBpbmcuc291cmNlO1xuICAgICAgICBub2RlLmFkZChuZXcgU291cmNlTm9kZShtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nLm5hbWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogQWRkIGEgY2h1bmsgb2YgZ2VuZXJhdGVkIEpTIHRvIHRoaXMgc291cmNlIG5vZGUuXG4gKlxuICogQHBhcmFtIGFDaHVuayBBIHN0cmluZyBzbmlwcGV0IG9mIGdlbmVyYXRlZCBKUyBjb2RlLCBhbm90aGVyIGluc3RhbmNlIG9mXG4gKiAgICAgICAgU291cmNlTm9kZSwgb3IgYW4gYXJyYXkgd2hlcmUgZWFjaCBtZW1iZXIgaXMgb25lIG9mIHRob3NlIHRoaW5ncy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gU291cmNlTm9kZV9hZGQoYUNodW5rKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFDaHVuaykpIHtcbiAgICBhQ2h1bmsuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgIHRoaXMuYWRkKGNodW5rKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuICBlbHNlIGlmIChhQ2h1bmtbaXNTb3VyY2VOb2RlXSB8fCB0eXBlb2YgYUNodW5rID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKGFDaHVuaykge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGFDaHVuayk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBcIkV4cGVjdGVkIGEgU291cmNlTm9kZSwgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBTb3VyY2VOb2RlcyBhbmQgc3RyaW5ncy4gR290IFwiICsgYUNodW5rXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgY2h1bmsgb2YgZ2VuZXJhdGVkIEpTIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhpcyBzb3VyY2Ugbm9kZS5cbiAqXG4gKiBAcGFyYW0gYUNodW5rIEEgc3RyaW5nIHNuaXBwZXQgb2YgZ2VuZXJhdGVkIEpTIGNvZGUsIGFub3RoZXIgaW5zdGFuY2Ugb2ZcbiAqICAgICAgICBTb3VyY2VOb2RlLCBvciBhbiBhcnJheSB3aGVyZSBlYWNoIG1lbWJlciBpcyBvbmUgb2YgdGhvc2UgdGhpbmdzLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gU291cmNlTm9kZV9wcmVwZW5kKGFDaHVuaykge1xuICBpZiAoQXJyYXkuaXNBcnJheShhQ2h1bmspKSB7XG4gICAgZm9yICh2YXIgaSA9IGFDaHVuay5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMucHJlcGVuZChhQ2h1bmtbaV0pO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChhQ2h1bmtbaXNTb3VyY2VOb2RlXSB8fCB0eXBlb2YgYUNodW5rID09PSBcInN0cmluZ1wiKSB7XG4gICAgdGhpcy5jaGlsZHJlbi51bnNoaWZ0KGFDaHVuayk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIFwiRXhwZWN0ZWQgYSBTb3VyY2VOb2RlLCBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIFNvdXJjZU5vZGVzIGFuZCBzdHJpbmdzLiBHb3QgXCIgKyBhQ2h1bmtcbiAgICApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXYWxrIG92ZXIgdGhlIHRyZWUgb2YgSlMgc25pcHBldHMgaW4gdGhpcyBub2RlIGFuZCBpdHMgY2hpbGRyZW4uIFRoZVxuICogd2Fsa2luZyBmdW5jdGlvbiBpcyBjYWxsZWQgb25jZSBmb3IgZWFjaCBzbmlwcGV0IG9mIEpTIGFuZCBpcyBwYXNzZWQgdGhhdFxuICogc25pcHBldCBhbmQgdGhlIGl0cyBvcmlnaW5hbCBhc3NvY2lhdGVkIHNvdXJjZSdzIGxpbmUvY29sdW1uIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSBhRm4gVGhlIHRyYXZlcnNhbCBmdW5jdGlvbi5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfd2FsayhhRm4pIHtcbiAgdmFyIGNodW5rO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNodW5rID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICBpZiAoY2h1bmtbaXNTb3VyY2VOb2RlXSkge1xuICAgICAgY2h1bmsud2FsayhhRm4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgYUZuKGNodW5rLCB7IHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBMaWtlIGBTdHJpbmcucHJvdG90eXBlLmpvaW5gIGV4Y2VwdCBmb3IgU291cmNlTm9kZXMuIEluc2VydHMgYGFTdHJgIGJldHdlZW5cbiAqIGVhY2ggb2YgYHRoaXMuY2hpbGRyZW5gLlxuICpcbiAqIEBwYXJhbSBhU2VwIFRoZSBzZXBhcmF0b3IuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiBTb3VyY2VOb2RlX2pvaW4oYVNlcCkge1xuICB2YXIgbmV3Q2hpbGRyZW47XG4gIHZhciBpO1xuICB2YXIgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuLTE7IGkrKykge1xuICAgICAgbmV3Q2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICAgIG5ld0NoaWxkcmVuLnB1c2goYVNlcCk7XG4gICAgfVxuICAgIG5ld0NoaWxkcmVuLnB1c2godGhpcy5jaGlsZHJlbltpXSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ld0NoaWxkcmVuO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSBvbiB0aGUgdmVyeSByaWdodC1tb3N0IHNvdXJjZSBzbmlwcGV0LiBVc2VmdWxcbiAqIGZvciB0cmltbWluZyB3aGl0ZXNwYWNlIGZyb20gdGhlIGVuZCBvZiBhIHNvdXJjZSBub2RlLCBldGMuXG4gKlxuICogQHBhcmFtIGFQYXR0ZXJuIFRoZSBwYXR0ZXJuIHRvIHJlcGxhY2UuXG4gKiBAcGFyYW0gYVJlcGxhY2VtZW50IFRoZSB0aGluZyB0byByZXBsYWNlIHRoZSBwYXR0ZXJuIHdpdGguXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnJlcGxhY2VSaWdodCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfcmVwbGFjZVJpZ2h0KGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpIHtcbiAgdmFyIGxhc3RDaGlsZCA9IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgaWYgKGxhc3RDaGlsZFtpc1NvdXJjZU5vZGVdKSB7XG4gICAgbGFzdENoaWxkLnJlcGxhY2VSaWdodChhUGF0dGVybiwgYVJlcGxhY2VtZW50KTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgbGFzdENoaWxkID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IGxhc3RDaGlsZC5yZXBsYWNlKGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCgnJy5yZXBsYWNlKGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBzb3VyY2UgY29udGVudCBmb3IgYSBzb3VyY2UgZmlsZS4gVGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3JcbiAqIGluIHRoZSBzb3VyY2VzQ29udGVudCBmaWVsZC5cbiAqXG4gKiBAcGFyYW0gYVNvdXJjZUZpbGUgVGhlIGZpbGVuYW1lIG9mIHRoZSBzb3VyY2UgZmlsZVxuICogQHBhcmFtIGFTb3VyY2VDb250ZW50IFRoZSBjb250ZW50IG9mIHRoZSBzb3VyY2UgZmlsZVxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5zZXRTb3VyY2VDb250ZW50ID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV9zZXRTb3VyY2VDb250ZW50KGFTb3VyY2VGaWxlLCBhU291cmNlQ29udGVudCkge1xuICAgIHRoaXMuc291cmNlQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhhU291cmNlRmlsZSldID0gYVNvdXJjZUNvbnRlbnQ7XG4gIH07XG5cbi8qKlxuICogV2FsayBvdmVyIHRoZSB0cmVlIG9mIFNvdXJjZU5vZGVzLiBUaGUgd2Fsa2luZyBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIGVhY2hcbiAqIHNvdXJjZSBmaWxlIGNvbnRlbnQgYW5kIGlzIHBhc3NlZCB0aGUgZmlsZW5hbWUgYW5kIHNvdXJjZSBjb250ZW50LlxuICpcbiAqIEBwYXJhbSBhRm4gVGhlIHRyYXZlcnNhbCBmdW5jdGlvbi5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUud2Fsa1NvdXJjZUNvbnRlbnRzID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV93YWxrU291cmNlQ29udGVudHMoYUZuKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldW2lzU291cmNlTm9kZV0pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS53YWxrU291cmNlQ29udGVudHMoYUZuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc291cmNlcyA9IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQ29udGVudHMpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhRm4odXRpbC5mcm9tU2V0U3RyaW5nKHNvdXJjZXNbaV0pLCB0aGlzLnNvdXJjZUNvbnRlbnRzW3NvdXJjZXNbaV1dKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzb3VyY2Ugbm9kZS4gV2Fsa3Mgb3ZlciB0aGUgdHJlZVxuICogYW5kIGNvbmNhdGVuYXRlcyBhbGwgdGhlIHZhcmlvdXMgc25pcHBldHMgdG9nZXRoZXIgdG8gb25lIHN0cmluZy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3RvU3RyaW5nKCkge1xuICB2YXIgc3RyID0gXCJcIjtcbiAgdGhpcy53YWxrKGZ1bmN0aW9uIChjaHVuaykge1xuICAgIHN0ciArPSBjaHVuaztcbiAgfSk7XG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNvdXJjZSBub2RlIGFsb25nIHdpdGggYSBzb3VyY2VcbiAqIG1hcC5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUudG9TdHJpbmdXaXRoU291cmNlTWFwID0gZnVuY3Rpb24gU291cmNlTm9kZV90b1N0cmluZ1dpdGhTb3VyY2VNYXAoYUFyZ3MpIHtcbiAgdmFyIGdlbmVyYXRlZCA9IHtcbiAgICBjb2RlOiBcIlwiLFxuICAgIGxpbmU6IDEsXG4gICAgY29sdW1uOiAwXG4gIH07XG4gIHZhciBtYXAgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKGFBcmdzKTtcbiAgdmFyIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxMaW5lID0gbnVsbDtcbiAgdmFyIGxhc3RPcmlnaW5hbENvbHVtbiA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxOYW1lID0gbnVsbDtcbiAgdGhpcy53YWxrKGZ1bmN0aW9uIChjaHVuaywgb3JpZ2luYWwpIHtcbiAgICBnZW5lcmF0ZWQuY29kZSArPSBjaHVuaztcbiAgICBpZiAob3JpZ2luYWwuc291cmNlICE9PSBudWxsXG4gICAgICAgICYmIG9yaWdpbmFsLmxpbmUgIT09IG51bGxcbiAgICAgICAgJiYgb3JpZ2luYWwuY29sdW1uICE9PSBudWxsKSB7XG4gICAgICBpZihsYXN0T3JpZ2luYWxTb3VyY2UgIT09IG9yaWdpbmFsLnNvdXJjZVxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsTGluZSAhPT0gb3JpZ2luYWwubGluZVxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsQ29sdW1uICE9PSBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbE5hbWUgIT09IG9yaWdpbmFsLm5hbWUpIHtcbiAgICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgIHNvdXJjZTogb3JpZ2luYWwuc291cmNlLFxuICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICBsaW5lOiBvcmlnaW5hbC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgICAgbGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZC5jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IG9yaWdpbmFsLm5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBvcmlnaW5hbC5zb3VyY2U7XG4gICAgICBsYXN0T3JpZ2luYWxMaW5lID0gb3JpZ2luYWwubGluZTtcbiAgICAgIGxhc3RPcmlnaW5hbENvbHVtbiA9IG9yaWdpbmFsLmNvbHVtbjtcbiAgICAgIGxhc3RPcmlnaW5hbE5hbWUgPSBvcmlnaW5hbC5uYW1lO1xuICAgICAgc291cmNlTWFwcGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VNYXBwaW5nQWN0aXZlKSB7XG4gICAgICBtYXAuYWRkTWFwcGluZyh7XG4gICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkLmNvbHVtblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gICAgICBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDAsIGxlbmd0aCA9IGNodW5rLmxlbmd0aDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgaWYgKGNodW5rLmNoYXJDb2RlQXQoaWR4KSA9PT0gTkVXTElORV9DT0RFKSB7XG4gICAgICAgIGdlbmVyYXRlZC5saW5lKys7XG4gICAgICAgIGdlbmVyYXRlZC5jb2x1bW4gPSAwO1xuICAgICAgICAvLyBNYXBwaW5ncyBlbmQgYXQgZW9sXG4gICAgICAgIGlmIChpZHggKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICAgICAgICAgIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VNYXBwaW5nQWN0aXZlKSB7XG4gICAgICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgICAgc291cmNlOiBvcmlnaW5hbC5zb3VyY2UsXG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICBsaW5lOiBvcmlnaW5hbC5saW5lLFxuICAgICAgICAgICAgICBjb2x1bW46IG9yaWdpbmFsLmNvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogb3JpZ2luYWwubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW5lcmF0ZWQuY29sdW1uKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdGhpcy53YWxrU291cmNlQ29udGVudHMoZnVuY3Rpb24gKHNvdXJjZUZpbGUsIHNvdXJjZUNvbnRlbnQpIHtcbiAgICBtYXAuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBzb3VyY2VDb250ZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgY29kZTogZ2VuZXJhdGVkLmNvZGUsIG1hcDogbWFwIH07XG59O1xuXG5leHBvcnRzLlNvdXJjZU5vZGUgPSBTb3VyY2VOb2RlO1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIGdldHRpbmcgdmFsdWVzIGZyb20gcGFyYW1ldGVyL29wdGlvbnNcbiAqIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIGFyZ3MgVGhlIG9iamVjdCB3ZSBhcmUgZXh0cmFjdGluZyB2YWx1ZXMgZnJvbVxuICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdlIGFyZSBnZXR0aW5nLlxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBBbiBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmdcbiAqIGZyb20gdGhlIG9iamVjdC4gSWYgdGhpcyBpcyBub3Qgc3BlY2lmaWVkIGFuZCB0aGUgcHJvcGVydHkgaXMgbWlzc2luZywgYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICovXG5mdW5jdGlvbiBnZXRBcmcoYUFyZ3MsIGFOYW1lLCBhRGVmYXVsdFZhbHVlKSB7XG4gIGlmIChhTmFtZSBpbiBhQXJncykge1xuICAgIHJldHVybiBhQXJnc1thTmFtZV07XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBhRGVmYXVsdFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignXCInICsgYU5hbWUgKyAnXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudC4nKTtcbiAgfVxufVxuZXhwb3J0cy5nZXRBcmcgPSBnZXRBcmc7XG5cbnZhciB1cmxSZWdleHAgPSAvXig/OihbXFx3K1xcLS5dKyk6KT9cXC9cXC8oPzooXFx3KzpcXHcrKUApPyhbXFx3Li1dKikoPzo6KFxcZCspKT8oLiopJC87XG52YXIgZGF0YVVybFJlZ2V4cCA9IC9eZGF0YTouK1xcLC4rJC87XG5cbmZ1bmN0aW9uIHVybFBhcnNlKGFVcmwpIHtcbiAgdmFyIG1hdGNoID0gYVVybC5tYXRjaCh1cmxSZWdleHApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY2hlbWU6IG1hdGNoWzFdLFxuICAgIGF1dGg6IG1hdGNoWzJdLFxuICAgIGhvc3Q6IG1hdGNoWzNdLFxuICAgIHBvcnQ6IG1hdGNoWzRdLFxuICAgIHBhdGg6IG1hdGNoWzVdXG4gIH07XG59XG5leHBvcnRzLnVybFBhcnNlID0gdXJsUGFyc2U7XG5cbmZ1bmN0aW9uIHVybEdlbmVyYXRlKGFQYXJzZWRVcmwpIHtcbiAgdmFyIHVybCA9ICcnO1xuICBpZiAoYVBhcnNlZFVybC5zY2hlbWUpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5zY2hlbWUgKyAnOic7XG4gIH1cbiAgdXJsICs9ICcvLyc7XG4gIGlmIChhUGFyc2VkVXJsLmF1dGgpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5hdXRoICsgJ0AnO1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLmhvc3QpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5ob3N0O1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLnBvcnQpIHtcbiAgICB1cmwgKz0gXCI6XCIgKyBhUGFyc2VkVXJsLnBvcnRcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5wYXRoKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwucGF0aDtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuZXhwb3J0cy51cmxHZW5lcmF0ZSA9IHVybEdlbmVyYXRlO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYSBwYXRoLCBvciB0aGUgcGF0aCBwb3J0aW9uIG9mIGEgVVJMOlxuICpcbiAqIC0gUmVwbGFjZXMgY29uc2VjdXRpdmUgc2xhc2hlcyB3aXRoIG9uZSBzbGFzaC5cbiAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnLicgcGFydHMuXG4gKiAtIFJlbW92ZXMgdW5uZWNlc3NhcnkgJzxkaXI+Ly4uJyBwYXJ0cy5cbiAqXG4gKiBCYXNlZCBvbiBjb2RlIGluIHRoZSBOb2RlLmpzICdwYXRoJyBjb3JlIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgdXJsIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKGFQYXRoKSB7XG4gIHZhciBwYXRoID0gYVBhdGg7XG4gIHZhciB1cmwgPSB1cmxQYXJzZShhUGF0aCk7XG4gIGlmICh1cmwpIHtcbiAgICBpZiAoIXVybC5wYXRoKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuICAgIHBhdGggPSB1cmwucGF0aDtcbiAgfVxuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKTtcblxuICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KC9cXC8rLyk7XG4gIGZvciAodmFyIHBhcnQsIHVwID0gMCwgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcGFydCA9IHBhcnRzW2ldO1xuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCA+IDApIHtcbiAgICAgIGlmIChwYXJ0ID09PSAnJykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgcGFydCBpcyBibGFuayBpZiB0aGUgcGF0aCBpcyBhYnNvbHV0ZS4gVHJ5aW5nIHRvIGdvXG4gICAgICAgIC8vIGFib3ZlIHRoZSByb290IGlzIGEgbm8tb3AuIFRoZXJlZm9yZSB3ZSBjYW4gcmVtb3ZlIGFsbCAnLi4nIHBhcnRzXG4gICAgICAgIC8vIGRpcmVjdGx5IGFmdGVyIHRoZSByb290LlxuICAgICAgICBwYXJ0cy5zcGxpY2UoaSArIDEsIHVwKTtcbiAgICAgICAgdXAgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMuc3BsaWNlKGksIDIpO1xuICAgICAgICB1cC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXRoID0gcGFydHMuam9pbignLycpO1xuXG4gIGlmIChwYXRoID09PSAnJykge1xuICAgIHBhdGggPSBpc0Fic29sdXRlID8gJy8nIDogJy4nO1xuICB9XG5cbiAgaWYgKHVybCkge1xuICAgIHVybC5wYXRoID0gcGF0aDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUodXJsKTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplO1xuXG4vKipcbiAqIEpvaW5zIHR3byBwYXRocy9VUkxzLlxuICpcbiAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgam9pbmVkIHdpdGggdGhlIHJvb3QuXG4gKlxuICogLSBJZiBhUGF0aCBpcyBhIFVSTCBvciBhIGRhdGEgVVJJLCBhUGF0aCBpcyByZXR1cm5lZCwgdW5sZXNzIGFQYXRoIGlzIGFcbiAqICAgc2NoZW1lLXJlbGF0aXZlIFVSTDogVGhlbiB0aGUgc2NoZW1lIG9mIGFSb290LCBpZiBhbnksIGlzIHByZXBlbmRlZFxuICogICBmaXJzdC5cbiAqIC0gT3RoZXJ3aXNlIGFQYXRoIGlzIGEgcGF0aC4gSWYgYVJvb3QgaXMgYSBVUkwsIHRoZW4gaXRzIHBhdGggcG9ydGlvblxuICogICBpcyB1cGRhdGVkIHdpdGggdGhlIHJlc3VsdCBhbmQgYVJvb3QgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSB0aGUgcmVzdWx0XG4gKiAgIGlzIHJldHVybmVkLlxuICogICAtIElmIGFQYXRoIGlzIGFic29sdXRlLCB0aGUgcmVzdWx0IGlzIGFQYXRoLlxuICogICAtIE90aGVyd2lzZSB0aGUgdHdvIHBhdGhzIGFyZSBqb2luZWQgd2l0aCBhIHNsYXNoLlxuICogLSBKb2luaW5nIGZvciBleGFtcGxlICdodHRwOi8vJyBhbmQgJ3d3dy5leGFtcGxlLmNvbScgaXMgYWxzbyBzdXBwb3J0ZWQuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oYVJvb3QsIGFQYXRoKSB7XG4gIGlmIChhUm9vdCA9PT0gXCJcIikge1xuICAgIGFSb290ID0gXCIuXCI7XG4gIH1cbiAgaWYgKGFQYXRoID09PSBcIlwiKSB7XG4gICAgYVBhdGggPSBcIi5cIjtcbiAgfVxuICB2YXIgYVBhdGhVcmwgPSB1cmxQYXJzZShhUGF0aCk7XG4gIHZhciBhUm9vdFVybCA9IHVybFBhcnNlKGFSb290KTtcbiAgaWYgKGFSb290VXJsKSB7XG4gICAgYVJvb3QgPSBhUm9vdFVybC5wYXRoIHx8ICcvJztcbiAgfVxuXG4gIC8vIGBqb2luKGZvbywgJy8vd3d3LmV4YW1wbGUub3JnJylgXG4gIGlmIChhUGF0aFVybCAmJiAhYVBhdGhVcmwuc2NoZW1lKSB7XG4gICAgaWYgKGFSb290VXJsKSB7XG4gICAgICBhUGF0aFVybC5zY2hlbWUgPSBhUm9vdFVybC5zY2hlbWU7XG4gICAgfVxuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUGF0aFVybCk7XG4gIH1cblxuICBpZiAoYVBhdGhVcmwgfHwgYVBhdGgubWF0Y2goZGF0YVVybFJlZ2V4cCkpIHtcbiAgICByZXR1cm4gYVBhdGg7XG4gIH1cblxuICAvLyBgam9pbignaHR0cDovLycsICd3d3cuZXhhbXBsZS5jb20nKWBcbiAgaWYgKGFSb290VXJsICYmICFhUm9vdFVybC5ob3N0ICYmICFhUm9vdFVybC5wYXRoKSB7XG4gICAgYVJvb3RVcmwuaG9zdCA9IGFQYXRoO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG4gIH1cblxuICB2YXIgam9pbmVkID0gYVBhdGguY2hhckF0KDApID09PSAnLydcbiAgICA/IGFQYXRoXG4gICAgOiBub3JtYWxpemUoYVJvb3QucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyBhUGF0aCk7XG5cbiAgaWYgKGFSb290VXJsKSB7XG4gICAgYVJvb3RVcmwucGF0aCA9IGpvaW5lZDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuICB9XG4gIHJldHVybiBqb2luZWQ7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbiAoYVBhdGgpIHtcbiAgcmV0dXJuIGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nIHx8IHVybFJlZ2V4cC50ZXN0KGFQYXRoKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIHBhdGggcmVsYXRpdmUgdG8gYSBVUkwgb3IgYW5vdGhlciBwYXRoLlxuICpcbiAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgbWFkZSByZWxhdGl2ZSB0byBhUm9vdC5cbiAqL1xuZnVuY3Rpb24gcmVsYXRpdmUoYVJvb3QsIGFQYXRoKSB7XG4gIGlmIChhUm9vdCA9PT0gXCJcIikge1xuICAgIGFSb290ID0gXCIuXCI7XG4gIH1cblxuICBhUm9vdCA9IGFSb290LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgLy8gSXQgaXMgcG9zc2libGUgZm9yIHRoZSBwYXRoIHRvIGJlIGFib3ZlIHRoZSByb290LiBJbiB0aGlzIGNhc2UsIHNpbXBseVxuICAvLyBjaGVja2luZyB3aGV0aGVyIHRoZSByb290IGlzIGEgcHJlZml4IG9mIHRoZSBwYXRoIHdvbid0IHdvcmsuIEluc3RlYWQsIHdlXG4gIC8vIG5lZWQgdG8gcmVtb3ZlIGNvbXBvbmVudHMgZnJvbSB0aGUgcm9vdCBvbmUgYnkgb25lLCB1bnRpbCBlaXRoZXIgd2UgZmluZFxuICAvLyBhIHByZWZpeCB0aGF0IGZpdHMsIG9yIHdlIHJ1biBvdXQgb2YgY29tcG9uZW50cyB0byByZW1vdmUuXG4gIHZhciBsZXZlbCA9IDA7XG4gIHdoaWxlIChhUGF0aC5pbmRleE9mKGFSb290ICsgJy8nKSAhPT0gMCkge1xuICAgIHZhciBpbmRleCA9IGFSb290Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG9ubHkgcGFydCBvZiB0aGUgcm9vdCB0aGF0IGlzIGxlZnQgaXMgdGhlIHNjaGVtZSAoaS5lLiBodHRwOi8vLFxuICAgIC8vIGZpbGU6Ly8vLCBldGMuKSwgb25lIG9yIG1vcmUgc2xhc2hlcyAoLyksIG9yIHNpbXBseSBub3RoaW5nIGF0IGFsbCwgd2VcbiAgICAvLyBoYXZlIGV4aGF1c3RlZCBhbGwgY29tcG9uZW50cywgc28gdGhlIHBhdGggaXMgbm90IHJlbGF0aXZlIHRvIHRoZSByb290LlxuICAgIGFSb290ID0gYVJvb3Quc2xpY2UoMCwgaW5kZXgpO1xuICAgIGlmIChhUm9vdC5tYXRjaCgvXihbXlxcL10rOlxcLyk/XFwvKiQvKSkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cblxuICAgICsrbGV2ZWw7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2UgYWRkIGEgXCIuLi9cIiBmb3IgZWFjaCBjb21wb25lbnQgd2UgcmVtb3ZlZCBmcm9tIHRoZSByb290LlxuICByZXR1cm4gQXJyYXkobGV2ZWwgKyAxKS5qb2luKFwiLi4vXCIpICsgYVBhdGguc3Vic3RyKGFSb290Lmxlbmd0aCArIDEpO1xufVxuZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlO1xuXG52YXIgc3VwcG9ydHNOdWxsUHJvdG8gPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuICEoJ19fcHJvdG9fXycgaW4gb2JqKTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGlkZW50aXR5IChzKSB7XG4gIHJldHVybiBzO1xufVxuXG4vKipcbiAqIEJlY2F1c2UgYmVoYXZpb3IgZ29lcyB3YWNreSB3aGVuIHlvdSBzZXQgYF9fcHJvdG9fX2Agb24gb2JqZWN0cywgd2VcbiAqIGhhdmUgdG8gcHJlZml4IGFsbCB0aGUgc3RyaW5ncyBpbiBvdXIgc2V0IHdpdGggYW4gYXJiaXRyYXJ5IGNoYXJhY3Rlci5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9wdWxsLzMxIGFuZFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMzBcbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuZnVuY3Rpb24gdG9TZXRTdHJpbmcoYVN0cikge1xuICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuICAgIHJldHVybiAnJCcgKyBhU3RyO1xuICB9XG5cbiAgcmV0dXJuIGFTdHI7XG59XG5leHBvcnRzLnRvU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IHRvU2V0U3RyaW5nO1xuXG5mdW5jdGlvbiBmcm9tU2V0U3RyaW5nKGFTdHIpIHtcbiAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcbiAgICByZXR1cm4gYVN0ci5zbGljZSgxKTtcbiAgfVxuXG4gIHJldHVybiBhU3RyO1xufVxuZXhwb3J0cy5mcm9tU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IGZyb21TZXRTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzUHJvdG9TdHJpbmcocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCA8IDkgLyogXCJfX3Byb3RvX19cIi5sZW5ndGggKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocy5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMikgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSAzKSAhPT0gMTExIC8qICdvJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDQpICE9PSAxMTYgLyogJ3QnICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNSkgIT09IDExMSAvKiAnbycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA2KSAhPT0gMTE0IC8qICdyJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDcpICE9PSAxMTIgLyogJ3AnICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOCkgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA5KSAhPT0gOTUgIC8qICdfJyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBsZW5ndGggLSAxMDsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocy5jaGFyQ29kZUF0KGkpICE9PSAzNiAvKiAnJCcgKi8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdoZXJlIHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cbiAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uLCBidXQgZGlmZmVyZW50IGdlbmVyYXRlZFxuICogbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGEgbWFwcGluZyB3aXRoIGFcbiAqIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVPcmlnaW5hbCkge1xuICB2YXIgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyA9IGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zO1xuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBkZWZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgaW5kaWNlcyB3aGVyZVxuICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cbiAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiwgYnV0IGRpZmZlcmVudFxuICogc291cmNlL25hbWUvb3JpZ2luYWwgbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGFcbiAqIG1hcHBpbmcgd2l0aCBhIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVHZW5lcmF0ZWQpIHtcbiAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkID0gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQ7XG5cbmZ1bmN0aW9uIHN0cmNtcChhU3RyMSwgYVN0cjIpIHtcbiAgaWYgKGFTdHIxID09PSBhU3RyMikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGFTdHIxID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDE7IC8vIGFTdHIyICE9PSBudWxsXG4gIH1cblxuICBpZiAoYVN0cjIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gLTE7IC8vIGFTdHIxICE9PSBudWxsXG4gIH1cblxuICBpZiAoYVN0cjEgPiBhU3RyMikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBpbmZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgc3RyaW5ncyB3aGVyZVxuICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IpIHtcbiAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkID0gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQ7XG5cbi8qKlxuICogU3RyaXAgYW55IEpTT04gWFNTSSBhdm9pZGFuY2UgcHJlZml4IGZyb20gdGhlIHN0cmluZyAoYXMgZG9jdW1lbnRlZFxuICogaW4gdGhlIHNvdXJjZSBtYXBzIHNwZWNpZmljYXRpb24pLCBhbmQgdGhlbiBwYXJzZSB0aGUgc3RyaW5nIGFzXG4gKiBKU09OLlxuICovXG5mdW5jdGlvbiBwYXJzZVNvdXJjZU1hcElucHV0KHN0cikge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIucmVwbGFjZSgvXlxcKV19J1teXFxuXSpcXG4vLCAnJykpO1xufVxuZXhwb3J0cy5wYXJzZVNvdXJjZU1hcElucHV0ID0gcGFyc2VTb3VyY2VNYXBJbnB1dDtcblxuLyoqXG4gKiBDb21wdXRlIHRoZSBVUkwgb2YgYSBzb3VyY2UgZ2l2ZW4gdGhlIHRoZSBzb3VyY2Ugcm9vdCwgdGhlIHNvdXJjZSdzXG4gKiBVUkwsIGFuZCB0aGUgc291cmNlIG1hcCdzIFVSTC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzb3VyY2VVUkwsIHNvdXJjZU1hcFVSTCkge1xuICBzb3VyY2VVUkwgPSBzb3VyY2VVUkwgfHwgJyc7XG5cbiAgaWYgKHNvdXJjZVJvb3QpIHtcbiAgICAvLyBUaGlzIGZvbGxvd3Mgd2hhdCBDaHJvbWUgZG9lcy5cbiAgICBpZiAoc291cmNlUm9vdFtzb3VyY2VSb290Lmxlbmd0aCAtIDFdICE9PSAnLycgJiYgc291cmNlVVJMWzBdICE9PSAnLycpIHtcbiAgICAgIHNvdXJjZVJvb3QgKz0gJy8nO1xuICAgIH1cbiAgICAvLyBUaGUgc3BlYyBzYXlzOlxuICAgIC8vICAgTGluZSA0OiBBbiBvcHRpb25hbCBzb3VyY2Ugcm9vdCwgdXNlZnVsIGZvciByZWxvY2F0aW5nIHNvdXJjZVxuICAgIC8vICAgZmlsZXMgb24gYSBzZXJ2ZXIgb3IgcmVtb3ZpbmcgcmVwZWF0ZWQgdmFsdWVzIGluIHRoZVxuICAgIC8vICAg4oCcc291cmNlc+KAnSBlbnRyeS4gIFRoaXMgdmFsdWUgaXMgcHJlcGVuZGVkIHRvIHRoZSBpbmRpdmlkdWFsXG4gICAgLy8gICBlbnRyaWVzIGluIHRoZSDigJxzb3VyY2XigJ0gZmllbGQuXG4gICAgc291cmNlVVJMID0gc291cmNlUm9vdCArIHNvdXJjZVVSTDtcbiAgfVxuXG4gIC8vIEhpc3RvcmljYWxseSwgU291cmNlTWFwQ29uc3VtZXIgZGlkIG5vdCB0YWtlIHRoZSBzb3VyY2VNYXBVUkwgYXNcbiAgLy8gYSBwYXJhbWV0ZXIuICBUaGlzIG1vZGUgaXMgc3RpbGwgc29tZXdoYXQgc3VwcG9ydGVkLCB3aGljaCBpcyB3aHlcbiAgLy8gdGhpcyBjb2RlIGJsb2NrIGlzIGNvbmRpdGlvbmFsLiAgSG93ZXZlciwgaXQncyBwcmVmZXJhYmxlIHRvIHBhc3NcbiAgLy8gdGhlIHNvdXJjZSBtYXAgVVJMIHRvIFNvdXJjZU1hcENvbnN1bWVyLCBzbyB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gY2FuIGltcGxlbWVudCB0aGUgc291cmNlIFVSTCByZXNvbHV0aW9uIGFsZ29yaXRobSBhcyBvdXRsaW5lZCBpblxuICAvLyB0aGUgc3BlYy4gIFRoaXMgYmxvY2sgaXMgYmFzaWNhbGx5IHRoZSBlcXVpdmFsZW50IG9mOlxuICAvLyAgICBuZXcgVVJMKHNvdXJjZVVSTCwgc291cmNlTWFwVVJMKS50b1N0cmluZygpXG4gIC8vIC4uLiBleGNlcHQgaXQgYXZvaWRzIHVzaW5nIFVSTCwgd2hpY2ggd2Fzbid0IGF2YWlsYWJsZSBpbiB0aGVcbiAgLy8gb2xkZXIgcmVsZWFzZXMgb2Ygbm9kZSBzdGlsbCBzdXBwb3J0ZWQgYnkgdGhpcyBsaWJyYXJ5LlxuICAvL1xuICAvLyBUaGUgc3BlYyBzYXlzOlxuICAvLyAgIElmIHRoZSBzb3VyY2VzIGFyZSBub3QgYWJzb2x1dGUgVVJMcyBhZnRlciBwcmVwZW5kaW5nIG9mIHRoZVxuICAvLyAgIOKAnHNvdXJjZVJvb3TigJ0sIHRoZSBzb3VyY2VzIGFyZSByZXNvbHZlZCByZWxhdGl2ZSB0byB0aGVcbiAgLy8gICBTb3VyY2VNYXAgKGxpa2UgcmVzb2x2aW5nIHNjcmlwdCBzcmMgaW4gYSBodG1sIGRvY3VtZW50KS5cbiAgaWYgKHNvdXJjZU1hcFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1cmxQYXJzZShzb3VyY2VNYXBVUkwpO1xuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb3VyY2VNYXBVUkwgY291bGQgbm90IGJlIHBhcnNlZFwiKTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5wYXRoKSB7XG4gICAgICAvLyBTdHJpcCB0aGUgbGFzdCBwYXRoIGNvbXBvbmVudCwgYnV0IGtlZXAgdGhlIFwiL1wiLlxuICAgICAgdmFyIGluZGV4ID0gcGFyc2VkLnBhdGgubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHBhcnNlZC5wYXRoID0gcGFyc2VkLnBhdGguc3Vic3RyaW5nKDAsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZVVSTCA9IGpvaW4odXJsR2VuZXJhdGUocGFyc2VkKSwgc291cmNlVVJMKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemUoc291cmNlVVJMKTtcbn1cbmV4cG9ydHMuY29tcHV0ZVNvdXJjZVVSTCA9IGNvbXB1dGVTb3VyY2VVUkw7XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDktMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0UudHh0IG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5leHBvcnRzLlNvdXJjZU1hcEdlbmVyYXRvciA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yJykuU291cmNlTWFwR2VuZXJhdG9yO1xuZXhwb3J0cy5Tb3VyY2VNYXBDb25zdW1lciA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1tYXAtY29uc3VtZXInKS5Tb3VyY2VNYXBDb25zdW1lcjtcbmV4cG9ydHMuU291cmNlTm9kZSA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1ub2RlJykuU291cmNlTm9kZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM4MDRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2R1bGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI1NDlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzQwNzhfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM3NDVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI0MzlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5ODIwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=