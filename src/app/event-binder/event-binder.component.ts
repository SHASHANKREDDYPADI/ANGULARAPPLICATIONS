import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binder',
  templateUrl: './event-binder.component.html',
  styleUrls: ['./event-binder.component.css']
})
export class EventBinderComponent implements OnInit {

  number1=10;
  number2=30;

  sum(){
    alert(this.number1+this.number2);
  }
  difference(){
    alert(this.number1-this.number2);
  }
  product(){
    alert(this.number1*this.number2);
  }
  division(){
    alert(this.number1/this.number2);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
