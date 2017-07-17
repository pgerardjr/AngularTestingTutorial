import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserService }      from './model/user.service';
import { HeroDetailComponent } from './hero-detail.component';
// import {WelcomeComponent} from './welcome.component';
// import {BannerComponent} from './banner-inline.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    [ UserService ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
