import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  
  private countriesService = inject(CountriesService);
  
  public countries: Country[] = [];  
  public selectedRegion?: Region;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term;
  }

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
