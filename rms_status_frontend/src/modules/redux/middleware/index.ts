import { all } from 'redux-saga/effects';
import mainSaga from './main';
import errorSaga from './error';
import reportSaga from './report';

export default function* rootSaga() {
  yield all([mainSaga(), errorSaga(), reportSaga()]);
}
