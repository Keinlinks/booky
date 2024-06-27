import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Book } from "./book";
import { HydratedDocument } from "mongoose";
import { Contact } from "./Contact";
export type PublishDocument = HydratedDocument<Publish>;
@Schema()
export class Publish {
  @Prop()
  id?: number;
  @Prop()
  bookKey: string;
  @Prop()
  price?: number;
  @Prop()
  book?: Book;
  @Prop()
  trade?: string[];
  @Prop()
  available: boolean;
  @Prop()
  location?: string;
  @Prop()
  contact?: Contact;
}

export const PublishSchema = SchemaFactory.createForClass(Publish);
export { Contact };

