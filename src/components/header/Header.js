import React, { Component } from 'react';

import LogoDesktop from '../../assets/logo_desktop.svg';
import LogoMobile from '../../assets/logo_mobile.svg';
import HamburgerMenu from '../../assets/hamburguer-menu.svg';

import './Header.scss';

class Header extends Component {
	render() {
		const { handleClick } = this.props;
		return(
			<div className="header-container">
				<nav className="header">
					<div className="logo-container">
						<img className="logo-desktop" src={LogoDesktop} alt="logo-desktop" />
						<img className="logo-mobile" src={LogoMobile} alt="logo-mobile" />
						<button onClick={handleClick} className="menu">
							CATEGORÍAS <span className="chevron bottom" />
						</button>
						<button onClick={handleClick} className="hamburger-menu">
							<img className="image-burger" src={HamburgerMenu} alt="hamburger-menu"/>
						</button>
					</div>
					<ul className="menu-items">
						<li className="menu-item">MARKET</li>
						<li className="menu-item">INSPIRE</li>
						<li className="menu-item">PROP</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Header;

