import { createStore, applyMiddleware } from "redux";
import { promiseTrackMiddleware } from "redux-promise-track";
import thunk from "redux-thunk";

import mainReducer from "./reducers";

const store: any = applyMiddleware(promiseTrackMiddleware, thunk)(createStore)(mainReducer);

export default store;
