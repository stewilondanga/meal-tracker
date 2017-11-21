import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MEALS } from '../mock-meal'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meals = 'Cabbage'

  meal: Meal = {
    calorie: 1,
    name: 'Cabbage'
  };

  mealz = MEALS;
  
  constructor() { }

  ngOnInit() {
  }

}
