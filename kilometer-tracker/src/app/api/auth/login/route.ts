import { NextRequest, NextResponse } from "next/server";
import { signToken, signRefreshToken } from "@/lib/auth/jwt";
import { apolloServerClient } from "@/lib/apolloServerClient";
import {
  QueryUserLoginDetailsDocument,
  QueryUserLoginDetailsQuery,
  QueryUserLoginDetailsQueryVariables,
} from "@/generated/graphql";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    const { data, error } = await apolloServerClient.query<
      QueryUserLoginDetailsQuery,
      QueryUserLoginDetailsQueryVariables
    >({
      query: QueryUserLoginDetailsDocument,
      variables: { email },
    });

    if (error) {
      return NextResponse.json(
        { error: "User not found or not active" },
        { status: 404 }
      );
    }

    const user = data?.kilometer_tracker_user[0];

    if (user?.status !== 'ACTIVE') {
      return NextResponse.json(
        { error: "User not found or not active" },
        { status: 404 }
      );
    }

    if (user?.password !== password) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    const token = await signToken({
      email: user?.email,
    });

    const refreshToken = await signRefreshToken({
      email: user?.email,
    });

    const response = NextResponse.json(
      {
        success: true,
        user: { email: user?.email },
        token: token // Return token in response body for localStorage
      },
      { status: 200 }
    );

    // Set the refresh token cookie (long-lived, httpOnly for security)
    response.cookies.set('refresh-token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
