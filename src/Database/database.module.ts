import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.provider";
import { loginProviders, tweetsProviders, usersProviders } from "./entity.providers";

@Module({
    providers: [
        ...databaseProviders,
        ...usersProviders,
        ...tweetsProviders,
        ...loginProviders
    ],
    exports: [
        ...databaseProviders,
        ...usersProviders,
        ...tweetsProviders,
        ...loginProviders
    ]
})

export class DatabaseModule { }