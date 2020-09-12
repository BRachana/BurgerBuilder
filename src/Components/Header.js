import React from 'react';

const header = (props) => {
	return(
		<nav className="nav-bar">
			<div className="green bold">
				<span>
					<a> THE PLANT WAREHOUSE </a>
				</span>
				<span className="menu">
					<a className="menu-items"> Our Range </a>
					<a className="menu-items">	Locations </a>
					<a className="menu-items"> Workshops </a>
					<a className="menu-items"> Plant Care </a>
					<a className="menu-items"> Blog </a>
				</span>
			</div>
		</nav>
	)
};

export default header;
