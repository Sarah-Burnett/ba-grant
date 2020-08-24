import React, { useEffect } from "react";
import {
	sharepoint,
	sona,
	qualtrics,
	eprime,
	psychophys,
} from "../../utilities/homeLinks";
import Sharepoint from "../../images/sharepoint-logo.png";
import SONA from "../../images/sona-logo.PNG";
import Qualtrics from "../../images/qualtrics-logo.jpg";
import EPrime from "../../images/E-Prime2-logo.jpg";
import BIOPAC from "../../images/biopac-logo.png";
import styled from "styled-components";
import { Links } from "./HomeLinks";
import { darkBlue } from "../../styles/Styles";
import { useDispatch } from "react-redux";

const HomePage = styled.div`
	padding: 1vh 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
	grid-gap: 1rem;
	color: ${darkBlue};
	margin: 1rem;
	min-height: 79vh;
	height: auto;
`;

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "LOAD_PROGRESS" });
	}, [dispatch]);
	return (
		<HomePage>
			<Links name="Sharepoint" links={sharepoint} image={Sharepoint} />
			<Links name="SONA" links={sona} image={SONA} />
			<Links name="Qualtrics" links={qualtrics} image={Qualtrics} />
			<Links name="E-prime" links={eprime} image={EPrime} />
			<Links name="Psychophys" links={psychophys} image={BIOPAC} />
		</HomePage>
	);
};

export default Home;
