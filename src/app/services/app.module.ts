import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, OnInit } from '@angular/core';
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
import { ProfileComponent } from './components/profile/profile.component';
import { DisplayReviewsComponent } from './components/display-reviews/display-reviews.component';
import { TheatresComponent } from './theatres/theatres.component';
import { DataService } from './services/data.service';
import { TheatresNearbyService } from './services/theatres-nearby.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppErrorHandler } from './common/validators/app-error-handler';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';


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
    ProfileComponent,
    DisplayReviewsComponent,
    TheatresComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    NewReleasesComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    TheatresNearbyService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit() {
    localStorage.setItem('isLoggedIn', 'false');
  }
}
