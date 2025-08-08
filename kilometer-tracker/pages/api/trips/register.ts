import { NextApiRequest, NextApiResponse } from "next";
import { JWTService } from "../../../src/utils/jwtService";
import { Trip } from "../models/trip";
import { handleApiError } from "../../../src/utils/errorHandler";
import { AuthorizedMethod } from "../middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." })
    }

    try {
        const { currentMileage, email, groupId, filledTank, cost } = req.body;

        const decodedToken = JWTService.decodeToken(req.cookies.token);
        if (!decodedToken.groups.includes(groupId)) {
            throw new Error("Forbidden");
        }

        const trip = new Trip(currentMileage, email, groupId, filledTank, cost);
        await trip.save(req.cookies.token);

        res.status(201).json({ message: "Trip registered succesfully." });
    } catch (error) {
        handleApiError(error, res);
    }
}

export default AuthorizedMethod(handler);