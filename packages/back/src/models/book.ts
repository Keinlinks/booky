import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  cover_i: number;

  @Prop()
  has_fulltext: boolean;

  @Prop()
  edition_count: number;

  @Prop()
  title: string;

  @Prop()
  author_name: string[];

  @Prop()
  first_publish_year: number;

  @Prop()
  key: string;

  @Prop()
  ia: string[];

  @Prop()
  author_key: string[];

  @Prop()
  public_scan_b: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
