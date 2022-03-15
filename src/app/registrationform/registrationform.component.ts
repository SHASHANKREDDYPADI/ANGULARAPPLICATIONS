import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {


  name="";
  email="";
  phone="";
  city="";
  age=0;
  accountbalance=0;
  dob="";
  persons:any=[]
  signup()
  {
    let perso={
      name: this.name,
      email: this.email,
      phone: this.phone,
      city: this.city,
      dob: this.dob,
      age: this.age,
      accountbalance: this.accountbalance,
    }
    this.persons.push(perso);
  }
  delete(i:any)
  {
    this.persons.splice(i,1);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
