import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItem: MenuItem[] = [
    { name: 'Full Screen', route: '/maps/fullscreen' },
    { name: 'Zoom Range', route: '/maps/zoom-range' },
    { name: 'Markers', route: '/maps/markers' },
    { name: 'Houses', route: '/maps/properties' },
    { name: 'Alone Page', route: '/alone' },
  ]

}
