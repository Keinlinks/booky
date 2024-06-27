import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { TabMenuModule } from 'primeng/tabmenu';
import { Publish } from "../../../models/publish";
import { BookResponse } from "../../../models/apiResponse";
import { ButtonModule } from "primeng/button";
import { PricesPipe } from "../../../pipes/prices.pipe";
@Component({
  selector: 'app-publish-dialog',
  standalone: true,
  imports: [CommonModule, TabMenuModule,ButtonModule,PricesPipe],
  templateUrl: './publish-dialog.component.html',
  styleUrl: './publish-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishDialogComponent implements OnInit {
  cd = inject(ChangeDetectorRef);
  ref: DynamicDialogRef | undefined;
  constructor(private config: DynamicDialogConfig) {}
  items!: any[];
  page: string = 'Libro';
  publish!: Publish;
  ngOnInit() {
    this.items = [
      { label: 'Libro', icon: 'pi pi-home' },
      { label: 'Contacto', icon: 'pi pi-pencil' },
    ];
    this.publish = this.config.data;
  }
  onActiveItemChange(event: any) {
    this.page = event.label;
    this.cd.detectChanges();
  }
  getImage(book: BookResponse | null) {
    if(!book) return '';
    return `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`;
  }
  getWhatsapp(number:string){
    const size = number.length;
    return `https://wa.me/${number.slice(1, size).replace(/\s+/g, '')}?text=${encodeURIComponent('Hola, me interesa el libro publicado en Booky')}`;
  }
}
