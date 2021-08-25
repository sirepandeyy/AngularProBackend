import { User } from "src/user/models/user.entity";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('tenents')
export class Tenent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => User, {cascade: true})
    @JoinTable({
        name: 'user_tenent',
        joinColumn: {name: 'tenent_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'user_id', referencedColumnName: 'id'}
    })
    users:User[]
}