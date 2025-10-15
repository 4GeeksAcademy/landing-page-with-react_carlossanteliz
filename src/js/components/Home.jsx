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
		{ img: "https://www.fender.com/cdn-cgi/image/format=auto,resize=height=auto,width=1500/https://www.fmicassets.com/Damroot/eCommPNG/10103/0118212800_fen_ins_frt_1_rr.png", encabezado: "Fender Stratocaster", texto: "Representing the pinnacle of innovation and craftsmanship, Fender American Ultra Luxe sets the benchmark for premium electric instruments.", boton: "Get yours now!" },
		{img:"https://media.guitarcenter.com/is/image/MMGS7/L54576000001000-00-600x600.jpg", encabezado:"Gibson Les Paul Standard '50s P-90 Electric Guitar Gold Top", texto:"The Gibson Les Paul Standard '50s P-90 solidbody electric guitar is a legend reborn. This iconic axe blends vintage-inspired looks with innovative, professional-level features, transporting players back to the golden age of rock and roll.", boton:"Get yours now!"},
		{img:"https://media.guitarcenter.com/is/image/MMGS7/J00634000001000-00-600x600.jpg", encabezado:"Fender '68 Custom Deluxe Reverb 22W 1x12 Tube Guitar Combo Amp With Celestion G12V-70 Speaker Black", texto:"The Fender '68 Custom Deluxe Reverb 22W 1x12 Tube Guitar Combo Amp delivers everything guitarists love about late-'60s Fender amps and more. This handwired, all-tube amp reduces negative feedback for faster overdrive and increased sensitivity to touch.", boton:"Get yours now!"},
		{img:"https://media.guitarcenter.com/is/image/MMGS7/L95976000001000-00-600x600.jpg", encabezado:"IK Multimedia TONEX Modeling Amp & Distortion Effects Pedal Black", texto:"The IK Multimedia TONEX pedal is almost like having a professional staging company at your feet that can deliver any dream rig you can imagine. Save up to 150 presets, organized within 50 banks of three preset slots each, giving you endless tones from a single portable rig.", boton:"Get yours now!"}
	]
	return (
		<>
			<Navbar />
			<Maincard saludos={saludos} />
			<div>
				{guitarras.map((item, index) =>
					<Card key={index} img={item.img} encabezado={item.encabezado} texto={item.texto} boton={item.boton} />
				)}
			</div>

		</>

	);

};

export default Home;	