import { all } from 'redux-saga/effects';
import mainSaga from './main';
import errorSaga from './error';

export default function* rootSaga() {
  yield all([mainSaga(), errorSaga()]);
}
