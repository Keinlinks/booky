import { Module } from '@nestjs/common';
import { BookController } from '../controllers/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from '../models/book';
import { BookService } from '../services/book.service';
import { ExternalApiService } from 'src/services/externalApi.service';
import { HttpModule } from '@nestjs/axios';
import { PublishController } from 'src/controllers/publish.controller';
import { publish } from 'rxjs';
import { PublishService } from 'src/services/publish.service';
import { Publish, PublishSchema } from 'src/models/publish';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema },{name: Publish.name, schema: PublishSchema}]),
    HttpModule,
  ],
  controllers: [BookController,PublishController],
  providers: [BookService, ExternalApiService,PublishService],
})
export class BooksModule {}
