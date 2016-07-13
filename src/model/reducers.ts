import { promiseTrackReducer } from "redux-promise-track";
import { combineReducers } from "redux";

function appData(state = {}, action) {
    return state;
}

export default combineReducers({
    appData,
    promiseTrackReducer
});
