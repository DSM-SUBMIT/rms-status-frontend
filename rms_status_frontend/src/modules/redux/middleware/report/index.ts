import { call, put, select, takeLatest } from 'redux-saga/effects';
import { saveReport } from '../../../../util/api/report';
import { REPORT } from '../../action/report/interface';
import { reducerType } from '../../reducer';
import ReportState from '../../reducer/report/interface';

const getStateFunc = (state: reducerType): ReportState => state.report;

const reportSaveSaga = function* (): any {
  const type = 'REPORT/REPORT';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(saveReport, state.title, state.content);
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

function* reportSaga() {
  yield takeLatest(REPORT, reportSaveSaga);
}

export default reportSaga;
