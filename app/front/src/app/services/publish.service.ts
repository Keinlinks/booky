import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';
import { BookResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root',
})
export class PublishService {
  private currentBookPublish: BehaviorSubject<BookResponse> =
    new BehaviorSubject<BookResponse>({} as BookResponse);
  constructor() {}

  setCurrentBookPublish(book: BookResponse) {
    this.currentBookPublish.next(book);
  }
  getCurrentBookPublish() {
    return this.currentBookPublish.asObservable();
  }
}
