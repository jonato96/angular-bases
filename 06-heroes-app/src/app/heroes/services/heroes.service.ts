import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environmets } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroresService {

    private baseUrl: string = environmets.baseUrl;
    private http = inject(HttpClient);  
    
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }
    
}