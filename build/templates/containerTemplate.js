"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return "import { connect } from 'react-redux';\nimport CountryField from 'components/formFields/" + name + "';\n\nfunction mapStateToProps(state) {\n  return {\n\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n\n  };\n}\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps,\n)(name);\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=containerTemplate.js.map