import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage-service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
  providers: [StorageService]
})
export class MaterialsComponent implements OnInit {
  private identity: any;
  private myMaterials : SingleMaterial[] = [];

  constructor(
    private storageService: StorageService,
  ) { 
    
  }

  ngOnInit(): void {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    for (let val of this.identity.myMaterials){
      console.log(val);
      this.myMaterials.push(
        new SingleMaterial(
          val.course.theme,
          this.ifAproved(val.who_aproved),
          this.whoAproved(val.who_aproved),
          val.visits,
          this.getLearningPoints(val.learning_points)
          )
      );
      console.log(this.identity);
    }
    
    console.log("estamos en materials");
    
  }
  ifAproved(who_aproved){
    if(who_aproved == null){
      return "Pendiente";
    }
    return "Curado";
  }
  whoAproved(who_aproved){
    if(who_aproved == null){
      return "------";
    }
    return who_aproved.username;
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
  public status : string;
  public curated_by : string;
  public views : string;
  public learning_points : string;
  public porcentaje_LP : string;
  public temporal : number;
  public color_curated : string;

  constructor(name,status,curated_by,views,learning_points){
    this.name = name;
    this.status = status;
    this.curated_by = curated_by;
    this.views = views;
    this.learning_points = learning_points;
    this.temporal = learning_points*20;
    this.porcentaje_LP = this.temporal.toString() + '%';
    this.color_curated = this.getColorCurated(status);
  }

  getColorCurated(status){
    if(status == "Pendiente"){
      return "bg-danger";
    }
    return "bg-success";
  }

  
};