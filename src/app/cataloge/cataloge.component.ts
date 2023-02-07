import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/i-book';
import { CataloguesService } from '../shared/services/catalogues.service';

@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html',
  styleUrls: ['./cataloge.component.scss']
})
export class CatalogeComponent implements OnInit{
  collection:IBook[] = []
  bestSellers: IBook[] = []

  constructor(private catalogesService: CataloguesService) { }
  
  ngOnInit(): void {
    this.collection = [...this.catalogesService.getMyCollection()]
  }

  bookAction(data:{book:IBook, action:string}){
    console.log(data.action)
    const check:any = {
      ADD: ()=>{this.addBookToCollection(data.book)},
      DROP:  ()=>{this.dropBookOfCollection(data.book)},
      TOGGLE: ()=>{this.isReadToggle(data.book)}
    }
    return check[data.action]()
  }
  


  addBookToCollection(book:IBook){
    console.log('ADD', book.title)
    this.catalogesService.addToCollection(book)
    this.collection = [...this.catalogesService.getMyCollection()]
  }
  isReadToggle(book: IBook) {
    book.read = !book.read
  }
  dropBookOfCollection(book:IBook){
    console.log('DROP')
    this.catalogesService.dropOfCollection(book)
    this.collection = [...this.catalogesService.getMyCollection()]
    console.log(this.collection);
    
  }

  
}


