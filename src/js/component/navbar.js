import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" href="#" />
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/1200px-Star_wars_1977_us.svg.png"
					width="50"
					height="30"
					alt=""
				/>
			</Link>
			<div className="ml-auto dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
					<div className="dropdown-divider" />
					<a className="dropdown-item" href="#">
						Separated link
					</a>
				</div>
			</div>
		</nav>
	);
};
