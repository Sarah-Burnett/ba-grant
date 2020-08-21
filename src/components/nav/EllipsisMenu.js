import React, { useContext } from "react";
import styled from "styled-components";
import SlidesContext from "../../context/slides/slidesContext";
import {
	darkBlue,
	darkGrey,
	lightBlue,
	accent,
	tablet,
} from "../../styles/Styles";

const Menu = styled.div`
	background: ${darkBlue};
	width: 100vw;
	transition: opacity 1s ease-in;
	border: 1px solid ${darkGrey};
	hr {
		border: 1px solid ${darkGrey};
	}
	button {
		display: block;
		padding: 1vh 1vw;
		margin: 2vh 2vw;
		font-size: inherit;
		line-height: inherit;
		width: 96vw;
		color: ${lightBlue};
		&:hover,
		&:focus {
			color: ${accent};
		}
		background: none;
		border: none;
		outline: none;
	}
	@media (min-width: ${tablet}) {
		position: absolute;
		z-index: 99;
		top: 10vh;
		right: 0;
		height: auto;
		width: 40vw;
		font-size: smaller;
		button {
			width: 36vw;
		}
	}
`;

export const EllipsisMenu = ({ showMenu }) => {
	const slidesContext = useContext(SlidesContext);
	const { viewSlideshow, viewFullSlides } = slidesContext;
	return (
		<Menu>
			<button onClick={viewSlideshow}>View Slideshow</button>
			<button onClick={viewFullSlides}>View Full Slides</button>
			<hr />
			<button>Logout</button>
		</Menu>
	);
};
