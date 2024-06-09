import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {

    private authService = inject(AuthService);
    private router = inject(Router);
  
    constructor() { }
  
    private checkAuthStatus(): boolean | Observable<boolean> {
        return this.authService.checkAuthentication()
        .pipe(
            tap( isAuthenticated => {
                if (isAuthenticated) this.router.navigate(['./']);                
            }),
            map( isAuthenticated => !isAuthenticated)            
        )
    }
  
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }
    
  }