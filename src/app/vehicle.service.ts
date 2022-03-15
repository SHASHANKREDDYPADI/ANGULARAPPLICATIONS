import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }
  getVehicles():Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getfilteredVehicles(search:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+"?filter="+search);
  }
  getsortVehicles(sortBy:any,order:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+"?sortBy="+sortBy+"&order="+order);
  }
  getpaginationVehicles(pageNumbers:any,limit:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+"?page="+pageNumbers+"&limit="+limit);
  }
  deletevehiclesdata(id:any):Observable<any>
  {
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createVehicles(dataa:any):Observable<any>
  {
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction", dataa);
  }
  updateVehicles(data:any, idea:any):Observable<any> // paramters lo edaina name ivvochu like f(x,y)//
  {
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+idea, data);
  }



}
