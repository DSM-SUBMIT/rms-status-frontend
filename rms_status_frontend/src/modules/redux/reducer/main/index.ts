import { mainActionType } from '../../action/main';
import { GET_STATUS, GET_STATUS_FAILURE, GET_STATUS_SUCCESS } from '../../action/main/interface';
import MainState from './interface';

const initState: MainState = {
  status: '',
  currentOutage: [],
  apis: {
    user: {
      status: '',
      recent: [],
    },
    admin: {
      status: '',
      recent: [],
    },
    file: {
      status: '',
      recent: [],
    },
  },
  sites: {
    user: {
      status: '',
      recent: [],
    },
    admin: {
      status: '',
      recent: [],
    },
  },
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessGetStatus: undefined,
};

const MainReducer = (state: MainState = initState, action: mainActionType): MainState => {
  switch (action.type) {
    case GET_STATUS:
      return {
        ...state,
        isSuccessGetStatus: undefined,
      };
    case GET_STATUS_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        currentOutage: action.payload.current_outage,
        apis: action.payload.apis,
        sites: action.payload.sites,
        isSuccessGetStatus: true,
      };
    case GET_STATUS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
