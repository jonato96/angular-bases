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
  public isLoading: boolean = false;

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countryService.searchCapital(term)
    .subscribe( c => {
      this.countries = c;
      this.isLoading = false;
    });
  }

}
