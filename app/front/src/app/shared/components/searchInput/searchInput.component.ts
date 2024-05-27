import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from "@angular/router";
import { AutoCompleteCompleteEvent, AutoCompleteModule } from "primeng/autocomplete";
import { SearchService } from "../../../services/search.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [AutoCompleteModule,FormsModule],
  template: ` <p-autoComplete
    [(ngModel)]="selectedItem"
    [suggestions]="suggestions"
    (completeMethod)="search($event)"
    placeholder="Buscar..."
    (onKeyUp)="searchQuery($event)"
  ></p-autoComplete>`,
  styleUrl: './searchInput.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  router = inject(Router);
  searchService = inject(SearchService);
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];
  tieredItems: any = [];
  search(event: AutoCompleteCompleteEvent) {}
  searchQuery(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      let input: any = event.target;
      let value = input.value;

      this.router.navigate(['/'], {
        queryParams: { search: value },
      });
      this.searchService.isSearching.next(true);
    }
  }
}
