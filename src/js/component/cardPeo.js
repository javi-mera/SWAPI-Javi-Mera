import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Cardpeo = valores => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-sm-3 m-2">
			<div className="card">
				<img
					className="card-img-top"
					src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{valores.element.name}</h5>
					<p className="card-text">Gender: {valores.element.gender}</p>
					<p className="card-text">Hair color: {valores.element.hair_color}</p>
					<p className="card-text">Eye color: {valores.element.eye_color}</p>
					<Link to="/content">
						<span
							onClick={() => {
								actions.details(valores.element);
								console.log(valores);
							}}
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							More details!
						</span>
					</Link>

					<span
						onClick={() => {
							actions.addFavorites(valores.element.name);
							console.log(valores);
						}}
						type="button"
						className="btn btn-outline-warning fab fa-gratipay"
					/>
				</div>
			</div>
		</div>
	);
};
