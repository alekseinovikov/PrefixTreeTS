import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PrefixTreeComponent} from './prefix-tree/prefix-tree.component';

@NgModule({
    declarations: [
        AppComponent,
        PrefixTreeComponent,
        PrefixTreeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
