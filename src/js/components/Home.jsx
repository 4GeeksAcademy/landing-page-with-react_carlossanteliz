import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Maincard from "./Maincard";

//create your first component
const Home = () => {
	const saludos = [
		{ encabezado: "A Warm Welcome!", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }
	]

	return (
		<>
			<Navbar />
			<Maincard saludos={saludos} />
		</>

	);

};

export default Home;	