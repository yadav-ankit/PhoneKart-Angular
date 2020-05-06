import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster/poster.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TvmazeComponent, PosterComponent],
  imports: [CommonModule,HttpClientModule],
  exports: [PosterComponent]
})
export class TvmazeModule { }
