import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TabsComponent } from './tabs/tabs.component';
import { BooksComponent } from './books/books.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BooksComponent,
    MoviesComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
