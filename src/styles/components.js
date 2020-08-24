import styled from "styled-components";
import {
	lightBlue,
	accent,
	darkBlue,
	lightGrey,
	white,
	tablet,
} from "./variables";

export const A = styled.a`
	color: ${(props) => (props.darker ? `${darkBlue}` : `${lightBlue}`)};
	cursor: pointer;
	text-decoration: none;
	&:hover {
		color: ${accent};
	}
`;

export const Button = styled.button`
	padding: 2vh 2vw;
	margin: 1vh 0;
	width: 100%;
	border: none;
	border-radius: 1px;
	color: ${darkBlue};
	cursor: pointer;
	background: ${lightGrey};
	&:hover {
		background: ${darkBlue};
		color: ${white};
	}
	line-height: 150%;
	font-size: inherit;
	@media (min-width: ${tablet}) {
		line-height: inherit;
		font-size: 90%;
	}
`;
export const PrimaryButton = styled(Button)`
	background: ${accent};
`;