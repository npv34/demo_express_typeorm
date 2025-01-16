import User from "@entity/User";
import { AppDataSource } from "@databases/data-source";
const userRepository = AppDataSource.getRepository(User)
class UserService {
    static async getAllUsers(): Promise<User[]> { 
        const data: any = await userRepository.find()
        console.log(data);
        return data;
    }
}

export default UserService;