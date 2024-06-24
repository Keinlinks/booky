import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envirnment';
import { ApiResponseBooks } from '../models/apiResponse';
import { Book } from '../models/book';
import { map, tap } from 'rxjs';
import { Publish } from '../models/publish';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private external_api_url = environment.external_api_url;
  private api_url = environment.api_url;
  constructor(private http: HttpClient) {}

  getBooks(page: number = 1, limit: number = 10, search: string = '') {
    let search_param;
    if (search != '') search_param = `&q=${search}`;
    return this.http.get<ApiResponseBooks>(
      `${this.external_api_url}search.json?lang=es&page=${page}&limit=${limit}${search_param ? search_param : ''}`,
    );
  }

  getBookId(key: string) {
    return this.http.get<Book>(`${this.api_url}book/${key}`);
  }

  setPublish(publish: Publish) {
    return this.http.post<Publish>(`${this.api_url}publish`, publish);
  }

  getPublish(page: number = 1, limit: number = 10) {
    return this.http.get<Publish[]>(
      `${this.api_url}publish?limit=${limit}&page=${page}`,
    );
  }

  getAuthor(key: string) {
    let code = key.split('/')[2];
    return this.http.get(`${this.external_api_url}authors/${code}.json`);
  }
}
