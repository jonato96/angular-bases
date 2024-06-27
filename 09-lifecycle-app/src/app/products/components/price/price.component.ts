import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
  
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('child-componente ** ngOnInit');
    this.interval$ = interval(1000).subscribe(value => console.log(`Interval ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('child-componente ** ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('child-componente ** ngOnDestroy');
    this.interval$?.unsubscribe();
  }
  
}
