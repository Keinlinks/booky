import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  book: BookResponse = {
    excerpts: [],
    description:
      "Never before in history have there been combined in one man the character, the political leadership, the military perception and the eloquence which our generation has known in Winston Churchill. It is no wonder that when it was announced that he would write the history of the Second World War, there arose throughout the world an interest and excitement caused by no other publication of this century. The six volumes of The Second World War fulfilled the highest expectations with which they were awaited. But the great length of the work and its necessary cost has prevented many thousands from reading and owning this great history. Now the heart of the work appears in one volume. The abbreviation has been made with the utmost skill, resulting in a unified, dramatic story of the world's greatest ordeal. Perhaps the glory of Sir Winston's prose is even heigtened by the omission of details necessary for the record but of less interest to the general reader. Memoirs of the Second World War will be read and treasured by a vast number of people who do not yet know this drama written imperishably by one of its greatest actors. - Jacket flap.",
    links: [
      {
        title: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/The_Second_World_War_(book_series)',
        type: {
          key: '/type/link',
        },
      },
      {
        title: 'Wikidata',
        url: 'https://www.wikidata.org/wiki/Q209788',
        type: {
          key: '/type/link',
        },
      },
      {
        url: 'https://viaf.org/viaf/214777902',
        title: 'VIAF ID: 214777902',
        type: {
          key: '/type/link',
        },
      },
      {
        title: 'BookBrainz',
        url: 'https://bookbrainz.org/work/a2169726-a35d-41f6-963c-ae04d994ef3b',
        type: {
          key: '/type/link',
        },
      },
      {
        title: 'inventaire.io',
        url: 'https://inventaire.io/entity/wd:Q209788',
        type: {
          key: '/type/link',
        },
      },
    ],
    title: 'The Second World War',
    covers: [
      7347623, 4033003, 2357147, 12154781, 2560324, 881953, 12149673, 255751,
      10450279, 11797744,
    ],
    subject_places: ['Great Britain', 'Europe'],
    first_publish_date: '1948',
    subject_people: [
      'Winston Churchill Sir (1874-1965)',
      'Winston Churchill (1874-1965)',
    ],
    key: '/works/OL134333W',
    authors: [
      {
        author: {
          key: '/authors/OL21970A',
        },
        type: {
          key: '/type/author_role',
        },
      },
      {
        type: {
          key: '/type/author_role',
        },
        author: {
          key: '/authors/OL694945A',
        },
      },
    ],
    type: {
      key: '/type/work',
    },
    subjects: [
      'Personal narratives, British',
      'British Personal narratives',
      'Great Britain',
      'Military leadership',
      'World War, 1939-1945',
      'Command of troops',
      'Churchill, winston, 1874-1965',
      'World war, 1939-1945, personal narratives, british',
      'World war, 1939-1945, great britain',
      'World war, 1939-1945',
      'World War (1939-1945)',
      'Prime ministers',
      'Biography',
      'Guerre mondiale (1939-1945)',
      'Causes',
      'Diplomatic history',
      'Politics and government',
      'War',
    ],
    subject_times: ['1918-1945'],
    latest_revision: 20,
    revision: 20,
    created: {
      type: '/type/datetime',
      value: '2009-10-19T14:05:11.183754',
    },
    last_modified: {
      type: '/type/datetime',
      value: '2023-11-29T22:00:21.218301',
    },
  };
  image: string = '';
  categoryOptions: any = [];
  form: FormGroup = new FormGroup({});
  editor: string = '';
  formSell: Publish = {
    available: true,
    bookKey: '',
    price: 0,
    location: '',
  };
  constructor(private publishService: PublishService) {}
  ngOnInit(): void {
    this.publishService.getCurrentBookPublish().subscribe((book) => {
      if (JSON.stringify(book) != '{}') {
        this.formSell = {
          available: true,
          bookKey: book.key,
          price: 0,
          location: '',
        };
        this.book = book;
      }
      if (this.book.covers)
        this.image = `https://covers.openlibrary.org/b/id/${this.book.covers[0]}-M.jpg`;
      else this.image = '../../../assets/default-book.png';
    });
  }
}
