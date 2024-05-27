import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  isSearching:Subject<boolean> = new Subject()
  backToHome:Subject<boolean> = new Subject()
  constructor() { }
}
