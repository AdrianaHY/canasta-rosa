import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../ProductList';

describe('pages | productList | ProductList', () => {
	it('Renders the component', () => {
		const props = {
			products: [
				{
					name: 'product'
				}
			],
			isLoading: false,
			handlePage: jest.fn()
		};

		const component = shallow(
			<ProductList { ...props } />
		);

		expect(component).toMatchSnapshot();

		component.setProps({ isLoading: true });

		expect(component.find('.lds-heart')).toHaveLength(1);

	})
})