'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _isEmpty = require('is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _indexDuckModule = require('../templates/indexDuckModule');

var _indexDuckModule2 = _interopRequireDefault(_indexDuckModule);

var _actionsTemplate = require('../templates/actionsTemplate');

var _actionsTemplate2 = _interopRequireDefault(_actionsTemplate);

var _reducerTemplate = require('../templates/reducerTemplate');

var _reducerTemplate2 = _interopRequireDefault(_reducerTemplate);

var _thunksTemplate = require('../templates/thunksTemplate');

var _thunksTemplate2 = _interopRequireDefault(_thunksTemplate);

var _typesTemplate = require('../templates/typesTemplate');

var _typesTemplate2 = _interopRequireDefault(_typesTemplate);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = function handle(moduleName, path) {
	if ((0, _isEmpty2.default)(path)) {
		path = 'src/store/features';
	}
	path += '/' + moduleName;
	console.log('Creating ' + path);
	_shelljs2.default.mkdir('-p', '' + path);

	(0, _createFile2.default)((0, _indexDuckModule2.default)(moduleName), path + '/index.js');
	(0, _createFile2.default)((0, _actionsTemplate2.default)(moduleName), path + '/actions.js');
	(0, _createFile2.default)((0, _reducerTemplate2.default)(moduleName), path + '/reducers.js');
	(0, _createFile2.default)((0, _thunksTemplate2.default)(moduleName), path + '/thunks.js');
	(0, _createFile2.default)((0, _typesTemplate2.default)(moduleName), path + '/types.js');
};

exports.default = handle;
//# sourceMappingURL=createDuck.js.map