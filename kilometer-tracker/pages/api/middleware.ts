import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { JWTService } from "../../src/utils/jwtService";

export function AuthorizedMethod(handler: NextApiHandler) {
    return async (request: NextApiRequest, response: NextApiResponse) => {
        
        const token = request.cookies.token;

        if (!token) {
            return response.status(401).json({ Error: 'Unauthorized: Invalid or expired token.' })
        }

        try {
            JWTService.verifyToken(token);

            const newToken = await JWTService.refreshToken(token);
            const cookieString = JWTService.generateCookieString(newToken);

            response.appendHeader('Set-Cookie', cookieString);
            return handler(request, response);

        } catch (error) {
            return response.status(401).json({ Error: 'Unauthorized: Invalid or expired token.' })
        }
    }
}
