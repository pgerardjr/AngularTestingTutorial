import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {HeroesComponent} from './heroes.component';
import {UserService} from './model/user.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';

import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
// import {WelcomeComponent} from './welcome.component';
// import {BannerComponent} from './banner-inline.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, HeroService],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
