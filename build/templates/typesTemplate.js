'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constantCase = require('constant-case');

var _constantCase2 = _interopRequireDefault(_constantCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTemplate = function getTemplate(name) {
	return '// ' + name + ' types\nconst REQUEST_' + (0, _constantCase2.default)(name) + ' = \'myst/' + name + '/' + name + 'Request\';\nconst REQUEST_' + (0, _constantCase2.default)(name) + '_SUCCESS = \'myst/' + name + '/' + name + 'Success\';\nconst REQUEST_' + (0, _constantCase2.default)(name) + '_ERROR = \'myst/' + name + '/' + name + 'Error\';\n\nexport default {\n\tREQUEST_' + (0, _constantCase2.default)(name) + ',\n\tREQUEST_' + (0, _constantCase2.default)(name) + '_SUCCESS,\n\tREQUEST_' + (0, _constantCase2.default)(name) + '_ERROR,\n};\n';
};

exports.default = getTemplate;
//# sourceMappingURL=typesTemplate.js.map