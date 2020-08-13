import "../../styles/content.scss";
import PropTypes from "prop-types";
import { Cardpla } from "../component/cardPla";
import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Content = () => {
	const { store, actions } = useContext(Context);
	//const { theid } = useParams();
	//const chId = theid - 1;
	//console.log(theid);
	console.log(store.details.name);
	return (
		<div className="container">
			<div className="row  justify-content-md-center">
				<div className="col-sm-9 border border-secondary rounded caja">
					<div className="row">
						<img
							className="col-5 col-sm-5 foto"
							src="https://fotos01.diariodeibiza.es/2015/02/07/318x200/astronomia01.jpg"
							alt="Card image cap"
						/>
						<div className="col-7 col-sm-7">
							<h2 className="text-center">{store.details.name}</h2>
							<br />
							<p className="text-center">
								jkldjf;lkjedfj;laskjd jkjldfliejjldfliejlsj ;lkasjdjldfliejlsj ;lkasjdjldfliejlsj
								;lkasjdjldfliejlsj ;lkasjdjldfliejlsj ;lkasjdlsj ;lkasjdi
							</p>
						</div>
					</div>
					<hr />

					<br />
					<div className="row">
						<div className="d-flex flex-row justify-content-center">
							<div className="p-4">
								{Object.keys(store.details).map((key, index) => {
									if (key == "name" || key == "mass" || key == "eye_color" || key == "diameter") {
										return (
											<p key={index}>
												{key}: {store.details[key]}
											</p>
										);
									}
								})}
							</div>
						</div>
					</div>
					<Link to="/" className="ml-auto">
						<button className="btn btn-secondary ml-auto">Back home</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
