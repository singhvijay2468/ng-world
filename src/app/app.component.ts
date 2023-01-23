import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOut';
  ParentFruit='Mangoes';
  Fruits = ['Cherry','BlueBerry','Orange'];

  addFruit(newFruits: string){

    this.Fruits.push(newFruits);
  }
}
