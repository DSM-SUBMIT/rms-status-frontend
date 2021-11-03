import { errorActionType } from '../../action/error';
import { ERROR, ERROR_FAILURE, ERROR_SUCCESS, MONTH, YEAR } from '../../action/error/interface';
import ErrorState from './interface';

const initState: ErrorState = {
  errorContent: [],
  year: '0000',
  month: '00',
  error: {
    status: 0,
    message: '',
    type: '',
  },
  isSuccessSaveErrorContent: undefined,
};

const ErrorReducer = (state: ErrorState = initState, action: errorActionType): ErrorState => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        isSuccessSaveErrorContent: undefined,
      };
    case ERROR_SUCCESS:
      return {
        ...state,
        errorContent: action.payload,
        isSuccessSaveErrorContent: true,
      };
    case ERROR_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessSaveErrorContent: false,
      };
    case YEAR:
      return {
        ...state,
        year: action.payload,
        isSuccessSaveErrorContent: undefined,
      };
    case MONTH:
      return {
        ...state,
        month: action.payload,
        isSuccessSaveErrorContent: undefined,
      };
    default:
      return state;
  }
};

export default ErrorReducer;
