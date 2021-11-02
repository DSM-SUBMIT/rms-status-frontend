import { combineReducers } from 'redux';
import MainRouter from './main';

const rootReducer = combineReducers({ main: MainRouter });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
