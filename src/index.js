#!/usr/bin/env node --harmony
// @flow
import "babel-polyfill";

import program from 'commander';
import co from 'co';
import prompt from 'co-prompt';
import chalk from 'chalk';
import figlet from 'figlet';
import shell from 'shelljs';

// local libs

import createDuck from './ducks/createDuck';
import createComponent from './component/createComponent';
import constants from './constants';
import { create } from "domain";

const types = [
	constants.types.DUCKS,
	constants.types.COMPONENT,
	constants.types.STATELESS,
	constants.types.PATH,
	constants.types.CONTAINER,
];
console.log(
	chalk.green(
		figlet.textSync('BSA MyST CLI'),
	),
);

const pjson = require('../package.json');

program
	.version(pjson.version)
	.usage('with or without arguments :)')
	.option('-c, --component [component]', 'name of your Component')
	.option('-s, --stateless [stateless]', 'name of your dumb component')
	.option('-o, --container [container]', 'name of your container')
	.option('-d, --ducks 	 [ducks]', 'name of the duck feature')
	.option('-p, --path      [path]', 'path for the generated structure [component]')
	.parse(process.argv);


const parseValues = co(function *() {
	const config = {};
	let counter = 0;
	
	types.forEach((type) => {
		config[type] = program[type];
		if (!program[type]) {
			counter++;
		}
	});
	
	if (counter === types.length || (counter === types.length - 1 && config[constants.types.PATH])) {
		// if no arguments or only path provided run prompts
		config[constants.types.COMPONENT] = yield prompt(`Enter the name of ${constants.types.COMPONENT} *: `);
		if (!config[constants.types.COMPONENT] || '' === config[constants.types.COMPONENT]) {
			console.log(chalk.bold.red(`The name is required`));
			process.exit(0);
		}
		if (!config[constants.types.PATH]) {
			config[constants.types.PATH] = yield prompt(chalk.bold.cyan(`Optional path, we recommend to leave blank(will default to /src/[components]):`));
		}
	}
	
	return config;
}).catch((error) => {
	console.log(chalk.bold.red(error.message));
	process.exit(0);
});

parseValues.then((values) => handleValues(values))
		   .catch((error) => {
			   console.log(chalk.bold.red(error.message));
			   process.exit(0);
		   });

const handleValues = ({ component, path, stateless, container, ducks, ...args }) => {
	component && createComponent(component, path);
	container && createComponent(container, path, false, true);
	stateless && createComponent(stateless, path, true);
	ducks && createDuck(ducks, path);
	chalk.reset();
	/* optional to run tests 
	if (shell.exec('npm run test').code !== 0) {
		shell.echo('Can not run tests. Please run tests manually!');
	} */
	
	console.log(chalk.bold.green('Get a cofee and enjoy the time you saved :)!'));
	process.exit(0);
};
