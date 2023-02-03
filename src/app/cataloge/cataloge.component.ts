import { Component } from '@angular/core';
import { IBook } from '../interfaces/i-book';

@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html',
  styleUrls: ['./cataloge.component.scss']
})
export class CatalogeComponent {
  cataloge: IBook[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cataloge = [
      {
        title: "El imperio final",
        series: "Mistborn",
        author: 'Brandon Sanderson',
        cover: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788413143194.jpg'
      }
    ]
  }

  addNewBook(book: IBook) {
    this.cataloge.push(book)
  }
  
}
