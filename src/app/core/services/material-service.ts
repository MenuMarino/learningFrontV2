import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";    
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class MaterialServices {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  sendTemasdata(
    name,
    grade
  ): Observable<any> {
    const data = {
      params:{
        name : name,
        grade : grade
      }
    };

    return this.http.get(this.commonService.baseUrl + "/courses/themes", data);
    }

}