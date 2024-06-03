import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environmets } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl: string = environmets.baseUrl;
    private http = inject(HttpClient);  
    
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHeroesById(id: string): Observable<Hero|undefined> {
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(error => of(undefined))
        );
    }

    getSuggestions(query: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);    
    }
    
}