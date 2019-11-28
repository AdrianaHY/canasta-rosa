import React, { Component } from 'react';

import './Categories.scss';

class Categories extends Component {
	render() {
		const { categories, handleProducts, isClicked} = this.props;
		return (
			<div className={isClicked ? 'show-list' : 'categories'}>
				<ul className="list-container">
					{categories.map((category) =>
						<li key={category.name}>
							<button className="category" onClick={() => handleProducts(category.slug)}>
								{category.name} <span className="chevron right" />
							</button>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

export default Categories;