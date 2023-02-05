import { Component, Input } from '@angular/core';
import { IBook } from '../interfaces/i-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  @Input() list!: IBook[]
  @Input() bookIsRead?: boolean
}
