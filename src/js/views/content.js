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
			<div className="row border border-secondary rounded">
				<div className="col-sm-9">
					<img
						className="col-8 col-sm-6 foto"
						src="https://fotos01.diariodeibiza.es/2015/02/07/318x200/astronomia01.jpg"
						alt="Card image cap"
					/>
					<div className="col-4 col-sm-6">
						<h2>{store.details.name}</h2>
						<p>
							jkldjf;lkjedfj;laskjd jkjldfliejjldfliejlsj ;lkasjdjldfliejlsj ;lkasjdjldfliejlsj
							;lkasjdjldfliejlsj ;lkasjdjldfliejlsj ;lkasjdlsj ;lkasjdi
						</p>
					</div>
					<Link to="/">
						<span className="col-8 col-sm-6 btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
