import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {    

    public character: Character[] = [
        {
            id: uuid(),
            name: "krillin",
            power: 100
        },
        {
            id: uuid(),
            name: "goku",
            power: 9000   
        },
        {
            id: uuid(),
            name: "vegeta",
            power:7500
        }
    ];

    addCharacter(character: Character): void { 
        
        const newCharacter: Character = {
            id: uuid(),
            ...character
        }
        
        this.character.push(newCharacter);
    }

    // onDeleteCharacter(index: number): void {
    //     this.character.splice(index, 1);
    // }

    deleteCharacterById(id: string): void {
        this.character = this.character.filter(c => c.id !== id);
    }
    
}