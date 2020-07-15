import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonService } from "./common-services";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UpgradeServices{
    constructor( private http: HttpClient, private commonService: CommonService) {
    }
    
    sendUpgradeFile(file, id) : Observable<any> {
        return this.http.post(this.commonService.baseUrl + "/uploads/uploads/" + id +"/upgrade_files", file);
    }

    createFile(id, description, link) {
        const obj = {
            userId : id,
            description: description,
            contentLink: link
        };
        console.log(obj);
        return this.http.post(this.commonService.baseUrl + "/upgrade", obj);
    }
}
