import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['./order-food.component.css']
})
export class OrderFoodComponent implements OnInit {

  orderFood:FormGroup=new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(15)]),
    mobile: new FormControl(null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    // password: new FormControl(null,[Validators.required,Validators.pattern(new RegExp("^(?=.[A-Z])(?=.[!@#\$%\^&\*])(?=.{9,}))"))]),

    address: new FormGroup({
      addressline: new FormControl(null,[Validators.required]),
      city: new FormControl(null,[Validators.required]),
      state: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required]),
    }),
    items: new FormArray([]),
    payment:new FormControl(),


  })

  submit()
  {
    this.orderFood.markAllAsTouched();
    console.log(this.orderFood);
  }

  get itemsFormArray()
  {
    return this.orderFood.get("items")as FormArray;
  }

  addtocart()
  {
    this.itemsFormArray.push(
      new FormGroup({
        named: new FormControl(null,[Validators.required]),
        quantity: new FormControl(null,[Validators.required, Validators.min(1), Validators.max(20)]),
      })
    )
    console.log(this.orderFood);
  }
  delete(i:any)
  {
    this.itemsFormArray.removeAt(i);
  }



  constructor() { 
    this.orderFood.get('payment')?.valueChanges.subscribe(
      data=>{
        if(data=='card')
        {
          this.orderFood.addControl('cardNumber', new FormControl(null,[Validators.required]));
          this.orderFood.addControl('cardExp', new FormControl(null,[Validators.required]));
          this.orderFood.addControl('CVV', new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(3)]));
          this.orderFood.removeControl('upiId');
        }
        else
        {
          this.orderFood.addControl('upiId', new FormControl(null,[Validators.required]));
          this.orderFood.removeControl('cardNumber');
          this.orderFood.removeControl('cardExp');
          this.orderFood.removeControl('CVV');
        }
        console.log(this.orderFood);
      }
    )

  }

  ngOnInit(): void {
  }

}
