import React, { Component } from 'react';

import Banner from '../../assets/banner.png';

import './Home.scss';
class Home extends Component {
	render() {
		return(
			<div className="home-container">
				<div className="home" />
				<div className="image-container">
					<img src={Banner}  alt="banner" className="banner"/>
				</div>
			</div>
		)
	}
}

export default Home;