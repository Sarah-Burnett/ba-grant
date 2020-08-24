import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../styles/components";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_PROGRESS } from "../../redux/types";

export const RedirectButton = () => {
	const { redirectMsg, redirectUrl, progress } = useSelector(
		(state) => state.slides
	);
	const dispatch = useDispatch();
	return (
		<Link
			to={redirectUrl}
			onClick={() => dispatch({ type: UPDATE_PROGRESS, payload: progress })}
		>
			<PrimaryButton className="redirect" type="button">
				{redirectMsg}
			</PrimaryButton>
		</Link>
	);
};
