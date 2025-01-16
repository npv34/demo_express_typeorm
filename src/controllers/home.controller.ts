import User from "@entity/User";
import UserService from "@services/user.service";
import {Request, Response} from "express";
class HomeController {
    static async index(req: Request, res: Response) {
        try {
            const users: User[] = await UserService.getAllUsers();  
            res.render('index.ejs', {users: users});
        }catch (e) {
            console.error(e);
            res.status(500).send('Server Error');  // server error
        }
    }
}

export default HomeController;