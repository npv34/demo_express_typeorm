
import { Entity, PrimaryGeneratedColumn, Column, Table } from "typeorm"

@Entity({name: "users"})
class User {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    firstName?: string

    @Column()
    lastName?: string

    @Column()
    isActive?: boolean
}

export default User;