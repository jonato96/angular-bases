import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
    }

    updateHero(hero: Hero): Observable<Hero> {
        if(!hero.id) throw Error('Hero id is required');
        return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
    }

    deleteHeroById(id: string): Observable<boolean> {        
        return this.http.delete<boolean>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            map( response => true ),
            catchError( err => of(false) ),
        );
    }
    
}