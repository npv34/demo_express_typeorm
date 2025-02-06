
import { Entity, PrimaryGeneratedColumn, Column, Table, ManyToOne } from "typeorm"
import Role from "./Role";

@Entity({name: "users"})
class User {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    firstName?: string

    @Column()
    lastName?: string

    @Column({
        unique: true,
    })
    email?: string

    @Column()
    password?: string

    @Column()
    isActive?: boolean

    @ManyToOne(() => Role, (role: Role) => role.users)
    role?: Role;
}

export default User;