import { BookResponse } from "./apiResponse";
import { Book } from "./book";

export interface Publish {
  id?: number;
  price?: number;
  book?: BookResponse;
  trade?: string[];
  available: boolean;
  location?: string;
}
