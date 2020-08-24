import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { lightBlue, darkBlue, tablet } from "../../styles/variables";
import UserMenu from "./UserMenu";
import NavBtns from "./NavBtns";
import Logo from "../../images/BrainHeartRate.jpg";

const NavBar = styled.nav`
	@media (max-width: ${tablet}) {
		text-align: center;
		padding-bottom: 1vh;
	}
	@media (min-width: ${tablet}) {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 10vh;
	}
	min-height: 10vh;
	background: ${darkBlue};
	color: ${lightBlue};
`;
const Img = styled.div`
	height: 10vh;
	img {
		height: 10vh;
		width: auto;
	}
`;

const Title = styled.h1`
	margin: auto;
	padding: 1vh 0;
`;

const Nav = ({ isAuth, setIsAuth }) => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<Fragment>
			<NavBar>
				<Img>
					<img src={Logo} alt="BA Grant" />
				</Img>
				<Title>BA Regulatory Focus and Rumination</Title>
				{isAuth && <NavBtns setShowMenu={setShowMenu} />}
			</NavBar>
			{showMenu && isAuth && <UserMenu setIsAuth={setIsAuth} />}
		</Fragment>
	);
};

export default Nav;
