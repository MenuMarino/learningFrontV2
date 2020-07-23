import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { Router } from "@angular/router";
import { FilterPipe } from 'ngx-filter-pipe';
import { AdminService } from 'src/app/core/services/admin-service';



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
  public AllPostulants : SinglePostulant[] = [];

  constructor(private router: Router, private filterPipe: FilterPipe) { }

  ngOnInit() {



  }

  postulantcurator(){

    console.log("enviar");
    this.router.navigateByUrl("/postulant_curator");
  }

  IrPostulante(postulant){

  }


}

export class SinglePostulant {
  public id : number;
  public name : string;
  public fecha : Date;
  public institucion : string;

  constructor(id,name,fecha,institucion){
    this.id = id;
    this.name = name;
    this.fecha = fecha;
    this.institucion = institucion;
  }
};
