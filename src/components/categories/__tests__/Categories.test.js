import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../Categories';

describe('components | categories | Categories', () => {
	it('Renders the component', () => {
		const props = {
			categories: [
				{
					name: 'category',
					slug: 'slug'
				}
			],
			isClicked: false,
			handleProducts: jest.fn()
		};

		const component = shallow(
			<Categories { ...props } />
		);

		expect(component).toMatchSnapshot();
	})
})