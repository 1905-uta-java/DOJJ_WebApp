import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RefreshComponent } from './components/refresh/refresh.component';

const routes: Routes = [
  {path: 'home',
  component: HomeComponent},
  {path: 'search/:result',
  component: SearchComponent},
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full'},
  {path : 'movie/:id',
  component : MovieComponent},
  {path : 'profile/:user',
  component : ProfileComponent},
  {path: 'signup',
  component: SignupFormComponent},
  {path: 'changepassword',
  component: ChangePasswordComponent},
  {path: 'refresh',
  component: RefreshComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
