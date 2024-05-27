import { Module } from '@nestjs/common';
import { BookController } from '../controllers/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from '../models/book';
import { BookService } from '../services/book.service';
import { ExternalApiService } from 'src/services/externalApi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    HttpModule,
  ],
  controllers: [BookController],
  providers: [BookService, ExternalApiService],
})
export class BooksModule {}
