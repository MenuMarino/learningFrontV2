import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";    
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class CuratorsService {

  constructor(private http: HttpClient, private commonService: CommonService) {}
  
  getAllCurators() : Observable<any> {
      return this.http.get(this.commonService.baseUrl+"/material/needcurate/0");
  }



}

