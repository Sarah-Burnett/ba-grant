import React from "react";
import styled from "styled-components";
import { lightBlue, desktop } from "../../styles/variables";
import { A } from "../../styles/components";
import FooterLinks from "./FooterLinks";


const FooterBar = styled.div`
	background: rgba(0, 0, 0, 0.9);
	min-height: 10vh;
	color: ${lightBlue};
	padding: 2vh 2vw;
	text-align: center;
	line-height: 250%;
	font-size: 16px;
	li {
		list-style: none;
	}
	div {
		padding: 0 2vw;
		a {
			color: inherit;
		}
		p {
			display: none;
		}
	}
	h2,
	h4 {
		margin-bottom: 1vh;
	}
	@media (min-width: ${desktop}) {
		display: grid;
		grid-template-columns: 40% repeat(3, 1fr);
		line-height: inherit;
		text-align: left;
		div p {
			display: block;
		}
	}
`;

const Footer = () => {
	const keys = Object.keys(footerLinks);
	return (
		<FooterBar>
			<div>
				<h2>BA Regulatory Focus and Rumination</h2>
				<p>
					Built by
					<A href="mailto:sarahkvburnett@btinternet.com"> Sarah Burnett</A>
				</p>
			</div>
			{keys.map((heading) => {
				return (
					<ul key={heading}>
						<h4>{heading}</h4>
						<FooterLinks links={footerLinks[heading]} />
					</ul>
				);
			})}
		</FooterBar>
	);
};

export default Footer;
