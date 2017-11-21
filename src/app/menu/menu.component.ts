import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

}
