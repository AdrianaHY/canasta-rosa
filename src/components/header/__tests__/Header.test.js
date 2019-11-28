import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('components | header | Header', () => {
	it('Renders the component', () => {
		const props = {
			handleClick: jest.fn()
		};

		const component= shallow(
			<Header { ...props } />
		);

		expect(component).toMatchSnapshot();
	})
});