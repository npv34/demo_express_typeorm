import WeatherService from "@services/weather.service";
import {Request, Response} from "express";

class WeatherController {
    static async index(req: Request, res: Response) {
        const result = await WeatherService.getCurrentWeather("Hanoi");
        const data = result.data;
        const {main} = data;
        const {temp } = main;
        const currentTemp = Math.floor(temp - 273);
        res.render('weather.ejs', {temp: currentTemp});
    }
}

export default WeatherController;