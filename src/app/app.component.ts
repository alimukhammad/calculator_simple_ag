import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator_simple_ag';

  
  public num1: number;
  public num2: number;
  // public num3: number = 0;
  public result: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
    
  }

  add(){
    this.result = this.num1 + this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
  }
  mul(){
    this.result = this.num1 * this.num2;
  }
  div(){
    this.result = this.num1 / this.num2;
  }
}
