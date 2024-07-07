import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 7;
  public map?: Map;
  public currentlngLat: LngLat = new LngLat(-78.37311918367845, -1.0491275627647099);

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'Element not found';    

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Jonathan'
    
    // const marker = new Marker({
    //   color: 'red',
    //   // element: markerHtml,
    // })
    // .setLngLat(this.currentlngLat)
    // .addTo(this.map);
  }


}
