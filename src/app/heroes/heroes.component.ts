import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
//taking the interface then importing it into the heroes component so that it can
//be exported from the this component and used in the heroes html.
 hero: Hero ={
  id: 1,
  name: 'Christa',
  city: 'Detroit',
  item: 'magic wand'
 };

  constructor() { }
  @Input() heroName: string;

  ngOnInit() {

  }

}
