import { NextApiRequest, NextApiResponse } from "next";
import { handleApiError } from "../../../../../src/utils/errorHandler";
import { JWTService } from "../../../../../src/utils/jwtService";
import { Group } from "../../../models/group";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        JWTService.verifyToken(req.cookies.token)

        return res.status(200).json(await Group.getAllByUserToken(req.cookies.token, JWTService.getEmailFromToken(req.cookies.token)));
    } catch (error) {
        handleApiError(error, res);
    }
}