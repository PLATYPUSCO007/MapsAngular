import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map') public map?: ElementRef;
  
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoicGxhdHlwdXNjbzAwNyIsImEiOiJjbGdnajhwMm4wYnp5M2dvMnk1dmFyOWt4In0.r-yqpAb_XOXsT04Hut_6lQ',
      container: this.map?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }


}
