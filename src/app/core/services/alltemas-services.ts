import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class AllTemasService {
    constructor(private http: HttpClient, private commonService: CommonService) {}
    sendMaterialesdata(
        name,
        grade,
        theme,
        page,
      ): Observable<any> {
        const data = {
          params:{
            name : name,
            grade : grade,
            theme : theme,
            page : page
          }
        };
        console.log(data);
        return this.http.get(this.commonService.baseUrl + "/material/search", data);
        }
  }

