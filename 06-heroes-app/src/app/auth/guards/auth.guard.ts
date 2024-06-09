import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {

    private authService = inject(AuthService);
    private router = inject(Router);

    constructor() { }

    private checkAuthStatus(): boolean | Observable<boolean> {
        return this.authService.checkAuthentication()
        .pipe(
            tap( isAuthenticated => {
                if (!isAuthenticated) this.router.navigate(['./auth/login'])
            }),
            
        )
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }
    
}