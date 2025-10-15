import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Maincard from "./Maincard";
import Card from "./Card";

//create your first component
const Home = () => {
	const saludos = [
		{ encabezado: "My dream guitar Gear!", texto: "On this website, you'll be able to explore and learn about some of the most iconic guitar gear ever made! From vintage amps and legendary pedals to modern tone-shaping innovations, each piece tells a story of sound and creativity. Dive in, get inspired, and discover what makes these classics so timeless!", boton: "Enjoy the ride!" }
	]
	const guitarras = [
		{ img: "https://media.guitarcenter.com/is/image/MMGS7/M11487000001000-00-600x600.jpg", encabezado: "Fender Stratocaster", texto: "Representing the pinnacle of innovation and craftsmanship, Fender American Ultra Luxe sets the benchmark for premium electric instruments.And with its 22 medium-jumbo frets, you'll have all the real estate you need to take your leads and melodies even further.", boton: "Get yours now!" },
		{ img: "https://media.guitarcenter.com/is/image/MMGS7/L54576000001000-00-600x600.jpg", encabezado: "Gibson Les Paul Standard '50s P-90 Electric Guitar Gold Top", texto: "The Gibson Les Paul Standard '50s P-90 solidbody electric guitar is a legend reborn. This iconic axe blends vintage-inspired looks with innovative, professional-level features, transporting players back to the golden age of rock and roll.", boton: "Get yours now!" },
		{ img: "https://media.guitarcenter.com/is/image/MMGS7/J00634000001000-00-600x600.jpg", encabezado: "Fender '68 Custom Deluxe Reverb 22W 1x12 Tube Guitar Combo Amp With Celestion G12V-70 Speaker Black", texto: "The Fender '68 Custom Deluxe Reverb 22W 1x12 Tube Guitar Combo Amp delivers everything guitarists love about late-'60s Fender amps and more. This handwired, all-tube amp reduces negative feedback for faster overdrive and increased sensitivity to touch.", boton: "Get yours now!" },
		{ img: "https://media.guitarcenter.com/is/image/MMGS7/L95976000001000-00-600x600.jpg", encabezado: "IK Multimedia TONEX Modeling Amp & Distortion Effects Pedal Black", texto: "The IK Multimedia TONEX pedal is almost like having a professional staging company at your feet that can deliver any dream rig you can imagine. Save up to 150 presets, organized within 50 banks of three preset slots each, giving you endless tones from a single portable rig.", boton: "Get yours now!" }
	]
	return (
		<>
			<Navbar />
			<Maincard saludos={saludos} />
			<div className="row d-flex justify-content-evenly">
				{guitarras.map((item, index) =>
					<Card key={index} img={item.img} encabezado={item.encabezado} texto={item.texto} boton={item.boton} />
				)}
			</div>


		</>

	);

};

export default Home;	