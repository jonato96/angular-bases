import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public zoom: number = 14;
  public map?: Map;
  public currentlngLat: LngLat = new LngLat(-78.52650066560761, -0.3371870839917648);

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

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(longLat: LngLat, color: string = 'red') {
    if (!this.map) return;
    const marker = new Marker({
      color: color,
      draggable: true
      })
      .setLngLat(longLat)
      .addTo(this.map);

    this.markers.push({marker, color});
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1)
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom:14,
      center: marker.getLngLat()
    })

  }


}
