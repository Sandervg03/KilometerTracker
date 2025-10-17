export interface User {
  email: string;
}

export interface AuthTokenPayload extends User {
  exp: number;
  iat: number;
}
