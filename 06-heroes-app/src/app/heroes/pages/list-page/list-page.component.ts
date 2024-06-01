import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroresService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  
  public heroes: Hero[] = [];
  private heroesService = inject(HeroresService);
  
  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }


}
