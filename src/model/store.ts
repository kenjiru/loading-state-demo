import { createStore, applyMiddleware } from "redux";
import { promiseTrackMiddleware } from "redux-promise-track";

import mainReducer from "./reducers";

const store: any = applyMiddleware(promiseTrackMiddleware)(createStore)(mainReducer);

export default store;
