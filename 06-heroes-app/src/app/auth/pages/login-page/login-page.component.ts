import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  
  onLogin(): void {
    this.authService.login('jonathan', 'jonathan@mail.com')
    .subscribe( user => {
      this.router.navigate(['/']);
    })
  }

}
