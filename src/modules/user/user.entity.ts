import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "./enums/user.enum";

@Entity({
    name: 'users'
})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: 'User ID'
    })
    id: number;

    @Column()
    @ApiProperty({
        description: 'Username of account'
    })
    name: string;

    @Column({
        unique: true
    })
    @ApiProperty({
        description: 'User email' 
    })
    email: string;

    @Column()
    @ApiProperty({
        description: 'User password'
    })
    password: string;

    @Column({
        type: 'enum', enum: UserRoles, default: UserRoles.MEMBER
    })
    role: UserRoles;

    @CreateDateColumn()
    @ApiProperty({
        description: 'When the account was created'
    })
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty({
        description: 'When the account was updated'
    })
    updatedAt: Date;

    @BeforeInsert()
    async setPassword (password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}