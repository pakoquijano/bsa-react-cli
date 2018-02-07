import constantCase from 'constant-case';
const getTemplate = (name) => {
	return (`import types from './types';

export const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_${constantCase(name)}: {
      return {
        ...state
      }
    }
    case types.REQUEST_${constantCase(name)}_SUCCESS: {
      return {
        ...state
      }
    }
    case types.REQUEST_${constantCase(name)}_ERROR: {
      return {
        ...state
      }
    }
    default:
    return state;
  }
}
`
	);
};

export default getTemplate;
