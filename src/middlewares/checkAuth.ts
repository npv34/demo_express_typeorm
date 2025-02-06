import { NextFunction, Response } from "express";

export const checkAuth = (req: any, res: Response, next: NextFunction) => {
    const {userIdLogin } = req.session;
    if(userIdLogin) {
        next();
    } else {
        res.redirect('/login');
    }
}