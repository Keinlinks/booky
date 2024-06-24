import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Publish } from 'src/models/publish';
import { CreatePublishDto } from 'src/controllers/publish.dto';

@Injectable()
export class PublishService {
  constructor(
    @InjectModel(Publish.name) private publishModel: Model<Publish>,
  ) {}

  async create(createPublishDto: CreatePublishDto): Promise<Publish> {
    const createdPublish = new this.publishModel(createPublishDto);
    return createdPublish.save();
  }

  async findAll(limit: number, page: number): Promise<Publish[]> {
    return this.publishModel.find().skip(page*limit).limit(limit).exec();
  }
  async findById(bookId: string): Promise<Publish> {
    return this.publishModel.findOne({ key: bookId }).exec();
  }
}
