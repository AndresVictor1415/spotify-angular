import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  mockTrackList = [
    {
      name: 'BEBE'
    },
    {
      name: 'Besas tan bien'
    },
    {
      name: 'Fantasias'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
