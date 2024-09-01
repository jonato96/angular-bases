import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './material.component.html',
  styles: ``
})
export default class MaterialComponent {



}
