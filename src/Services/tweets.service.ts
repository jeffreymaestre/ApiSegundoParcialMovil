import { Inject, Injectable } from '@nestjs/common';
import { Tweets } from 'src/Models/tweets.entity';
import { methods } from './methods';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TweetsService implements methods<Tweets> {
    constructor(
       @Inject('TWEETS_REPOSITORY') private readonly tweetRepo: Repository<Tweets>
    ) { }
    async get(): Promise<Tweets[]> {
        return await this.tweetRepo.find({ relations: ["user"]});
    }
    async getOne(Id: number): Promise<Tweets> {
        return await this.tweetRepo.findOne(Id);
    }
    async set(object: Tweets): Promise<Tweets> {
        object.date = new Date().toUTCString();
        return await this.tweetRepo.save(object);
    }
    async delete(id: number): Promise<DeleteResult> {
        return await this.tweetRepo.delete(id);
    }
}