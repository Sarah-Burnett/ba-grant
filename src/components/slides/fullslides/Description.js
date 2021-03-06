import React from "react";

const Description = ({ desc }) => (
	<ul>
		{desc.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
);

export default Description;
