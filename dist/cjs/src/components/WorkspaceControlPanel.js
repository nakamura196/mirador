"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceControlPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _WorkspaceAddButton = _interopRequireDefault(require("../containers/WorkspaceAddButton"));

var _WorkspaceControlPanelButtons = _interopRequireDefault(require("../containers/WorkspaceControlPanelButtons"));

var _Branding = _interopRequireDefault(require("../containers/Branding"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Provides the panel responsible for controlling the entire workspace
 */
var WorkspaceControlPanel = /*#__PURE__*/function (_Component) {
  _inherits(WorkspaceControlPanel, _Component);

  var _super = _createSuper(WorkspaceControlPanel);

  function WorkspaceControlPanel() {
    _classCallCheck(this, WorkspaceControlPanel);

    return _super.apply(this, arguments);
  }

  _createClass(WorkspaceControlPanel, [{
    key: "render",
    value:
    /**
     * render
     * @return {String} - HTML markup for the component
     */
    function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          variant = _this$props.variant;
      return /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
        className: (0, _classnames["default"])(classes.root, (0, _cssNs["default"])('workspace-control-panel'), variant === 'wide' ? classes.wide : null),
        color: "default",
        position: "absolute",
        component: "nav",
        "aria-label": t('workspaceNavigation')
      }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
        disableGutters: true,
        className: classes.toolbar
      }, /*#__PURE__*/_react["default"].createElement(_WorkspaceAddButton["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.workspaceButtons
      }, /*#__PURE__*/_react["default"].createElement(_WorkspaceControlPanelButtons["default"], null))), /*#__PURE__*/_react["default"].createElement(_Branding["default"], {
        className: classes.branding,
        t: t,
        variant: variant
      }));
    }
  }]);

  return WorkspaceControlPanel;
}(_react.Component);

exports.WorkspaceControlPanel = WorkspaceControlPanel;
WorkspaceControlPanel.defaultProps = {
  variant: 'default'
};