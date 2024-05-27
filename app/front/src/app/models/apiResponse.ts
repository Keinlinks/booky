import { Book } from "./book";

export interface ApiResponseBooks {
  start: number;
  num_found: number;
  docs: Book[];
}


export interface BookResponse {
  description: string;
  links: Link[];
  title: string;
  covers: number[];
  subject_places: string[];
  first_publish_date: string;
  subject_people: string[];
  key: string;
  authors: Author[];
  excerpts: Excerpt[];
  subjects: string[];
  type: Type3;
  subject_times: string[];
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: LastModified;
}

export interface Link {
  title: string;
  url: string;
  type: Type;
}

export interface Type {
  key: string;
}

export interface Author {
  author: Author2;
  type: Type2;
}

export interface Author2 {
  key: string;
}

export interface Type2 {
  key: string;
}

export interface Excerpt {
  pages?: string;
  excerpt: string;
  author: Author3;
  comment?: string;
}

export interface Author3 {
  key: string;
}

export interface Type3 {
  key: string;
}

export interface Created {
  type: string;
  value: string;
}

export interface LastModified {
  type: string;
  value: string;
}
