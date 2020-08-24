import React from "react";
import styled from "styled-components";
import {
	lightGrey,
	white,
	tablet,
} from "../../styles/variables";
import { A } from "../../styles/components";
import { Checkbox } from "./Checkbox";

const H2 = styled.h2`
	height: 10vh;
	line-height: 10vh;
	margin-bottom: 1vh;
`;

const Img = styled.img`
	height: 100%;
	max-width: 100%;
	margin: auto;
	padding-bottom: 1vh;
	transition: opacity 1s;
`;

const HomeLinks = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto 20vh 1fr;
	text-align: center;
	background: ${white};
	li {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 2vh 4vw;
		@media (min-width: ${tablet}) {
			margin: 2vh 1vw;
		}
	}
	a {
		font-size: inherit;
		line-height: inherit;
		text-decoration: none;
		line-height: 250%;
		@media (min-width: ${tablet}) {
			line-height: auto;
		}
	}
	ul {
		margin-bottom: 1vh;
		text-align: left;
	}
	border: 0.5px solid ${lightGrey};
	border-radius: 1px;
`;

export const Links = ({ name, links, image }) => {
	return (
		<HomeLinks>
			<H2>{name}</H2>
			<Img src={image} alt={image} />
			<ul>
				{links.map(({ name, url, state, Component }) => (
					<li key={name}>
						<A darker href={url}>{name}</A>
						<Checkbox state={state} />
					</li>
				))}
			</ul>
		</HomeLinks>
	);
};
