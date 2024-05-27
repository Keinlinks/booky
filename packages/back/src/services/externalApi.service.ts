import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { environments } from 'environment';
import { Observable } from 'rxjs';
import { Book } from 'src/models/book';


@Injectable()
export class ExternalApiService {
  apiUrl = environments.api_url;
  constructor(private readonly httpService: HttpService) {}

  findBook(key: string): Observable<AxiosResponse<Book>> {
    const response = this.httpService.get(
      this.apiUrl + '/works/' + key + '.json',
    );
    return response;
  }
}
