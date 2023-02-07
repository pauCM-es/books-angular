import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'src/app/interfaces/i-book';

@Injectable({
  providedIn: 'root'
})
export class CataloguesService {

  apiNYT_url: string = 'https://api.nytimes.com/svc/books/v3/'
  bestSellers_url: string = 'lists/current/hardcover-fiction.json'
  apiNYT_key: string = '?api-key=JaJyTjgJLZAJvAQ3hfqju1TllYnjuZjO'
  
  apiGoogle_url: string = 'https://www.googleapis.com/books/v1/volumes?q='
  byTitle: string = `intitle:`
  byAuthor: string = `inauthor:`
  apiGoogle_key: string = '&key=AIzaSyB7It2SRc8xaK8TwRMBdy1I3bqbtVXVHCY'

  allBooks:any = {
    myCollection: [],
    bestSellers: []
  }

  constructor(private http: HttpClient) { 
    this.allBooks.myCollection = [
      { 
        id: 1,
        title: "El imperio final",
        series: "Mistborn",
        author: 'Brandon Sanderson',
        cover: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788413143194.jpg',
        read: false
      },
      { 
        id: 2,
        title: "El camino de los reyes",
        series: "Archivo de las tormentas",
        author: 'Brandon Sanderson',
        cover: 'https://imagessl1.casadellibro.com/a/l/t7/41/9788413143941.jpg',
        read: false
      },
      { 
        id: 3,
        title: "Harry Potter y la Piedra Filosofal",
        series: "Harry Potter",
        author: 'J.K. Rowling',
        cover: 'https://imagessl0.casadellibro.com/a/l/t7/70/9788418174070.jpg',
        read: true
      }
    ]
  }

  getMyCollection(){
    return this.allBooks.myCollection
  }

  addToCollection(book: IBook) {
    this.allBooks.myCollection = [
      ...this.allBooks.myCollection,
      {
        ...book,
        id: this.allBooks.myCollection[(this.allBooks.myCollection.length - 1)].id + 1
      }
    ]
    console.log(this.allBooks.myCollection);
  }

  dropOfCollection(book: IBook) {
    this.allBooks.myCollection = [...this.allBooks.myCollection.filter((bookFilter:IBook) => bookFilter.id !== book.id)]
  }

  searchBook(title:string){
    const intitle: string = title.toLowerCase().replaceAll(' ', '-')
  }

  fetchBestSellers(){
    return this.http.get(`${this.apiNYT_url}${this.bestSellers_url}${this.apiNYT_key}`)
  }
  getBestSellers(){
    return this.allBooks.bestSellers
  }
  setBestSellers(books:any[]){
    for (const book of books) {
      this.allBooks.bestSellers = [
        ...this.allBooks.bestSellers,
        {
          title: book.title,
          author: book.author,
          cover: book.book_image,
          description: book.description,
          read: false
        }
      ] 
    }
  }
}





// [
//   {
//       "title": "LESSONS IN CHEMISTRY",
//       "author": "Bonnie Garmus",
//       "description": "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",
//       "read": false
//   },
//   {
//       "title": "TOMORROW, AND TOMORROW, AND TOMORROW",
//       "author": "Gabrielle Zevin",
//       "description": "Two friends find their partnership challenged in the world of video game design.",
//       "read": false
//   },
//   {
//       "title": "THE HOUSE IN THE PINES",
//       "author": "Ana Reyes",
//       "description": "Seven years after witnessing her best friend drop dead, Maya returns to her Berkshires hometown to piece together what happened.",
//       "read": false
//   },
//   {
//       "title": "THE HOUSE OF WOLVES",
//       "author": "James Patterson and Mike Lupica",
//       "description": "After her father is murdered, Jenny Wolf becomes the head of a powerful family in California.",
//       "read": false
//   },
//   {
//       "title": "DEMON COPPERHEAD",
//       "author": "Barbara Kingsolver",
//       "description": "A reimagining of Charles Dickens’s “David Copperfield” set in the mountains of southern Appalachia.",
//       "read": false
//   },
//   {
//       "title": "HOW TO SELL A HAUNTED HOUSE",
//       "author": "Grady Hendrix",
//       "description": "After her parents die, Louise encounters more than she expected in dealing with the family home.",
//       "read": false
//   },
//   {
//       "title": "THE BOYS FROM BILOXI",
//       "author": "John Grisham",
//       "description": "Two childhood friends follow in their fathers’ footsteps, which puts them on opposite sides of the law.",
//       "read": false
//   },
//   {
//       "title": "FAIRY TALE",
//       "author": "Stephen King",
//       "description": "A high school kid inherits a shed that is a portal to another world where good and evil are at war.",
//       "read": false
//   },
//   {
//       "title": "HELL BENT",
//       "author": "Leigh Bardugo",
//       "description": "The second book in the Alex Stern series. Alex risks her future at Lethe and Yale to get Darlington out of purgatory.",
//       "read": false
//   },
//   {
//       "title": "THE CABINET OF DR. LENG",
//       "author": "Douglas Preston and Lincoln Child",
//       "description": "The 21st book in the Pendergast series. Constance Greene travels back in time to prevent the deaths of her siblings.",
//       "read": false
//   },
//   {
//       "title": "MAD HONEY",
//       "author": "Jodi Picoult and Jennifer Finney Boylan",
//       "description": "After returning to her hometown, Olivia McAfee’s son gets accused of killing his crush.",
//       "read": false
//   },
//   {
//       "title": "REMARKABLY BRIGHT CREATURES",
//       "author": "Shel Van Pelt",
//       "description": "A widow working the night shift at the Sowell Bay Aquarium is aided in solving a mystery by a giant Pacific octopus living there.",
//       "read": false
//   },
//   {
//       "title": "THE MIDNIGHT LIBRARY",
//       "author": "Matt Haig",
//       "description": "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
//       "read": false
//   },
//   {
//       "title": "HORSE",
//       "author": "Geraldine Brooks",
//       "description": "The story of a racehorse, an enslaved groom and an itinerant painter reverberates in three different eras.",
//       "read": false
//   },
//   {
//       "title": "THE LAST THING HE TOLD ME",
//       "author": "Laura Dave",
//       "description": "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.",
//       "read": false
//   }
// ]
