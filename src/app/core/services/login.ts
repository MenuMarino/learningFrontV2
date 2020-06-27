import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  logIn(username: string, password: string): Observable<any> {
    const data = {
      username,
      password,
    };

    return this.http.post(this.commonService.baseUrl + "/Auth/login", data);
  }

  recoverPass(email:string): Observable<any> {
    const data = {
      email
    };

    return this.http.post(this.commonService.baseUrl + "/recover", data);
  }
}

