import shell from 'shelljs';
import isEmpty from 'is-empty';
import createFile from '../utils/createFile';
import indexTemplate from '../templates/indexComponent';
import classTemplate from '../templates/classTemplate';
import dumpTemplate from '../templates/dumpTemplate';
import containerTemplate from '../templates/containerTemplate';
import messagesTemplate from '../templates/messagesTemplate';
import stylesTemplate from '../templates/stylesTemplate'

const handle = (moduleName, path, dumb = false, container = false) => {
	if (isEmpty(path)) {
		path = !container ? 'src/components' : 'src/containers';
	}
	path += `/${moduleName}`;
	console.log(`Creating ${path}`);
	shell.mkdir('-p', `${path}`);
	createFile(indexTemplate(moduleName), `${path}/index.js`);
	dumb && createFile(dumpTemplate(moduleName), `${path}/${moduleName}.jsx`);
	if (!dumb) container ? createFile(containerTemplate(moduleName),`${path}/container.js`) : createFile(classTemplate(moduleName), `${path}/${moduleName}.jsx`);
	!container && createFile(messagesTemplate(moduleName), `${path}/messages.js`);
	!container && createFile(stylesTemplate(moduleName), `${path}/style.less`);
};

export default handle;
