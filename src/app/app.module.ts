import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksComponent } from './books/books.component';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogeComponent,
    NewBookComponent,
    BooksComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
