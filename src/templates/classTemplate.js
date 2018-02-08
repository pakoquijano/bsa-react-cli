const getTemplate = (name) => {
	return (`import React, { Component } from 'react';
import PropTypes from 'prop-types';
import messages from './messages';
import './styles.less';

const propTypes = {};
const defaultProps = {};

class prueba extends Component {
	constructor(props) {
		super(props);
		this.state = {};
  }
  
	render() {
		return (<div>prueba</div>);
	}
}

prueba.defaultProps = defaultProps;
prueba.propTypes = propTypes;

export default prueba;
`
	);
};

export default getTemplate;
