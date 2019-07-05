import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {path: 'home',
  component: HomeComponent},
  {path: 'search/:result',
  component: SearchComponent},
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full'},
  {path : 'movie/:id',
  component : MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
