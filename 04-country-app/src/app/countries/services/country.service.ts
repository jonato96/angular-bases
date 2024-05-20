import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private http = inject(HttpClient);

    private url: string = 'https://restcountries.com/v3.1';

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( () => of([]) ),
            delay( 1000 )
        );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        return this.http.get<Country[]>(`${ this.url }/alpha/${ code }`)
        .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError( () => of(null))
        );
    }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${ this.url }/capital/${ term }`;
        return this.getCountriesRequest(url);
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${ this.url }/name/${ term }`;
        return this.getCountriesRequest(url);
    }

    searchRegion(term: string): Observable<Country[]> {
        const url = `${ this.url }/region/${ term }`;
        return this.getCountriesRequest(url);
    }
    
}