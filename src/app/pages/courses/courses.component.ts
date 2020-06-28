import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  private isChoosed_course : boolean = false;
  private isChoosed_grade : boolean = false;
 

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }
  chooseCourse(){
    this.isChoosed_course = true;
    console.log("curso elegido");
  }
  chooseGrade(){
    this.isChoosed_grade = true;
    console.log("grado elegido");
  }



  themeClick(){
    if(this.isChoosed_course == true && this.isChoosed_grade == true){
      console.log("enviar");
      this.router.navigateByUrl("/temas");
    }
    else{
      Swal.fire({
        allowOutsideClick: false,
        text: 'Elija el curso y el grado',
        icon: 'error',
      });
      console.log("no enviar")
    }
  }

  public cursos: any[] = [
    {
      name: "Matematica",
      imagen: "ni ni-ruler-pencil"
    },
    {
      name: "Fisica",
      imagen: "ni ni-atom"
    },
    {
      name: "Quimica",
      imagen: "ni ni-diamond"
    },
    {
      name: "Lenguaje",
      imagen: "ni ni-books"
    },
    {
      name: "Biologia",
      imagen: "ni ni-user-run"
    },
  ]
  public grados: any[] = [
    {
      name: "1er Grado",
      imagen: "ni ni-diamond"
    },
    {
      name: "2do Grado",
      imagen: "ni ni-diamond"
    },
    {
      name: "3er Grado",
      imagen: "ni ni-diamond"
    },
    {
      name: "5to Grado",
      imagen: "ni ni-diamond"
    },
  ]
}
