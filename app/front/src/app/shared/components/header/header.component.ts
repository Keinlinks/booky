import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SearchService } from '../../../services/search.service';
import { SearchInputComponent } from '../searchInput/searchInput.component';

@Component({
  selector: 'booky-header',
  standalone: true,

  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    SearchInputComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  searchService = inject(SearchService);
  route = inject(ActivatedRoute);
  cd = inject(ChangeDetectorRef);
  items: any[] | undefined;
  showSearch = false;
  selectedItem: any;

  suggestions: any[] = [];
  tieredItems: any = [];
  ngOnInit(): void {
    this.tieredItems = [];
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if(event.url == '/'){
          console.log(event)
          this.showSearch = false;
        }
        else{

          console.log(event);
          this.showSearch = true;
        }
        this.cd.detectChanges()
      }

    })
}

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
