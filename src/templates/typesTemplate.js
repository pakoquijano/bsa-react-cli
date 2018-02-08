import constantCase from 'constant-case';

const getTemplate = (name) => {
	return (`// ${name} types
const REQUEST_${constantCase(name)} = 'myst/${name}/${name}Request';
const REQUEST_${constantCase(name)}_SUCCESS = 'myst/${name}/${name}Success';
const REQUEST_${constantCase(name)}_ERROR = 'myst/${name}/${name}Error';

export default {
  REQUEST_${constantCase(name)},
  REQUEST_${constantCase(name)}_SUCCESS,
  REQUEST_${constantCase(name)}_ERROR,
};
`
	);
};

export default getTemplate;
