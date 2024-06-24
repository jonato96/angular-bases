import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit {  

  public countriesByRegion: SmallCountry[] = [];

  private fb = inject(FormBuilder);
  private countriesService = inject(CountriesService);

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  ngOnInit(): void {
    this.onRegionChanged();
    
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap(region => this.countriesService.getCountriesByRegion(region))
      // switchMap(this.countriesService.getCountriesByRegion)
    )
    .subscribe( countries => {
      this.countriesByRegion = countries
    });
  }

}
