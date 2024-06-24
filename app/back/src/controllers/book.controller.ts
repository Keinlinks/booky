import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';
import { ExternalApiService } from 'src/services/externalApi.service';

@Controller('book')
export class BookController {
	constructor(private readonly bookService: BookService,private readonly externalApiService: ExternalApiService) {}
  @Get(':id')
  async findBook(@Param('id') key:string): Promise<Book> {
    const bookFromDb = await this.bookService.findById(key);

	if(bookFromDb) return bookFromDb;
    console.log('book not found');
	const bookFromApi = await firstValueFrom(this.externalApiService.findBook(key));

  return bookFromApi.data;
  }
}
