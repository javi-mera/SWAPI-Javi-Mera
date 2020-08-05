import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<div>
						{store.favorites.map((element, index) => {
							return (
								<div key={index} className="row">
									<Dropdown.Item>
										{element.name}
										{index}
									</Dropdown.Item>
									<Button
										type="button"
										variant="outline-dark"
										size="sm"
										onClick={() => actions.removeFav({ index })}>
										X
									</Button>
								</div>
							);
						})}
					</div>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
