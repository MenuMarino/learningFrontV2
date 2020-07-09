import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AllTemasService } from 'src/app/core/services/alltemas-services';
import { StorageService } from 'src/app/core/services/storage-service';


@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss'],
  providers: [AllTemasService,StorageService]
})
export class TemasComponent implements OnInit {

  public copy: string;
  public allTemas : SingleTheme[] = [];
  constructor(private router: Router,private allTemasService : AllTemasService, private storageService: StorageService) { }

  ngOnInit() {
      this.allTemasService.sendMaterialesdata(
      this.storageService.getTempoCourse_Courses(),
      this.storageService.getTempoGrade_Courses(),
      this.storageService.getTempTheme_Courses(),
      0,
    ).subscribe(
      response =>{
        console.log(response);
     
        for (let val in response){
          //console.log(response[val]);
          this.allTemas.push(
            new SingleTheme(
              response[val].name,
              response[val].whoPosted.username,
              response[val].description,
              response[val].learningPoints/response[val].ratingPeople,
              response[val].id,
            )     
          );
        }
        //console.log(this.allTemas);
      }, error => {
        console.log(error);
      }
    )

  }

  themeClick(temas){
    this.storageService.setTempFile_Courses(temas.id_material);
    console.log(temas);
    this.router.navigateByUrl("/files");
  }

}

export class SingleTheme{
  public name : string;
  public professor : string;
  public description : string;
  public learning_points : number;
  public id_material : number;

  constructor(name,professor,description,learning_points,id_material){
    this.name = name;
    this.professor = professor;
    this.description = description;
    this.learning_points = learning_points;
    this.id_material=id_material;
    
  }

}