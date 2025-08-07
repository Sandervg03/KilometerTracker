import { User } from "../models/user";
import { NextApiRequest, NextApiResponse } from "next";
import { handleApiError } from "../../../src/utils/errorHandler";
import * as bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }

    try {
        const { email, password, firstName, lastName } = req.body;

        const user = new User(email, await bcrypt.hash(password, 10), firstName, lastName);
        await user.save();

        res.status(200).json({
            message: "Successfully registered user"
        });

    } catch (error) {
        handleApiError(error, res);
    }
}