import { Component } from '@angular/core';

@Component ({
  selector: 'movie-content',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: any[] = [
    {
      "title": "John Wick",
      "year": 2014,
      "format": "Blu-Ray",
      "Available": true
    },
    {
      "title": "The Fellowship of the Ring",
      "year": 2001,
      "format": "DVD",
      "Available": false
    },
    {
      "title": "Thor: Ragnarok",
      "year": 2017,
      "format": "Blu-Ray",
      "Available": true
    }
  ]
}
