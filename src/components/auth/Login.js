import React, { useState } from "react";
import styled from "styled-components";
import {
	darkBlue,
	darkGrey,
	lightGrey,
	white,
	accent,
	Button,
	tablet,
} from "../../styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExclamationCircle as Warning,
	faEye as Eye,
	faEyeSlash as EyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { password } from "../../utilities/password";

const LoginPage = styled.div`
	padding: 1vh 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	color: ${darkBlue};
	min-height: 70vh;
	form {
		width: 100vw;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 1fr auto auto 0.5fr 1fr;
		align-items: center;
		justify-content: center;
		position: relative;
		@media (min-width: ${tablet}) {
			height: auto;
			width: auto;
			min-height: 60vh;
			min-width: 60vw;
			border: 1px solid ${darkGrey};
			background: ${white};
		}
	}
	input,
	label,
	p {
		margin: 2vh 0;
		color: inherit;
		font-size: inherit;
		font-style: inherit;
	}
	.password {
		border: 1px solid ${lightGrey};
		background: ${white};
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr auto;
		align-items: center;
		justify-content: center;
		padding: 1vh 1vw;
		input {
			outline: none;
			border: none;
		}
		&:focus,
		&:hover {
			border-color: ${darkGrey};
		}
		.passIcon {
			color: ${lightGrey};
			cursor: pointer;
		}
	}
	input[type="submit"] {
		padding: 1vh 1vw;
		background: ${darkBlue};
		color: ${white};
		border: 1px solid ${darkGrey};
		cursor: pointer;
		&:hover {
			background: 0.7;
			color: ${accent};
		}
	}
	h1 {
		text-align: center;
		margin: 2vh 0;
	}
	.error {
		color: red;
	}
`;

const Login = ({ setIsAuth }) => {
	const [loginInput, setLoginInput] = useState("");
	const [loginError, setLoginError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const loginChange = (event) => {
		setLoginError(false);
		setLoginInput(event.target.value);
	};
	const auth = () => {
		setIsAuth(true);
		sessionStorage.setItem("baAuth", "true");
	};
	const loginSubmit = (event) => {
		event.preventDefault();
		loginInput === password ? auth() : setLoginError(true);
	};
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};
	const passIcon = () => (showPassword ? EyeSlash : Eye);
	return (
		<LoginPage>
			<form onSubmit={loginSubmit}>
				<h1>Login</h1>
				<label htmlFor="login">Please enter the password</label>
				<div className="password">
					{!showPassword && (
						<input type="password" value={loginInput} onChange={loginChange} />
					)}
					{showPassword && <input value={loginInput} onChange={loginChange} />}
					<FontAwesomeIcon
						className="passIcon"
						icon={passIcon()}
						onClick={togglePassword}
						fixedWidth
					/>
				</div>
				<p className="error">
					{loginError && (
						<span>
							<FontAwesomeIcon icon={Warning} /> Password incorrect
						</span>
					)}
				</p>
				<Button>Login</Button>
			</form>
		</LoginPage>
	);
};

export default Login;
