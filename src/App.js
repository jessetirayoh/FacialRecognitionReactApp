import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

// Initialize api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
	apiKey: "ca45c5b3c01a4806a2ccb7de840adf33"
});

const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800
			}
		},
		size: {
			value: 4,
			random: true
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "repulse"
			},
			onclick: {
				enable: true,
				mode: "push"
			}
		}
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			imageUrl: ""
		};
	}

	onInputChange = event => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
			function(response) {
				console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
			},
			function(err) {
				// there was an error
			}
		);
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
