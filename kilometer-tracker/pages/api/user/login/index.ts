import { NextApiRequest, NextApiResponse } from "next";
import { handleApiError } from "../../../../src/utils/errorHandler";
import * as bcrypt from 'bcrypt';
import { User } from "../../models/user";
import { QueryPasswordByEmailQuery } from "../../../../src/generated/graphql";
import { JWTService } from "../../../../src/utils/jwtService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }

    try {
        const { email, password } = req.body;

        const userPasswordQueryResult: QueryPasswordByEmailQuery = await User.getPasswordByEmail(email);

        if (!userPasswordQueryResult || !await bcrypt.compare(password, userPasswordQueryResult.password[0].password)) {
            throw new Error("Incorrect credentials");
        }

        const token = JWTService.generateToken(email);

        const cookieString = JWTService.generateCookieString(token);
        res.setHeader("Set-Cookie", cookieString);

        res.status(200).json({
            message: "Successfully logged in user",
            user: { email: email }
        });

    } catch (error) {
        handleApiError(error, res);
    }
}