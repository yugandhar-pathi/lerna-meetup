import React from 'react';

var FancyButton = function FancyButton(props) {
  return React.createElement("button", null, props.label);
};

var FancyHeader = function FancyHeader(props) {
  return React.createElement("div", null, React.createElement("p", null, " This is a fancy header"), React.createElement(FancyButton, {
    label: "Logout"
  }));
};

export { FancyHeader };
//# sourceMappingURL=index.es.js.map
