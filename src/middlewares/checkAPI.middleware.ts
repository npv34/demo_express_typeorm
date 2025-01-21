import  { NextFunction, Request, Response } from "express";

export const checkAPPKey = (request: Request, response: Response, next: NextFunction) => {
        const appKey = request.query.appid;
        if (!appKey) {
             response.json({ status: 401, message: "Missing app key"})
        }else{
            if(appKey != "1234") {
                response.json({ status: 403, message: "Invalid app key"})
            }else{
                next();
            }
        }
}