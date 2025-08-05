import { NextApiRequest, NextApiResponse } from "next";
import { handleApiError } from "../../../../../src/utils/errorHandler";
import { JWTService } from "../../../../../src/utils/jwtService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    try {
        JWTService.verifyToken(req.cookies.token);

        if (JWTService.getEmailFromToken(req.cookies.token) !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ error: "Not authorized." });
        }

        res.status(200).json({ message: "Admin confirmed." });
    } catch (error) {
        handleApiError(error, res);
    }
}