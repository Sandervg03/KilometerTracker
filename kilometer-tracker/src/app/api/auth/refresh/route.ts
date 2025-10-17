import { NextRequest, NextResponse } from 'next/server';
import { verifyRefreshToken, signToken } from '@/lib/auth/jwt';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('refresh-token')?.value;

    if (!refreshToken) {
      return NextResponse.json({ error: 'No refresh token' }, { status: 401 });
    }

    const payload = await verifyRefreshToken(refreshToken);

    if (!payload) {
      return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
    }

    // Generate new access token
    const newAccessToken = await signToken({
      email: payload.email,
    });

    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Set the new access token cookie
    response.cookies.set('auth-token', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 15, // 15 minutes
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json({ error: 'Token refresh failed' }, { status: 500 });
  }
}
