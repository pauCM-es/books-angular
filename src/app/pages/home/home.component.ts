import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/i-book';
import { CataloguesService } from 'src/app/shared/services/catalogues.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bestSellers?: any

  constructor(private cataloges: CataloguesService){}

  ngOnInit():void {

  }
}
