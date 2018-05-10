import { Component } from '@angular/core';
import { AppService } from '../app.service';


@Component ({
  selector: 'music-content',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent {
  albums: any[] = [];

  constructor(private _appService: AppService) {

  }

  ngOnInit(): void {
    this._appService.getAlbums()
      .subscribe(
        (data: any[]) => this.albums = data.resource,
        (err: any) => console.log(err),
        () => console.log(this.albums)
      );
  }
}
