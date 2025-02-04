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
         const {firstName, lastName, email, password, isActive} = data
         const u1: User = new User();
         u1.firstName = firstName;
         u1.lastName = lastName;
         u1.email = email;
         u1.password = password;
         u1.isActive = isActive ? isActive : false;
         return await userRepository.save(u1);
    }

    static async getAccountByEmailPassword(data: any): Promise<any>  {
        const {email, password} = data;
        return await userRepository.findOne({
            where: {
                email: email,
                password: password,
            }
        });
    }
}

export default UserService;