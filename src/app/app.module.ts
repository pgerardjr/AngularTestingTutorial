import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserService }      from './model/user.service';


@NgModule({
  imports:      [ BrowserModule ],
  providers:    [UserService],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent],
})
export class AppModule { }
