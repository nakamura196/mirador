"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workspace = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Window = _interopRequireDefault(require("../containers/Window"));

var _WorkspaceMosaic = _interopRequireDefault(require("../containers/WorkspaceMosaic"));

var _WorkspaceElastic = _interopRequireDefault(require("../containers/WorkspaceElastic"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

var _IIIFDropTarget = require("./IIIFDropTarget");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
var Workspace = /*#__PURE__*/function (_React$Component) {
  _inherits(Workspace, _React$Component);

  var _super = _createSuper(Workspace);

  /** */
  function Workspace(props) {
    var _this;

    _classCallCheck(this, Workspace);

    _this = _super.call(this, props);
    _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
    return _this;
  }
  /** */


  _createClass(Workspace, [{
    key: "handleDrop",
    value: function handleDrop(_ref, props, monitor) {
      var canvasId = _ref.canvasId,
          manifestId = _ref.manifestId,
          manifestJson = _ref.manifestJson;
      var _this$props = this.props,
          addWindow = _this$props.addWindow,
          allowNewWindows = _this$props.allowNewWindows;
      if (!allowNewWindows) return;
      addWindow({
        canvasId: canvasId,
        manifest: manifestJson,
        manifestId: manifestId
      });
    }
    /**
     * Determine which workspace to render by configured type
     */

  }, {
    key: "workspaceByType",
    value: function workspaceByType() {
      var _this$props2 = this.props,
          workspaceId = _this$props2.workspaceId,
          workspaceType = _this$props2.workspaceType,
          windowIds = _this$props2.windowIds;

      if (this.maximizedWindows()) {
        return this.maximizedWindows();
      }

      if (windowIds.length === 0) return this.zeroWindows();

      switch (workspaceType) {
        case 'elastic':
          return /*#__PURE__*/_react["default"].createElement(_WorkspaceElastic["default"], null);

        case 'mosaic':
          return /*#__PURE__*/_react["default"].createElement(_WorkspaceMosaic["default"], null);

        default:
          return windowIds.map(function (windowId) {
            return /*#__PURE__*/_react["default"].createElement(_Window["default"], {
              key: "".concat(windowId, "-").concat(workspaceId),
              windowId: windowId
            });
          });
      }
    }
    /** */

  }, {
    key: "zeroWindows",
    value: function zeroWindows() {
      var t = this.props.t;
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        alignItems: "center",
        container: true,
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        xs: 12,
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h1",
        component: "div",
        align: "center"
      }, t('welcome'))));
    }
    /**
     * Determine whether or not there are maximized windows
     */

  }, {
    key: "maximizedWindows",
    value: function maximizedWindows() {
      var _this$props3 = this.props,
          maximizedWindowIds = _this$props3.maximizedWindowIds,
          workspaceId = _this$props3.workspaceId;

      if (maximizedWindowIds.length > 0) {
        return maximizedWindowIds.map(function (windowId) {
          return /*#__PURE__*/_react["default"].createElement(_Window["default"], {
            key: "".concat(windowId, "-").concat(workspaceId),
            windowId: windowId,
            className: (0, _classnames["default"])((0, _cssNs["default"])('workspace-maximized-window'))
          });
        });
      }

      return false;
    }
    /**
     * render
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          isWorkspaceControlPanelVisible = _this$props4.isWorkspaceControlPanelVisible,
          t = _this$props4.t;
      return /*#__PURE__*/_react["default"].createElement(_IIIFDropTarget.IIIFDropTarget, {
        onDrop: this.handleDrop
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])((0, _cssNs["default"])('workspace-viewport'), isWorkspaceControlPanelVisible && (0, _cssNs["default"])('workspace-with-control-panel'), isWorkspaceControlPanelVisible && classes.workspaceWithControlPanel, classes.workspaceViewport)
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "srOnly",
        component: "h1"
      }, t('miradorViewer')), this.workspaceByType()));
    }
  }]);

  return Workspace;
}(_react["default"].Component);

exports.Workspace = Workspace;
Workspace.defaultProps = {
  addWindow: function addWindow() {},
  allowNewWindows: true,
  maximizedWindowIds: [],
  windowIds: []
};