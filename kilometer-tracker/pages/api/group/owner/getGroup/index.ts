import { NextApiRequest, NextApiResponse } from "next";
import { handleApiError } from "../../../../../src/utils/errorHandler";
import { Group } from "../../../models/group";
import { JWTService } from "../../../../../src/utils/jwtService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }

    try {
        JWTService.verifyToken(req.cookies.token);
        const email = JWTService.getEmailFromToken(req.cookies.token);

        const groupId = req.query.groupId as string;

        if (!groupId) {
            throw new Error("Missing group ID");
        }

        const group = await Group.getById(groupId);

        if (group.owner !== email) {
            return res.status(403).json({
                error: "You are not the owner of this group."
            });
        }

        res.status(200).json({
            message: "Group retrieved successfully",
            group: group
        });
    } catch (error) {
        handleApiError(error, res);
    }
}