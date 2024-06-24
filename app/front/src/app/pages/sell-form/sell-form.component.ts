import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookResponse } from '../../models/apiResponse';
import { PublishService } from '../../services/publish.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { Publish } from '../../models/publish';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'booky-sell-form',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ChipModule,
    DropdownModule,
    FormsModule,
    FileUploadModule,
    ButtonModule,
    RippleModule,
    InputSwitchModule,
    EditorModule,
    ReactiveFormsModule,
    InputNumberModule,
  ],
  templateUrl: './sell-form.component.html',
  styleUrl: './sell-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SellFormComponent implements OnInit {
  isLoading = false;
  book!: BookResponse
  image: string = '';
  categoryOptions: any = [];
  form: FormGroup = new FormGroup({});
  editor: string = '';
  formSell: Publish = {
    available: true,
    price: 0,
    location: '',
    book: {} as BookResponse,
  };
  constructor(private publishService: PublishService,private cd:ChangeDetectorRef,private router: Router,private apiService:ApiService) {}
  ngOnInit(): void {
    this.publishService.getCurrentBookPublish().subscribe((book) => {

      if (JSON.stringify(book) != '{}') {
        this.formSell = {
          available: true,
          book: book,
          price: 0,
          location: '',
        };
        this.book = book;
        this.cd.detectChanges();
      }else{
        this.router.navigate(['/']);
      }
      if (this.book.covers)
        this.image = `https://covers.openlibrary.org/b/id/${this.book.covers[0]}-M.jpg`;
      else this.image = '../../../assets/default-book.png';
    });
  }

  publish(){
    this.isLoading = true;

    this.apiService.setPublish(this.formSell).subscribe((publish) => {
      alert('Publicado')
      this.isLoading = false;
      this.cd.detectChanges()
    },)
  }
}
