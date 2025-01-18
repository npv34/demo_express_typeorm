import express, { Express, Request, Response, Router } from "express";
import UserAPIController from "@controllers/api/user.api.controller";

const router: Router = express.Router();

router.get('/users', (req: Request, res: Response) => {
    UserAPIController.getAllUsers(req, res);
});

router.post('/users', (req: Request, res: Response) => {
    UserAPIController.storeUser(req, res);
});

export default router;