import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductList from '../productList/ProductList';

import ProductService from '../../utils/getData';

class App extends Component {
	constructor(props) {
		super(props);
		this.ProductService = new ProductService();
		this.state = {
			categories: [],
			isClicked: false,
			page: 1,
			products: []
		}
	}

	// handler to show the menu
	handleClick = (e) => {
		e.preventDefault();
		this.setState(state => ({
			isClicked: !state.isClicked
		}));
	}

	handleProducts(slug) {
		this.ProductService.getProducts(slug).then((response) => {
			const products = response.results;
			console.log("ira we, sin manos", products);
			this.setState({products: products});	
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
				console.log('categories', categories);
				this.setState({ categories: categories });
			})
	}

	render() {
		const { categories, isClicked } = this.state;
		return(
			<Fragment>
				<Header handleClick={this.handleClick}/>
				<div className="container-categories">
					<div className={ isClicked ? 'show-list' : 'list-of-categories' }>
						<Router>
							<ul className="categories">
								{categories.map(( category ) =>
									<li className="category" key={category.name}>
										<Link onClick={(e) => this.handleProducts(category.slug)} to={`/${category.slug}`}>{category.name} <span className="chevron right" /></Link>
									</li>
								)}
							</ul>
						</Router>
					</div>
				</div>
				<Router>
					<Switch>
						<Route path={`/:products`} component={ProductList}/>
					</Switch>
				</Router>
				{/* <ProductList /> */}
				<Footer />
			</Fragment>
		)
	}
}

export default App;