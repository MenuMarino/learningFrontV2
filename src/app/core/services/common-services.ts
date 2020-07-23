import { Injectable, HostListener } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  baseUrl: string = "https://frozen-castle-49375.herokuapp.com";
}
