import React, { Component } from 'react';

import Card from '../../components/card/Card';

import Banner from '../../assets/banner.png';

import './ProductList.scss';

class ProductList extends Component {
	render() {
		const { products, isLoading } = this.props;
		return(
			<div className="product-list-container">
				{ isLoading &&
					<div className="lds-heart">
						<div className="lds-heart-container">
							<div></div>
						</div>
					</div>
				}
				<div className="image-container">
					<img src={Banner}  alt="banner" className="banner"/>
				</div>
				<ul className="product-list">
					{products.map((product) =>
						<Card product={product} key={product.name}/>
					)}
				</ul>
			</div>
		)
	}
}

export default ProductList;