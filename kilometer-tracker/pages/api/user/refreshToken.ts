import { NextApiRequest, NextApiResponse } from "next";
import { AuthorizedMethod } from "../middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        res.setHeader("Allow", ["PUT"]);
        return res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }

    res.status(200).json({
        message: "Successfully refreshed token"
    });
}

export default AuthorizedMethod(handler);