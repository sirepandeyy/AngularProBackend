import { Exclude } from "class-transformer";
import { Role } from "src/role/role.entity";
import { Tenent } from "src/tenent/tenent.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name?:string;

    @Column()
    last_name:string;

    @Column({unique:true})
    email:string;

    @Column()
    @Exclude()
    password:string;

    @ManyToOne(() => Role)
     @JoinColumn({name: 'role_id'})
    role: Role;
    
   
}