import React from "react";
import { ListIcon, HomeIcon, UserIcon } from "../Icons";
import styled from "styled-components";
import { tablet, accent } from "../../styles/variables";
import { useSelector, useDispatch } from "react-redux";
import {
	viewFullSlides,
	viewSlideshow,
} from "../../redux/actions/slidesActions";
import { A } from "../../styles/components";

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
	}
	@media (min-width: ${tablet}) {
		min-width: auto;
		padding-right: 3vw;
	}
`;

const NavBtns = ({ setShowMenu }) => {
	const { viewAsSlideshow } = useSelector((state) => state.slides);
	const dispatch = useDispatch();
	return (
		<Buttons>
			<abbr>
				<A href="/" title="Home Page">
					<HomeIcon />
				</A>
			</abbr>
			<abbr
				onClick={() =>
					viewAsSlideshow
						? dispatch(viewFullSlides())
						: dispatch(viewSlideshow())
				}
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
