import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";

export default async function(req: NextApiRequest, res: NextApiResponse) {
    const items = await prisma.category.findMany();

    res.send(items);
}