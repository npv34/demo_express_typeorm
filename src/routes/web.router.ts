import express, { Express, Request, Response, Router } from "express";
import HomeController from "@controllers/home.controller";

const router: Router = express.Router();

router.get('/home', (req: Request, res: Response) => {
    HomeController.index(req, res);
});

export default router;