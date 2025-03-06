export interface SignInPayload {
  username: string;
  password: string;
  groupname: string;
}

export interface SignInResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
}
