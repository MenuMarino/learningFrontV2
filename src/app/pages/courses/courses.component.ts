import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
import { CourseService } from "src/app/core/services/courses-service";
import { StorageService } from 'src/app/core/services/storage-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [StorageService]
})
export class CoursesComponent implements OnInit {
  private identity: any;
  private isChoosed_course : boolean = false;
  private isChoosed_grade : boolean = false;
  private current_course : any = null;
  private current_grade : any = null;
  public error_course : boolean = false;
  public list_Courses : Courses[] = [];
  private error_grade : boolean = false;
  public all_data : any = null;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private storageService: StorageService,
  ) {  }

  recorrerCursos(data){
    console.log(data);
    this.list_Courses.push(new Courses(data));
    console.log(this.list_Courses);
  }

  ngOnInit() {
    this.identity = JSON.parse(this.storageService.getIdentityLocalStorage());
    this.courseService.getCourses().subscribe(
      response =>{
        console.log(response);
        this.all_data=response;
        this.storageService.setCoursesLocalStorage(this.all_data);
        for(let val of this.all_data){
          this.recorrerCursos(val);
        }
      }, error => {
        console.log(error);
      }
    )
    
    
  }
  chooseCourse(course){

    if(this.current_course !=null){
      this.current_course.backgroundcolor = '#f6f9fc';
    }
    this.error_course = false;
    course.backgroundcolor = '#bddbfa';

    this.current_course = course;

    this.isChoosed_course = true;
    console.log(course.name);

  }
  chooseGrade(grade){
    if(this.current_grade != null){
      this.current_grade.backgroundcolor = '#f6f9fc';
    }
    this.error_grade = false;
    grade.backgroundcolor = '#bddbfa';
    this.current_grade = grade;

    this.isChoosed_grade = true;
    console.log(grade.valor)
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

  public grados: any[] = [
    {
      name: "1er Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
      valor : 1,
    },
    {
      name: "2do Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
      valor : 2,
    },
    {
      name: "3er Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
      valor : 3,
    },
    {
      name: "4to Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
      valor : 4,
    },
    {
      name: "5to Grado",
      imagen: "ni ni-diamond",
      backgroundcolor : '#f6f9fc',
      valor : 5,
    },
  ]
}

export class Courses{
  public name : string;
  public imagen: string = 'ni ni-books';
  public backgroundcolor : string = '#f6f9fc';

  constructor(name){
    this.name=name;
  }

};