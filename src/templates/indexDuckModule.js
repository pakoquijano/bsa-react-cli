const getTemplate = (name) => {
	return (
	`export { default } from './reducers';
export { default as types } from './types';
export { default as actions } from './actions';
export { default as thunks } from './thunks';
`
	);
};

export default getTemplate;
