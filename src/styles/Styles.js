import styled from "styled-components";

export const darkBlue = "#011934";
export const lightBlue = "#e5f1f8";
export const darkGrey = "rgba(0, 0, 0, 0.3)";
export const lightGrey = "rgba(0, 0, 0, 0.2)";
export const accent = "#198dff";
export const white = "#FFF";

export const tablet = "600px";

export const A = styled.a`
	color: ${lightBlue};
	cursor: pointer;
	text-decoration: none; 
	&:hover {
		color: ${accent};
	}
`

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
