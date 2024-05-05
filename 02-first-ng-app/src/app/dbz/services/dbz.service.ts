import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {    

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

    onNewCharacter(character: Character): void {        
        this.character.push(character);
    }

    onDeleteCharacter(index: number): void {
        this.character.splice(index, 1);
    }
    
}