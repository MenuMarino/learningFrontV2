import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public copy: string;
  constructor() { }

  ngOnInit() {
    
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
}
