import React from "react";

export function NavBar() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="d-flex bd-highlight mb-1">
				<div className="me-auto p-2 bd-highlight text-light">
					Start Bootstrap
				</div>
				<div className="p-2 bd-highlight text-light">Home</div>
				<div className="p-2 bd-highlight text-muted">About</div>
				<div className="p-2 bd-highlight text-muted">Services</div>
				<div className="p-2 bd-highlight text-muted">Contact</div>
			</div>
		</nav>
	);
}
