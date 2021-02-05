import "../../styles/home.scss";
import { Cardpla } from "../component/cardPla";
//import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";

import React, { useState, useContext } from "react";

export const Planets = () => {
	const { store } = useContext(Context);

	return (
		<div className="row  gridAllCards">
			{store.planets.map((element, i) => {
				return <Cardpla key={i} element={element} />;
			})}
		</div>
	);
};
