import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
  })
  export class CourseService {
    constructor(private http: HttpClient, private commonService: CommonService) {}
        getCourses(){
            
            return this.http.get(this.commonService.baseUrl + "/courses/name");
        }
  }
