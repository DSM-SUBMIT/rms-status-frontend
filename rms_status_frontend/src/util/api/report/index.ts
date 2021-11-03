import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const saveReport = async (title: string, content: string) => {
  try {
    const request = getRequest();
    return await request.post(uri.status, { title: title, content: content });
  } catch (error) {
    throw error;
  }
};
