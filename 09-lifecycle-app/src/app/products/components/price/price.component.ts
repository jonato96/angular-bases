import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  ngOnDestroy(): void {
    console.log('price-componente ** ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('price-componente ** ngOnChanges');
  }
  ngOnInit(): void {
    console.log('price-componente ** ngOnInit');
  }

  @Input()
  public price: number = 0;

}
