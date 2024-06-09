import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  private formBuilder = inject(FormBuilder);
  private heroesService = inject(HeroesService);

  public heroForm = this.formBuilder.nonNullable.group<Hero>({
    id: '',
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',    
    first_appearance: '',
    characters: '',
    alt_img: ''    
  });

  public publishers = [
    {
      id: 'DC Comics', desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics', desc: 'Marvel - Comics'
    }
  ];

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;
    
  }

}
