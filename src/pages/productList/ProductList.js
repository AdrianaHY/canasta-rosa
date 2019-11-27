import React, { Component } from 'react';

import Card from '../../components/card/Card';

// import { getProducts } from '../../utils/getData';

import './ProductList.scss';

class ProductList extends Component {
	constructor (props) {
		super(props);

		this.state = {
			page: 1,
			products: []
		}
	}

	componentWillMount() {


		const { products } = this.props.match.params;
		this.setState({ products : products })

		// console.log('params', slug);
		// const productsList = new Request(`https://canastarosa.com/services/api/v1/market/products/?category_slug=${slug}&page=${this.state.page}`, myInit);

		// fetch(productsList)
		// .then((response) => {
		// 	return response.json();
		// })
		// .then((products) => {
		// 	console.log('products', products)
		// 	this.setState({ products : products.results });
		// })

		// getProducts('celebraciones-1', this.state.page, this.state.products);

	}

	render() {
		// const { products } = this.state;
		// // const { categorie } = this.props.match.params;
		// console.log('categotri', products);
		return(
			<div className="product-list-container">
				{/* <h1>{categorie.name}</h1>
				<ul className="product-list">
					{products.map((product) =>
						<Card product={product} key={product.name}/>
					)}
				</ul> */}
				<h1>hola</h1>
			</div>
		)
	}
}

export default ProductList;