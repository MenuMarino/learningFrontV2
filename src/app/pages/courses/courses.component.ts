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
