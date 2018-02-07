"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "export { default } from './reducers';\nexport { default as types } from './types';\nexport { default as actions } from './actions';\nexport { default as thunks } from './thunks';\t\t\n";
};

exports.default = getTemplate;
//# sourceMappingURL=indexDuckModule.js.map