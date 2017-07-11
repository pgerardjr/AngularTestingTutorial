import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { UserService } from './model/user.service';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ UserService ],
  declarations: [ WelcomeComponent],
  bootstrap:    [ WelcomeComponent]
})
export class WelcomeModule { }
