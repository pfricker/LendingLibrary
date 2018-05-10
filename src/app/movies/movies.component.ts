import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { IDataWrapper } from '../dataWrapper';

@Component ({
  selector: 'movie-content',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies: any[] = [];

  constructor(private _appService: AppService) {

  }

  ngOnInit(): void {
    this._appService.getMovies()
      .subscribe(
        (data: IDataWrapper[]) => this.movies = data,
        (err: any) => console.log(err),
        () => console.log(this.movies)
    );
  }

  }
