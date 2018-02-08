"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\nimport messages from './messages';\nimport './styles.less';\n\nconst propTypes = {};\nconst defaultProps = {};\n\nclass prueba extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {};\n  }\n  \n\trender() {\n\t\treturn (<div>prueba</div>);\n\t}\n}\n\nprueba.defaultProps = defaultProps;\nprueba.propTypes = propTypes;\n\nexport default prueba;\n";
};

exports.default = getTemplate;
//# sourceMappingURL=classTemplate.js.map