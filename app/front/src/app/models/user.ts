import { Book } from "./book";

export interface User {
  id?: number;
  username: string;
  register_date?: Date;
  email: string;
  favorite_book: Book[];
  phone: string;
}
