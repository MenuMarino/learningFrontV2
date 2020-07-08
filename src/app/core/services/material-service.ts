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
    status : number
  ):Observable<any>{
    const data = {} 
    return this.http.post(this.commonService.baseUrl + "/material/status/" + id + "/"+status,data);
  }

  sendToDelete(
    id,
    status
  ):Observable<any>{
    const data = {}
    return this.http.post(this.commonService.baseUrl + "/material/status/" + id + "/"+status,data);
  }

  sendFile(id, file) : Observable<any> {
    return this.http.post(this.commonService.baseUrl + "/uploads/uploads/" + id + "/materiales", file);
  }

  createFile(materialId, fileName, link, type) : Observable<any>{
    if(type == "application/pdf") {
      type = "PDF"
    } else {
      type = "VIDEO"
    }
    const obj = {
      materialid : materialId,
      name : fileName,
      link : link,
      type_of_file : type
    };
    return this.http.post(this.commonService.baseUrl + "/file", obj);
  }
}
