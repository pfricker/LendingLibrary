import { Component } from '@angular/core';

@Component ({
  selector: 'book-content',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
  books: any [] = [
    {
      "bookID": 1,
      "title": "Harry Potter and the Prisoner of Azkaban",
      "author": "J.K. Rowling",
      "format": "Hardcover",
      "available": "NO"
    },
    {
      "bookID": 2,
      "title": "Dresden Files: Cold Days",
      "author": "Jim Butcher",
      "format": "Paperback",
      "available": "YES"
    },
    {
      "bookID": 3,
      "title": "Old Man's War",
      "author": "John Scalzi",
      "format": "Paperback",
      "available": "YES"
    },
  ]
}
