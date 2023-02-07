import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../interfaces/i-book';
import { CataloguesService } from '../shared/services/catalogues.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  @Input() list!: IBook[]
  @Input() bookIsRead?: boolean
  @Input() button?: string[]
  @Output() bookAction = new EventEmitter<{book:IBook, action:string}>();

  constructor(private catalogesService: CataloguesService) {}

  ngOnInit(): void {
    
  }
  
  bookAct(book: IBook, action:string) {
    if (action === 'read' || action === 'not-read'){ action = 'toggle' }
    this.bookAction.emit({book: book, action:action.toUpperCase()})
  }
}
