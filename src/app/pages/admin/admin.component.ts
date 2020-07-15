import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { Router } from "@angular/router";
import { FilterPipe } from 'ngx-filter-pipe';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StorageService],
  
})
export class AdminComponent implements OnInit {


  public userFilter: any = {
    name: "",
  };
  
  public copy: string;
  constructor(private router: Router, private filterPipe: FilterPipe) { }

  ngOnInit() {
    
  }

  postulantcurator(){

    console.log("enviar");
    this.router.navigateByUrl("/postulant_curator");
  }

  

}
