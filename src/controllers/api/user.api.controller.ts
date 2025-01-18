import {Request, Response} from "express";
import User from "@entity/User";
import UserService from "@services/user.service";
class UserAPIController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const users: User[] = await UserService.getAllUsers();  
            const data = {
                "cod": 200,
                "data": users
            }
            res.json(data);
        }catch (e) {
            const data = {
                "cod": 500,
                "message": "Internal Server Error"
            }
            res.json(data);
        }
    }

    static async storeUser(req: Request, res: Response){
        try {
            const user = await UserService.createUser(req.body);
            const data = {
                "cod": 201,
                "message": "User created successfully",
                "data": user
            }
            res.json(data);
        } catch (e) {
            const data = {
                "cod": 500,
                "message": "Internal Server Error"
            }
            res.json(data);
        }
    }
}

export default UserAPIController;