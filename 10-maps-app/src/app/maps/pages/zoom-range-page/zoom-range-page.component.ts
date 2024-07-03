import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy { 

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
    this.mapListerner();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListerner() {
    if (!this.map) throw 'Map not init';
    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });
    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });
    this.map.on('move', () => {
      this.currentlngLat = this.map!.getCenter();
      const {lng, lat} = this.currentlngLat;
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChange(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}
