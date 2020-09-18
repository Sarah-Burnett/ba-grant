import React from "react";
import { A } from "../../styles/components";

const FooterLink = ({ text, url }) => (
	<A href={url} target="_blank" rel="noopener noreferrer">
		{text}
	</A>
);

export default FooterLink;
