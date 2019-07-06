import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { ProfileComponent } from './components/profile/profile.component';

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
  {path : 'profile', 
  component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
