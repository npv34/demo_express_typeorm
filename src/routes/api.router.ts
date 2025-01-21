import express, { Express, NextFunction, Request, Response, Router } from "express";
import UserAPIController from "@controllers/api/user.api.controller";
const app: Express = express();
const router: Router = express.Router();

// middleware check appid cua request


router.get('/users', (req: Request, res: Response) => {
    UserAPIController.getAllUsers(req, res);
});

router.post('/users', (req: Request, res: Response) => {
    UserAPIController.storeUser(req, res);
});

export default router;