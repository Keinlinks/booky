import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/book.module';
import { CommentsModule } from './modules/comments.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        console.log('mongodb connection string');
        return {uri: 'mongodb://localhost:27017'}
      },
    }),
    BooksModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
