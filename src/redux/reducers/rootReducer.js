import { combineReducer } from "redux";
import progressReducer from "./progressReducer";
import slidesReducer from "./slidesReducer";

export default combineReducer({
	progress: progressReducer,
	slides: slidesReducer,
});
