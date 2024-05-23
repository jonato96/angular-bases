import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  private countryService = inject(CountriesService);

  public countries: Country[] = [];
  public initialValue: string = "";
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countryService.searchCapital(term)
    .subscribe( c => {
      this.countries = c;
      this.isLoading = false;
    });
  }

}
