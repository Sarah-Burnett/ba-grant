import React, { useContext } from "react";
import {
	darkGrey,
	tablet,
} from "../../../styles/Styles";
import styled from "styled-components";
import SlidesContext from "../../../context/slides/slidesContext";
import Slide from "./Slide";
import { RedirectButton } from "../RedirectButton";

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
	const slidesContext = useContext(SlidesContext);
	const {
		json,
		title,
	} = slidesContext;
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
