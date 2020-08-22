import React from "react";
import { A } from '../../styles/Styles';

const FooterLink = ({ text, url }) => {
	console.log(text, url);
	return (
		<A href={url} target="_blank" rel="noopener noreferrer">
			{text} 
		</A>
	);
};

export default FooterLink;
