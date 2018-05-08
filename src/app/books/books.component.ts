import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBook } from './book';

@Component ({
  selector: 'book-content',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: IBook [] = [
    {
      "bookID": 1,
      "title": "Harry Potter and the Prisoner of Azkaban",
      "author": "J.K. Rowling",
      "format": "Hardcover",
      "available": false
    },
    {
      "bookID": 2,
      "title": "Dresden Files: Cold Days",
      "author": "Jim Butcher",
      "format": "Paperback",
      "available": true
    },
    {
      "bookID": 3,
      "title": "Old Man's War",
      "author": "John Scalzi",
      "format": "Paperback",
      "available": true
    },
  ]
}
