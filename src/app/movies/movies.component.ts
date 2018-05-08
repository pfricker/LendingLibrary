import { Component } from '@angular/core';
import { IMovie } from './movie';

@Component ({
  selector: 'movie-content',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: IMovie[] = [
    {
      "title": "John Wick",
      "year": 2014,
      "format": "Blu-Ray",
      "available": true
    },
    {
      "title": "The Fellowship of the Ring",
      "year": 2001,
      "format": "DVD",
      "available": false
    },
    {
      "title": "Thor: Ragnarok",
      "year": 2017,
      "format": "Blu-Ray",
      "available": true
    }
  ]
}
