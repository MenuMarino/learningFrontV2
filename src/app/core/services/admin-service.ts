import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class AdminService {

    constructor(private http: HttpClient, private commonService: CommonService) {}
    

    getPostulants(

    ): Observable<any>{
      return this.http.get(this.commonService.baseUrl  );
    }


    


  }

