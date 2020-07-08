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

  createMaterial(
    id : number,
    name : string,
    description : string,
    course : string,
    grade : number,
    theme : string
  ): Observable<any> {
    const data = {
      id,
      name,
      description,
      course,
      grade,
      theme,
    };
    console.log(data);
    return this.http.post(this.commonService.baseUrl + "/material/create", data);
  }

  sendToCurar(
    id : number,
  ):Observable<any>{
    const data = {
      id
    };
    console.log(data);
    return this.http.post(this.commonService.baseUrl + "/material/curate/" + id, data);
  }

  sendFile(file, id) : Observable<any> {
    return this.http.post(this.commonService.baseUrl + "/file/uploads/" + id + "/materials", file);
  }

  createFile(materialId, fileName, link, type) {

  }
}
