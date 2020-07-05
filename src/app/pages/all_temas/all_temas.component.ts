import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageService } from 'src/app/core/services/storage-service';
import { MaterialServices } from 'src/app/core/services/material-service';


@Component({
  selector: 'app-all_temas',
  templateUrl: './all_temas.component.html',
  styleUrls: ['./all_temas.component.css'],
  providers: [StorageService,MaterialServices]
})
export class AllTemasComponent implements OnInit {

    public cursos : Curso[] = [];

    public copy: string;
   
    constructor(private router: Router, private storageService: StorageService,private materialService: MaterialServices,) { }
  
    ngOnInit() {
      this.materialService.sendTemasdata(
        this.storageService.getTempoCourse_Courses(),
        Number(this.storageService.getTempoGrade_Courses())
      ).subscribe(
        response =>{
          //console.log(response);
          for(let val of response){
            this.cursos.push(new Curso(val));
          }
          console.log(this.cursos);
        }, error => {
          console.log(error);
        }
      )
    }

    chooseTheme(curso){
        this.router.navigateByUrl("/temas");
    }

}

export class Curso{
  public name: string;
  public image: string;

  constructor(name){this.name = name; this.image = "ni ni-books"}

};
