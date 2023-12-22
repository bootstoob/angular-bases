import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './../../counter.component.html',
  styleUrls: ['./../../counter.component.css'],
})
export class CounterComponent {
  public title:string = 'hola mundo';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter+=value;
  }
  resetCounter(){
    this.counter=10;
  }

}
