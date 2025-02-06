import { NextFunction, Response, Request } from "express";


export const isAdmin = (req: any, res: Response, next: NextFunction) => {
    const  { userLogin} = req.session;
    const currentRoleID = userLogin.role.id;
    if(currentRoleID == 1) {
        next();
    } else {
        res.render('error/403.ejs');
    }
}