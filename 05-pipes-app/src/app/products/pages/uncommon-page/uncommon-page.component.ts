import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Jonathan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = this.name.match('Elena') ? 'Jonathan' : 'Elena';
    this.gender = this.gender.match('female') ? 'male' : 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    if (this.clients.length === 0) this.clients = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Melissa', 'Natalia'];
    this.clients.shift();
  }

  //Slice Pipe
  public products: string[] = ['SmartPhone', 'Laptop', 'Monitor', 'Keyboard', 'Mouse'];

  //KeyValue Pipe
  public person = {
    name: 'Jonathan',
    age: '28',
    address: 'Quito, Ecuador'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })



}
