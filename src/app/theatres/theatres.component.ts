import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { TheatresNearbyService } from '../services/theatres-nearby.service';
import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})

export class TheatresComponent implements OnInit {
  popcornIcon = L.icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'https://res.cloudinary.com/davd4ynha/image/upload/v1562383672/popcorn.jpg'
  });

  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' }),
      'Water Color': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    }
  };

  options = {
    layers: [],
    zoom: 10,
    // TODO change initial center to ip of user
    center: L.latLng(32.730625, -97.114043)
  };
  markers: Layer[] = [];

  addMarker(x: number, y: number, name: string, address: string) {
    const newMarker = marker([x, y], { icon: this.popcornIcon}).bindPopup(name + '<br>' + address);
    this.markers.push(newMarker);
  }

  // showTheatreName(){
  //   console.log("hi!");
  // }
  constructor(private service: TheatresNearbyService) {}

    ngOnInit() {
      // theatres nearby holds array of objects
      // from http response
      let theatresNearby: any;
      const latArray = [];
      const lonArray = [];
      const nameArray = [];
      const addressArray = [];

      this.options = {
        layers: [
          L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
        ],
        zoom: 10,
        // TODO change initial center to ip of user
        center: L.latLng(32.730625, -97.114043)
      };


      this.service.getAll()
        .subscribe(theatres => {
            // returns an array of objects
            theatresNearby = theatres;
            // parse to cinemas array
            theatresNearby = theatresNearby.cinemas;
            for (let i=0; i<theatresNearby.length; i++) {
              latArray.push(theatresNearby[i].location.lat);
              lonArray.push(theatresNearby[i].location.lon);
              nameArray.push(theatresNearby[i].name);
              addressArray.push(theatresNearby[i].location.address.display_text);
            }
            // pass each lat long as argument into addMarker method
            for (let i = 0; i < theatresNearby.length; i++) {
              this.addMarker(latArray[i], lonArray[i], nameArray[i], addressArray[i]);
            }

          });
    }
}
