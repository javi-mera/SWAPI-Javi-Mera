import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar fixed-top navbar-dark bg-secondary mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" href="#" />
				<img
					src="https://i0.wp.com/bosswaytools.co.za/wp-content/uploads/StarWars-Logo-bk_front.png?fit=1000%2C1000&ssl=1"
					width="70"
					height="50"
					alt=""
				/>
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu className="dropdown-box">
					<div>
						{store.favorites.map((element, index) => {
							return (
								<div key={index} className="row">
									<Dropdown.Item>{element.name}</Dropdown.Item>
									<Button
										type="button"
										className="btn btn-danger btn-sm ml-auto mr-4"
										onClick={() => {
											actions.removeFav(element);
										}}>
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
