import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MEALS } from '../mock-meal'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meals: Meal[];
  selectedMeal: Meal;
  title: string;

  constructor() {
    this.meals = MEALS;
    this.title = "Meal Tracker";
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
  }


  ngOnInit() {
  }

}
