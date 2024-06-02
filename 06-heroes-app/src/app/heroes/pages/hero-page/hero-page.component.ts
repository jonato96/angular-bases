import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: `
    .hero-card {
      max-width: 400px;
    }
  `
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;
  
  private heroesService = inject(HeroesService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(    
      delay(250),
      switchMap(({id}) => this.heroesService.getHeroesById(id))
    ).subscribe( hero => {
      if (!hero) return this.router.navigate(['/heroes/list']);      
      this.hero = hero;
      return;
    })    

  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
