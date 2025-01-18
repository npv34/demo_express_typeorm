import axios from "axios"

class WeatherService {
    static async getCurrentWeather(cityName: string) {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: cityName,
                appid: "c401a010b6f63142bf1e3b514d1d559e",
            },
        });
        return response
    }
}

export default WeatherService