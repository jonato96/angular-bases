import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    public character: Character[] = [
        {
            name: "krillin",
            power: 100
        },
        {
            name: "goku",
            power: 9000   
        },
        {
            name: "vegeta",
            power:7500
        }
    ];
}