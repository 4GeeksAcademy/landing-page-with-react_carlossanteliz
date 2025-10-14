import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Maincard from "./Maincard";
import Card from "./Card";

//create your first component
const Home = () => {
	const saludos = [
		{ encabezado: "A Warm Welcome!", texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", boton: "Call to action!" }
	]
	const guitarras = [
		{ img: "https://www.fender.com/cdn-cgi/image/format=auto,resize=height=auto,width=1500/https://www.fmicassets.com/Damroot/eCommPNG/10103/0118212800_fen_ins_frt_1_rr.png", encabezado: "Fender Stratocaster", texto: "Representing the pinnacle of innovation and craftsmanship, Fender American Ultra Luxe sets the benchmark for premium electric instruments.", boton: "Get yours now!" }
	]
	return (
		<>
			<Navbar />
			<Maincard saludos={saludos} />
			<div>
				<Card guitarras={guitarras} />
			</div>
		</>

	);

};

export default Home;	