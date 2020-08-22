import React, { useContext } from "react";
import { ListIcon, HomeIcon, UserIcon } from "../Icons";
import styled from "styled-components";
import { tablet, accent, A } from "../../styles/Styles";
import SlidesContext from "../../context/slides/slidesContext";

const Buttons = styled.div`
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 12vw;
	abbr {
		margin: 1vw;
		font-size: 22px;
		min-width: 31%;
		&:hover {
			color: ${accent};
		}
		cursor: pointer;
	}
	a {
		font-size: inherit;
		color: inherit;
	}
	@media (min-width: ${tablet}) {
		min-width: auto;
		padding-right: 3vw;
	}
`;

const NavBtns = ({ showMenu, setShowMenu }) => {
	const { viewAsSlideshow, viewFullSlides, viewSlideshow } = useContext(
		SlidesContext
	);
	return (
		<Buttons>
			<abbr><a href="/" title="Home Page">
				<HomeIcon />
				</a>
			</abbr>
			<abbr
				onClick={() => (viewAsSlideshow ? viewFullSlides() : viewSlideshow())}
				title="Change view"
			>
				<ListIcon />
			</abbr>
			<abbr onClick={() => setShowMenu((prev) => !prev)} title="User menu">
				<UserIcon />
			</abbr>
		</Buttons>
	);
};

export default NavBtns;
