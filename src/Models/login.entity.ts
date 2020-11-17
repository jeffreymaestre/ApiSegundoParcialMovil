import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { users } from "./users.entity";

@Entity()
export class login {
    @ApiProperty({ example: 1, description: "Id de tweet"})
    @PrimaryGeneratedColumn()
    Id?: number;

    @ApiProperty({ example: "juan" })
    @Column({ unique: true})
    usuario: string;

    @ApiProperty({ example: "1234" })
    @Column()
    password: string;
}