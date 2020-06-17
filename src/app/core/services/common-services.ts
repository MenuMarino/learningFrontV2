import { Injectable, HostListener } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  baseUrl: string = "http://localhost:8081";
}
