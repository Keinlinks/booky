import { Book } from 'src/models/book';
import { Contact } from 'src/models/publish';

export class CreatePublishDto {
  id?: number;
  price?: number;
  book?: Book;
  trade?: string[];
  available: boolean;
  location?: string;
  contact?: Contact;
}
