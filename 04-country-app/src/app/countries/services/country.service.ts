import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private http = inject(HttpClient);

    private url: string = 'https://restcountries.com/v3.1';

    searchCapital(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.url }/capital/${ term }`);
    }
    
}