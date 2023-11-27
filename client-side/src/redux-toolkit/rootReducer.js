import { combineReducers } from "@reduxjs/toolkit";
import { landingPageReducers, storeDetailsReducers } from "./reducers";

export const rootReducer = combineReducers({
    ...landingPageReducers,
    ...storeDetailsReducers,
});
