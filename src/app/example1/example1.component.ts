import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  number1=10;
  number2=30;

  sum(){
    alert(this.number1+this.number2);
  }
  difference(){
    alert(this.number1-this.number2);
  }
  mul(){
    alert(this.number1*this.number2);
  }
  division(){
    alert(this.number1/this.number2);
  }
  square(){
    alert(this.number1*this.number1);
  }
  cube(){
    alert(this.number1*this.number1*this.number1);
  }
  area(){
    alert(this.number1*this.number2);
  }
  perimeter(){
    alert(this.number1*2+this.number2*2);
  }
  names:any=[];
  name="";
  showname(){
    this.names.push(this.name);
  }
  comments:any=[];
  comment="";
  showcomment(){
    this.comments.push(this.comment);
  }
  entername="";
  quantity="";
  products:any=[];
  addtocart(){
    let produc={
      enternameeee: this.entername,
      quantityyyy: this.quantity,    
    }
    this.products.push(produc);
  }

  


  constructor() { }

  ngOnInit(): void {
  }

}
