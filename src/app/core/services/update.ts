import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UpdateService {
    constructor(private http: HttpClient, private commonService: CommonService) {}

    updateUsername(username: string): Observable<any>{
        return this.http.put(this.commonService.baseUrl + "/updateUsername",  username);
    }

    updateEmail(email: string): Observable<any>{
        return this.http.put(this.commonService.baseUrl + "/updateEmail", email);
    }
}