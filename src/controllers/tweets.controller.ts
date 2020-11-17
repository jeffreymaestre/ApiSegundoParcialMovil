import { Controller, Get, Param, Post, Put, Delete, Body } from "@nestjs/common";
import { TweetsService } from "src/services/tweets.service";
import { Tweets } from "src/Models/tweets.entity";
import { UserService } from "src/Services/users.service";
import { users } from "src/Models/users.entity";
import {
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { LoginService } from "src/Services/login.service";
import { login } from "src/Models/login.entity";

@ApiBearerAuth()
@ApiTags('tweets')
@Controller('tweets')
export class TweetController {
    constructor(
        private tweetsService: TweetsService,
        private userService: UserService,
        private loginService: LoginService
    ) {}

    @ApiOperation({ summary: 'get tweets' })
    @Get()
    async getAllTweets() {
        return { data: (await this.tweetsService.get())};
    }

    @ApiOperation({ summary: 'get tweet por Id' })
    @Get(':Id')
    async getTweet(@Param() params: any) {
        return (await this.tweetsService.getOne(<number>params.Id));
    }

    @ApiOperation({ summary: 'save tweet' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    async postTweet(@Body() Body: Tweets) {
        return (await this.tweetsService.set(Body));
    }

    @Put()
    async putTweet(@Body() body: Tweets) {
        return (await this.tweetsService.set(body));
    }


    @Delete(':Id')
    async deleteTweet(@Param('Id') params: number) {
        return (await this.tweetsService.delete(params));
    }

    @Get('/user/:Id')
    async getTweetUser(@Param() params: any) {
        return (await this.userService.getOne(<number>params.Id));
    }

    @Post('/user')
    async saveUser(@Body() body: users) {
        return await this.userService.set(body);
    }

    @Post('/login/authenticate')
    async loginAuthenticate(@Body() body: login) {
        return await this.loginService.authenticate(body);
    }
}