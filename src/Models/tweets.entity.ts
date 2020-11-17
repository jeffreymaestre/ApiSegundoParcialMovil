import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { users } from "./users.entity";

@Entity()
export class Tweets {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    Id?: number;

    @ApiProperty({ example: "juan" })
    @Column()
    text: string;
    
    @ApiProperty({ example: new Date().toDateString() })
    @Column()
    date: string;

    @ApiProperty({ example: <users>{ Id: 1, image: "", name: "Jorsh", lastname: "williams", date: new Date().toDateString() } })
    @ManyToOne(type => users, user => user.tweets)
    user: users;
}