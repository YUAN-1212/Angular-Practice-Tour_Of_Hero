import { MessageService } from './../message.service';

import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes ?: Hero[] ;
  //selectedHero?: Hero;


  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  // }

  constructor(private heroService:HeroService){

  }

  getHeroes(): void{
    console.log('HeroesComponent getHeroes');

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

 ngOnInit(): void {
   console.log('HeroesComponent ngOnInit');
   this.getHeroes();

 }

}
