import { login } from "src/Models/login.entity";
import { Tweets } from "src/Models/tweets.entity";
import { users } from "src/Models/users.entity";
import { Connection } from "typeorm";

export const usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(users),
        inject: ['DATABASE_CONNECTION'],
    },
];
export const loginProviders = [
    {
        provide: 'LOGIN_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(login),
        inject: ['DATABASE_CONNECTION'],
    },
];
export const tweetsProviders = [
    {
        provide: 'TWEETS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Tweets),
        inject: ['DATABASE_CONNECTION'],
    },
];
