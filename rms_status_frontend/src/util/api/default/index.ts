import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://status-api.dsm-rms.com/',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://status-api.dsm-rms.com/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
