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
  private current_course : any = null;
  private current_grade : any = null;
  public error_course : boolean = false;
  private error_grade : boolean = false;

  constructor(
    private router: Router,
  ) {  }



  ngOnInit() {
    
  }
  chooseCourse(course){

    if(this.current_course !=null){
      this.current_course.backgroundcolor = '#f6f9fc';
    }
    this.error_course = false;
    course.backgroundcolor = '#bddbfa';

    this.current_course = course;

    this.isChoosed_course = true;
    console.log(course.name + "curso elegido");

  }
  chooseGrade(grade){
    if(this.current_grade != null){
      this.current_grade.backgroundcolor = '#f6f9fc';
    }
    this.error_grade = false;
    grade.backgroundcolor = '#bddbfa';
    this.current_grade = grade;

    this.isChoosed_grade = true;
    console.log(grade.name + "grado elegido");
  }



  themeClick(){
    if(this.isChoosed_course == true && this.isChoosed_grade == true){
      console.log("enviar");
      this.router.navigateByUrl("/all_temas");
    }
    
    else{
      console.log('grado'+this.isChoosed_grade);
      console.log('curso: '+this.isChoosed_course);
      if(this.isChoosed_course == false){
        this.error_course = true;
      }
      if(this.isChoosed_grade == false){
        this.error_grade = true;
      }
      
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
      imagen: "ni ni-ruler-pencil",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "Fisica",
      imagen: "ni ni-atom",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "Quimica",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "Lenguaje",
      imagen: "ni ni-books",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "Biologia",
      imagen: "ni ni-user-run",
      backgroundcolor : '#f6f9fc',
    },
  ]

  public grados: any[] = [
    {
      name: "1er Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "2do Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "3er Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
    },
    {
      name: "5to Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
    },
  ]
}
