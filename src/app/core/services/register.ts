import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterServices {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  sendRegisterData(
    name: string,
    lastname: string,
    sex: boolean,
    email: string,
    username: string,
    birth: Date,
    country: string,
    password: string,
    grade: string,
    type: string
  ): Observable<any> {
    const data = {
      name,
      lastname,
      sex,
      email,
      username,
      birth,
      country,
      password,
      grade,
      type
    };
    console.log(data);
    return this.http.post(this.commonService.baseUrl + "/Auth", data);
  }
}

