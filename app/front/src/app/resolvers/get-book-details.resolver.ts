import { inject } from '@angular/core';
import { Router, type ResolveFn } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Book } from '../models/book';

export const getBookDetailsResolver: ResolveFn<Observable<Book>> | void = (route, state) => {
  const apiService = inject(ApiService);
  const router = inject(Router);
  const key = route.params['id'];
  return apiService.getBookId(key).pipe(
    catchError((err:any) => {
      router.navigate(['/'], {queryParams: {error: 1}})
      return EMPTY
    }
  ));
};
