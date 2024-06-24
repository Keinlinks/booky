import { Book } from 'src/models/book';

export class CreatePublishDto {
  id?: number;
  price?: number;
  book?: Book;
  trade?: string[];
  available: boolean;
  location?: string;
}
