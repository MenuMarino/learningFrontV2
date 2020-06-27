import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UpgradeServices{
    constructor( private http: HttpClient, private commonService: CommonService ) {}

    sendUpgradeFile(file) : Observable<any> {
        return this.http.post(this.commonService.baseUrl + "/upload", file);
    }

}
