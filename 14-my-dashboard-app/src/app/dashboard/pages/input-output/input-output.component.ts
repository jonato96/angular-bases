import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCartComponent } from "./ui/product-cart/product-cart.component";
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ProductCartComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputOutputComponent implements OnDestroy{

  public products = signal<Product[]>([
    {
      id: 1, 
      name: 'Producto 1',
      quantity: 0
    },
    {
      id: 2, 
      name: 'Producto 2',
      quantity: 0
    }
  ]);

  private intervalSubscription = interval(1000).pipe(
    tap( () => {
      this.products.update( (products) => [
        ...products,
        {
          id: this.products.length + 1, 
          name: `Producto ${this.products.length + 1}`,
          quantity: 0
        }
      ])

    }),
    take(7)
  ).subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
