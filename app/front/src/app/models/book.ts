import { CommentI } from "./comment";

export interface Book {
  cover_i: number;
  has_fulltext: boolean;
  edition_count: number;
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
  ia: string[];
  author_key: string[];

  public_scan_b: boolean;
  first_sentence?: string[];
  language?: string[];
  number_of_pages_median?:number;

}
