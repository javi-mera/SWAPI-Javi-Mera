import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cardpla } from "../component/cardPla";
import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";

import React, { useState, useEffect, useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container fondo">
			<h2 className="row justify-content-md-center">Planets</h2>
			<div className="list-group list-group-horizontal">
				{store.planets.map((element, i) => {
					return <Cardpla key={i} element={element} />;
				})}
			</div>
			<h2 className="row justify-content-md-center">People</h2>
			<div className="list-group list-group-horizontal ">
				{store.people.map((element, i) => {
					return <Cardpeo key={i} element={element} />;
				})}
			</div>
		</div>
	);
};
