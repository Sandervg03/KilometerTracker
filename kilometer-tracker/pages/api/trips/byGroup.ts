import { NextApiRequest, NextApiResponse } from "next";
import { AuthorizedMethod } from "../middleware";
import { handleApiError } from "../../../src/utils/errorHandler";
import { Trip } from "../models/trip";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed." })
    }

    try {
        const groupId: string = Array.isArray(req.query.groupId) ? req.query.groupId[0] : req.query.groupId;

        res.status(200).json(await Trip.getByGroupId(groupId, req.cookies.token));
    } catch (error) {
        handleApiError(error, res);
    }
}

export default AuthorizedMethod(handler);