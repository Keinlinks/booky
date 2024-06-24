import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ApiService } from "../../services/api.service";
import { Publish } from "../../models/publish";
import { Author, BookResponse } from "../../models/apiResponse";
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-sell-post',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule],
  templateUrl: './sell-post.component.html',
  styleUrl: './sell-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellPostComponent {
  postsBooks: Publish[] = [];
  isLoading = false;
  constructor(
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData(1);
  }
  loadData(page: number) {
    this.apiService.getPublish(page).subscribe((publish) => {
      this.postsBooks = publish;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }

  getImage(book: BookResponse) {
    return `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`;
  }
  getAuthor(author: Author | null) {
    if (!author) return '';
    return author.author.key;
  }
}
