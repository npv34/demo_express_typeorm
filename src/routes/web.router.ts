import express, { Express, Request, Response, Router } from "express";
import HomeController from "@controllers/home.controller";
import WeatherController from "@controllers/weather.controller";
import { checkAuth } from "@middleware/checkAuth";
import { isAdmin } from "@middleware/isAdmin.midd";

const router: Router = express.Router();

router.get('/register', (req: Request, res: Response) => {
    HomeController.showFormRegister(req, res);
});

router.get('/login', (req: Request, res: Response) => {
    HomeController.showFormLogin(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    HomeController.login(req, res);
});

router.post('/register', (req: Request, res: Response) => {
    HomeController.register(req, res);
});

router.get('/weather/', checkAuth, isAdmin, (req: Request, res: Response) => {
    WeatherController.index(req, res);
});

router.get('/home', checkAuth, (req: Request, res: Response) => {
    HomeController.index(req, res);
});

router.get('/logout', (req: Request, res: Response) => {
    HomeController.logout(req, res);
});


export default router;