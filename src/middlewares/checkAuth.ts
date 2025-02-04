import { NextFunction, Response } from "express";

export const checkAuth = (req: any, res: Response, next: NextFunction) => {
    const {userIdLogin } = req.session;
    console.log(userIdLogin, "middleware");
    if(userIdLogin) {
        next();
    } else {
        res.redirect('/login');
    }
}