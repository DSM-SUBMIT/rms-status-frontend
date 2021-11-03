import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import { errorContentArrayType } from '../../../../models/response/errorResponse';
import { ERROR, ERROR_FAILURE, ERROR_SUCCESS, MONTH, YEAR } from './interface';

export const getError = createAction(ERROR)();
export const getErrorSuccess = createAction(ERROR_SUCCESS)<Array<errorContentArrayType>>();
export const getErrorFailure = createAction(ERROR_FAILURE)<error>();
export const setYear = createAction(YEAR)<string>();
export const setMonth = createAction(MONTH)<string>();

export type errorActionType =
  | ReturnType<typeof getError>
  | ReturnType<typeof getErrorSuccess>
  | ReturnType<typeof getErrorFailure>
  | ReturnType<typeof setYear>
  | ReturnType<typeof setMonth>;
