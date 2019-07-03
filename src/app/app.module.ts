import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoginDropdownComponent } from './components/login-dropdown/login-dropdown.component';
import { AccountDropdownComponent } from './components/account-dropdown/account-dropdown.component';
import { RecentsComponent } from './components/recents/recents.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { RatingComponent } from './components/rating/rating.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    LoginDropdownComponent,
    AccountDropdownComponent,
    RecentsComponent,
    CreateReviewComponent,
    RatingComponent,
    SignupFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
