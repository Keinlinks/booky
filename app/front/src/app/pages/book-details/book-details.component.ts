import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InplaceModule } from 'primeng/inplace';
import { ActivatedRoute, Router } from '@angular/router';
import { BookResponse } from '../../models/apiResponse';
import { CommentComponent } from './components/comment/comment.component';
import { PublishService } from '../../services/publish.service';
@Component({
  selector: 'booky-book-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    TabViewModule,
    ButtonModule,
    InplaceModule,
    CommentComponent,
    ButtonModule
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router,private publishService:PublishService) {}
  book!: BookResponse;

  images: string[] = [];

  isLoading = false;

  selectedImageIndex: number = 0;

  ngOnInit(): void {
    this.book = this.route.snapshot.data['details'];
    console.log(this.book);
    if(this.book.covers){
      for (let i = 0; i < 5; i++) {
        if (this.book.covers[i])
          this.images.push(
          `https://covers.openlibrary.org/b/id/${this.book.covers[i]}-M.jpg`
      );
      }
    }
    else{
      this.images.push(`../../../assets/default-book.png`);
    }

  }

  loadComments() {
    throw new Error('Method not implemented.');
  }

  goToPublish(){
    this.publishService.setCurrentBookPublish(this.book)

    this.router.navigate(['/','publish'])
  }
}
