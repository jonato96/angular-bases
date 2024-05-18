import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  private countryService = inject(CountriesService);

  public countries: Country[] = [];

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term)
    .subscribe( c => {
      this.countries = c;
    });
  }

}
