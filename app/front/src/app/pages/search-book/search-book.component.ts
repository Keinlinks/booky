import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { Book } from '../../models/book';
import { SkeletonModule } from 'primeng/skeleton';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Paginator, PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SearchInputComponent } from '../../shared/components/searchInput/searchInput.component';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'booky-search-book',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    AutoCompleteModule,
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
    SkeletonModule,
    RouterLink,
    PaginatorModule,
    SearchInputComponent
  ],
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBookComponent implements OnInit,AfterViewInit {
  route = inject(ActivatedRoute);
  cd = inject(ChangeDetectorRef);
  router = inject(Router)
  apiService = inject(ApiService);
  searchService = inject(SearchService);
  @ViewChild('paginator') paginator!:Paginator

  page: number = 1;
  isLoading = true;
  title: string = '';
  limit:number = 12
  products: Book[] = [];
  totalItems: number = 0;
  notFound:boolean = false
  error:boolean = false
  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      if (this.route.snapshot.queryParams['error'] == 1) {
        this.error = true;
        this.isLoading = false;
        this.cd.detectChanges();
      }
      this.isLoading = true;
      const query = params['search'];
      if (params['page']) this.page = params['page'];
        this.cd.detectChanges();
      if (query) this.title = query;
      this.notFound = false
      this.error = false
      if (query)
        this.apiService.getBooks(this.page, this.limit, query).subscribe({
          next: (data) => {
            if (data.num_found == 0) this.notFound = true;
            this.totalItems = data.num_found;
            this.products = data.docs;
            this.isLoading = false;
            this.cd.detectChanges();

          },
          error: (err) => {
            console.log(err);
            this.error = true;
            this.isLoading = false;
            this.cd.detectChanges();
          },
        });
        else{
          this.isLoading = false;
          this.cd.detectChanges();
        }
    });
    this.searchService.backToHome.subscribe((data) => {
      if(!data) return
      this.products = [];
      this.isLoading = false;
      this.cd.detectChanges();
    })
  }
  ngAfterViewInit(): void {
  }
  onPageChange(event: PaginatorState) {
    const page = event.page ? event.page + 1 : 1
    this.router.navigate(['/'], {
      queryParams: { page: page },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }
}
