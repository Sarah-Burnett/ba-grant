import React from "react";
import { darkGrey, tablet } from "../../../styles/Styles";
import styled from "styled-components";
import Slide from "./Slide";
import { RedirectButton } from "../RedirectButton";
import { useSelector } from "react-redux";

const Container = styled.div`
	width: 100vw;
	margin: auto;
	@media (min-width: ${tablet}) {
		width: 75vw;
	}
`;

const H1 = styled.h1`
	text-align: center;
	border-bottom: 1px solid ${darkGrey};
	margin-bottom: 2vh;
	padding: 2vh 0;
`;

const FullSlides = () => {
	const { json, title } = useSelector((state) => state.slides);
	return (
		<Container>
			<H1>{title}</H1>
			{json.map((slide) => (
				<Slide key={slide.name} slide={slide} title={title} />
			))}
			<RedirectButton />
		</Container>
	);
};

export default FullSlides;
