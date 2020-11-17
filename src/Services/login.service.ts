import { Inject, Injectable } from "@nestjs/common";
import { login } from "src/Models/login.entity";
import { users } from "src/Models/users.entity";
import { DeleteResult, Repository } from "typeorm";
import { methods } from "./methods";

@Injectable()
export class LoginService implements methods<login> {
    constructor(
        @Inject('LOGIN_REPOSITORY') private readonly loginRepo: Repository<login>,
        @Inject('USERS_REPOSITORY') private readonly usersRepo: Repository<users>
     ) { }
    async get(): Promise<login[]> {
        return await this.loginRepo.find();
    }
    async getOne(Id: number): Promise<login> {
        return await this.loginRepo.findOne(Id);
    }
    async set(object: login): Promise<login> {
       return await this.loginRepo.save(object);
    }
    async delete(id: number): Promise<DeleteResult> {
        return await this.loginRepo.delete(id);
    }

    async authenticate(object: login): Promise<users> {
        return await this.usersRepo.findOneOrFail(
            <users>{user: await this.loginRepo.findOneOrFail(object)
        });
    }
    
}