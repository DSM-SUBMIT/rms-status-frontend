import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getError } from '../../../../util/api/error';
import { ERROR, MONTH, YEAR } from '../../action/error/interface';
import { reducerType } from '../../reducer';
import ErrorState from '../../reducer/error/interface';

const getStateFunc = (state: reducerType): ErrorState => state.error;
const actionArray = [MONTH, YEAR, ERROR];

const errorGetSaga = function* (): any {
  const type = 'ERROR/ERROR';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getError, state.year, state.month);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

function* errorSaga() {
  yield takeLatest(actionArray, errorGetSaga);
}

export default errorSaga;
