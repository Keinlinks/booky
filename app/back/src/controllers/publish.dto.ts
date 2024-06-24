import { Book } from 'src/models/book';

export class CreatePublishDto {
  id?: number;
  bookKey: string;
  price?: number;
  book?: Book;
  trade?: string[];
  available: boolean;
  location?: string;
}
