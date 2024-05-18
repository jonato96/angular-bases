import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  private countriesService = inject(CountriesService);

  public countries: Country[] = [];

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term)
    .subscribe(c => this.countries = c);
  }

}
