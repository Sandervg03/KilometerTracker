import { NextApiRequest, NextApiResponse } from "next";
import { JWTService } from "../../../../../src/utils/jwtService";
import { Group } from "../../../models/group";
import { User } from "../../../models/user";
import { handleApiError } from "../../../../../src/utils/errorHandler";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }

    try {
        JWTService.verifyToken(req.cookies.token);

        const { groupId, userEmail } = req.body;
        const group = await Group.getById(groupId);

        if (group.owner !== JWTService.getEmailFromToken(req.cookies.token)) {
            return res.status(403).json({
                message: "You are not the owner of this group."
            });
        }
        const userToAdd = await User.getByEmail(userEmail);
        await group.addUser(userToAdd.email);

        res.status(201).json({
            message: "User added to group successfully",
            user: userToAdd.email
        });
    } catch (error) {
        handleApiError(error, res);
    }
}