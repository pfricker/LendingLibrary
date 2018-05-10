import { Component } from '@angular/core';
import { BookService } from "./books/books.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  title = 'Office Lending Library';
}
