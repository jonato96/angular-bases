import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];
    private baseUrl: string = 'https://restcountries.com/v3.1';

    constructor(
        private http: HttpClient
    ) { }

    get regions(): Region[] {
        return [...this._regions]
    }

    getCountriesByRegion(region: Region): Observable<SmallCountry[]> {

        if (!region) of([]);

        const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

        return this.http.get<Country[]>(url)
        .pipe(
            map(countries => countries
                .map(country => (
                    {
                        name: country.name.common,
                        cca3: country.cca3,
                        borders: country.borders ?? []
                    }
                ))
            ),            
        );        

    }

    getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
        
        const url: string = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
        return this.http.get<Country>(url)
        .pipe(
            map(country => ({
                name: country.name.common,
                cca3: country.cca3,
                borders: country.borders ?? []
            }))
        )
    }

    getCountryBordersByCode(borders: string[]): Observable<SmallCountry[]> {

        if (!borders || borders.length === 0) of([]);

        const countriesRequest: Observable<SmallCountry>[] = [];
        borders.forEach( code => {
            const request = this.getCountryByAlphaCode(code);
            countriesRequest.push(request);
        });

        return combineLatest(countriesRequest)

    }


    
}