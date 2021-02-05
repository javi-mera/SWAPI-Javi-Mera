import "../../styles/home.scss";
//import { Cardpla } from "../component/cardPla";
import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";

import React, { useState, useContext } from "react";

export const People = () => {
	const { store } = useContext(Context);

	return (
		<div className="row  gridAllCards">
			{store.people.map((element, i) => {
				return <Cardpeo key={i} element={element} />;
			})}
		</div>
	);
};
