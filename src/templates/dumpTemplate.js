const getTemplate = (name) => {
	return (`
import React from 'react';
import PropTypes from 'prop-types';
import messages from './messages';
import './styles.less';

const propTypes = {};
const defaultProps = {};

const ${name} = () => {
	return (
		<div>${name}</div>
	);
};

${name}.defaultProps = defaultProps;
${name}.propTypes = propTypes;

export default ${name};
`
	);
};

export default getTemplate;
