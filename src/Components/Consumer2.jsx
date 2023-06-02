import React from "react";
import { Consumer } from "./Context";

const Consumer2 = () => {
	return (
		<div>
			<h1>Consumer2 :</h1>
			<Consumer>
				{(value) => (
					<h2>
						Name: {value.name} id :{value.id}{" "}
					</h2>
				)}
			</Consumer>
		</div>
	);
};

export default Consumer2;
