import { Component, OnInit, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  
  private countriesService = inject(CountriesService);
  
  public countries: Country[] = [];
  public initValue: string = "";
  public isLoading: boolean = false;
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
    .subscribe(c => {
      this.countries = c;
      this.isLoading = false;
    });
  }

}
