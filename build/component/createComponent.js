'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _isEmpty = require('is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

var _indexComponent = require('../templates/indexComponent');

var _indexComponent2 = _interopRequireDefault(_indexComponent);

var _classTemplate = require('../templates/classTemplate');

var _classTemplate2 = _interopRequireDefault(_classTemplate);

var _dumpTemplate = require('../templates/dumpTemplate');

var _dumpTemplate2 = _interopRequireDefault(_dumpTemplate);

var _containerTemplate = require('../templates/containerTemplate');

var _containerTemplate2 = _interopRequireDefault(_containerTemplate);

var _messagesTemplate = require('../templates/messagesTemplate');

var _messagesTemplate2 = _interopRequireDefault(_messagesTemplate);

var _stylesTemplate = require('../templates/stylesTemplate');

var _stylesTemplate2 = _interopRequireDefault(_stylesTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = function handle(moduleName, path) {
	var dumb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	var container = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	if ((0, _isEmpty2.default)(path)) {
		path = !container ? 'src/components' : 'src/containers';
	}
	path += '/' + moduleName;
	console.log('Creating ' + path);
	_shelljs2.default.mkdir('-p', '' + path);
	(0, _createFile2.default)((0, _indexComponent2.default)(moduleName), path + '/index.js');
	dumb && (0, _createFile2.default)((0, _dumpTemplate2.default)(moduleName), path + '/' + moduleName + '.jsx');
	if (!dumb) container ? (0, _createFile2.default)((0, _containerTemplate2.default)(moduleName), path + '/container.js') : (0, _createFile2.default)((0, _classTemplate2.default)(moduleName), path + '/' + moduleName + '.jsx');
	!container && (0, _createFile2.default)((0, _messagesTemplate2.default)(moduleName), path + '/messages.js');
	!container && (0, _createFile2.default)((0, _stylesTemplate2.default)(moduleName), path + '/style.less');
};

exports.default = handle;
//# sourceMappingURL=createComponent.js.map