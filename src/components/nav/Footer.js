import React from "react";
import styled from "styled-components";
import { lightBlue, tablet, darkBlue } from "../../styles/Styles";
import FooterLinks from "./FooterLinks";
import { footerLinks } from "../../utilities/footerLinks";

const FooterBar = styled.div`
	background: rgba(0, 0, 0, 0.9);
	min-height: 10vh;
	color: ${lightBlue};
	padding: 1vh 1vw;
	@media (min-width: ${tablet}) {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
	line-height: 250%;
	@media (min-width: ${tablet}) {
		line-height: inherit;
	}
	li {
		list-style: none;
	}
	font-size: 16px;
`;

const Footer = () => {
	const keys = Object.keys(footerLinks);
	return (
		<FooterBar>
			<div />
			<div/>
			{keys.map((heading) => {
				return (
					<ul key={heading}>
						<h4>{heading}</h4>
						<FooterLinks links={footerLinks[heading]} />
					</ul>
				)
			})}
		</FooterBar>
	);
};

export default Footer;
