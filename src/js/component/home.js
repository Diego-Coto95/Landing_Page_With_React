import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//include images into your bundle
import { NavBar } from "./navbar.js";
import { Footer } from "./footer.js";
import { Card } from "./card.js";
import { Jumbotton } from "./jumbotron.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<NavBar />
			<Jumbotton />
			<Card imageUrl="https://picsum.photos/200/300" />
			<Footer />
		</div>
	);
}
