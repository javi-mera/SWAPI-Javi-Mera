import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
//navbar fixed-top navbar-dark bg-secondary mb-3
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav>
			<li>
				<Link to="/">
					<span className="navbar-brand mb-0 h1" href="#" />
					<img
						src="https://www.glorifyapp.com/wp-content/uploads/2020/10/Star-Wars-Logos.jpg"
						width="70"
						height="50"
						alt=""
					/>
				</Link>
			</li>
			<li className="favoritos" style={{ float: "right" }}>
				<Dropdown>
					<Dropdown.Toggle variant="warning" id="dropdown-basic">
						Favorites
					</Dropdown.Toggle>

					<Dropdown.Menu className="dropdown-box">
						<div>
							{store.favorites
								? store.favorites.map((name, index) => {
										return (
											<div key={index} className="row">
												<Dropdown.Item>{name}</Dropdown.Item>
												<Button
													type="button"
													className="btn btn-danger btn-sm"
													onClick={() => {
														actions.removeFav(name);
													}}>
													X
												</Button>
											</div>
										);
								  })
								: ""}
						</div>
						<Dropdown.Item>{store.favorites.length}</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</li>
		</nav>
	);
};
