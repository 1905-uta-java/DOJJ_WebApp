import { Component, OnInit, Inject } from '@angular/core';
import * as L from 'leaflet';
import { TheatresNearbyService } from '../services/theatres-nearby.service';
import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';
import { MyUserServService } from '../services/my-user-serv.service';


@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css'],
  providers: [
    { provide: 'TheatresNearbyService', useClass: TheatresNearbyService },
    { provide: 'MyUserServService', useClass: MyUserServService }
  ]
})

export class TheatresComponent implements OnInit {
  map: L.Map;
  
  constructor(
    @Inject(TheatresNearbyService) private theatresService: TheatresNearbyService,
    @Inject(MyUserServService) private userService: MyUserServService
    ) {}

  popcornIcon = L.icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'https://res.cloudinary.com/davd4ynha/image/upload/v1562383672/popcorn.jpg'          
  });

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    ],
    zoom: 11,
    // this view will change upon ip address reception
    // center: L.latLng(32.730625, -100.114043)
  };
  markers: Layer[] = [];

	addMarker(x:number,y:number,name:string,address: string) {
		const newMarker = marker([x,y],{icon: this.popcornIcon}).bindPopup(name+'<br>'+address);
		this.markers.push(newMarker);
	}

  
  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' }),
      'Water Color': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    }
  }
	onMapReady(map: L.Map) {
		this.map = map;
  }
  changeView(x: number, y: number) {
    this.map.panTo(new L.LatLng(x,y));
	}

    ngOnInit() {
      // theatres nearby holds array of objects
      // from http response
      let theatresNearby: any;
      let latArray= [];
      let lonArray= [];
      let nameArray= [];
      let addressArray= [];
      let x: number;
      let y: number;
        //Init the user Servies for Get The client IP Adress.
      
      let ipInfo: any;
      // get the reference to the map
      this.userService.getIpAddress()
      .subscribe(ipInfoOfUser => { ipInfoOfUser = ipInfoOfUser 
        ipInfo = ipInfoOfUser;
        x = ipInfo.latitude;
        y = ipInfo.longitude;
        localStorage.setItem('x', `${x}`);
        localStorage.setItem('y', `${y}`);
        // call change view once new
        // coordinates have been returned
        this.changeView(x,y);
        // nest call to get theatres
        // xy values are needed first
        this.theatresService.getAll()
        .subscribe(theatres =>{ theatres =  theatres;
            // returns an array of objects
            theatresNearby = theatres;
            // parse to cinemas array
            theatresNearby = theatresNearby.cinemas;
              console.log(theatresNearby);
            for (let i=0; i<theatresNearby.length; i++){
              latArray.push(theatresNearby[i].location.lat);
              lonArray.push(theatresNearby[i].location.lon);
              nameArray.push(theatresNearby[i].name);
              addressArray.push(theatresNearby[i].location.address.display_text)
            }
            // pass each lat long as argument into addMarker method
            for (let i=0; i<theatresNearby.length; i++){
              this.addMarker(latArray[i],lonArray[i],nameArray[i],addressArray[i]);
            }
          })
      });
    }
}

