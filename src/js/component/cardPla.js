import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Cardpla = valores => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-sm-3 m-2">
			<div className="card">
				<img
					className="card-img-top"
					src="https://phantom-elmundo.unidadeditorial.es/df93f8e8824414f3eb155aa5f167fdd8/crop/18x29/690x375/resize/746/f/jpg/assets/multimedia/imagenes/2020/07/17/15949955446655.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{valores.element.name}</h5>
					<p className="card-text">Population: {valores.element.gravity}</p>
					<p className="card-text">Terrain: {valores.element.terrain}</p>
					<div className="d-flex justify-content-between ">
						<Link to="/content">
							<span
								onClick={() => {
									actions.details(valores.element);
									console.log(valores);
								}}
								className="btn btn-primary btn-lg mt-auto"
								href="#"
								role="button">
								More details!
							</span>
						</Link>
						<span
							onClick={() => {
								actions.addFavorites(valores.element.name);
								console.log(valores.element.name);
							}}
							type="button"
							className="btn btn-outline-warning fab fa-gratipay mt-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
