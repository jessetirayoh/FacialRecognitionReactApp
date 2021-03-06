import React from "react";
import Tilt from "react-tilt";
import eyemask from "./eyemask.png";
import "./Logo.css";

// Logo is by Freepik from flaticon.com
const Logo = () => {
	return (
		<div className="ma4 mt0 ">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 60, speed: 200 }} style={{ height: 150, width: 150 }}>
				<div className="Tilt-inner pa3">
					{" "}
					<img alt="logo" src={eyemask} />{" "}
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
