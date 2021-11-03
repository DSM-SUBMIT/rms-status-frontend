import { combineReducers } from 'redux';
import MainReducer from './main';
import ErrorReducer from './error';
import ReportReducer from './report';

const rootReducer = combineReducers({
  main: MainReducer,
  error: ErrorReducer,
  report: ReportReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
