import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar: </h5>
    <input 
      type="text" 
      class="form-control" 
      placeholder="Buscar Gif"
      (keyup.enter)="searchTag()"
      #txtTagInput
    >  
  `  
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  private gifService = inject(GifsService);

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
