import { combineReducers } from "redux";
import { contactReducer } from './Reducer';

export const rootReducer = combineReducers({
    contactReducer: contactReducer
})