import { Component } from '@angular/core';
import { IMusic } from './music';

@Component ({
  selector: 'music-content',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent {
  albums: IMusic[] = [
    {
      "albumTitle": "Leave a Trace",
      "artist": "Chvches",
      "format": "Vinyl",
      "available": true
    },
    {
      "albumTitle": "Graceland",
      "artist": "Paul Simon",
      "format": "CD",
      "available": false
    },
    {
      "albumTitle": "Nine Tonight",
      "artist": "Bob Segar",
      "format": "Cassette",
      "available": true
    }
  ]
}
