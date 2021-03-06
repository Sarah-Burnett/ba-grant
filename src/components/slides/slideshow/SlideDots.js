import React from "react";
import styled from "styled-components";
import { darkGrey, darkBlue } from "../../../styles/variables";
import { useSelector } from "react-redux";

const Dots = styled.div`
	display: flex;
	justify-content: center;
	margin: 1vh 0 3vh;
`;
const Dot = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background: ${darkGrey};
	margin: 0 1vw;
`;

const ActiveDot = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background: ${darkBlue};
	margin: 0 1vw;
`;

const SlideDots = () => {
	const { json, currentIndex } = useSelector((state) => state.slides);
	return (
		<Dots className="dots">
			{json.map((item, index) =>
				index === currentIndex ? <ActiveDot key={index} /> : <Dot key={index} />
			)}
		</Dots>
	);
};

export default SlideDots;
