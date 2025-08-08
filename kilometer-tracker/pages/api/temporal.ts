import { NextApiRequest, NextApiResponse } from "next";

export default function Temporal(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({message: req.query})
}