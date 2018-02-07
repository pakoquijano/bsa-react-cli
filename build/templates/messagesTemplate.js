"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return "import { defineMessages } from 'react-intl';\n\nexport default defineMessages({\n  demo: {\n    id: '" + name + ".demo',\n    defaultMessage: 'Demo Message',\n  },\n});\n";
};

exports.default = getTemplate;
//# sourceMappingURL=messagesTemplate.js.map