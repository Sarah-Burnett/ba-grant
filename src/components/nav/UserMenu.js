import React from "react";
import styled from "styled-components";
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
		width: inherit;
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
		width: 12vw;
		font-size: smaller;
		padding-right: 3vw;
	}
`;

const UserMenu = ({ setIsAuth }) => (
	<Menu>
		<button onClick={setIsAuth(false)}>Logout</button>
	</Menu>
);

export default UserMenu;
