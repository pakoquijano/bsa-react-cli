"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "import React, { Component} from 'react';\nimport PropTypes from 'prop-types';\nimport messages from './messages';\nimport './styles.less';\n\nconst propTypes = {};\nconst defaultProps = {};\n\nclass " + name + " extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n\trender() {\n\t\treturn (<div>" + name + "</div>);\n\t}\n}\n\n" + name + ".defaultProps = defaultProps;\n" + name + ".propTypes = propTypes;\n\nexport default " + name + ";\n";
};

exports.default = getTemplate;
//# sourceMappingURL=classTemplate.js.map