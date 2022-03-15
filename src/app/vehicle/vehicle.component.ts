import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles:any=[];
  search="";
  filter()
  {
    this.vehicleService.getfilteredVehicles(this.search).subscribe(
      (data:any)=> {
        this.vehicles=data;
      },
      (error:any)=> {
        alert("server down");

      }
    )
  }
  sortBy="";
  order="";
  sort()
  {
    this.vehicleService.getsortVehicles(this.sortBy,this.order).subscribe(
      (data:any)=> {
        this.vehicles=data;
      },
      (error:any)=> {
        alert("server down");

      }
    )
  }
  pageNumbers="";
  limit="";
  pagination()
  {
    this.vehicleService.getpaginationVehicles(this.pageNumbers,this.limit).subscribe(
      (data:any)=> {
        this.vehicles=data;
      },
      (error:any)=> {
        alert("server down");

      }
    )
  }

  delete(id:any)
  {
    this.vehicleService.deletevehiclesdata(id).subscribe(
           (data:any)=> {
            alert("deleted successfully");
          },
      (error:any)=> {
        alert("server down");

      } 
    )
  }

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicles().subscribe(
      (data:any)=> {
        this.vehicles=data;
      },
      (error:any)=> {
        alert("server down");

      }
    )
   }

  ngOnInit(): void {
  }

}
