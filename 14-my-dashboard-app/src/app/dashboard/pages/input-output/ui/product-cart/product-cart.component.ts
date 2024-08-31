import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCartComponent {

  // @Input({required: true}) product!: Product;
  public product = input.required<Product>();

  // @Output() onIncrementQuantity = new EventEmitter<number>();
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loggerEffect = effect( () => {
    console.log(this.product().name)
  } )

}
