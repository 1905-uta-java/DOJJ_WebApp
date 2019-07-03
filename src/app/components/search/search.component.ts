import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results : any = [];

  constructor(private route : ActivatedRoute) {}
  ngOnInit() 
  {
    this.route.params.subscribe(params => 
      {
        this.results = params["results"];


      });
      console.log(this.results);
  }
}