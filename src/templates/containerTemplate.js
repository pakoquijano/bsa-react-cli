const getTemplate = (name) => {
	return (`import { connect } from 'react-redux';
  import ${name} from 'components/${name}';

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
)(${name});
`);
};

export default getTemplate;
