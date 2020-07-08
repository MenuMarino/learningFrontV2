import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { FilterPipe } from 'ngx-filter-pipe';
import { Router } from "@angular/router";


@Component({
  selector: 'app-mymaterials',
  templateUrl: './mymaterials.component.html',
  styleUrls: ['./mymaterials.component.css'],
  providers: [StorageService]
})
export class MyMaterialsComponent implements OnInit {
  private identity: any;
  private myFavouriteMaterials : SingleMaterial[] = [];
  constructor(
    private storageService: StorageService,
    private filterPipe: FilterPipe,
    private router: Router,
  ) { }

  public userFilter: any = {
    name: "",
  };

  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    for (let val of this.identity.favouriteMaterials){
      console.log(val);
      if(val.status != 3){
      this.myFavouriteMaterials.push(
        new SingleMaterial(
          val.id,
          val.name,
          val.who_posted.username,
          this.getLearningPoints(val.learning_points,val.ratingPeople),

        )
      );
    }
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