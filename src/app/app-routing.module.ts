import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  {path: 'home',
  component: HomeComponent},
  {path: 'search',
  component: SearchComponent},
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full'},
  {path: 'signup',
  component: SignupFormComponent},
  {path: 'changepassword',
  component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
