import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  id?: any = ''

  constructor(private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      console.log(params);
      this.id = params.get('id')
    })
  }
}
