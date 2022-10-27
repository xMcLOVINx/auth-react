import axios from 'axios';

// Models
import { HttpResponseModel } from './models/http';

const AUTHORITY = 'http://localhost:4000';

export const signIn = (requestBody: any): Promise<HttpResponseModel> => {
  return new Promise((resolve, reject) => {
    const endpoint = AUTHORITY + '/api/login';
    const request = axios.post(endpoint, requestBody);

    request.then(async (response: any) => {
      resolve({
        token: response.access_token,
      });
    });

    request.catch((err: any) => {
      reject(err);
    });
  });
};

export const refresh = (oldToken: string): Promise<HttpResponseModel> => {
  return new Promise((resolve) => {
    resolve({
      token: '',
    });
  });
};
