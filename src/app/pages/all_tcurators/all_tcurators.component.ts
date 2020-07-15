import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { Router } from "@angular/router";
import { CuratorsService } from "src/app/core/services/curators-service";
import { MaterialServices } from 'src/app/core/services/material-service';

import * as moment from 'moment';



@Component({
  selector: 'app-all_tcurators',
  templateUrl: './all_tcurators.component.html',
  styleUrls: ['./all_tcurators.component.css'],
  providers: [StorageService, CuratorsService]
})
export class AllTcuratorsComponent implements OnInit {
  private identity: any;
  private myFavouriteMaterials : SingleMaterial[] = [];
  constructor(

    private storageService: StorageService,
    private router: Router,
    private curatorService : CuratorsService,

  ) { }
  
  public newuserFilter: any = {
    name: "",
  };


  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    this.curatorService.getAllCurators().subscribe(
      response=>{
        if(response){
            console.log(response); 
            for(let val of response){
                if(val.date != null && val.whoPosted.id != this.identity.id){
                this.myFavouriteMaterials.push(
                new SingleMaterial(
                    val.id,
                    val.name,
                    val.whoPosted.username,
                    val.date.substring(0,10),
                    )
                )
             }
            }
        }
      }
    )

  }





  IrMaterial(material){
    this.storageService.setTempFile_Courses(material.id);
    this.router.navigateByUrl("/files");
  }


}

export class SingleMaterial {
  public id : number;
  public name : string;
  public professor : string;
  public date : any;

  constructor(id,name,professor,date){
    this.id = id;
    this.name = name;
    this.professor = professor;
    this.date = date;
  }


};