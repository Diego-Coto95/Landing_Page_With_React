import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card-deck mt-4">
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in
						to additional content.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imageUrl: PropTypes.string
};
