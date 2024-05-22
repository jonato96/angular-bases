import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, SubjectLike, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{

  
  private debouncer: Subject<string> = new Subject();
  
  @Input()
  public placeholder: string = "";
  
  // @Output()
  // public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(
      value => {
        this.onDebounce.emit(value);
      }
    );
  }
  // @ViewChild('txtInput')
  // public tagInput!: ElementRef<HTMLInputElement>

  // emitSearch( term: string) {
  //   // const term = this.tagInput.nativeElement.value;
  //   this.onValue.emit(term)
  // }

  onKeyPress(searchTerm: string) {    
    this.debouncer.next(searchTerm);
  }

}
