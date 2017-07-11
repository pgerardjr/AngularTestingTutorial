import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BannerComponent } from './banner-inline.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BannerComponent],
  bootstrap:    [ BannerComponent],
})
export class BannerModule { }
