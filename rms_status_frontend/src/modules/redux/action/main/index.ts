import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import { mainResponse } from '../../../../models/request/mainResponse';
import { GET_STATUS, GET_STATUS_FAILURE, GET_STATUS_SUCCESS } from './interface';

export const getStatus = createAction(GET_STATUS)();
export const getStatusSuccess = createAction(GET_STATUS_SUCCESS)<mainResponse>();
export const getStatusFailure = createAction(GET_STATUS_FAILURE)<error>();

export type mainActionType =
  | ReturnType<typeof getStatus>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>;
