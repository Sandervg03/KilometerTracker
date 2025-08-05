import * as jwt from 'jsonwebtoken';

export interface HasuraClaims {
    'x-hasura-default-role': string;
    'x-hasura-allowed-roles': string[];
    'x-hasura-user-email': string;
    'x-hasura-user-id'?: string;
}

export interface JWTPayload {
    email: string;
    userId?: string;
    'https://hasura.io/jwt/claims': HasuraClaims;
}

export interface DecodedToken extends JWTPayload {
    iat: number;
    exp: number;
}

export class JWTService {
    private static readonly JWT_SECRET = process.env.JWT_SECRET;
    private static readonly JWT_ALGORITHM: jwt.Algorithm = 'HS256';
    private static readonly DEFAULT_EXPIRES_IN = '31d';

    /**
     * Generate a JWT token for a user
     */
    static generateToken(
        email: string,
        role: string = 'user',
        expiresIn: string | number = this.DEFAULT_EXPIRES_IN
    ): string {
        const payload: JWTPayload = {
            email,
            'https://hasura.io/jwt/claims': {
                'x-hasura-default-role': role,
                'x-hasura-allowed-roles': [role],
                'x-hasura-user-email': email
            }
        };

        return jwt.sign(payload, this.JWT_SECRET, {
            expiresIn: expiresIn,
            algorithm: this.JWT_ALGORITHM
        } as jwt.SignOptions);
    }

    /**
     * Verify and decode a JWT token
     */
    static verifyToken(token: string): DecodedToken {
        try {
            return jwt.verify(token, this.JWT_SECRET, {
                algorithms: [this.JWT_ALGORITHM]
            }) as DecodedToken;
        } catch (error) {
            throw new Error('Invalid or expired token');
        }
    }

    /**
     * Decode token without verification (useful for getting claims when token might be expired)
     */
    static decodeToken(token: string): DecodedToken | null {
        try {
            return jwt.decode(token) as DecodedToken;
        } catch (error) {
            return null;
        }
    }

    /**
     * Extract email from token
     */
    static getEmailFromToken(token: string): string | null {
        try {
            const decoded = this.verifyToken(token);
            return decoded.email;
        } catch (error) {
            return null;
        }
    }

    /**
     * Extract Hasura claims from token
     */
    static getHasuraClaimsFromToken(token: string): HasuraClaims | null {
        try {
            const decoded = this.verifyToken(token);
            return decoded['https://hasura.io/jwt/claims'];
        } catch (error) {
            return null;
        }
    }

    /**
     * Check if token is expired
     */
    static isTokenExpired(token: string): boolean {
        try {
            const decoded = this.decodeToken(token);
            if (!decoded || !decoded.exp) return true;

            const currentTime = Math.floor(Date.now() / 1000);
            return decoded.exp < currentTime;
        } catch (error) {
            return true;
        }
    }

    /**
     * Refresh token (generate new token with same claims but extended expiry)
     */
    static refreshToken(token: string, expiresIn: string = this.DEFAULT_EXPIRES_IN): string {
        try {
            const decoded = this.verifyToken(token);
            return this.generateToken(decoded.email,
                decoded['https://hasura.io/jwt/claims']['x-hasura-default-role'], expiresIn);
        } catch (error) {
            throw new Error('Cannot refresh invalid token');
        }
    }

    /**
     * Generate cookie string for setting JWT token
     */
    static generateCookieString(
        token: string,
        maxAge: number = 60 * 60 * 24 * 31,
        httpOnly: boolean = true,
        secure?: boolean,
        sameSite: 'Strict' | 'Lax' | 'None' = 'Strict'
    ): string {
        const options = [
            `token=${token}`,
            ...(httpOnly ? ['HttpOnly'] : []),
            `Secure=${secure ?? (process.env.NODE_ENV === 'production')}`,
            `SameSite=${sameSite}`,
            'Path=/',
            `Max-Age=${maxAge}`
        ];

        return options.join('; ');
    }

    /**
     * Generate cookie string for clearing JWT token
     */
    static generateClearCookieString(): string {
        return [
            'token=',
            'HttpOnly',
            `Secure=${process.env.NODE_ENV === 'production'}`,
            'SameSite=Strict',
            'Path=/',
            'Max-Age=0'
        ].join('; ');
    }
}
