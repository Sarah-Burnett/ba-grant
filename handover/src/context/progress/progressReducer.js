import {
    LOAD_PROGRESS,
    UPDATE_PROGRESS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOAD_PROGRESS:
            if (localStorage.progress) {
                console.log(localStorage.progress);
                const progress = JSON.parse(localStorage.progress);
                return {...state, ...progress}
            } else return state;
        ;
        case UPDATE_PROGRESS:
            const newState = {...state};
            newState[action.payload] = true;
            localStorage.setItem('progress', JSON.stringify(newState))
            return newState;
        default:
            return state;
    }
}
