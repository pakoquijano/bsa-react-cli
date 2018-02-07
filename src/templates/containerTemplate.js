const getTemplate = (name) => {
	return (`import { connect } from 'react-redux';
import CountryField from 'components/formFields/${name}';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(name);

`);
};

export default getTemplate;
