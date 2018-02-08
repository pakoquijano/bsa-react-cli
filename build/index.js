#!/usr/bin/env node --harmony
'use strict';

require('babel-polyfill');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _coPrompt = require('co-prompt');

var _coPrompt2 = _interopRequireDefault(_coPrompt);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _createDuck = require('./ducks/createDuck');

var _createDuck2 = _interopRequireDefault(_createDuck);

var _createComponent = require('./component/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _domain = require('domain');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// local libs

var types = [_constants2.default.types.DUCKS, _constants2.default.types.COMPONENT, _constants2.default.types.STATELESS, _constants2.default.types.PATH, _constants2.default.types.CONTAINER];
console.log(_chalk2.default.green(_figlet2.default.textSync('BSA MyST CLI')));

var pjson = require('../package.json');

_commander2.default.version(pjson.version).usage('with or without arguments :)').option('-c, --component [component]', 'name of your Component').option('-s, --stateless [stateless]', 'name of your dumb component').option('-o, --container [container]', 'name of your container').option('-d, --ducks 	 [ducks]', 'name of the duck feature').option('-p, --path      [path]', 'path for the generated structure [component]').parse(process.argv);

var parseValues = (0, _co2.default)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	var config, counter;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					config = {};
					counter = 0;


					types.forEach(function (type) {
						config[type] = _commander2.default[type];
						if (!_commander2.default[type]) {
							counter++;
						}
					});

					if (!(counter === types.length || counter === types.length - 1 && config[_constants2.default.types.PATH])) {
						_context.next = 12;
						break;
					}

					_context.next = 6;
					return (0, _coPrompt2.default)('Enter the name of ' + _constants2.default.types.COMPONENT + ' *: ');

				case 6:
					config[_constants2.default.types.COMPONENT] = _context.sent;

					if (!config[_constants2.default.types.COMPONENT] || '' === config[_constants2.default.types.COMPONENT]) {
						console.log(_chalk2.default.bold.red('The name is required'));
						process.exit(0);
					}

					if (config[_constants2.default.types.PATH]) {
						_context.next = 12;
						break;
					}

					_context.next = 11;
					return (0, _coPrompt2.default)(_chalk2.default.bold.cyan('Optional path, we recommend to leave blank(will default to /src/[components]):'));

				case 11:
					config[_constants2.default.types.PATH] = _context.sent;

				case 12:
					return _context.abrupt('return', config);

				case 13:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
})).catch(function (error) {
	console.log(_chalk2.default.bold.red(error.message));
	process.exit(0);
});

parseValues.then(function (values) {
	return handleValues(values);
}).catch(function (error) {
	console.log(_chalk2.default.bold.red(error.message));
	process.exit(0);
});

var handleValues = function handleValues(_ref) {
	var component = _ref.component,
	    path = _ref.path,
	    stateless = _ref.stateless,
	    container = _ref.container,
	    ducks = _ref.ducks,
	    args = _objectWithoutProperties(_ref, ['component', 'path', 'stateless', 'container', 'ducks']);

	component && (0, _createComponent2.default)(component, path);
	container && (0, _createComponent2.default)(container, path, false, true);
	stateless && (0, _createComponent2.default)(stateless, path, true);
	ducks && (0, _createDuck2.default)(ducks, path);
	_chalk2.default.reset();
	/* optional to run tests 
 if (shell.exec('npm run test').code !== 0) {
 	shell.echo('Can not run tests. Please run tests manually!');
 } */

	console.log(_chalk2.default.bold.green('Get a cofee and enjoy the time you saved :)!'));
	process.exit(0);
};
//# sourceMappingURL=index.js.map