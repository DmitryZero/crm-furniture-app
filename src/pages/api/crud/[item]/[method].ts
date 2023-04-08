import { NextApiRequest, NextApiResponse } from "next";
import AppController from "~/server/Controllers/AppController";

export default async function ExecuteController(req: NextApiRequest, res: NextApiResponse) {
    const { item, method } = req.query;
    

    if (!(typeof item === 'string' && typeof method === 'string')) res.send("Incorrect format of item and method");
    else {        
        if (item in AppController) {
            if (method in (AppController as any)[item] && typeof ((AppController as any)[item][method]) === 'function') {
                const response = await (AppController as any)[item][method](req, res);
                res.send(response);
            }
        }
        res.send("Incorrect item or method name");
    }

    
}