import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string  = 'jonathan';
  public nameUpper: string = 'JONATHAN';
  public nameTitle: string = 'jONathAN';

  public customDate: Date = new Date();

}
