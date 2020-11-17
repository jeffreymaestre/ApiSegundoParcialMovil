import { Module } from '@nestjs/common';
import { TweetController } from './controllers/tweets.controller';
import { DatabaseModule } from './Database/database.module';
import { LoginService } from './Services/login.service';
import { TweetsService } from './services/tweets.service';
import { UserService } from './Services/users.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    TweetController
  ],
  providers: [
    TweetsService,
    UserService,
    LoginService
  ],
})
export class AppModule {}
