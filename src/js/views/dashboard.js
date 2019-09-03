import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Modaldashboard } from "../dashboardComponent/modaldashboard";
import { Carddashboard } from "../dashboardComponent/cardDashboard";

export class Dashboard extends React.Component {
	render() {
		let flexx = { display: "flex" };
		return (
			<Fragment>
				<div style={flexx}>
					<Carddashboard />
				</div>
				<Modaldashboard />
			</Fragment>
		);
	}
}
