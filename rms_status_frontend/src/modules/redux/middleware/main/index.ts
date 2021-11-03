import { call, put, takeLatest } from 'redux-saga/effects';
import { getMain } from '../../../../util/api/main';
import { GET_STATUS } from '../../action/main/interface';

const mainGetSaga = function* (): any {
  const type = 'STATUS/GET_STATUS';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  try {
    const response = yield call(getMain);
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

function* mainSaga() {
  yield takeLatest(GET_STATUS, mainGetSaga);
}

export default mainSaga;
