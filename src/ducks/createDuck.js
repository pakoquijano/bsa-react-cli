import shell from 'shelljs';
import isEmpty from 'is-empty';
import indexDuckModule from '../templates/indexDuckModule';
import actionsTemplate from '../templates/actionsTemplate';
import reducerTemplate from '../templates/reducerTemplate';
import thunksTemplate from '../templates/thunksTemplate';
import typesTemplate from '../templates/typesTemplate';
import createFile from '../utils/createFile';

const handle = (moduleName, path) => {
	if (isEmpty(path)) {
		path = 'src/store/features';
	}
	path += `/${moduleName}`;
  console.log(`Creating ${path}`);
  shell.mkdir('-p', `${path}`);

	createFile(indexDuckModule(moduleName), `${path}/index.js`);
	createFile(actionsTemplate(moduleName), `${path}/actions.js`);
  createFile(reducerTemplate(moduleName), `${path}/reducers.js`);
  createFile(thunksTemplate(moduleName), `${path}/thunks.js`);
  createFile(typesTemplate(moduleName), `${path}/types.js`);
};

export default handle;
