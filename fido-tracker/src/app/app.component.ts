import { Component, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DeviceInfoComponent } from './device-info/device-info.component';
import {} from 'googlemaps';
import {  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @ViewChild('map') mapElement: any;
  map!: google.maps.Map;

  title = 'fido-tracker';
  lastUpdated = '1 hour';
  lat = 51.678418;
  lng = 7.809007;
  zoomAmt = 8;  //default zoom is 8
  latestCoordinates = new google.maps.LatLng(this.lat, this.lng);

  mostRecentMarker = new google.maps.Marker({
    position: this.latestCoordinates,
    map: this.map
  });

  mapOptions: google.maps.MapOptions = {
    center: this.latestCoordinates,
    zoom: this.zoomAmt
  };

  ngOnInit() {
    //anything in here loads on app being opened

  }
  
  initializeMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    //add marker to map so it is visible
    this.mostRecentMarker.setMap(this.map);
  }
  
  
}
