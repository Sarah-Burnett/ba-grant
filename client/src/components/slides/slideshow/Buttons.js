import React from "react";
import styled from "styled-components";
import { Button, PrimaryButton } from "../../../styles/components";
import { RedirectButton } from "../RedirectButton";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, prevSlide } from "../../../redux/actions/slidesActions";

const Container = styled.div`
	padding: 2vh 1vw;
	width: 100%;
`;

const Buttons = () => {
	const { end, start, json, currentIndex } = useSelector(
		(state) => state.slides
	);
	const dispatch = useDispatch();
	return (
		<Container>
			{end && <RedirectButton />}
			{!end && (
				<PrimaryButton
					className="next"
					type="button"
					onClick={() => dispatch(nextSlide(json, currentIndex))}
				>
					Next
				</PrimaryButton>
			)}
			{!start && (
				<Button
					className="previous"
					type="button"
					onClick={() => dispatch(prevSlide(json, currentIndex))}
				>
					Previous
				</Button>
			)}
		</Container>
	);
};

export default Buttons;
