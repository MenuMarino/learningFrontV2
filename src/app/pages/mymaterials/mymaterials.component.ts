import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { FilterPipe } from 'ngx-filter-pipe';
import { Router } from "@angular/router";
import { AllFilesService } from "src/app/core/services/files-service";
import * as moment from 'moment';



@Component({
  selector: 'app-mymaterials',
  templateUrl: './mymaterials.component.html',
  styleUrls: ['./mymaterials.component.css'],
  providers: [StorageService, AllFilesService]
})
export class MyMaterialsComponent implements OnInit {
  private identity: any;
  private myFavouriteMaterials : SingleMaterial[] = [];
  constructor(
    private storageService: StorageService,
    private filterPipe: FilterPipe,
    private router: Router,
    private filesService : AllFilesService

  ) { }

  public userFilter: any = {
    name: "",
  };

  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    console.log(this.identity.favouriteMaterials);
    for (let val of this.identity.favouriteMaterials){
      console.log("este es val");
      console.log(val);
      if(val.status != 3){
      this.myFavouriteMaterials.push(
        new SingleMaterial(
          val.id,
          val.name,
          val.whoPosted.username,
          this.getLearningPoints(val.learning_points,val.ratingPeople),

        )
      );
    }
    console.log();
    }
    console.log(this.identity.favouriteMaterials);
  }

  getLearningPoints(learning_points,ratingPeople){
    if(learning_points == null){
      return "0";
    }
    else{
      return learning_points/ratingPeople;
    }
  }

  MandarEliminar(material){
    this.filesService.deleteFromFavourite(
      this.identity.id,
      material.id
    ).subscribe(
      response=>{
        if(response){
          const identity = {
            id: this.identity.id,
            name: this.identity.name,
            lastname: this.identity.lastname,
            email: this.identity.email,
            username: this.identity.username,
            role: this.identity.type,
            grade: this.identity.grade,
            birth: moment(this.identity.birth).format('DD/MM/YYYY'),
            institucion: this.identity.institucion,
            especialidad: this.identity.especialidad,
            myMaterials: this.identity.myMaterials,
            favouriteMaterials: response.favouriteMaterials,
          }
          this.storageService.setIdentityLocalStorage(JSON.stringify(identity));
          this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/mymaterials']);
        });     
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
  public learning_points : string;

  constructor(id,name,professor,learning_points){
    this.id = id;
    this.name = name;
    this.professor = professor;
    this.learning_points = learning_points;
  }


};