import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
   </div>`
})

export class HeroDetailComponent {
  @Input() hero: Hero;
  /*All it does is receive a hero object through its hero
   input property and then bind to that property with its
   template.*/
}
