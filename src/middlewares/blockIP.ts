import { NextFunction, Request, Response } from "express";
const listIPBlock: string[] = ["192.168.1.2"]
export const blockIP = (request: Request, response: Response, next: NextFunction) => {
    const ipClient: string = request.ip as string;
    if(listIPBlock.includes(ipClient)){
         response.status(403).json({ status: 403, message: "Forbidden IP"})
    } else {
        console.log(ipClient)
        next();
    }
}