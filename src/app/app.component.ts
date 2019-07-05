import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review';
  baseUrl : string = "https://api.themoviedb.org/3/search/movie?api_key=19fd2eec2c34304e81d242a6fe7020f5&language=en-US&query=";
  cleanInput : string = "";
  requestUrl = "";
  currentMovie : Movie = {title : undefined, description : undefined, id : undefined};
  apiKey : string = "19fd2eec2c34304e81d242a6fe7020f5";
  returnedSearch : any = [];
  constructor(private SearchService : SearchService, private router : Router) { }

  ngOnInit() 
  {
    
  }

  getSearchResults(userSearch : string)
  {
    // clean user results to fit API calls
    console.log("YOUR CALLBACK FUNCTION is being called!");
    console.log(userSearch + "is the value you entered!");
    this.cleanInput = userSearch.replace(' ', "%20");
    console.log(this.cleanInput + " IS THE USER INPUT REPLACED WITH SPACES!");
    this.router.navigate([`search/${this.cleanInput}`]);
  }
}
