import React from "react";
import { Consumer } from "./Context";

const Consumer1 = () => {
	return (
		<div>
			<h1>Consumer1 :</h1>
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

export default Consumer1;
