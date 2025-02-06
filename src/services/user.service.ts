import User from "@entity/User";
import Role from "@entity/Role";

import { AppDataSource } from "@databases/data-source";
const userRepository = AppDataSource.getRepository(User)
const roleRepository = AppDataSource.getRepository(Role);


class UserService {
    static async getAllUsers(): Promise<User[]> { 
        const data: any = await userRepository.find()
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
         const roleUser = await roleRepository.findOne({
            where: {
                id: 2,
            },
         });
         if (roleUser) {
            u1.role = roleUser;
         }
         return await userRepository.save(u1);
    }

    static async getAccountByEmailPassword(data: any): Promise<any>  {
        const {email, password} = data;
        return await userRepository.findOne({
            where: {
                email: email,
                password: password,
            },
            relations: ["role"],
        });
    }
}

export default UserService;