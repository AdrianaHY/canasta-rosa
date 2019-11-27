import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {
	render() {
		const { product } = this.props;
		return (
			<div className="product-card">
				<img className="product-image" src={product.photo.small} alt={product.name} />
				<div>
					<p className="product-name">{product.name}</p>
					<p className="store-name">{product.store.name}</p>
					<p><strong>${product.price}MX</strong></p>
				</div>
			</div>
		)
	}
}

export default Card;