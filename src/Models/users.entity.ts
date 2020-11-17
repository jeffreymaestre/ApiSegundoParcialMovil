import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { login } from "./login.entity";
import { Tweets } from "./tweets.entity";

@Entity()
export class users {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    Id?: number;

    @ApiProperty({ example: "" })
    @Column()
    image: string;

    @ApiProperty({ example: "Jorsh" })
    @Column()
    name: string;

    @ApiProperty({ example: new Date().toDateString() })
    @Column()
    date: string;
    
    @ApiProperty({ example: "Washington"})
    @Column()
    lastname: string;

    @ApiProperty({ example: <login>{ Id: null, password: "123", usuario: "jorsh" }})
    @OneToOne(() => login, { 
        cascade: true
    })
    @JoinColumn()
    user: login;

    @OneToMany(type => Tweets, tweets => tweets.user)
    tweets: Tweets[];
}