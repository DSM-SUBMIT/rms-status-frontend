import { combineReducers } from 'redux';
import MainReducer from './main';
import ErrorReducer from './error';

const rootReducer = combineReducers({ main: MainReducer, error: ErrorReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
