import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestTakersComponent } from './test-takers/test-takers.component';
import { ListComponent } from './list/list.component';
import { PagerService } from './pager.service';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TestTakersComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
