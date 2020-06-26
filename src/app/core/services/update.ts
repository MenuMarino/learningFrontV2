import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UpdateService {
    constructor(private http: HttpClient, private commonService: CommonService) {}

    updateUsername(id: string, username: string): Observable<any>{
        const data = {
            id,
            username
        }
        return this.http.put(this.commonService.baseUrl + "/user",  data);
    }

    updateEmail(id: string, email: string): Observable<any>{
        const data = {
            id, 
            email
        }
        return this.http.put(this.commonService.baseUrl + "/user", data);
    }
}