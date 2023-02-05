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
        cover: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788413143194.jpg',
        read: false
      },
      {
        title: "El camino de los reyes",
        series: "Archivo de las tormentas",
        author: 'Brandon Sanderson',
        cover: 'https://imagessl1.casadellibro.com/a/l/t7/41/9788413143941.jpg',
        read: false
      },
      {
        title: "Harry Potter y la Piedra Filosofal",
        series: "Harry Potter",
        author: 'J.K. Rowling',
        cover: 'https://imagessl0.casadellibro.com/a/l/t7/70/9788418174070.jpg',
        read: true
      }
    ]
  }

  addNewBook(book: IBook) {
    this.cataloge.push(book)
  }
  
}
