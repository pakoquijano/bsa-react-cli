'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return '@import (reference) \'../../../../../theme.less\';\n.c-' + camelTokebab(name) + ' {\n\n}\n';
};

var camelTokebab = function camelTokebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

exports.default = getTemplate;
//# sourceMappingURL=stylesTemplate.js.map