import { Component } from '@angular/core';
import { IBook } from '../interfaces/i-book';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent {
  searchResults: IBook[] = []
  dataTitle: string = ''

  fetchBook(title: string) {
    this.searchResults = []
    const intitle: string = title.toLowerCase().replaceAll(' ', '-')
    console.log(intitle)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${intitle}&key=AIzaSyB7It2SRc8xaK8TwRMBdy1I3bqbtVXVHCY`)
    .then(res => res.json())
    .then(res => {
      console.log(res.items)
      
      for (const item of res.items) {
        const book = {
          title: item.volumeInfo.title,
          series: item.volumeInfo?.subtitle ? item.volumeInfo?.subtitle : '',
          author: item.volumeInfo.authors[0],
          cover: item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo?.imageLinks?.thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU',
        }
        this.searchResults.push(book)
      }
      console.log(this.searchResults)
    })
  }

  addToCatalogue() {
    
  }
}
