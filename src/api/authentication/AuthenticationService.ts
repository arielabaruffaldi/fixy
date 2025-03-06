import { AxiosResponse } from 'axios';

import { SignInPayload, SignInResponse } from '../../types/authentication';
import axios from '../axiosInstance';

const signIn = async (
  payload: SignInPayload
): Promise<AxiosResponse<SignInResponse>> => {
  return axios().post('api/v1/portal/pages/home-without-session/get-token', {
    username: payload.username,
    password: payload.password,
    groupname: payload.groupname,
  });
};

const AuthenticationService = {
  signIn,
};

export default AuthenticationService;
