import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public sortBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'green lantern',
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.sortBy = value;
  }

}
