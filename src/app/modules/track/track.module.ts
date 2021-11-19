import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TrackPageComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule,
    SharedModule
  ]
})
export class TrackModule { }
