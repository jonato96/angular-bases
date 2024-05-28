import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'  
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    switch(sortBy){
      case 'name':
         return heroes.sort((x,y) => (x.name > y.name) ? 1 : -1);

      case 'canFly':
         return heroes.sort((x,y) => (x.canFly > y.canFly) ? 1 : -1);

      case 'color':
         return heroes.sort((x,y) => (x.color > y.color) ? 1 : -1);
         
      default: return heroes;
    }
  }

}
