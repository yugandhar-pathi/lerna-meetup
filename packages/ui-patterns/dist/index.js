'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var FancyButton = function FancyButton(props) {
  return React.createElement("button", null, props.label);
};

var FancyHeader = function FancyHeader(props) {
  return React.createElement("div", null, React.createElement("p", null, " This is a fancy header"), React.createElement(FancyButton, {
    label: "Logout"
  }));
};

exports.FancyHeader = FancyHeader;
//# sourceMappingURL=index.js.map
