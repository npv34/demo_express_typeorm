import express, { Express, Request, Response, Router } from "express";
import HomeController from "@controllers/home.controller";
import WeatherController from "@controllers/weather.controller";

const router: Router = express.Router();

router.get('/home', (req: Request, res: Response) => {
    HomeController.index(req, res);
});

router.get('/weather/', (req: Request, res: Response) => {
    WeatherController.index(req, res);
});


export default router;