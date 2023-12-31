"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports.getContainerId = void 0;
exports.getExportableState = getExportableState;
exports.getThemeIds = exports.getThemeDirection = exports.getTheme = exports.getShowZoomControlsConfig = exports.getRequestsConfig = exports.getLanguagesFromConfigWithCurrent = void 0;

var _reselect = require("reselect");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _utils = require("./utils");

var _getters = require("./getters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** */
function getConfig(state) {
  var slice = (0, _utils.miradorSlice)(state || {});
  return slice.config || {};
}
/**
 * Extract an exportable version of state using the configuration from the config.
 */


function getExportableState(state) {
  var exportConfig = getConfig(state)["export"];
  return Object.entries(exportConfig).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        stem = _ref2[0],
        value = _ref2[1];

    if (value === true) {
      acc[stem] = state[stem];
    } else if (value.filter) {
      acc[stem] = Object.entries(state[stem]).filter(value.filter).reduce(function (stemAcc, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        stemAcc[k] = v; // eslint-disable-line no-param-reassign

        return stemAcc;
      }, {});
    }

    return acc;
  }, {});
}
/**
* Return languages from config (in state) and indicate which is currently set
* @param {object} state
* @return {Array} [ {locale: 'de', label: 'Deutsch', current: true}, ... ]
*/


var getLanguagesFromConfigWithCurrent = (0, _reselect.createSelector)([getConfig], function (_ref5) {
  var availableLanguages = _ref5.availableLanguages,
      language = _ref5.language;
  return Object.keys(availableLanguages).map(function (key) {
    return {
      current: key === language,
      label: availableLanguages[key],
      locale: key
    };
  });
});
exports.getLanguagesFromConfigWithCurrent = getLanguagesFromConfigWithCurrent;
var getShowZoomControlsConfig = (0, _reselect.createSelector)([_getters.getWorkspace, getConfig], function (workspace, config) {
  return workspace.showZoomControls === undefined ? config.workspace.showZoomControls : workspace.showZoomControls;
});
exports.getShowZoomControlsConfig = getShowZoomControlsConfig;
var getTheme = (0, _reselect.createSelector)([getConfig], function (_ref6) {
  var theme = _ref6.theme,
      themes = _ref6.themes,
      selectedTheme = _ref6.selectedTheme;
  return (0, _deepmerge["default"])(theme, themes[selectedTheme] || {});
});
exports.getTheme = getTheme;
var getThemeIds = (0, _reselect.createSelector)([getConfig], function (_ref7) {
  var themes = _ref7.themes;
  return Object.keys(themes);
});
exports.getThemeIds = getThemeIds;
var getContainerId = (0, _reselect.createSelector)([getConfig], function (_ref8) {
  var id = _ref8.id;
  return id;
});
exports.getContainerId = getContainerId;
var getThemeDirection = (0, _reselect.createSelector)([getConfig], function (_ref9) {
  var theme = _ref9.theme;
  return theme.direction || 'ltr';
});
exports.getThemeDirection = getThemeDirection;
var getRequestsConfig = (0, _reselect.createSelector)([getConfig], function (_ref10) {
  var requests = _ref10.requests;
  return requests || {};
});
exports.getRequestsConfig = getRequestsConfig;