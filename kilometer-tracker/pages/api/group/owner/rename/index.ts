import { NextApiRequest, NextApiResponse } from "next";
import { Group } from "../../../models/group";
import { JWTService } from "../../../../../src/utils/jwtService";
import { handleApiError } from "../../../../../src/utils/errorHandler";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        res.status(405).json({ error: "Method not allowed." })
    }

    try {
        JWTService.verifyToken(req.cookies.token);

        const { name, groupId } = req.body;
        const group = await Group.getById(groupId);

        if (group.owner !== JWTService.getEmailFromToken(req.cookies.token)) {
            throw new Error("Forbidden");
        }

        await group.rename(name, req.cookies.token);

        res.status(204).end();
    } catch(error) {
        handleApiError(error, res);
    }
}