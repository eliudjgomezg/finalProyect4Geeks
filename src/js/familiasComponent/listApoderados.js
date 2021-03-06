import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListApoderados extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="card card-body">
					<p>Apoderados agregados:</p>
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.familia.apoderados.length > 0) {
									return store.familia.apoderados.map((item, i) => {
										return (
											<div key={i}>
												<div className="row">
													<div className="col-8">
														<li className="list-group-item">
															{item.nombre + " " + item.apellido}
														</li>
													</div>
													<div className="col-2">
														<button
															type="button"
															className="btn btn-primary"
															onClick={() => actions.editApoderado(item, i)}
															data-toggle="collapse"
															data-target="#collapseExample"
															aria-expanded="false"
															aria-controls="collapseExample">
															Editar
														</button>
													</div>
													<div className="col-2">
														<button
															type="button"
															className="btn btn-primarybtn btn-primary"
															onClick={e => actions.deleteApoderado(i)}>
															Eliminar
														</button>
													</div>
												</div>
											</div>
										);
									});
								}
							}}
						</Context.Consumer>
					</ul>
				</div>
			</Fragment>
		);
	}
}
