import styled from "styled-components";
import * as s from "./variables";

export const A = styled.a`
	color: ${(props) => (props.darker ? `${s.darkBlue}` : `${s.lightBlue}`)};
	cursor: pointer;
	text-decoration: none;
	&:hover {
		color: ${s.accent};
	}
`;

export const Button = styled.button`
	padding: 2vh 2vw;
	margin: 1vh 0;
	width: 100%;
	border: none;
	border-radius: 1px;
	color: ${s.darkBlue};
	cursor: pointer;
	background: ${s.lightGrey};
	&:hover {
		background: ${s.darkBlue};
		color: ${s.white};
	}
	line-height: 150%;
	font-size: inherit;
	@media (min-width: ${s.tablet}) {
		line-height: inherit;
		font-size: 90%;
	}
`;
export const PrimaryButton = styled(Button)`
	background: ${s.accent};
`;