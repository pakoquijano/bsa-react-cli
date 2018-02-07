const getTemplate = (name) => {
	return (`import { defineMessages } from 'react-intl';

export default defineMessages({
  demo: {
    id: '${name}.demo',
    defaultMessage: 'Demo Message',
  },
});
`);
};

export default getTemplate;
