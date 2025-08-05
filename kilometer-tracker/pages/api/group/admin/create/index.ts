import { NextApiRequest, NextApiResponse } from "next";
import { handleApiError } from "../../../../../src/utils/errorHandler";
import { JWTService } from "../../../../../src/utils/jwtService";
import { Group } from "../../../models/group";
import { User } from "../../../models/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }

    try {
        JWTService.verifyToken(req.cookies.token);

        if (JWTService.getEmailFromToken(req.cookies.token) !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({
                message: "Only admins may create groups."
            });
        }

        const { ownerEmail } = req.body;

        if (!ownerEmail) {
            throw new Error("Missing email of owner");
        }

        const owner = await User.getByEmail(ownerEmail);
        
        const group = new Group(owner.email);
        const result = await group.save();

        res.status(201).json({
            message: "Group created successfully",
            group: result
        });
    } catch (error) {
        handleApiError(error, res);
    }
}