import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { ChildOfAppComponent } from './child-of-app/child-of-app.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ChildOfAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent, OtherComponent]
})
export class AppModule { }
