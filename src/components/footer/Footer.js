import React, { Component } from 'react';

import LogoFooter from '../../assets/footer_logo.svg';
import Oxxo from '../../assets/oxxo.png';


import './Footer.scss';

class Footer extends Component {
	render() {
		return(
			<footer className="footer">
				<div className="footer-containers">
					<img className="logo-footer" src={LogoFooter} alt="logo-footer"/>
				</div>
				<div className="footer-containers questions-container">
					<p className="title-footer">CANASTA ROSA</p>
					<ul className="questions">
						<li>Sobre canasta rosa</li>
						<li>¿Cómo vender en canasta rosa?</li>
						<li>¿Quiénes somos?</li>
						<li>Preguntas frecuentes</li>
						<li>Bolsa de trabajo</li>
						<li>Crea una cuenta</li>
						<li>Canasta Rosa Pro</li>
						<li>Blog</li>
						<li>Encuéntralo</li>
					</ul>
				</div>
				<div className="footer-containers">
					<p className="transfer">
						<img className="oxxo-image" src={Oxxo} alt="oxxo"/>
						<span>Transferencia bancaria</span>
					</p>
				</div>
			</footer>
		)
	}
}

export default Footer;