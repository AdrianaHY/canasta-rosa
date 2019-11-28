import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('pages | home | Home', () => {
	it('Renders the component', () => {
		shallow(<Home />);
	});
})