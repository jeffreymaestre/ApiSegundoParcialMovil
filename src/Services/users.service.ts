import { Inject, Injectable } from "@nestjs/common";
import { users } from "src/Models/users.entity";
import { DeleteResult, Repository } from "typeorm";
import { methods } from "./methods";

@Injectable()
export class UserService implements methods<users>{

    constructor(
        @Inject('USERS_REPOSITORY') private readonly userRepository: Repository<users>
    ) { }

    async get(): Promise<users[]> {
        return await this.userRepository.find();
    }
    async getOne(Id: number): Promise<users> {
        return await this.userRepository.findOne(Id);
    }
    async set(object: users): Promise<users> {
        return await this.userRepository.save(object);
    }
    async delete(id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

}