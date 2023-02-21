import React from "react";
import Jumbotron from "./Jumbotron.js";
import Navbar from "./Navbar.js";
import Card from "./Card.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Home;
