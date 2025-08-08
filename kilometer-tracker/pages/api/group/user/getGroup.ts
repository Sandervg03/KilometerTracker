import { NextApiRequest, NextApiResponse } from "next";
import { Group } from "../../models/group";
import { handleApiError } from "../../../../src/utils/errorHandler";
import { AuthorizedMethod } from "../../middleware";
import { User } from "../../models/user";

async function handler(req: NextApiRequest,res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const groupId = Array.isArray(req.query.groupId) ? req.query.groupId[0] : req.query.groupId;
        const group = await Group.getById(groupId);

        const users = await group.getUsers();

        res.status(200).json({group: group, users: await Promise.all(users.map(user => User.getByEmail(user)))})
    } catch (error) {
        handleApiError(error, res);
    }
}

export default AuthorizedMethod(handler);