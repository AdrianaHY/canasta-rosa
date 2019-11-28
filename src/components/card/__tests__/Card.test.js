import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('components | card | Card', () => {
	it('Renders the component', () => {
		const props = {
			product: {
				name: 'product',
				photo: {
					small: 'small.png'
				},
				store: {
					name: 'store'
				},
				price: 45
			}
		}

		const component = shallow(
			<Card {...props}/>
		);

		expect(component).toMatchSnapshot();
	})
})