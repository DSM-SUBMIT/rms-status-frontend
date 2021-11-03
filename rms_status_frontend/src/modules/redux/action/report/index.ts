import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import { reportRequest } from '../../../../models/request/reportRequest';
import { INPUT, REPORT, REPORT_FAILURE, REPORT_SUCCESS, TEXTAREA } from './interface';

export const setInput = createAction(INPUT)<string>();
export const setTextarea = createAction(TEXTAREA)<string>();
export const report = createAction(REPORT)<reportRequest>();
export const reportSuccess = createAction(REPORT_SUCCESS)();
export const reportFailure = createAction(REPORT_FAILURE)<error>();

export type reportActionType =
  | ReturnType<typeof setInput>
  | ReturnType<typeof setTextarea>
  | ReturnType<typeof report>
  | ReturnType<typeof reportSuccess>
  | ReturnType<typeof reportFailure>;
