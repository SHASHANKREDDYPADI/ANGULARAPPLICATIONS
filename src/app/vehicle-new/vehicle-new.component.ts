import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.css']
})
export class VehicleNewComponent implements OnInit {

  vehicleForm:FormGroup=new FormGroup({
   Vehicle: new FormControl(),
   manufacturer: new FormControl(),
   model: new FormControl(),
   type: new FormControl(), 
   fuel: new FormControl(), 
   color: new FormControl(), 
   id: new FormControl() 
  })

  
  vehicles:any=[];

  submit()
  {
    this.vehicleService.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=> {
        alert("posted successfully");
      },
      (error:any)=> {
        alert("server down");

      }
    )
  }

  update()
  {
    this.vehicleService.updateVehicles(this.vehicleForm.value, this.vehicleForm.value.id).subscribe(    //ikkada ichevi arguments like f(2,3)//
      (data:any)=> {
        alert("updated successfully");
      },
      (error:any)=> {
        alert("server down");

      }
    )
  }

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

}
