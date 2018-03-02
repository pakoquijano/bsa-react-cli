const getTemplate = (name) => {
	return (`import React, { Component } from 'react';
import PropTypes from 'prop-types';
import messages from './messages';
import './styles.less';

const propTypes = {};
const defaultProps = {};

class ${name} extends Component {
	constructor(props) {
		super(props);
		this.state = {};
  }
  
	render() {
		return (<div>${name}</div>);
	}
}

${name}.defaultProps = defaultProps;
${name}.propTypes = propTypes;

export default ${name};
`
	);
};

export default getTemplate;
