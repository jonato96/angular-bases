import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: 'jonato@mail.com',
    first_name: 'Jonathan',
    last_name: 'Sanchez',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}`)

  onFieldUpdate(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }));

    this.user.update( current => {

      switch( field ) {
        case 'email': current.email = value;
        break;

        case 'avatar': current.avatar = value;
        break;

        case 'first_name': current.first_name = value;
        break;

        case 'last_name': current.last_name = value;
        break;

        case 'id': current.id = Number(value);
        break;
      }

      return current;
    });
    
    console.log(field, value);
  }

}
