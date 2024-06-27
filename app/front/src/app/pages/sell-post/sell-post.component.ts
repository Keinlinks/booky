import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../services/api.service';
import { Publish } from '../../models/publish';
import { Author, BookResponse } from '../../models/apiResponse';
import { TagModule } from 'primeng/tag';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PublishDialogComponent } from './publish-dialog/publish-dialog.component';
import { PricesPipe } from '../../pipes/prices.pipe';
@Component({
  selector: 'app-author',
  template: `<span>{{ name }}</span>`,
  imports: [CommonModule],
  standalone: true,
})
export class AuthorComponent implements OnChanges {
  @Input() authorKey: string = '';
  name: string = '';

  constructor(
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
  loadData() {
    console.log(this.authorKey);
    this.apiService.getAuthor(this.authorKey).subscribe((author: any) => {
      console.log(author);
      this.name = author.name;
      this.cd.detectChanges();
    });
  }
}

@Component({
  selector: 'app-sell-post',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    AuthorComponent,
    DynamicDialogModule,
    PricesPipe
  ],
  templateUrl: './sell-post.component.html',
  styleUrl: './sell-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class SellPostComponent {
  postsBooks: Publish[] = [];
  isLoading = false;
  ref: DynamicDialogRef | undefined;
  constructor(
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
    public dialogService: DialogService,
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
  getAuthor(author: Author | null): string {
    if (!author) return '';
    return author.author.key;
  }

  openDialog(publish: Publish) {
    this.ref = this.dialogService.open(PublishDialogComponent, {
      data: publish,
      closable: true,
      width: '800px',
      height: '750px',
    });
  }
}
