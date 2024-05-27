import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envirnment';
import { ApiResponseBooks } from '../models/apiResponse';
import { Book } from '../models/book';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private external_api_url = environment.external_api_url;
  private api_url = environment.api_url
  constructor(private http: HttpClient) {}

  getBooks(page:number = 1,limit:number = 10,search:string='') {
    let search_param;
    if(search != '') search_param = `&q=${search}`
    return this.http.get<ApiResponseBooks>(
      `${this.external_api_url}search.json?lang=es&page=${page}&limit=${limit}${search_param ? search_param : ''}`
    )
  }

  getBookId(key:string){
   return this.http.get<Book>(`${this.api_url}book/${key}`)
  }
}
