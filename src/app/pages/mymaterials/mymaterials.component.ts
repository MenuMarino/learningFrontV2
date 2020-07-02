import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { FilterPipe } from 'ngx-filter-pipe';

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
    private storageService: StorageService,private filterPipe: FilterPipe
  ) { }

  public userFilter: any = {
    name: "",
  };

  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    for (let val of this.identity.favouriteMaterials){
      console.log(val);
      this.myFavouriteMaterials.push(
        new SingleMaterial(
          val.course.theme,
          val.who_aproved.username,
          this.getLearningPoints(val.learning_points)
          )
      );
    }
    console.log(this.identity);
  }

  getLearningPoints(learning_points){
    if(learning_points == null){
      return "0";
    }
    else{
      return learning_points;
    }
  }



}

export class SingleMaterial {

  public name : string;
  public professor : string;
  public learning_points : string;
  public porcentaje_LP : string;
  public temporal : number;
  public color_bar : string;

  constructor(name,professor,learning_points){
    this.name = name;
    this.professor = professor;
    this.learning_points = learning_points;
    this.temporal = learning_points*20;
    this.porcentaje_LP = this.temporal.toString() + '%';
    this.color_bar = this.getColorBar(this.temporal);
  }

  getColorBar(temporal){
    if(temporal>=0 && temporal <50){
      return "progress-bar bg-danger";
    }
    else if(temporal>=50 && temporal<=100){
      return "progress-bar bg-success";
    }
  }


};