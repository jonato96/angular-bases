import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = "";

  @Output()
  public onValue = new EventEmitter<string>();

  // @ViewChild('txtInput')
  // public tagInput!: ElementRef<HTMLInputElement>

  emitSearch( term: string) {
    // const term = this.tagInput.nativeElement.value;
    this.onValue.emit(term)
  }

}
