import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'books', component: MyBooksComponent
  },
  {
    path: 'books/:id', component: BookDetailsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
