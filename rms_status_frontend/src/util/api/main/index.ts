import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getMain = async () => {
  try {
    const request = getRequest();
    const response = await request.get(uri.status);
    return response;
  } catch (error) {
    throw error;
  }
};
