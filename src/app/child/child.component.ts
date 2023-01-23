import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() Fruit="Banana";
  @Output() newFruitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewFruit(value: string){
    this.newFruitEvent.emit(value);
  }

}
