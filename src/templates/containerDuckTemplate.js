const getTemplate = (name) => {
	return (`// @flow
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ${name}View from '../components/${name}';
import { actions } from '../ducks/${name}Duck';

export class ${name} extends Component {

	state = {};

	render() {
		return (
			<${name}View />
		);
	}
}


${name}.defaultProps = {};
${name}.propTypes = {};

function _mapStoreToProps(state, ownProps) {
	return {};
}
function _mapDispatchToProps(dispatch) {
	return bindActionCreators({
		...actions,
	}, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(${name});

`);
};

export default getTemplate;