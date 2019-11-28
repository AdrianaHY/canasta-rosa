import React, { Component } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';

import ProductService from './utils/getData';

import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.ProductService = new ProductService();
		this.state = {
			categories: [],
			isClicked: false,
			page: 1,
			products: [],
			isLoading: false,
		}
	}

	handleProducts (slug) {
		this.setState({ isLoading: true });
		this.setState({
			isClicked: !this.state.isClicked
		});
		this.ProductService.getProducts(slug).then((response) => {
			const products = response.results;
			this.setState({products: products, isLoading: false });
		})
	}

	// handler to show the menu
	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			isClicked: !this.state.isClicked
		});
	}

	componentWillMount() {
		const myInit = {
			method: 'GET',
			mode: 'cors',
			cache: 'default'
		};

		const requestCategories = new Request('https://canastarosa.com/services/api/v1/market/categories/', myInit);

		// get categories for menu
		fetch(requestCategories)
			.then((response) => {
				return response.json();
			})
			.then((categories) => {
				this.setState({ categories: categories });
			})
	}

	render() {
		const { categories, isClicked, products, isLoading } = this.state;
		return(
			<div className="app">
				<Header
					handleClick={this.handleClick}
					handleBackHome={this.handleBackHome}
				/>
				<Categories
					categories={categories}
					isClicked={isClicked}
					handleProducts={(slug) => this.handleProducts(slug)}
				/>
				{products.length === 0 ?
					<Home />:
					<ProductList
						isLoading={isLoading}
						products={products}
					/>
				}
				<Footer />
			</div>
		)
	}
}

export default App;