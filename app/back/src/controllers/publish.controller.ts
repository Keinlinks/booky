import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Book } from 'src/models/book';
import { Publish } from 'src/models/publish';
import { BookService } from 'src/services/book.service';
import { ExternalApiService } from 'src/services/externalApi.service';
import { PublishService } from 'src/services/publish.service';

@Controller('publish')
export class PublishController {
  constructor(
    private readonly bookService: BookService,
    private readonly externalApiService: ExternalApiService,
    private readonly publishService: PublishService,
  ) {}
  @Get()
  async getAllPublish(@Query('search') search: string,@Query('page') page: number,@Query('limit') limit: number): Promise<Publish[]> {
    const publishFromDb = await this.publishService.findAll(limit,page);
    return publishFromDb;
  }
  @Post()
  async setPublish(@Body() publish: Publish): Promise<Publish> {
    return await this.publishService.create(publish);
  }
}
