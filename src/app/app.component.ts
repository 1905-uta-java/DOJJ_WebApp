import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review';

  currentMovie : Movie = {title : undefined, description : undefined, id : undefined};
  apiKey : string = "19fd2eec2c34304e81d242a6fe7020f5";

  constructor(private SearchService : SearchService) { }

  ngOnInit() 
  {

  }

  getSearchResults(userSearch : string)
  {
    console.log("YOUR CALLBACK FUNCTION is being called!");
    console.log(userSearch + "is the value you entered!");
  }
}
