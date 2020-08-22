import React from "react";
import FooterLink from "./FooterLink";

const FooterLinks = ({ links }) => {
	console.log(links);
	const keys = Object.keys(links);
	return (
		<>
			{keys.map((link) => {
				return (
					<li key={link}>
						<FooterLink text={link} url={links[link]} />
					</li>
				)
			})}
		</>
	);
};

export default FooterLinks;
