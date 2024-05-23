import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CashStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private http = inject(HttpClient);

    private url: string = 'https://restcountries.com/v3.1';

    public cacheStore: CashStore = {
        byCapital: {
            term: '',
            countries: []
        },
        byCountry: {
            term: '',
            countries: []
        },
        byRegion: {
            term: '',
            countries: []
        }
    };

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( () => of([]) ),
            // delay( 1000 )
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
        return this.getCountriesRequest(url)
        .pipe(
          tap(countries => this.cacheStore.byCapital = {term, countries})  
        );
        
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${ this.url }/name/${ term }`;
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byCountry = {term, countries})
        );
    }

    searchRegion(term: Region): Observable<Country[]> {
        const url = `${ this.url }/region/${ term }`;
        return this.getCountriesRequest(url)
        .pipe(
            tap( countries => this.cacheStore.byRegion = {term, countries})
        );
    }
    
}