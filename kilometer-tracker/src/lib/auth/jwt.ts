import { SignJWT, jwtVerify } from "jose";
import type { AuthTokenPayload } from "./types";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-min-32-characters-long"
);

const REFRESH_TOKEN_SECRET = new TextEncoder().encode(
  process.env.REFRESH_TOKEN_SECRET || "your-refresh-secret-key-min-32-characters-long"
);

export async function signToken(payload: { email: string }): Promise<string> {
  return await new SignJWT({
    email: payload.email,
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["member"],
      "x-hasura-default-role": "member",
      "x-hasura-user-email": payload.email,
    },
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m") // Short-lived access token
    .sign(JWT_SECRET);
}

export async function signRefreshToken(payload: { email: string }): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d") // Long-lived refresh token
    .sign(REFRESH_TOKEN_SECRET);
}

export async function verifyToken(
  token: string
): Promise<AuthTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as AuthTokenPayload;
  } catch {
    return null;
  }
}

export async function verifyRefreshToken(
  token: string
): Promise<AuthTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, REFRESH_TOKEN_SECRET);
    return payload as unknown as AuthTokenPayload;
  } catch {
    return null;
  }
}
