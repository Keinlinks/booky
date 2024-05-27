import { Transform } from 'class-transformer';
import { IsInt, IsPositive, IsOptional } from 'class-validator';
import { CommentI } from 'src/models/comment';

export class GetBooksPaginationDto {
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  page?: number;

  @IsInt()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  limit: number;
}

export class CreateBookDto {
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
  comments?: CommentI[];
}
