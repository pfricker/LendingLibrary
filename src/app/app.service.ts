import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IDataWrapper } from './dataWrapper';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  private _booksUrl = 'http://localhost:8080/api/v2/mysql/_table/book?api_key=4c8ea6f7f8856a5a5ad154980888bc07dbcfa03bc97239072354b0068487ed7b';

    getBooks (): Observable<IDataWrapper[]> {
      return this.http.get<IDataWrapper[]>(this._booksUrl)
    }

    addBook (newBook: IDataWrapper): Observable<IDataWrapper> {
      return this.http.post<IDataWrapper>(this._booksUrl, newBook);
    }

  private _albumsUrl = 'http://localhost:8080/api/v2/mysql/_table/album?api_key=4c8ea6f7f8856a5a5ad154980888bc07dbcfa03bc97239072354b0068487ed7b';

    getAlbums (): Observable<IDataWrapper[]> {
      return this.http.get<IDataWrapper[]>(this._albumsUrl)
    }

    addAlbum (newAlbum: IDataWrapper): Observable<IDataWrapper> {
      return this.http.post<IDataWrapper>(this._albumsUrl, newAlbum);
    }

  private _moviesUrl = 'http://localhost:8080/api/v2/mysql/_table/movie?api_key=4c8ea6f7f8856a5a5ad154980888bc07dbcfa03bc97239072354b0068487ed7b';

    getMovies (): Observable<IDataWrapper[]> {
      return this.http.get<IDataWrapper[]>(this._moviesUrl)
    }

    addMovie (newMovie: IDataWrapper): Observable<IDataWrapper> {      
      return this.http.post<IDataWrapper>(this._moviesUrl, newMovie);
    }


}
