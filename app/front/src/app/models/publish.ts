import { Book } from "./book";

export interface Publish {
  id?: number;
  bookKey: string;
  price?: number;
  book?: Book;
  trade?: string[];
  available: boolean;
  location?: string;
}
