import { combineReducers } from 'redux';

import progressReducer from './progressReducer';
import slidesReducer from './slidesReducer';

export default combineReducers({
    progress: progressReducer,
    slides: slidesReducer
})