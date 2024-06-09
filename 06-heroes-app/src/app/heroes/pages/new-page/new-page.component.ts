import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit{

  
  private formBuilder = inject(FormBuilder);
  private heroesService = inject(HeroesService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  
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
  
  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroesById(id))
    ).subscribe( hero => {
      if (!hero) return this.router.navigateByUrl('/');
      this.heroForm.reset(hero);
      return;
    });
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;
    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero => {
        this.showSnackbar(`${hero.superhero} updated`);
      });
      return;
    }
    this.heroesService.addHero(this.currentHero)
    .subscribe(hero => {
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero} created`);
    });    
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Erro id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
    .pipe(
      filter((result: boolean) => result),
      switchMap( () => this.heroesService.deleteHeroById(this.currentHero.id)),
      filter( (wasDeleted: boolean) => wasDeleted),
    )
    .subscribe( result => {
      this.router.navigate(['/heroes']);
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (!result) return;

    //   this.heroesService.deleteHeroById(this.currentHero.id)
    //   .subscribe( wasDeleted => {
    //     if (wasDeleted) this.router.navigate(['/heroes']);
    //   });
    // });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500
    });
  }

}
