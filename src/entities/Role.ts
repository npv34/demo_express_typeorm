import { Entity, PrimaryGeneratedColumn, Column, Table, OneToMany } from "typeorm"
import User from "./User";

@Entity({name: "roles"})
class Role {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: string;

    @OneToMany(() => User, (user: User) => user.role)
    users?: User[];
}

export default Role;