import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  public sideBarItems = [
    { label: 'Listado', icon: 'label', url: './list' }, 
    { label: 'Añadir', icon: 'add', url: './new' }, 
    { label: 'Buscar', icon: 'search', url: './search' }, 
  ];

  get user(): User | undefined{
    return this.authService.currentUser;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
