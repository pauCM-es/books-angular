import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksComponent } from './books/books.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { NavigatorComponent } from './shared/navigator/navigator.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CataloguesService } from './shared/services/catalogues.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatalogeComponent,
    NewBookComponent,
    BooksComponent,
    SearchBookComponent,
    HomeComponent,
    SearchComponent,
    NavigatorComponent,
    FooterComponent,
    MyBooksComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CataloguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
