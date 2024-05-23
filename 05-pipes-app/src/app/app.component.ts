import { Component, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  private primeNgConfig = inject(PrimeNGConfig);

  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
