import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/country.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  private countriesService = inject(CountriesService);

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
    .subscribe(c => {
      this.countries = c;
      this.isLoading = false;
    });
  }

}
