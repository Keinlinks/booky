import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
    SearchInputComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  router = inject(Router)
  searchService = inject(SearchService)
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];
  tieredItems: any = [];
  ngOnInit(): void {
    this.tieredItems = [
      {
        label: 'Customers',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Customer',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Duplicate',
                icon: 'pi pi-fw pi-copy',
              },
            ],
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-user-edit',
          },
        ],
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-list',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-search',
          },
        ],
      },
      {
        label: 'Shipments',
        icon: 'pi pi-fw pi-envelope',
        items: [
          {
            label: 'Tracker',
            icon: 'pi pi-fw pi-compass',
          },
          {
            label: 'Map',
            icon: 'pi pi-fw pi-map-marker',
          },
          {
            label: 'Manage',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
          },
          {
            label: 'Billing',
            icon: 'pi pi-fw pi-file',
          },
        ],
      },
      { separator: true },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-sign-out',
      },
    ];
  }

  search(event: AutoCompleteCompleteEvent) {}
  searchQuery(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      let input:any = event.target
      let value = input.value

      this.router.navigate(['/'],{
        queryParams: {'search': value}
      })
      this.searchService.isSearching.next(true)
    }
  }
}
