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
          console.log(response[val]);
          /*this.allTemas.push(
            new SingleTheme(
              response[val].name,
              response[val].
              )
          );*/
        }
      }, error => {
        console.log(error);
      }
    )

  }

  themeClick(){

    console.log("enviar");
    this.router.navigateByUrl("/files");
  }

  


  public temas: any[] = [
    {
      name: "Polinomios 1",
      professor: "Bellido",
      description: "3 videos de Polinomios",
      learning_points: "3",
    },
    {
      name: "Polinomios2",
      professor: "Yamilet",
      description: "2 videos de Polinomios",
      learning_points: "5",
    },
    {
      name: "Ecuaciones 2",
      professor: "Jose Maria",
      description: "Ejercicios y videos",
      learning_points: "3",
    },
    {
      name: "Polinomios",
      professor: "Juan",
      description: "Solo ejercicios",
      learning_points: "4",
    },
    {
      name: "Ecuaciones 1",
      professor: "Carlos",
      description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
      learning_points: "3",
    },
    {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      {
        name: "Ecuaciones 1",
        professor: "Carlos",
        description: "Tutoriales que pueden servirte, puedes ver varios videos y pdfs con ejercicios",
        learning_points: "3",
      },
      
  ]
}

export class SingleTheme{
  public name : string;
  public professor : string;
  public description : string;
  public learning_points : string;

  constructor(name,professor,description,learning_points){
    this.name = name;
    this.professor = professor;
    this.description = description;
    this.learning_points = learning_points;
  }

}