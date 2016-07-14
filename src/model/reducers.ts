import * as _ from "lodash";
import { promiseTrackReducer } from "redux-promise-track";
import { combineReducers } from "redux";

import {GET_LIST} from "./actions";

function appData(state: any = { list: [] }, action) {
    switch(action.type) {
        case GET_LIST:
            return {
                list: _.range(20)
            };
    }

    return state;
}

export default combineReducers({
    appData,
    promiseTrackReducer
});
