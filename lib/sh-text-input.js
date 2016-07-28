"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('./steps.scss');

var ShInputText = function (_Component) {
  _inherits(ShInputText, _Component);

  function ShInputText(props) {
    _classCallCheck(this, ShInputText);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShInputText).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ShInputText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var newState = Object.assign({}, this.state, {});
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "label",
        null,
        _react2.default.createElement(
          "span",
          { "class": "label" },
          "this.props.label"
        ),
        _react2.default.createElement("input", { type: "text", placeholder: "+" })
      );
    }
  }]);

  return ShInputText;
}(_react.Component);

exports.default = ShInputText;
module.exports = exports["default"];
//# sourceMappingURL=sh-text-input.js.map