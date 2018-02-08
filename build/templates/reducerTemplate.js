'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constantCase = require('constant-case');

var _constantCase2 = _interopRequireDefault(_constantCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTemplate = function getTemplate(name) {
  return 'import types from \'./types\';\n\nexport const initialState = {};\n\nexport default function (state = initialState, action) {\n  switch (action.type) {\n    case types.REQUEST_' + (0, _constantCase2.default)(name) + ': {\n      return {\n        ...state,\n      };\n    }\n    case types.REQUEST_' + (0, _constantCase2.default)(name) + '_SUCCESS: {\n      return {\n        ...state,\n      };\n    }\n    case types.REQUEST_' + (0, _constantCase2.default)(name) + '_ERROR: {\n      return {\n        ...state,\n      }\n    }\n    default:\n      return state;\n  };\n}\n';
};

exports.default = getTemplate;
//# sourceMappingURL=reducerTemplate.js.map