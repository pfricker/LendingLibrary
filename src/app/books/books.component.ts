import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';


@Component ({
  selector: 'book-content',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: any[] = [];

  constructor(private _appService: AppService) {

  }

  ngOnInit(): void {
    this._appService.getBooks()
      .subscribe(
        (data: any[]) => this.books = data.resource,
        (err: any) => console.log(err),
        () => console.log(this.books)
    );
  }

}
