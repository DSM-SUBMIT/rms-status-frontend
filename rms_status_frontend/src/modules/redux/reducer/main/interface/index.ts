import { error } from '../../../../../models/error';
import { currentOutageArrayType } from '../../../../../models/request/mainResponse';
import { apiAndSiteObjectType } from '../../../../../models/request/mainResponse';

interface MainState {
  status: string;
  currentOutage: Array<currentOutageArrayType>;
  apis: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
    file: apiAndSiteObjectType;
  };
  sites: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
  };
  error: error;
  isSuccessGetStatus: boolean | undefined;
}

export default MainState;
