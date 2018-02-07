"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport messages from './messages';\nimport './styles.less';\n\nconst propTypes = {};\nconst defaultProps = {};\n\nconst " + name + " = () => {\n\treturn (\n\t\t<div>" + name + "</div>\n\t);\n};\n\n" + name + ".defaultProps = defaultProps;\n" + name + ".propTypes = propTypes;\n\nexport default " + name + ";\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=dumpTemplate.js.map