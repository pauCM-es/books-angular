import { Component, EventEmitter, Output } from '@angular/core';
import { IBook } from '../interfaces/i-book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {

    @Output() newBook = new EventEmitter();

    sendNewBookData(book: IBook) {
      console.log(book)
      this.newBook.emit(book)
    }



}
