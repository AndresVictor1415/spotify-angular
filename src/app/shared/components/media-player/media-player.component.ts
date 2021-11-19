import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://m.media-amazon.com/images/I/718v3CSWHwL._SL1200_.jpg',
    album: 'Tiësto',
    name: 'Red Lights',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
