import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../styles/components";
import { useSelector, useDispatch } from "react-redux";
import { updateProgress } from "../../redux/actions/progressActions";

export const RedirectButton = () => {
	const { redirectMsg, redirectUrl, progress } = useSelector(
		(state) => state.slides
	);
	const prevProgress = useSelector((state) => state.progress);
	const dispatch = useDispatch();
	const updateSlidesProgress = () => {
		const newProgress = { ...prevProgress, [progress]: true };
		localStorage.setItem("progress", JSON.stringify(newProgress));
		dispatch(updateProgress(progress));
	};
	return (
		<Link to={redirectUrl} onClick={updateSlidesProgress}>
			<PrimaryButton className="redirect" type="button">
				{redirectMsg}
			</PrimaryButton>
		</Link>
	);
};
