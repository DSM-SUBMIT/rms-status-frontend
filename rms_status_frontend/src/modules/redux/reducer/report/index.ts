import { reportActionType } from '../../action/report';
import {
  INPUT,
  REPORT,
  REPORT_FAILURE,
  REPORT_SUCCESS,
  TEXTAREA,
} from '../../action/report/interface';
import ReportState from './interface';

const initState: ReportState = {
  title: '',
  content: '',
  isSuccessSaveReport: undefined,
  error: {
    status: 0,
    type: '',
    message: '',
  },
};

const ReportReducer = (state: ReportState = initState, action: reportActionType): ReportState => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        title: action.payload,
      };
    case TEXTAREA:
      return {
        ...state,
        content: action.payload,
      };
    case REPORT:
      return {
        ...state,
        isSuccessSaveReport: undefined,
      };
    case REPORT_SUCCESS:
      return {
        ...state,
        isSuccessSaveReport: true,
      };
    case REPORT_FAILURE:
      return {
        ...state,
        isSuccessSaveReport: false,
      };
    default:
      return state;
  }
};

export default ReportReducer;
