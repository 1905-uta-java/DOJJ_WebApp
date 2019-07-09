import { Component, OnInit } from '@angular/core';
import { NewReleasesService } from '../../services/new-releases.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})

export class NewReleasesComponent implements OnInit {
  newReleasesObject: {};
  newReleases: any;
  constructor(private service: NewReleasesService) {}

  ngOnInit() {
      this.service.getAll()
        .subscribe(newReleasesObject => {
          // returns an array of objects
          this.newReleases = newReleasesObject;
          // parse to new movies array
          this.newReleases = this.newReleases.results;
          console.log(this.newReleases);
        });
  }
}
