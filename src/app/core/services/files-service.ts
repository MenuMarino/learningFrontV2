import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class AllFilesService {
    constructor(private http: HttpClient, private commonService: CommonService) {}
    getAllFiles(
        id
      ): Observable<any> {
        const data = {
          params:{
            id : id
          }
        };
        console.log(data);
        return this.http.get(this.commonService.baseUrl + "/file", data);
        }
  }

