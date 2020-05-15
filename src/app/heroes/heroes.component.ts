import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';
  constructor() { }
  @Input() heroName: string;

  ngOnInit() {

  }

}
