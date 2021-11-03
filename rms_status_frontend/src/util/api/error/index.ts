import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getError = async (year: string, month: string) => {
  try {
    const request = getRequest();
    return await request.get(uri.error + '?year=' + year + '&month=' + month);
  } catch (error) {
    throw error;
  }
};
