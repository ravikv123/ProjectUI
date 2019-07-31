//import { HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  constructor(){};//private http:HttpClient) { }
  postURL = 'http://localhost:212/';
  //header = new HttpHeaders().set('content-type','application/json');
  
  
   updateData(formData) {
    console.log("in Update Data");
    return "sUCCESS";//this.http.post<String>(this.postURL ,formConfig,{headers:this.header});
   }
}
