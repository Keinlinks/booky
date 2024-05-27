import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/book.module';
import { CommentsModule } from './modules/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    BooksModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
