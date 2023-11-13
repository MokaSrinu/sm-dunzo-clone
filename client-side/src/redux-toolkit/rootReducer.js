import { combineReducers } from "@reduxjs/toolkit";
import { landingPageReducers } from "./reducers";

export const rootReducer = combineReducers({
    ...landingPageReducers,
});
