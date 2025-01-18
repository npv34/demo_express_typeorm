import User from "@entity/User";
import { AppDataSource } from "@databases/data-source";
const userRepository = AppDataSource.getRepository(User)
class UserService {
    static async getAllUsers(): Promise<User[]> { 
        const data: any = await userRepository.find()
        console.log(data);
        return data;
    }

    static async createUser(data: any) {
         const {firstName, lastName, isActive} = data
         const u1: User = new User();
         u1.firstName = firstName;
         u1.lastName = lastName;
         u1.isActive = isActive;
         return await userRepository.save(u1);
    }
}

export default UserService;