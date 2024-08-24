import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-container ></ng-container>
    </section>
  `,
  styles: ``
})
export class HeavyLoadersFastComponent {

  @Input({required: true})
  cssClass!: string;

  constructor() {
    console.log('Heavy Loader Created')
  }

}
