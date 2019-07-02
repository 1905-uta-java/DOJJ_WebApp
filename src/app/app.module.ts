import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { LoginDropdownComponent } from './login-dropdown/login-dropdown.component';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { RecentsComponent } from './recents/recents.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateReviewComponent } from './create-review/create-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    LoginDropdownComponent,
    AccountDropdownComponent,
    RecentsComponent,
    CreateReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
