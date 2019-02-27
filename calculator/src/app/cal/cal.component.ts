import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  public firstNum: number;
  public secondNum: number;
  public result: number;

  cal_add() {
    this.result = this.firstNum+this.secondNum;
  }

  cal_subtract() {
    this.result = this.firstNum-this.secondNum;
  }

  cal_divide() {
    this.result = this.firstNum/this.secondNum;
  }

  cal_multiply() {
    this.result = this.firstNum*this.secondNum;
  }

  constructor() { }

  ngOnInit() {
  }

}
