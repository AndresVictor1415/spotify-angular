import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://m.media-amazon.com/images/I/718v3CSWHwL._SL1200_.jpg',
    album: 'Tiësto',
    name: 'Red Lights',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
